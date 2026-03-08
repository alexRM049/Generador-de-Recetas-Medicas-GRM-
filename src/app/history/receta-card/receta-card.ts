import { Component, Input } from '@angular/core';
import { Medication, Patient } from '../../prescription/new-prescription/patient,model';

@Component({
  selector: 'app-receta-card',
  imports: [],
  templateUrl: './receta-card.html',
  styleUrl: './receta-card.css',
})
export class RecetaCard {

  @Input ({required: true}) receta!: Patient
}
