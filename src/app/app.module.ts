import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//importamos el http client
import {HttpClientModule} from '@angular/common/http';
//Modulo para el control desde google earth
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: '', component: ArticlelistComponent},
  { path: 'home', component: HomeComponent},
  { path: 'articulo', component: ArticuloComponent},
  { path: 'contacto', component: ContactoComponent}, 
]
@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    ContactoComponent,
    NavheaderComponent,
    ArticlelistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEVLuALTNr5HLHfj6OgQ53ah-HvTS0lG8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
