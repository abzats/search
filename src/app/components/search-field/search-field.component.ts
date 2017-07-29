import { Component, OnInit } from '@angular/core';
import { AppGlobals } from "../../app.globals";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor(public globals: AppGlobals) { }

  ngOnInit() {

  }

  /**
   * Submit from function.
   * By now it is set as console.log only
   * @param form
   */
  searchSubmit(form) {
    console.log(form.controls.search.value);
  }

}
