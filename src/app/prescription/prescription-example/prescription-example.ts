import { Component, inject } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { htmltoPDF } from '../htmlToPDF.service';
import { Medication, Patient } from '../new-prescription/patient,model';

@Component({
  selector: 'app-prescription-example',
  imports: [],
  templateUrl: './prescription-example.html',
  styleUrl: './prescription-example.css',
})
export class PrescriptionExample {

   public prescriptionService = inject(htmltoPDF)
 
  
  get patientData(): Patient{
    return this.prescriptionService.savePatientData;
  }

  get medicineData(): Medication{
    return this.prescriptionService.saveMedicineData;
  }

 }


