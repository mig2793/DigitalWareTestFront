import { Directive, ElementRef, HostListener} from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModal {

  constructor(private element: ElementRef, private location: Location) { }

  @HostListener("click")
  public closeModal() {
    let modal = document.getElementById("modal-general");
    if (modal) modal.style.display = "none";
  }
}
