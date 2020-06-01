import { Component, OnInit } from "@angular/core";
import { MentionOnSearchTypes } from "ng-zorro-antd/mention/public-api";

@Component({
  selector: "app-mention",
  templateUrl: "./mention.component.html",
  styles: [],
})
export class MentionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // create storage for input string value
  inputValue?: string;
  // storage for suggestions with array of string data type
  suggestions: string[] = [];
  // users & tags mock data
  users = ["afc163", "benjycui", "yiminghe", "RaoHai", "中文", "にほんご"];
  tags = ["1.0", "2.0", "3.0"];

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log("nzOnSearchChange", value, prefix);
    // check if the prefix is either @ or not
    // then store it to the suggestions var
    // to be displayed pn .html file
    this.suggestions = prefix === "@" ? this.users : this.tags;
  }

  // for Placement
  onChangePlacement(value: string): void {
    console.log(value);
  }

  onSelectPlacement(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
