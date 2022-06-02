import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cafe-sanroman',
  templateUrl: './cafe-sanroman.component.html',
  styleUrls: ['./cafe-sanroman.component.css']
})
export class CafeSanromanComponent implements OnInit {

  title = 'Grupo San Román | Restaurante, Café, Arte';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'keywords', content: 'lugares para comer en salamanca, lugares para comer en salamanca gto, lugares para comer en gto, lugares para comer en guanajuato, donde comer en salamanca, donde desayunar en salamanca, restaurantes en salamanca, restaurante cafe en salamanca, restaurante cafe bar, musica en vivo en salamanca, grupo san roman, grupo san roman salamanca, grupo san roman salamanca gto'});
    this.meta.updateTag({name: 'description', content: 'San Román es un espacio único, que fusiona el arte, la comida y el buen café para gente cosmopolita y hedonista con una visión diferente del entretenimiento y la cultura en Salamanca.'});
    this.meta.updateTag({name: 'url', content: 'http://gruposanroman.com.mx/cafe-san-roman'});
  }

}
