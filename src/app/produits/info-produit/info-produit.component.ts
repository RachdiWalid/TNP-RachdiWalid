import { Component, OnInit,Input } from '@angular/core';
import { Produits,ProduitService } from '../produit.service';



@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.css']
})
export class InfoProduitComponent implements OnInit {
  tabproduit: Produits[];
  @Input()index:number;
  constructor(private produitservice:ProduitService) {}
  ngOnInit() {
    this.tabproduit=this.produitservice.tabproduit;
   

  }
  

}
