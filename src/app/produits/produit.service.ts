import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  tabproduit =[new Produits('ref1','titre1',"assets/01.jpg",120,true),new Produits ('ref2','titre2',"assets/01.jpg",100,true)];
   
  

}
export class Produits
{
  private _ref:string;
  private _titre:string;
  private _photo:string;
  private _prix:number;
  private _disponible:boolean;
  private _datepost:Date;
  constructor(ref:string,titre:string,photo:string,prix:number,disponible:boolean)
  {
    this._ref=ref;
    this._titre=titre;
    this._photo=photo;
    this._prix=prix;
    this._disponible=disponible;
    this._datepost=new Date();
  }
 public get ref():string
 {return this._ref;}
 public set ref(ref:string)
 {this._ref=ref;}
 public get titre():string
 {return this._titre;}
 public set titre(titre:string)
 {this._titre=titre;}
 public get photo():string
 {return this._photo}
 public set photo(photo:string)
 {this._photo=photo;}
 public get prix():number
 {return this._prix}
 public set prix(prix:number)
 {this._prix=prix;}
 public set disponible(disponible:boolean)
 {this._disponible=disponible;}
 public get disponible():boolean
 {return this._disponible;}
}
//déclaration du class Produits