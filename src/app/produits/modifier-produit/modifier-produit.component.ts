import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import {Produits} from './../Produits';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {
  ref1:string;
  titre1:string;
  photo1:string;
  prix1:number;
  disponible:boolean=false;
  datepost1:string;

  id:number;
  produit: Produits;
  submitted:boolean=false;
  message:string;
  constructor(private produitservice:ProduitService,private activatedRoute:ActivatedRoute) { }
onSubmit(f2:NgForm)
  {this.produit.ref=this.ref1;
    this.produit.titre=this.titre1;
    this.produit.photo=this.photo1;
    this.produit.prix=this.prix1;
    this.produit.disponible=this.disponible;
    this.produit.datepost=new Date(this.datepost1);
    this.submitted=this.produitservice.modifyProduit(this.produit,this.id);
    if (this.submitted)
    {this.message="Votre nouveau produit "+this.titre1+" a bien été modifier";}


 }
  ngOnInit() {
    
    this.id= this.activatedRoute.snapshot.params['id'];
    this.produit=this.produitservice.tabproduit[this.id];

  }

}
