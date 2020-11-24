import React from "react";

export const AllColumns = [
  {
    name: "Team",
  },
  {
    name: "Position",
  },
  {
    name: "FirstName",
    options: {
      filter: false,
    },
  },
  {
    name: "LastName",
    options: {
      filter: false,
    },
  },
  {
    name: "QBCompletions",
    options: {
      filter: false,
    },
  },
  {
    name: "QBAttempts",
    options: {
      filter: false,
    },
  },
  {
    name: "QBPassYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "QBPassTDs",
    options: {
      filter: false,
    },
  },
  {
    name: "QBInts",
    options: {
      filter: false,
    },
  },
  {
    name: "QBLongestPass",
    options: {
      filter: false,
    },
  },
  {
    name: "RushAttempts",
    options: {
      filter: false,
    },
  },
  {
    name: "RushYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "LongestRush",
    options: {
      filter: false,
    },
  },
  {
    name: "Receptions",
    options: {
      filter: false,
    },
  },

  {
    name: "ReceivingYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "LongestReception",
    options: {
      filter: false,
    },
  },
  {
    name: "Drops",
    options: {
      filter: false,
    },
  },
  {
    name: "Fumbles",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value > 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "Targets",
    options: {
      filter: false,
    },
  },
  {
    name: "Touchdowns",
    options: {
      filter: false,
    },
  },
  {
    name: "Tackles",
    options: {
      filter: false,
    },
  },
  {
    name: "Sacks",
    options: {
      filter: false,
    },
  },
  {
    name: "Interceptions",
    options: {
      filter: false,
    },
  },
  {
    name: "KnockDowns",
    options: {
      filter: false,
    },
  },
  {
    name: "ForcedFumbles",
    options: {
      filter: false,
    },
  },
  {
    name: "FumbleRecoveries",
    options: {
      filter: false,
    },
  },
  {
    name: "Penalties",
    options: {
      filter: false,
    },
  },
  {
    name: "FGMade",
    options: {
      filter: false,
    },
  },
  {
    name: "FGAttempted",
    options: {
      filter: false,
    },
  },
  {
    name: "XPMade",
    options: {
      filter: false,
    },
  },
  {
    name: "XPAttempted",
    options: {
      filter: false,
    },
  },
  {
    name: "Punts",
    options: {
      filter: false,
    },
  },
  {
    name: "PuntsInside20",
    options: {
      filter: false,
    },
  },  {
    name: "PuntTouchbacks",
    options: {
      filter: false,
    },
  },  {
    name: "PuntYards",
    options: {
      filter: false,
    },
  },
  {
    name: "GameId",
  },
];

export const QBColumns = [
  {
    name: "Team",
  },
  {
    name: "Position",
  },
  {
    name: "FirstName",
    options: {
      filter: false,
    },
  },
  {
    name: "LastName",
    options: {
      filter: false,
    },
  },
  {
    name: "QBCompletionPercentage",
  },
  {
    name: "QBCompletions",
    options: {
      filter: false,
    },
  },
  {
    name: "QBAttempts",
    options: {
      filter: false,
    },
  },
  {
    name: "QBPassYards",
    options: {
      filter: false,
      sortDirection: "asc",
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "QBPassTDs",
    options: {
      filter: false,
    },
  },
  {
    name: "QBInts",
    options: {
      filter: false,
    },
  },
  {
    name: "QBLongestPass",
    options: {
      filter: false,
    },
  },
  {
    name: "RushAttempts",
    options: {
      filter: false,
    },
  },
  {
    name: "RushYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "LongestRush",
    options: {
      filter: false,
    },
  },

  {
    name: "Fumbles",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value > 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },

  {
    name: "Touchdowns",
    options: {
      filter: false,
    },
  },
  {
    name: "FumbleRecoveries",
    options: {
      filter: false,
    },
  },
  {
    name: "Penalties",
    options: {
      filter: false,
    },
  },
  {
    name: "GameId",
  },
];
export const QBOptions = {
  filterType: "checkbox",
  //   searchText: "QB",
};
export const SkillPositionColumns = [
  {
    name: "Team",
  },
  {
    name: "Position",
  },
  {
    name: "FirstName",
    options: {
      filter: false,
    },
  },
  {
    name: "LastName",
    options: {
      filter: false,
    },
  },
  {
    name: "RushAttempts",
    options: {
      filter: false,
    },
  },
  {
    name: "RushYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "LongestRush",
    options: {
      filter: false,
    },
  },
  {
    name: "Receptions",
    options: {
      filter: false,
      sortDescFirst: true,
      sortDirection: "asc",
    },
  },

  {
    name: "ReceivingYards",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "LongestReception",
    options: {
      filter: false,
    },
  },
  {
    name: "Drops",
    options: {
      filter: false,
    },
  },
  {
    name: "Fumbles",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value > 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "Targets",
    options: {
      filter: false,
    },
  },
  {
    name: "Touchdowns",
    options: {
      filter: false,
    },
  },
  {
    name: "FumbleRecoveries",
    options: {
      filter: false,
    },
  },
  {
    name: "Penalties",
    options: {
      filter: false,
    },
  },
  {
    name: "GameId",
  },
];

export const AllRosterColumns = [
  {
    name: "Team",
  },
  {
    name: "POS",
  },
  {
    name: "FIRST",
    options: {
      filter: false,
    },
  },
  {
    name: "LAST",
    options: {
      filter: false,
    },
  },
  {
    name: "NUMBER",
    options: {
      filter: false,
    },
  },
  {
    name: "Height",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <div style={{ color: "#000000" }}>{value} IN</div>;
      },
    },
  },
  {
    name: "Weight",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <div style={{ color: "#000000" }}>{value} Lbs</div>;
      },
    },
  },
  {
    name: "SPEED",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value <= 55) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "TLK BRK",
    options: {
      filter: false,
    },
  },
  {
    name: "FUMBLE",
    options: {
      filter: false,
    },
  },
  {
    name: "CATCH",
    options: {
      filter: false,
    },
  },
  {
    name: "BLKING",
    options: {
      filter: false,
    },
  },
  {
    name: "THR ACC",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 56) return <div style={{ color: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "KCK PWR",
    options: {
      filter: false,
    },
  },
  {
    name: "KCK ACC",
    options: {
      filter: false,
    },
  },

  {
    name: "BLK BRK",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value < 56)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "TACKLE",
    options: {
      filter: false,
    },
  },
  {
    name: "THR PWR",
    options: {
      filter: false,
    },
  },
  {
    name: "FITNESS",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        if (value > 0)
          return <div style={{ BackgroundColor: "#FF0000" }}>{value}</div>;
        return <div style={{ color: "#000000" }}>{value}</div>;
      },
    },
  },
  {
    name: "AWARE",
    options: {
      filter: false,
    },
  },
  {
    name: "AGIL",
    options: {
      filter: false,
      hint: "Agility",
    },
  },
  {
    name: "COVER",
    options: {
      filter: false,
    },
  },
  {
    name: "HIT PWR",
    options: {
      filter: false,
    },
  },
  {
    name: "ENDUR",
    options: {
      filter: false,
    },
  },
  {
    name: "AGE",
    options: {
      filter: false,
    },
  },
  {
    name: "POTENTIAL",
    options: {
      filter: false,
    },
  },
  {
    name: "DISCIPLINE",
    options: {
      filter: false,
    },
  },
  {
    name: "INDEX",
    options: {
      filter: false,
    },
  },
];
