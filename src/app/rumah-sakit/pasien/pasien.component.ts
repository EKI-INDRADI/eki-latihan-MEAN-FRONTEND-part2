import { Component, OnInit } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';;

@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.component.html',
  styleUrls: ['./pasien.component.css']
})
export class PasienComponent implements OnInit {

  
  arr_data: any = []

  var_jumlah_halaman_arr_loop;
  var_halaman_aktif
  var_halaman_aktif_number


  Jumlah_Halaman
  Jumlah_Data_Table


  limit = 6;
  skip;
  var_search = ''



  temp_page_cookie_boongan: number = 1

  
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {

    this.get_api_func(0, 1)
  }


  get_api_func(skip = 0, halaman_aktif) {

    console.log(" skip " + skip)
    console.log(" limit " + this.limit)
    console.log(" halaman aktif " + halaman_aktif)










    // let query_object: any =
    // {
    //   fields: {
    //     id: true,
    //     name: true,
    //     release_date: true,
    //     imbd_rating: true,
    //     created_at: true,
    //     updated_at: true,
    //     cover: true
    //   },
    //   order: 'updated_at desc',
    //   where: {
    //     name: { ilike: '%' + this.var_search + '%' },
    //   },
    //   limit: this.limit,
    //   skip: skip
    // }

    // let query_object_str: any = JSON.stringify(query_object)

    // let query_object_count_str: any = JSON.stringify(query_object.where)
//   this.http.get<any>('http://localhost:3001/api/mst_movies/count?where=' + encodeURI(query_object_count_str)).subscribe(data => {
    this.http.get<any>('http://127.0.0.1:8080/api/pasien').subscribe(data => {
      this.Jumlah_Data_Table = Number(data.length)


      this.Jumlah_Halaman = Math.ceil(this.Jumlah_Data_Table / this.limit);

      this.var_jumlah_halaman_arr_loop = [];
      for (let x_array = 1; x_array <= this.Jumlah_Halaman; x_array++) {
        this.var_jumlah_halaman_arr_loop.push(x_array)
      }





      // http://127.0.0.1:8080/api/pasien/name/1?skip=1&limit=10


      // this.http.get<any>('http://localhost:3001/api/mst_movies?filter=' + encodeURI(query_object_str)).subscribe(data => {


      if (this.var_search == ''){
        this.http.get<any>('http://127.0.0.1:8080/api/pasien?skip='+skip+'&limit='+this.limit).subscribe(data => {

          this.arr_data = data

  
          if (this.var_halaman_aktif > 1 && data.length == 0) {
  
            this.temp_page_cookie_boongan = 1
            this.var_halaman_aktif = "1"
            this.var_halaman_aktif_number = Number(halaman_aktif)
  
          } else {
            this.temp_page_cookie_boongan = halaman_aktif
            this.var_halaman_aktif = halaman_aktif
            this.var_halaman_aktif_number = Number(halaman_aktif)
          }
  
  
        }, error => {
          console.log(error)
        })
      }else {
        this.http.get<any>('http://127.0.0.1:8080/api/pasien/name/'+ this.var_search +'?skip='+skip+'&limit='+this.limit).subscribe(data => {

          this.arr_data = data

  
          if (this.var_halaman_aktif > 1 && data.length == 0) {
  
            this.temp_page_cookie_boongan = 1
            this.var_halaman_aktif = "1"
            this.var_halaman_aktif_number = Number(halaman_aktif)
  
          } else {
            this.temp_page_cookie_boongan = halaman_aktif
            this.var_halaman_aktif = halaman_aktif
            this.var_halaman_aktif_number = Number(halaman_aktif)
          }
  
  
        }, error => {
          console.log(error)
        })
      }




    })


  }









  page_next() {
    let var_page_next = this.temp_page_cookie_boongan
    if (this.Jumlah_Halaman == var_page_next) {
      this.temp_page_cookie_boongan = this.Jumlah_Halaman
      var_page_next = this.Jumlah_Halaman
      this.get_api_func((var_page_next * this.limit) - this.limit, var_page_next)
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    } else {
      var_page_next = var_page_next + 1
      this.temp_page_cookie_boongan = var_page_next
      this.get_api_func((var_page_next * this.limit) - this.limit, var_page_next)
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }

  }

  page_prev() {
    let var_page_prev = this.temp_page_cookie_boongan
    if (var_page_prev == 1) {
      this.temp_page_cookie_boongan = 1
      var_page_prev = 1
      this.get_api_func((var_page_prev * this.limit) - this.limit, var_page_prev)
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    } else {
      var_page_prev = var_page_prev - 1
      this.temp_page_cookie_boongan = var_page_prev
      this.get_api_func((var_page_prev * this.limit) - this.limit, var_page_prev)
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }
  }

  page_plus2() {
    let var_page = this.temp_page_cookie_boongan + 2
    if (var_page <= 0) {
    } else {
      let var_data_skip = (var_page * this.limit) - this.limit
      this.get_api_func(var_data_skip, var_page)
      this.temp_page_cookie_boongan = var_page
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }
  }


  page_plus1() {
    let var_page = this.temp_page_cookie_boongan + 1
    if (var_page <= 0) {
    } else {
      let var_data_skip = (var_page * this.limit) - this.limit
      this.get_api_func(var_data_skip, var_page)
      this.temp_page_cookie_boongan = var_page
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }
  }



  page_aktif() {
    let var_page = this.temp_page_cookie_boongan
    let var_data_skip = (var_page * this.limit) - 10
    this.get_api_func(var_data_skip, var_page)
    this.temp_page_cookie_boongan = var_page
    this.var_halaman_aktif_number = this.temp_page_cookie_boongan

  }

  page_min1() {

    let var_page = this.temp_page_cookie_boongan - 1
    if (var_page <= 0) {

    } else {

      let var_data_skip = (var_page * this.limit) - this.limit
      this.get_api_func(var_data_skip, var_page)
      this.temp_page_cookie_boongan = var_page
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }



  }

  page_min2() {

    let var_page = this.temp_page_cookie_boongan - 2
    if (var_page <= 0) {

    } else {

      let var_data_skip = (var_page * this.limit) - this.limit
      this.get_api_func(var_data_skip, var_page)
      this.temp_page_cookie_boongan = var_page
      this.var_halaman_aktif_number = this.temp_page_cookie_boongan
    }

  }

  page_first() {
    this.get_api_func(0, 1)
    this.var_halaman_aktif_number = 1
    //  this.temp_page_cookie_boongan
  }

  page_last() {
    this.get_api_func((this.Jumlah_Halaman * this.limit) - this.limit, this.Jumlah_Halaman)
    this.var_halaman_aktif_number = this.temp_page_cookie_boongan
  }


























}
