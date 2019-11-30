export class Produits
{
  
    public get ref(): string {
        return this._ref;
    }
    public set ref(value: string) {
        this._ref = value;
    }
  
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }

    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
 
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
 
    public get disponible(): boolean {
        return this._disponible;
    }
    public set disponible(value: boolean) {
        this._disponible = value;
    }
  
    public set datepost(value: Date) {
        this._datepost = value;
    }
    public get datepost(): Date {
        return this._datepost;
    }
    
    
   
  constructor(private _ref:string,private _titre:string,private _photo:string,private _prix:number,private _disponible:boolean,private _datepost:Date)
  {
  }

}
//déclaration du class Produits