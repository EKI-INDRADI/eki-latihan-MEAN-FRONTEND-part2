import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';import { now } from 'jquery';
;


@Component({
  selector: 'app-antrian',
  templateUrl: './antrian.component.html',
  styleUrls: ['./antrian.component.css']
})
export class AntrianComponent implements OnInit {
  post_api = 'http://127.0.0.1:8080/api/antrian';

  nomor_antrian : any= 0
  createdAt : any
  constructor(private http: HttpClient, private _router: Router) {

this.post_api_func_v2()

  }

  ngOnInit() {
  }



  post_api_func_v2() {

    this.http.post(this.post_api,
      {

      }

    ).subscribe((res: any) => {
      this.nomor_antrian = res.nomor_antrian
      this.createdAt = res.createdAt

    },
      err => {
        console.log("Error occured");

        console.log(err);
      }
    );

  }

}
