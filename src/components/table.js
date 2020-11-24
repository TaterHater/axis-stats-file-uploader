import React from "react";
import MUIDataTable from "mui-datatables";

const options = {
  filterType: "checkbox",
  sortDescFirst: true,

};

class DataTable extends React.Component {
  render() {
    return (
      <MUIDataTable
        title={"Axis Stat List"}
        data={this.props.data}
        columns={this.props.Columns }
        options={this.props.Options ?? options}
      />
    );
  }
}
export default DataTable;
