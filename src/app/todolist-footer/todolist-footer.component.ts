import {Component, OnInit} from '@angular/core';
import {FooterService} from "./footer.service";

@Component({
  selector: 'app-todolist-footer',
  templateUrl: './todolist-footer.component.html',
  styleUrls: ['./todolist-footer.component.css'],
})
export class TodolistFooterComponent implements OnInit {
  filterVale: string='all'

  constructor(private footerService: FooterService) {
  }

  ngOnInit(): void {
  }

  changeFilterValue(value: string) {
    this.filterVale = value
    this.footerService.changeFilterValueEmitter.emit(value)
  }
}
