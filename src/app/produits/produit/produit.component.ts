import { Component, OnInit,Input } from '@angular/core';
import{ProduitService} from '../produit.service';
import {Produits} from './../Produits'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitservice: ProduitService) { }
@Input()photo:string;
@Input()titre:string;
@Input()ref:string;
@Input()prix:number;
@Input()id:number;




  ngOnInit() {
 
  }



}
