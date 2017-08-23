import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;

    constructor() {
        this.title = "Aplicativo Web";
    }

    ngOnInit(): void {
    }
    clicou(){
        this.title="Aplicativo web interativo";
      }
    
     
}
