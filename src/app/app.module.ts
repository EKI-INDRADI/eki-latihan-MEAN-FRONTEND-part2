import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   // ReactiveFormsModule == untuk keperluan array form  ,
//  dan dynamic form



// import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

// npm install @swimlane/ngx-charts --save

// import { NgxChartsModule } from '@swimlane/ngx-charts';
///node_modules/@swimlane/ngx-charts/fesm2015/

// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { BarChartModule } from '@swimlane/ngx-charts/lib/bar-chart';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // keperluan chart



import { ModalsComponent } from './modals/modals.component'; //ini component
import { ModalModule } from './_eki_modal_service';


//============ timezone =================
// import { registerLocaleData } from '@angular/common'; // timezone
// import localeId from '@angular/common/locales/id';
// import localeIdExtra from '@angular/common/locales/extra/id';
// registerLocaleData(localeId, 'id-ID', localeIdExtra);
//https://github.com/angular/angular/issues/20286
//============ timezone =================

//import { MediaObjectComponent } from './media-object/media-object.component';  // di hapus
// npm install @swimlane/ngx-charts --save



//========= JSON VIEWER
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// npm i ngx-json-viewer --save
// https://www.npmjs.com/package/ngx-json-viewer
// https://stackblitz.com/edit/ngx-json-viewer

// npm i ng2-ace-editor --save
// https://www.npmjs.com/package/ng2-ace-editor
// https://stackblitz.com/edit/ngx-json-viewer

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';

import { PasienComponent } from './rumah-sakit/pasien/pasien.component';
import { PasienAddComponent } from './rumah-sakit/pasien-add/pasien-add.component';
import { AntrianComponent } from './rumah-sakit/antrian/antrian.component';


//========= JSON VIEWER



@NgModule({
  declarations: [
    AppComponent,

    ModalsComponent,


    PasienComponent,
    PasienAddComponent,
    AntrianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule, // keperluan charts
    ModalModule, // Modals service
    ReactiveFormsModule, // keperluan array form     dan dynamic form
    //====================== Keperluan JSON VIEW
    //  BrowserModule, 
    //  FormsModule, 
    NgxJsonViewerModule,
    AceEditorModule
    //====================== Keperluan JSON VIEW
    //  ,
    //  BrowserAnimationsModule

    // import FormModulenya bukan di declaration tapi di Imports
    // untuk keperluan NgModel
    // FormsModule solved : 
    // https://stackoverflow.com/questions/45032043/uncaught-error-unexpected-module-formsmodule-declared-by-the-module-appmodul/45032201
    // MatDatepickerModule, MatInputModule,MatNativeDateModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
