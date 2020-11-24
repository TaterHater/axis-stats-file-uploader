import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Plot from "react-plotly.js";
import MiniStatTable from "../components/miniStatTable";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "20px",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "80vh",
    width: "90vw",
  },
}));

export default function PlayerModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const data = props.data;
  const dataFormat = [
    {
      type: "scatterpolar",
      r: [
        data["SPEED"],
        data["AGIL"],
        data["BLK BRK"],
        data["AWARE"],
        data["ENDUR"],
        data["FUMBLE"],
        data["CATCH"],
      ],
      theta: ["SPD", "AGL", "BLK BRK", "AWR", "ENDUR", "FUM", "CAT"],
      fill: "toself",
      name: "Group A",
    },
  ];

  const layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [1, 100],
      },
    },
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        See Player Stats{" "}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              {data["FIRST"]} {data["LAST"]} - {data["POS"]}
            </h2>
            <h2>#{data["NUMBER"]}</h2>
            <Grid container>
              <Grid item xs={6}>
                <Plot
                  data={dataFormat}
                  layout={layout}
                  config={{ responsive: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <MiniStatTable data={data} />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
