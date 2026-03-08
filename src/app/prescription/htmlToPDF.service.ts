import { Injectable } from "@angular/core";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { PrescriptionExample } from "./prescription-example/prescription-example";
import { Patient } from "./new-prescription/patient,model";
import { Medication } from "./new-prescription/patient,model";

@Injectable({providedIn: 'root'})
export class htmltoPDF {



    isPreviewPDF = false;

    public saveMedicineData: Medication = {
        medicine: '',
        mg: '',
        useType: '',
        route: '',
        days: ''
    }

    public savePatientData: Patient = {
    id: '',
    name: '',
    age: '',
    gender: '',
    address: '',
    date: new Date(),
    medications: [],
    extraNotes: ''
    }

    public async generatePDFBlob(): Promise<string> {
   
    const data = document.getElementById('pdf-capture-target')
    const canvas = await html2canvas(data!, {scale: 2});
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
   
    return pdf.output('bloburl').toString();
    
    
  }

  printData(){
    console.log(this.savePatientData)

  }
}