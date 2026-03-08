import { Component, signal} from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prescription',
  imports: [Header, RouterModule],
  templateUrl: './prescription.html',
  styleUrl: './prescription.css',
})
export class Prescription {
  
  isShown = signal(false);

   toggle() {
    this.isShown.update((isShown) => !isShown);
  }

  onprint() {
    // This calls the function we exposed in preload.js
    window.electronAPI.printPrescription({
      silent: false, // Set to true for one-click printing
      printBackground: true, // IMPORTANT: This ensures your background images print!
      deviceName: '' // Leave empty for default printer
    })
  }


}
