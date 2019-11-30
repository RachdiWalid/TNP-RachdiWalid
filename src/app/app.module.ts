import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { AjouterProduitComponent } from './produits/ajouter-produit/ajouter-produit.component';
import { InfoProduitComponent } from './produits/info-produit/info-produit.component';
import { Error404Component } from './produit/error404/error404.component';
import { LoginComponent } from './produit/login/login.component';
import { ModifierProduitComponent } from './produits/modifier-produit/modifier-produit.component';
import { ContactComponent } from './produits/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    ProduitComponent,
    AjouterProduitComponent,
    InfoProduitComponent,
    Error404Component,
    LoginComponent,
    ModifierProduitComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
