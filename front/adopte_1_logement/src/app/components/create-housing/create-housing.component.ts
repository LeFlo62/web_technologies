import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-housing',
  templateUrl: './create-housing.component.html',
  styleUrls: ['./create-housing.component.scss'],
  providers: []
})
export class CreateHousingComponent {

  uploadedFiles: File[] = [];
  images: string[] = [];

  createHousingFormData = new FormData();

  constructor() {}

  createHousingForm = new FormGroup({
    title: new FormControl('', Validators.required),
    housingDescription: new FormControl(''),
    services: new FormArray([
      new FormControl('')
    ]),
    constraints: new FormArray([
      new FormControl('')
    ])
  })

  // Service inputs
  get servicesArray(): FormArray {
    return this.createHousingForm.get('services') as FormArray;
  }

  addService() {
    const newService = new FormControl('');
    this.servicesArray.push(newService);
  }
  
  removeService(index: number) {
    this.servicesArray.removeAt(index);
  }

  // Constraint inputs
  get constraintsArray(): FormArray {
    return this.createHousingForm.get('constraints') as FormArray;
  }

  addConstraint() {
    const newConstraint = new FormControl('');
    this.constraintsArray.push(newConstraint);
  }
  
  removeConstraint(index: number) {
    this.constraintsArray.removeAt(index);
  }
  // Images
  onUpload(event: any) {
    const filesNumber = event.files.length
    for(let i=0; i<filesNumber; i++) {
      this.images.push(event.files[i]);
      this.createHousingFormData.append(`image_${i}`, event.files[i]);
    }
  }
  
  onSubmit(){
    
    console.warn(this.createHousingFormData);
  }
}
