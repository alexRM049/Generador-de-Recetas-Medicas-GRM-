import { Injectable } from "@angular/core";
import { Patient } from "../prescription/new-prescription/patient,model";

@Injectable({providedIn: "root"})

export class RecetasService {
    recetasExample: Patient[] = [
        {
            id: '1',
            name: 'Ramon Perez',
            age: '45',
            gender: 'Varón',
            address: 'calle abcd',
            date: new Date,
            medications: [],
            extraNotes: ''
        },

        {
            id: '2',
            name: 'pablo Martinez',
            age: '31',
            gender: "Varón",
            address: 'calle efgh',
            date: new Date,
            medications: [],
            extraNotes: ''

        },

        {
            id:'3',
            name: 'Jessica Rodriguez',
            age: '20',
            gender: "Hembra",
            address: 'calle ijkn',
            date: new Date,
            medications: [],
            extraNotes: ''

        }

    ]
}