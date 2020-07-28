import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-tambah-pengunjung',
  templateUrl: './tambah-pengunjung.component.html',
  styleUrls: ['./tambah-pengunjung.component.css']
})


  export class TambahPengunjungComponent implements OnInit {
    data:any={};
    constructor(
      public api:ApiService, 
      public dialogRef:MatDialogRef<TambahPengunjungComponent>,
      @Inject(MAT_DIALOG_DATA) public itemData:any
      ) { 
        if(itemData != null){
          this.data=itemData;
        }
      }
  ngOnInit() { }  
  simpan(data){
    if(data.id == undefined){
      this.api.simpan(data).subscribe(res=>
      {
        this.dialogRef.close(true);
      })
    } else {
      this.api.ubah(data).subscribe(res=>
      {
        this.dialogRef.close(true);
      })
    }
  }
}
