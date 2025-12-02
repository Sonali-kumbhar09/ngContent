import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
   @Input() show : boolean = false
   @Output()emitShowFlag : EventEmitter<boolean>= new EventEmitter<boolean>();
   @Output() removeApiFlag :EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

    closeModal(removeFlag : boolean){
      this.show=false
      this.emitShowFlag.emit(false)
      this.removeApiFlag.emit(removeFlag)
    }
 

}

