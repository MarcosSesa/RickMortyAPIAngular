import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CreateDialogComponent } from './components/dialogs/create-dialog/create-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavBarComponent } from './components/navbar/main-nav-bar.component';
import { CharacterComponent } from './components/character/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavBarComponent,
    CharacterComponent,
    CreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CreateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
