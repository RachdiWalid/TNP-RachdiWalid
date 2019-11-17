import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { AjouterProduitComponent } from './produits/ajouter-produit/ajouter-produit.component';
import { InfoProduitComponent } from './produits/info-produit/info-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    ProduitComponent,
    AjouterProduitComponent,
    InfoProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
