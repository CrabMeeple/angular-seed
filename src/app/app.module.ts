import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent, HeaderComponent, ChildComponent, FooterComponent, LoginComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
