import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [{
        titulo: 'spider man',
        lanzamiento: new Date(),
        precio: 255.99
      }, {
        titulo: 'wonder women',
        lanzamiento: new Date('2016-11-14'),
        precio: 2.99
      }, {
        titulo: 'Moana',
        lanzamiento: new Date('2020-11-14'),
        precio: 2.99
      }];
    }, 3000);
  }
  title = 'Front';

  peliculas: { titulo: string; lanzamiento: Date; precio: number; }[];

  DuplicaNumero(pp: number): number {
    return pp * 2;
  }
  
}
