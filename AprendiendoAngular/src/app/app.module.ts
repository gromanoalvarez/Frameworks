import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing'; //MODULO y SERVICIO para que anden las rutas y navegar por urls con angular
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //Para que Peticiones AJAX funcione
import { MomentModule } from 'angular2-moment';

/**
 *
 * Permite cargar configuraciones para el MÓdulo. IMPORTA EL COMPONENTE A CUALQUIER PARTE DE MI APLICACIóN
 * es una BUENA PRACTICA con el nombre de mis componentes usar sufijos "component"
 */

import { AppComponent } from './app.component'; //LO QUE SE DEBE PONER EN "declarations:[AppComponent]"
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent, // TANTO PARA COMPONENTES COMO PARA DIRECTIVAS COMO PIPES
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent, // NO OLVIDAR, instanciar aqui todos los componentes importados
    EsParPipe, ArticlesComponent, ArticleComponent, SearchComponent,
  ],
  imports: [//MÓDULOS QUE QUIERO UTILIZAR:
    BrowserModule, 
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [appRoutingProviders], //SERVICIOS
  bootstrap: [AppComponent], //INDICAR CUAL ES EL COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MÓDULO
})
export class AppModule {}
