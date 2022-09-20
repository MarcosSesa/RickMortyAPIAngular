import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  public formGroup !: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  
  onClickNo():void{
    this.dialogRef.close();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: "",
      imageURL: "",
      status: "",
      especie: "",
      gender: "",
    });
  }

}
