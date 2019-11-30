import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { InfoProduitComponent } from './produits/info-produit/info-produit.component';
import { Error404Component } from './produit/error404/error404.component';
import { LoginComponent } from './produit/login/login.component';
import { AjouterProduitComponent } from './produits/ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './produits/modifier-produit/modifier-produit.component';
import { ContactComponent } from './produits/contact/contact.component';

const routes: Routes = [
  {path:'', component: ProduitListComponent},
  {path:'produitlist',component: ProduitListComponent},
  {path:'produit',component:ProduitComponent},
  {path: 'produitlist/:id', component: InfoProduitComponent},
  {path:'login',component:LoginComponent},
  {path:'ajouterProduit',component:AjouterProduitComponent},
  {path:"modifierProduit/:id",component:ModifierProduitComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
