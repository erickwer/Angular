import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RodapeComponent } from './rodape/rodape.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RodapeComponent,
        CalculadoraComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
