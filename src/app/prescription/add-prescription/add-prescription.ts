import { Component, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../new-prescription/patient,model';
import { Router, RouterModule } from '@angular/router';
import { htmltoPDF } from '../htmlToPDF.service';
import { PrescriptionExample } from '../prescription-example/prescription-example';
import { Medication } from '../new-prescription/patient,model';
import { SafeUrlPipe } from '../prescription-example/safe-url.pipe';
@Component({
  selector: 'app-add-prescription',
  standalone: true,
  imports: [FormsModule, RouterModule, PrescriptionExample, SafeUrlPipe],
  templateUrl: './add-prescription.html',
  styleUrl: './add-prescription.css',
})
export class AddPrescription {

  isPreviewPDF = false
  pdfUrl: string | null = null
  private Route = inject(Router)
  private prescriptionService = inject(htmltoPDF)
  public passPatientData = this.prescriptionService.savePatientData
  public passMedicineData = this.prescriptionService.saveMedicineData

  newPrescription: Patient =
  {
    id: '',
    name: '',
    age: '',
    gender: '',
    address: '',
    date: new Date,
    medications:[],
    extraNotes: ''
  }
  
   currentMed: Medication = 
   { 
    medicine: '', 
    mg: '', 
    useType: '',
    route: '',
    days: ''
  };

  onSubmit() {
    this.passPatientData;
    this.passMedicineData;
  }

  cancelReceta(){
    this.Route.navigate(['prescription'])
  }

  async convertTo () {
    this.isPreviewPDF = true
    this.prescriptionService.savePatientData = this.newPrescription
    this.prescriptionService.saveMedicineData = this.currentMed
  

    setTimeout( async() => {
      try{
    console.log("patient name: " + this.newPrescription.name)
    console.log("patient age: " + this.newPrescription.age)
    console.log("patient address" + this.newPrescription.address)
    console.log("Medicine name: " + this.currentMed.medicine)
    console.log("Medicine mg: " + this.currentMed.mg)
    console.log("medicie typeUse: " + this.currentMed.useType)
    this.pdfUrl = await this.prescriptionService.generatePDFBlob();
    } catch(error) {
      console.error("PDF Generation failed:", error);
    }
    
  
  }, 1000);
     

    
  }

addMed() {
  if (this.currentMed.medicine && this.currentMed.mg) {
    // Add to the list
    this.newPrescription.medications.push({ ...this.currentMed });
    // Reset the temporary dropdowns
    this.currentMed = { medicine: '', mg: '', useType: '', route: '', days: '' };
    
  }
}

}
