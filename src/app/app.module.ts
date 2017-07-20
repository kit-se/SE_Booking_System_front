import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FooterModule } from './shared/component/footer/footer.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,

        AppRoutingModule,

        MainModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
