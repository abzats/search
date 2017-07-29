import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() category: string;
  @Output() categoriesMenu = new EventEmitter<string>();

  menu: Array<object> = [];

  constructor(private httpServices: HttpService) { }

  ngOnInit() {
    this.httpServices
      .get('menu')
      .subscribe(res => this.menu = res);
  }

}
