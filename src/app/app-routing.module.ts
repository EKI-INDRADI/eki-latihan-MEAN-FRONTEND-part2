
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PasienComponent } from "./rumah-sakit/pasien/pasien.component";
import { PasienAddComponent } from "./rumah-sakit/pasien-add/pasien-add.component";
import { AntrianComponent } from "./rumah-sakit/antrian/antrian.component";



// https://angular-2-training-book.rangle.io/routing/child_routes
// https://itnext.io/child-routes-with-respective-components-in-angular-4-36f1be42278e
// jgn lupa tambahkan <router-oultet> di parent html


const routes: Routes = [
    // {path: 'barang-page',component: BarangComponent},
    // {path: 'barang-add-page', component: BarangAddComponent},
    // {path: 'barang-edit-page/:id', component: BarangEditComponent},
    // {path: 'barang-delete-page/:id', component: BarangDeleteComponent},
    // {path: 'transaksi-page' ,component: TransaksiComponent},
    // {path: 'transaksi-add-page' ,component: TransaksiAddComponent},
    // {path: 'transaksi-edit-page/:id' ,component: TransaksiEditComponent},
    // {path: 'transaksi-delete-page/:id' , component: TransaksiDeleteComponent}


    {
        path: 'pasien-page',
        children: [{
            path: '', component: PasienComponent
        },
        {
            path: 'add', component: PasienAddComponent
        },
        {
            path: 'antrian', component: AntrianComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {


}
