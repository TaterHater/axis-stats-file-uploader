import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function MiniStatTable(props) {
  const rowData = props.data;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography variant="h6" className={classes.title}>
            Player Attributes
          </Typography>
          <div className={classes.demo}>
            <Paper elevation={3}>
              <List>
                <ListItem>HT - {(rowData["Height"]/12).toFixed(2)} FT</ListItem>
                <ListItem>WT - {rowData["Weight"]} LBS</ListItem>
                <ListItem>Age - {rowData["AGE"]}</ListItem>
              </List>
            </Paper>
            <Paper elevation={3}>
              <List dense={true}>
                <ListItem>Speed - {rowData["SPEED"]}</ListItem>
                <ListItem>Tackle Break - {rowData["TLK BRK"]}</ListItem>
                <ListItem>Fumble - {rowData["FUMBLE"]}</ListItem>
                <ListItem>Catch - {rowData["CATCH"]}</ListItem>
                <ListItem>Blocking - {rowData["BLKING"]}</ListItem>
                <ListItem>Throwing Accuracy - {rowData["THR ACC"]}</ListItem>
                <ListItem>Throw Power{rowData["THR PWR"]}</ListItem>
                <ListItem>Kick Power - {rowData["KCK PWR"]}</ListItem>
                <ListItem>Kick Accuracy - {rowData["KCK ACC"]}</ListItem>
                <ListItem>Tackle - {rowData["TACKLE"]}</ListItem>
                <ListItem>Fitness - {rowData["FITNESS"]}</ListItem>
                <ListItem>Awareness - {rowData["AWARE"]}</ListItem>
                <ListItem>Agility - {rowData["AGIL"]}</ListItem>
                <ListItem>Cover - {rowData["COVER"]}</ListItem>
                <ListItem>Hit Power - {rowData["HIT PWR"]}</ListItem>
                <ListItem>Endurance - {rowData["ENDUR"]}</ListItem>
                <ListItem>Discipline - {rowData["DISCIPLINE"]}</ListItem>
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
