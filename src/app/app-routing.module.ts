import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { InfoProduitComponent } from './produits/info-produit/info-produit.component';

const routes: Routes = [
  {path:'', component: ProduitListComponent},
  {path: 'info', component: InfoProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
