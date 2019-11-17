import { Component, OnInit } from '@angular/core';
import{ProduitService, Produits} from '../produit.service';


@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})

export class ProduitListComponent implements OnInit {
tabproduit: Produits[];
  constructor(private produitservice:ProduitService) {}

  ngOnInit() {
    this.tabproduit=this.produitservice.tabproduit;
  }
  
}
//déclaration du class Produits

