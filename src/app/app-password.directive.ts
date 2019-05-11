import { Directive, ElementRef} from '@angular/core';
@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {
 private _shown = false;
constructor(private el: ElementRef) {
    this.setup();
  }
toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<div style="cursor: hand;height: 6vh;" class="input-group-append"><span class="input-group-text rightbtn">Hide</span></div>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<div style="cursor: hand;height: 6vh" class="input-group-append"><span class="input-group-text rightbtn">Show</span></div>';
    }
  }
setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = '<div style="cursor: hand;height: 6vh" class="input-group-append"><span class="input-group-text rightbtn">Show</span></div>';
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}