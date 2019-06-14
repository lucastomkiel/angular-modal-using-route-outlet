import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html'
})
export class ModalHeaderComponent {

  @Input() title: string;

  @Output() close = new EventEmitter();

  constructor() { }

  onClose() {
    this.close.emit();
  }

}
