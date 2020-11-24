import React, { Component } from "react";
import Dropzone from "react-dropzone";
const csv = require("csvtojson");

export default class PlayerFileUploader extends Component {
  state = {
    files: [],
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      files: acceptedFiles,
    });

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        console.log(file);
        csv({
          noheader: true,
          output: "json",
        })
          .fromString(fileAsBinaryString)
          .then((csvRows) => {
            const toJson = [];
            csvRows.forEach((aCsvRow, i) => {
              if (i !== 0) {
                const builtObject = {};

                Object.keys(aCsvRow).forEach((aKey) => {
                  const valueToAddInBuiltObject = aCsvRow[aKey];
                  const keyToAddInBuiltObject = csvRows[0][aKey];
                  builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
                });
                //inject custom fields here
                builtObject.Team = file.name.substring(0, 3);
                toJson.push(builtObject);
              }
            });
            this.props.onDrop(toJson);
          });
      };

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsBinaryString(file);
    });
  };

  render() {
    return (
      <section style={{ alignItems: "center" }}>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)} multiple={true}>
            {(dropzoneProps) => {
              return <p>Upload Roster Spreadsheet here:</p>;
            }}
          </Dropzone>
        </div>
      </section>
    );
  }
}
