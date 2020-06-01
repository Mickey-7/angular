import { Component, OnInit } from "@angular/core";
import { ItemData } from "./item-data";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styles: [],
})
export class TableComponent implements OnInit {
  constructor() {}

  // Table with Border, Title and Footer
  // create dummy data for out table first
  listOfData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No.1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 32,
      address: "New York No.2 Lake Park",
    },
    {
      key: "3",
      name: "Jorge Floyd",
      age: 32,
      address: "New York No.3 Lake Park",
    },
  ];

  // Editable Row
  // generate dummy data
  // invoke the interface
  editableData: ItemData[] = [];
  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push({
        id: `${i}`,
        name: `Edward ${i}`,
        age: `${i + 7}`,
        address: `London Park No. ${i}`,
      });
    }
    // set editableData to generated dummy data
    this.editableData = data;
    // invoking updateEditCache method
    // whihc make cache data of every item on editableData
    this.updateEditCache();
  }

  // editCache[id].edit is the boolean trigger for edit
  // editCache[id].data contains the data from selected row
  // invoke the interface
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  // get the data from the table and make cache of it for edit purposes
  updateEditCache(): void {
    // iterate on the editable and set each item with cache of
    // themselves using editCache object with edit set to false
    this.editableData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  // for startEdit
  startEdit(id: string) {
    console.log(id);
    // check if edit is true
    // will be use to trigger the selected
    // row id from static row to input field
    console.log(this.editCache[id].data);
    this.editCache[id].edit = true;
    console.log(this.editCache[id].edit);
  }

  // for save
  saveEdit(id: string) {
    // get the select row id from the editableData
    // array as this is the [nzData] on html file
    const index = this.editableData.findIndex((item) => item.id === id);
    // set the editableDate[index] above to editCache[id].data
    // the  editCache[id].data contains the new data for the selected row
    Object.assign(this.editableData[index], this.editCache[id].data);
    // make edit false
    this.editCache[id].edit = false;
  }

  // for cancel
  cancelEdit(id: string) {
    console.log(id);
    // find the id of selected row
    const index = this.editableData.findIndex((item) => item.id === id);
    // set the value to default to implement no changes at all on editCache
    this.editCache[id] = {
      edit: false,
      data: { ...this.editableData[index] },
    };
  }
}
