import { CreateDialogComponent } from '../dialogs/create-dialog/create-dialog.component';
import { ICharacter } from '../../interfaces/characterInterface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  @Output() createCharacterEvent = new EventEmitter<ICharacter>();
  characterToCreate : ICharacter = {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
    episode: [],
    url: "",
    created: "",
  };

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(CreateDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
        this.characterToCreate.image = res.imageURL;
        this.characterToCreate.name = res.name;
        this.characterToCreate.status = res.status;
        this.characterToCreate.species = res.especie;
        this.characterToCreate.gender = res.gender;
        this.createCharacterEvent.emit(this.characterToCreate);
      }
    })
  }


}
