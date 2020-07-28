import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AplikasiComponent } from './aplikasi/aplikasi.component';
import { MaterialDesign } from './material/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TambahPengunjungComponent } from './tambah-pengunjung/tambah-pengunjung.component';

import { HttpClientModule } from '@angular/common/http';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AplikasiComponent,
    TambahPengunjungComponent,
    DialogKonfirmasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    TambahPengunjungComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
