import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { SliderPrincipalComponent } from './views/slider-principal/slider-principal.component';
import { FooterComponent } from './views/footer/footer.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { CafeComponent } from './pages/acerca-de/cafe/cafe.component';
import { ForoComponent } from './pages/acerca-de/foro/foro.component';
import { MenusComponent } from './pages/menus/menus.component';
import { EnviarEmailComponent } from './pages/contacto/enviar-email/enviar-email.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LaGaleriaComponent } from './pages/acerca-de/la-galeria/la-galeria.component';
import { ReservacionesComponent } from './services/reservaciones/reservaciones.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { SuscribirseComponent } from './pages/suscribirse/suscribirse.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CafeSanromanComponent } from './pages/cafe-sanroman/cafe-sanroman.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderPrincipalComponent,
    FooterComponent,
    GaleriaComponent,
    ConocenosComponent,
    CafeComponent,
    ForoComponent,
    LaGaleriaComponent,
    MenusComponent,
    EnviarEmailComponent,
    ContactoComponent,
    ReservacionesComponent,
    FacturacionComponent,
    SuscribirseComponent,
    NotFoundComponent,
    ReservarComponent,
    EventosComponent,
    CafeSanromanComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    BrowserModule.withServerTransition({appId: 'universal-cli'}),

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'cafe-san-roman',
        component: CafeSanromanComponent
      },
      {
        path: 'cafe-san-roman/conocenos',
        component: ConocenosComponent
      },
      {
        path: 'cafe-san-roman/el-cafe',
        component: CafeComponent
      },
      {
        path: 'cafe-san-roman/el-foro',
        component: ForoComponent
      },
      {
        path: 'cafe-san-roman/la-galeria',
        component: LaGaleriaComponent
      },
      {
        path: 'cafe-san-roman/menus',
        component: MenusComponent
      },
      {
        path: 'cafe-san-roman/galeria',
        component: GaleriaComponent
      },
      {
        path: 'cafe-san-roman/contacto',
        component: ContactoComponent
      },
      {
        path: 'cafe-san-roman/enviar-email',
        component: EnviarEmailComponent
      },
      {
        path: 'cafe-san-roman/suscripciones',
        component: SuscribirseComponent
      },
      {
        path: 'cafe-san-roman/facturacion',
        component: FacturacionComponent
      },
      {
        path: 'cafe-san-roman/reservaciones',
        component: ReservarComponent
      },
      {
        path: 'cafe-san-roman/eventos',
        component: EventosComponent
      },
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ]),
    AppRoutingModule
  ],
  providers: [],
  exports: [NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
