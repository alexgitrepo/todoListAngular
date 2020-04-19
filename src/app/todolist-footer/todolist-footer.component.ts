import {Component, OnInit} from '@angular/core';
import {FooterService} from './footer.service';
import {AppStateService} from '../app-state.service';

@Component({
  selector: 'app-todolist-footer',
  templateUrl: './todolist-footer.component.html',
  styleUrls: ['./todolist-footer.component.css'],
})
export class TodolistFooterComponent implements OnInit {

  constructor(public footerService: FooterService) {
  }

  ngOnInit(): void {
  }

  changeFilterValue(value: string) {
    this.footerService.currentFilterValue=value
    this.footerService.changeFilterValueEmitter.emit(value);
  }
}
