import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        MainModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
