import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss', '../../app.component.scss']
})
export class AppFooterComponent implements OnInit {

  year: number;

  constructor() { }

  ngOnInit(): void {
    this.year = Date.now();
  }

}
