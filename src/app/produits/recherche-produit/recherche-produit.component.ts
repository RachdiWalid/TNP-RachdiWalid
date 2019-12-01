import { Component, OnInit } from '@angular/core';
import {Produits} from './../Produits';
import {NgForm} from '@angular/forms';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-recherche-produit',
  templateUrl: './recherche-produit.component.html',
  styleUrls: ['./recherche-produit.component.css']
})
export class RechercheProduitComponent implements OnInit {
  pmax:number=null;
  datemax:string=null;
  tabrecherche:Produits[]=[];
  tabproduit:Produits[];
  constructor(private produitservice:ProduitService) { }

  ngOnInit() {
    this.tabproduit=this.produitservice.tabproduit;
  }
  onSubmit(f3:NgForm){
    if((this.pmax==null)&&(this.datemax!=null))
    {let d=new Date(this.datemax);
      for(let i=0;i<this.tabproduit.length;i++)
      {if(this.tabproduit[i].datepost<=d)
      this.tabrecherche.push(this.tabproduit[i]);}
    }
    else if((this.pmax!=null)&&(this.datemax==null))
    {
      for(let i=0;i<this.tabproduit.length;i++)
      {if(this.tabproduit[i].prix<=this.pmax) 
      this.tabrecherche.push(this.tabproduit[i]);}
    }
    else if((this.pmax==null)&&(this.datemax==null))
    {
      for(let i=0;i<this.tabproduit.length;i++)
      this.tabrecherche.push(this.tabproduit[i]);
    }
    else
    
      for(let i=0;i<this.tabproduit.length;i++)
      {let d=new Date(this.datemax);
        if((this.tabproduit[i].datepost<d)&&(this.tabproduit[i].prix<=this.pmax))
      this.tabrecherche.push(this.tabproduit[i]);}
    }


}
