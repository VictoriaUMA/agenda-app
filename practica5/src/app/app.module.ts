import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaService } from './services/persona.service';
import { MaterialModule } from './modules/angular-material/angular-material.module';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaUpdateComponent } from './components/persona-update/persona-update.component';
import { PersonaAddComponent } from './components/persona-add/persona-add.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaUpdateComponent,
    PersonaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonaService,{ provide: MAT_DATE_LOCALE, useValue: 'en-GB'}], // para que el formato sea DD/MM/YYYY
  bootstrap: [AppComponent]
})
export class AppModule { }
