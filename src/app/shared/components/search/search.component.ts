import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = "test laceholder";
  //Should have @Output to notify the parent component, what the user searchs clicking on button.
  @Output() notifyRequest = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
}
