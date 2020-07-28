import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahPengunjungComponent } from '../tambah-pengunjung/tambah-pengunjung.component';
import {DialogKonfirmasiComponent} from '../dialog-konfirmasi/dialog-konfirmasi.component';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-aplikasi',
  templateUrl: './aplikasi.component.html',
  styleUrls: ['./aplikasi.component.css']
})
export class AplikasiComponent implements OnInit {

  constructor(
  public dialog: MatDialog,
  public api: ApiService
  ) {
    this.getData();
 }

 aplikasi:any=[];
   getData()
  {
    this.api.baca().subscribe(res=>{
      this.aplikasi=res;
    })
  }

  ngOnInit(): void {
  }

  buatTamu() {
    const dialogRef = this.dialog.open(TambahPengunjungComponent, {
      width: '450px',
       });
      dialogRef.afterClosed().subscribe(result => {
  console.log('Dialog ditutup');
  });
  }
  edit(data) {
    const dialogRef = this.dialog.open(TambahPengunjungComponent, {
      width: '450px',
      data: data
       });
      dialogRef.afterClosed().subscribe(result => {
        this.getData();
  });
  }
  konfirmasiHapus(id) {
  const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',      
    });
  dialogRef.afterClosed().subscribe(result => {
      if(result == true)
      {
        console.log('Menghapus data');
        this.api.hapus(id).subscribe(res=>{
          this.getData();
        })
      }   
    });
  }
}
