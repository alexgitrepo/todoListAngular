import {Component, OnInit} from '@angular/core';
import {FooterService} from './footer.service';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-todolist-footer',
  templateUrl: './todolist-footer.component.html',
  styleUrls: ['./todolist-footer.component.css'],
})
export class TodolistFooterComponent implements OnInit {
  filterVale: string;

  constructor(private footerService: FooterService) {
  }

  ngOnInit(): void {
    this.filterVale = 'all';
  }

  changeFilterValue(value: string) {
    this.filterVale = value;
    this.footerService.changeFilterValueEmitter.emit(value);
    this.footerService.currentFilterValue=value
  }
}
