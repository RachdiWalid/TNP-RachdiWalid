import { Injectable } from '@angular/core';
import {Produits} from './Produits';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  tabproduit =[new Produits('Artwork01','Ambitious',"assets/01.jpg",120,true,new Date("06/24/2019")),
  new Produits ('Artwork02','The hidden city',"assets/02.jpg",100,false,new Date("06/30/2019")),
  new Produits ('Artwork03','To the light',"assets/03.jpg",120,true,new Date("07/06/2019")),
  new Produits ('Artwork04','Day dreaming',"assets/04.jpg",90,true,new Date("07/04/2019")),
  new Produits ('Artwork05','Dimension anger',"assets/05.jpg",80,true,new Date("07/02/2019")),
  new Produits ('Artwork06','Cosmic vision',"assets/06.jpg",100,true,new Date("06/25/2019")),
  new Produits ('Artwork07','Cosmic thoughts',"assets/07.jpg",120,true,new Date("06/27/2019")),
  new Produits ('Artwork08','Art head',"assets/08.jpg",140,true,new Date("06/29/2019")),
  new Produits ('Artwork09','An illustration experiment',"assets/09.jpg",120,true,new Date("07/16/2019")),
  new Produits ('Artwork10',"Doin' Fazty","assets/10.jpg",100,true,new Date("09/03/2019")),
  new Produits ('Artwork11',"Alone","assets/11.jpg",80,true,new Date("11/02/2019")),
  new Produits ('Artwork12',"A N G E R","assets/12.jpg",90,true,new Date("10/07/2019"))

];
 
 
  public islogin(username:string,mdp:string):boolean
  {
    if(username=="admin" && mdp=="admin")
    return true;
    else false; 
  }
  public getProduitById(ref:string):Produits{
    for (let i=0;i<this.tabproduit.length;i++){
      if (ref==this.tabproduit[i].ref)
      return this.tabproduit[i];
      else null;
    }
  }
  public addProduit(ref:string,titre:string,photo:string,prix:number,disponible:boolean,datepost:string):boolean{
    let p= new Produits(ref,titre,photo,prix,disponible,new Date(datepost));
    
    if (this.getProduitById(ref)==null)
    {this.tabproduit.push(p);
    return true;}
    else return false; 
 
  }
  public modifyProduit(produit:Produits,id:number)
  {this.tabproduit[id]=produit;
  return true;}
  public deleteProduit(id:number)
  {
    return this.tabproduit.splice(id,1);
  }

}
