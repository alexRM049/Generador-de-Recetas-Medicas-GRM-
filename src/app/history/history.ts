import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { RecetasService } from './Recetas.service';
import { RecetaCard } from './receta-card/receta-card';

@Component({
  selector: 'app-history',
  imports: [Header, RecetaCard],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

  private recetasServ = inject(RecetasService)

  listaHistorial = this.recetasServ.recetasExample;
  
  get listaRecetas() {
    return this.listaHistorial;
  }
}
