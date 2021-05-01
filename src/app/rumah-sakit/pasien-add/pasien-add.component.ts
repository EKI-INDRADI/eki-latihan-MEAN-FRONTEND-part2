import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';;


@Component({
  selector: 'app-pasien-add',
  templateUrl: './pasien-add.component.html',
  styleUrls: ['./pasien-add.component.css']
})
export class PasienAddComponent implements OnInit {


  post_api = 'http://127.0.0.1:8080/api/pasien';



  nama_pasien = '';
  usia = '';
  alamat = '';
  provinsi_arr: any = []
  kotakab_arr: any = []
  kecamatan_arr: any = []

  var_id_provinsi;
  var_id_kotakab;
  var_id_kecamatan;

  provinsi = '';
  kotakab = '';
  kecamatan = '';

  bpjs_arr: any = [
    { string: "Ya", value: true },
    { string: "Tidak", value: false }
  ]
  bpjs;
  poli = '';



  constructor(private http: HttpClient, private _router: Router) {
    //https://carikodepos.com/

    this.provinsi_arr = [
      { id_provinsi: 1, value: "Jawa Barat" },
      { id_provinsi: 2, value: "DKI Jakarta" },
      { id_provinsi: 3, value: "Banten" }
    ]

    // this.var_id_provinsi = this.provinsi_arr[0].id_provinsi
    // this.provinsi = this.provinsi_arr[0].value
    this.bpjs = this.bpjs_arr[0].value




  }

  ngOnInit() {
  }




  find_array_provinsi_get_id_kotakab() {



    this.kotakab_arr = [
      { id_kotakab: 1, value: "Bandung", id_provinsi: 1 },
      { id_kotakab: 2, value: "Cirebon", id_provinsi: 1 },
      { id_kotakab: 3, value: "Jakarta Utara", id_provinsi: 2 },
      { id_kotakab: 4, value: "Jakarta Selatan", id_provinsi: 2 },
      { id_kotakab: 5, value: "Tangerang", id_provinsi: 3 },
      { id_kotakab: 6, value: "Banten", id_provinsi: 3 }
    ]





    console.log("var_id_provinsi :" + this.var_id_provinsi)

    // console.log(this.provinsi_arr[this.var_id_provinsi].id_provinsi)
    // let result: any = this.provinsi_arr.find(({ id_provinsi }) => id_provinsi === Number(this.provinsi_arr[this.var_id_provinsi].id_provinsi))
    let result: any = this.provinsi_arr.find(({ id_provinsi }) => id_provinsi === Number(this.var_id_provinsi))
    //console.log(result)
    this.provinsi = result.value
    console.log("provinsi :" + this.provinsi)


    this.find_array_kotakab_get_id_kecamatan()

    // this.var_id_kotakab = result.id_kotakab
    // console.log("var_id_kotakab :" + this.var_id_kotakab)
    // console.log(this.var_id_kotakab)
  }


  find_array_kotakab_get_id_kecamatan() {

    //selected array

    this.kecamatan_arr = [
      { id_kecamatan: 1, value: "Ciwidey", id_kotakab: 1 },
      { id_kecamatan: 2, value: "Ranca Bali", id_kotakab: 1 },
      { id_kecamatan: 3, value: "Kedawung", id_kotakab: 2 },
      { id_kecamatan: 4, value: "Sumber", id_kotakab: 2 },
      { id_kecamatan: 5, value: "Koja", id_kotakab: 3 },
      { id_kecamatan: 6, value: "Penjaringan", id_kotakab: 3 },
      { id_kecamatan: 7, value: "Kebayoran Lama", id_kotakab: 4 },
      { id_kecamatan: 8, value: "Kebayoran Baru", id_kotakab: 4 },
      { id_kecamatan: 9, value: "Pinang", id_kotakab: 5 },
      { id_kecamatan: 10, value: "Tigaraksa", id_kotakab: 5 },
      { id_kecamatan: 11, value: "Serang", id_kotakab: 6 },
      { id_kecamatan: 12, value: "Cilegon", id_kotakab: 6 }
    ]




    // this.var_id_kotakab = this.kotakab_arr[0].id_kotakab
    // this.kotakab = this.kotakab_arr[0].value

    //https://stackoverflow.com/questions/37969984/angular-2-typescript-how-to-find-element-in-array
    let result: any = this.kotakab_arr.filter(({ id_provinsi }) => id_provinsi === Number(this.var_id_provinsi))
    this.kotakab_arr = result



    console.log(result)
    console.log("var_id_kotakab " + this.var_id_kotakab)
    console.log("kotakab " + this.kotakab)

    this.find_array_kecamatan()

  }




