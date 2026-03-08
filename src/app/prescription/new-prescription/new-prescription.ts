import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-new-prescription',
  imports: [],
  templateUrl: './new-prescription.html',
  styleUrl: './new-prescription.css',
})
export class NewPrescription {

  hospitalName = signal('NAME OF THE HOSPITAL');
  doctorName = signal('John Killer');
  credentials = signal('M.B.B.S., M.S. (Ortho)');
  addressLine1 = signal('751 Victoria 123 Street, South Statue 204');
  addressLine2 = signal('Hometown, US 1234');
  phone = signal('(207) 808 2014 2014');
  fax = signal('(207) 808 2015 2202');
  email = signal('hospitalmail@mail.com');

}
