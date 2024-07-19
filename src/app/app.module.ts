import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './services/language.service';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { CollaborationsComponent } from './components/collaborations/collaborations.component';
import { AboutComponent } from './components/about/about.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { HeadingComponent } from './components/heading/heading.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SectionsComponent } from './components/sections/sections.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/datas/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LogoComponent,
    CardComponent,
    ServicesComponent,
    HomeComponent,
    CollaborationsComponent,
    AboutComponent,
    HeadingComponent,
    ArticlesComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    NgxMasonryModule
  ],
  providers: [LanguageService, DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
