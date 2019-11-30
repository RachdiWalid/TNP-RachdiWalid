import { Component, OnInit,Input } from '@angular/core';
import { ProduitService } from '../produit.service';
import {Produits} from './../Produits'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {
 
  
  id:number;
  produit: Produits;
  
  
  
  
  constructor(private produitservice:ProduitService,private activatedRoute:ActivatedRoute) {}
  ngOnInit() {
    
    this.id= this.activatedRoute.snapshot.params['id'];
    this.produit=this.produitservice.tabproduit[this.id];


  }
  
  
}
