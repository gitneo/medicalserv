import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'login.component.html',
    styles:[]
})
export class LoginComponent{
    
    constructor(private router :Router){}

    login(){
        this.router.navigate(['/dashboard']);
    }

}