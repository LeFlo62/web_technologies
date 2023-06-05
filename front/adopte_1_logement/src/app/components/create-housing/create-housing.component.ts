import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingService } from 'app/services/housing.service';

@Component({
  selector: 'app-create-housing',
  templateUrl: './create-housing.component.html',
  styleUrls: ['./create-housing.component.scss'],
  providers: []
})
export class CreateHousingComponent implements OnInit {
  userData: any;
  userId: string = '';
  uploadedFiles: File[] = [];
  images: string[] = [];

  createHousingFormData = new FormData();

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

  constructor(
    private housingService: HousingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const authUser: any = sessionStorage.getItem('auth-user')
    this.userData = JSON.parse(authUser);
    if(this.userData) {
      this.userId = this.userData.id;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

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

  // Upload images
  onUpload(event: any) {
    const filesNumber = event.files.length
    // Add images to formData
    for(let i=0; i<filesNumber; i++) {
      this.images.push(event.files[i]);
      this.createHousingFormData.append(`image_${i}`, event.files[i]);
    }
  }
  
  onSubmit(){
    // Add other values to formData
    Object.keys(this.createHousingForm.controls).forEach(controlName => {
      const control = this.createHousingForm.get(controlName);
      if (control) {
        this.createHousingFormData.append(controlName, control.value);
      }
    });
    // Send request to the back-end
    this.housingService.createHousing(this.createHousingFormData).subscribe({
      next: (res: any) => console.warn(res),
      error: () => 'Impossible to create a new housing'
    })
  }
}
