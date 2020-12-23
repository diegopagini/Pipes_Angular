import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitan America';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  Porcentaje: number = 0.234;

  salario: number = 1234.5;
  nombre2: string = 'diEgo hErnAn pAgini';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  idioma: string = 'en';
}
