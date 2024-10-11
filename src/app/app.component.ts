import { Component, ElementRef, OnInit } from '@angular/core';
import * as data from '../assets/redoc-sample.json';
declare var Redoc: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'angular-redoc';
  data: any = data;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.initDocs();
  }

  initDocs(){
    const container = this.el.nativeElement.querySelector('#redoc');
    Redoc.init(this.data, {
    scrollYOffset: 60,
    hideDownloadButton: true
   }, container);
  }
}
