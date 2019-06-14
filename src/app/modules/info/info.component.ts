import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ModalService } from './../../shared/modal/modal.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements AfterViewInit {

  @ViewChild('content') content: ElementRef;

  constructor(
    private modalService: ModalService
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalService.open(this.content);
    });
  }

}
