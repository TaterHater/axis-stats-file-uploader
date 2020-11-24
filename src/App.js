import React, { Component, Suspense } from "react";
import { render } from "react-dom";
import FileUploader from "./components/fileUploader";
import DataTable from "./components/table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  AllColumns,
  QBColumns,
  QBOptions,
  SkillPositionColumns,
} from "./components/tableOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      fileData: [],
      longestFields: ["LongestRush", "LongestReception", "QBLongestPass"],
      percentageFields: ["QBCompletionPercentage"],
      styles: useStyles,
    };
  }

  loadData(fileData) {
    if (this.state.fileData.length === 0) {
      this.setState({ fileData });
    } else {
      //combine the position, name as a key value
      const keyStateData = this.state.fileData.reduce(
        (a, c) => ({
          ...a,
          [`${c.Position}-${c.FirstName}-${c.LastName}`]: c,
        }),
        {}
      );
      console.log("key state data", keyStateData);
      const keyFileData = fileData.reduce(
        (a, c) => ({
          ...a,
          [`${c.Position}-${c.FirstName}-${c.LastName}`]: c,
        }),
        {}
      );
      console.log("key file Data ", keyFileData);
      let newFileData = Object.entries(keyStateData).map(([k, v]) => {
        if (keyFileData[k]) {
          console.log(k);
          const ksd = Object.entries(v).map(([l, w]) => {
            if (parseInt(w)) {
              if (this.state.longestFields.includes(l)) {
                return {
                  [l]: Math.max(parseInt(w), parseInt(keyFileData[k][l])),
                };
              }
              if (this.state.percentageFields.includes(l)) {
                console.log(l);
              }
              return { [l]: parseInt(w) + parseInt(keyFileData[k][l]) };
            } else return { [l]: w };
          });
          return ksd.reduce(
            (a, c) => ({
              ...a,
              ...c,
            }),
            {}
          );
        } else {
          // return [k, v];
          return v;
        }
      });

      const missingPlayers = fileData.filter(
        (f) => !(`${f.Position}-${f.FirstName}-${f.LastName}` in keyStateData)
      );

      newFileData = [...newFileData, ...missingPlayers];
      this.setState({ fileData: newFileData });
    }
  }

  getPositionStats(fileData, positions) {
    return fileData.filter((f) => positions.includes(f.Position));
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(0,46,65)" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ color: "#FFF", textAlign: "center" }}>Axis Stats</h1>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.state.styles.paper}>
              <FileUploader
                onDrop={(result) => {
                  this.loadData(result);
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.state.styles.paper}>
              {" "}
              <h2>Quarterback</h2>
              <DataTable
                data={this.getPositionStats(this.state.fileData, ["QB"]) ?? []}
                Columns={QBColumns}
                Options={QBOptions}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={this.state.styles.paper}>
              {" "}
              <h2>Skill Positions</h2>
              <DataTable
                data={
                  this.getPositionStats(this.state.fileData, [
                    "WR",
                    "RB",
                    "TE",
                  ]) ?? []
                }
                Columns={SkillPositionColumns}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.state.styles.paper}>
              <h2>All Players</h2>
              <DataTable
                data={this.state.fileData ?? []}
                Columns={AllColumns}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
