import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  sort: string = 'relevance';
  category: string = '';
  viewMode: string = 'list';

  constructor() { }

  ngOnInit() {
  }

  changeCategory(category) {
    this.category = category;
  }

}
