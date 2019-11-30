import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  ref1:string;
  titre1:string;
  photo1:string;
  prix1:number;
  disponible:boolean=false;
  datepost1:string;
  
  submitted:boolean;
  message:string;
  
  constructor(private produitservice:ProduitService) { }

  onSubmit(f1:NgForm)
  { this.submitted=this.produitservice.addProduit(this.ref1,this.titre1,this.photo1,this.prix1,this.disponible,this.datepost1)
    if (this.submitted)
    {this.message="Votre nouveau produit "+this.titre1+" a bien été ajouté";}
    else this.message="Le produit d’id "+this.ref1+" existe déjà";
 }
  ngOnInit() {
  }
  

}
