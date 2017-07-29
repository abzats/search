import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from "../../../services/http.service";
import {AppGlobals} from "../../../app.globals";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() sort: string;
  @Input() category: string;
  @Input() viewMode: string;

  results: Array<object> = [];


  constructor(private httpServices: HttpService, public globals: AppGlobals) { }

  ngOnInit() {
    this.httpServices
      .get('results')
      .subscribe(res => this.results = res);
  }
}
