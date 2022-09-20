import { ICharacter } from './../../interfaces/characterInterface';
import { CharacterService } from './../../services/character.service';
import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page : number = 1;
  charactersList : ICharacter[] = [];
  filtertext : string = "";
  characterToCreate !: ICharacter;


  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

getCharacters(){
  this.characterService.getCharacters(this.page, this.filtertext).subscribe( (res) => {
    this.charactersList.push(... res);
  } );
}

deleteCharacter(id: number){
this.charactersList = this.charactersList.filter(character => (character.id !== id))
}
createCharacter(character : ICharacter){
this.characterToCreate = character;
this.charactersList.splice(2,0,character);

}

onScrollDown(){
  this.page++;
  this.getCharacters();
}

onKey(){
  if (this.filtertext.length >= 4) {
    this.charactersList.length = 0;
    this.getCharacters();
  }else if(this.filtertext.length == 0){
    this.page=1;
    this.filtertext="";
    this.getCharacters();
  }
}
 
  
}
