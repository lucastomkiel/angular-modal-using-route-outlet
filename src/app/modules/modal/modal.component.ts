import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ModalService } from './../../shared/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

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
