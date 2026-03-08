import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Prescription } from './prescription/prescription';
import { History } from './history/history';
import { NewPrescription } from './prescription/new-prescription/new-prescription';
import { AddPrescription } from './prescription/add-prescription/add-prescription';
import { HelpPage } from './help-page/help-page';
import { PrescriptionExample } from './prescription/prescription-example/prescription-example';


export const routes: Routes = [
    {
    path: '',
    component: Home,
    title: 'Pantalla Principal'
    },

    {
        path: 'prescription',
        component: Prescription,
        title: 'Crear Receta'
    },

    {
        path: 'history',
        component: History,
        title: 'Historial de recetas'
    },

    {
        path: 'new-prescription',
        component: NewPrescription,
        title: 'Crear una receta nueva'
    },

    {
        path: 'add-prescription',
        component: AddPrescription,
        title: "agregrar una nueva receta"
    },

    {
        path: 'help',
        component: HelpPage,
        title: "Comp Utilizar la aplicacion"
    },

    {
        path: 'prescription-example',
        component: PrescriptionExample,
        title: 'Ejemplo de receta'
    }


    

];
