import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { Title, Meta } from '@angular/platform-browser';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
  export class AppComponent implements OnInit {
    title = 'Grupo San Román';

    //Codigo scrool to top cuando usamos routerLink para navegar entre paginas
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(
        public router: Router, 
        private location: Location, 
        private titleService: Title,
        private meta: Meta
        ) { }

    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.meta.addTag({name: 'author', content: 'Jose Razo'});
        this.meta.addTag({name: 'robots', content: 'index, follow'});
        this.meta.updateTag({name: 'keywords', content: 'lugares para comer en salamanca, lugares para comer en salamanca gto, lugares para comer en gto, lugares para comer en guanajuato, donde comer en salamanca, donde desayunar en salamanca, restaurantes en salamanca, restaurante cafe en salamanca, restaurante cafe bar, musica en vivo en salamanca, grupo san roman, grupo san roman salamanca, grupo san roman salamanca gto'});
        this.meta.updateTag({name: 'description', content: 'Grupo San Román cuenta con dos empresas, su empresa principal es la de San Román Café Arte y la de ROMITTO para el traslado y envios locales.'});
        this.meta.updateTag({name: 'url', content: 'http://gruposanroman.com.mx/'});

        this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((ev:any) => {
            if (ev instanceof NavigationStart) {
                if (ev.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (ev instanceof NavigationEnd) {
                if (ev.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
    }
}