  find_array_kecamatan() {


    let result: any = this.kecamatan_arr.filter(({ id_kotakab }) => id_kotakab === Number(this.var_id_kotakab))
    this.kecamatan_arr = result
    console.log(result)

    // this.kotakab =  this.find_array_kotakab_get_id_kecamatan[this.var_id_kotakab].value
    console.log("kotakab " + this.kotakab)



    // console.log("var_id_kecamatan "+ this.var_id_kecamatan)
    // console.log("kecamatan "+ this.kecamatan)

    // let result2: any = this.kecamatan_arr.find(({ id_kecamatan }) => id_kecamatan === Number(this.var_id_kecamatan))
    // //console.log(result)

    // this.kecamatan = result2.value
  }



  get_value_combo_by_id() {

    // let get_index_kotakab = this.find_array_kotakab_get_id_kecamatan.indexOf(this.var_id_kotakab)
    // this.kotakab =  this.find_array_kotakab_get_id_kecamatan[get_index_kotakab].value
    // this.kecamatan =  this.find_array_kecamatan[this.var_id_kecamatan].value


    let result: any = this.kotakab_arr.filter(({ id_kotakab }) => id_kotakab === Number(this.var_id_kotakab))
    this.kotakab = result[0].value


    let result2: any = this.kecamatan_arr.filter(({ id_kecamatan }) => id_kecamatan === Number(this.var_id_kecamatan))
    this.kecamatan = result2[0].value


    // console.log(result)
    // console.log(result2)

    console.log("kotakab : " + this.kotakab)
    console.log("kecamatan : " + this.kecamatan)
  }







  // post_data() {


  //   let post_arr: any = [
  //     "nama_pasien": this.nama_pasien,
  //     "usia": this.usia,
  //     "alamat": this.alamat,
  //     "provinsi": this.provinsi,
  //     "kotakab": this.kotakab,
  //     "kecamatan": this.kecamatan,
  //     "bpjs": this.bpjs,
  //     "poli": this.poli
  //   ]



  // }





  //================== BAD REQUEST ERR

  // let headers = new HttpHeaders({
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
  //   'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  //   'Content-Type': 'application/json/json;charset=UTF-8'
  // });
  //================== BAD REQUEST ERR

  post_api_func_v2() {

    this.get_value_combo_by_id()

    // ========== ERROR 400 BAD OPTION
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    //   'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    //   'Content-Type': 'application/json/json'
    // });

    // let options = { headers: headers };
    // ========== ERROR 400 BAD OPTION
    this.http.post(this.post_api,
      {
        // nama_pasien: this.nama_pasien,
        // usia: this.usia,
        // alamat: this.alamat,
        // provinsi: this.provinsi,
        // kotakab: this.kotakab,
        // kecamatan: this.kecamatan,
        // bpjs: this.bpjs,
        // poli: this.poli


        // nama_pasien: "pasien3",
        // usia: "usia1",
        // alamat: "alamat1",
        // provinsi: "provinsi1",
        // kotakab: "kotakab1",
        // kecamatan: "kecamatan1",
        // bpjs: true,
        // poli: "gigi"





        nama_pasien: this.nama_pasien,
        usia: this.usia,
        alamat: this.alamat,
        provinsi: this.provinsi,
        kotakab: this.kotakab,
        kecamatan: this.kecamatan,
        bpjs: this.bpjs,
        poli: this.poli

        // "nama_pasien": "pasien3",
        // "usia": "usia1",
        // "alamat": "alamat1",
        // "provinsi": "provinsi1",
        // "kotakab": "kotakab1",
        // "kecamatan": "kecamatan1",
        // "bpjs": true,
        // "poli": "gigi"

      }
      // ========== ERROR 400 BAD OPTION
      // }, options
      // ========== ERROR 400 BAD OPTION
    ).subscribe((res: any) => {


      // nama_pasien: "pasien3",
      // usia : "usia1",
      // alamat: "alamat1",
      // provinsi: "provinsi1",
      // kotakab: "kotakab1",
      // kecamatan: "kecamatan1",
      // bpjs: true,
      // poli: "gigi"


      // nama_pasien: this.nama_pasien,
      // usia: this.usia,
      // alamat: this.alamat,
      // provinsi: this.provinsi,
      // kotakab: this.kotakab,
      // kecamatan: this.kecamatan,
      // bpjs: this.bpjs,
      // poli: this.poli




      // this.http.post(this.post_api, {
      //   nama_pasien: this.nama_pasien,
      //   usia: this.usia,
      //   alamat: this.alamat,
      //   provinsi: this.provinsi,
      //   kotakab:this.kotakab,
      //   kecamatan:this.kecamatan,
      //   bpjs:this.bpjs,
      //   poli:this.poli
      // }).subscribe(
      //   res => {
      console.log(res);
      this._router.navigate(['/', 'pasien-page']);
    },
      err => {
        console.log("Error occured");

        console.log(err);
      }
    );

  }




  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }



}
