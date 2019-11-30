import { Component, OnInit } from '@angular/core';
import{ProduitService} from '../../produits/produit.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  mdp:string;
  submitted:boolean
  constructor(private produitservice:ProduitService) { }
  onSubmit(f:NgForm)
 { this.submitted=this.produitservice.islogin(this.username,this.mdp)
}
  ngOnInit() {
    
  }
 

}
