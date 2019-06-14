import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// NG Bootstrap
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalRef: NgbModalRef;

  constructor(
    private ngbModalService: NgbModal,
    private router: Router,
  ) { }

  public open(content: any, options?: NgbModalOptions): NgbModalRef {
    this.modalRef = this.ngbModalService.open(content);
    this.modalRef.
      result.then(() => {
        this.clear();
      }, () => {
        this.clear();
      });

    return this.modalRef;
  }

  public clear() {
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
