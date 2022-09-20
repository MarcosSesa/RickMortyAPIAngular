import { ICharacter } from '../../interfaces/characterInterface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character !: ICharacter;
  @Output() deleteCharacterEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){}

  delete(){
    this.deleteCharacterEvent.emit(this.character.id)
  }

}
