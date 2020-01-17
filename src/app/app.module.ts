import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule,MatTableModule,MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,DialogueComponent]
})
export class AppModule { }
