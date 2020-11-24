import React, { Component } from "react";
import { render } from "react-dom";
import PlayerFileUploader from "../components/playerUploader";
import DataTable from "../components/table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AllRosterColumns } from "../components/tableOptions";
import PlayerModal from "./player";

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
export default class Players extends Component {
  constructor() {
    super();
    this.state = {
      name: "Player",
      fileData: [],
      styles: useStyles,
      selectedPlayer: {},
    };
  }
  loadData(fileData) {
    if (this.state.fileData.length === 0) {
      this.setState({ fileData });
      this.setState({
        selectedPlayer: fileData.filter((i) => {
          return i.INDEX === "0";
        })[0],
      });
      console.log(this.state.selectedPlayer[0], "sasddfdsdf");
    }
  }

  getPositionStats(fileData, positions) {
    return fileData.filter((f) => positions.includes(f.Position));
  }
  updateSelectedPlayer(fileData, id) {
    this.setState({
      selectedPlayer: fileData.filter((i) => {
        return i.INDEX === id;
      })[0],
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "rgb(0,46,65)" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ color: "#FFF", textAlign: "center" }}>
              Axis Player Stats
            </h1>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.state.styles.paper}>
              <PlayerFileUploader
                onDrop={(result) => {
                  this.loadData(result);
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.state.styles.paper}>
              {this.state.fileData.map((i) => {
                return (
                  <Paper elevation={3}>
                    <Grid style={{ padding: "20px" }}>
                      <Grid item xs={12}>
                        <h3>
                          {" "}
                          {i["FIRST"]} {i["LAST"]} - {i["POS"]}
                        </h3>
                      </Grid>

                      <Grid item xs={12}>
                        <strong>Speed: </strong>
                        {i["SPEED"]}
                      </Grid>
                      <Grid item xs={12}>
                        <strong>Agility: </strong>
                        {i["AGIL"]}
                      </Grid>
                      <Grid item xs={12}>
                        <strong>Awareness: </strong>
                        {i["AWARE"]}
                      </Grid>
                      <PlayerModal
                        data={
                          this.state.fileData.filter((x) => {
                            return x["INDEX"] === i["INDEX"];
                          })[0]
                        }
                      />
                    </Grid>
                  </Paper>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.state.styles.paper}>
              <h2>All Players</h2>
              <DataTable
                data={this.state.fileData ?? []}
                Columns={AllRosterColumns}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

render(<Players />, document.getElementById("root"));
