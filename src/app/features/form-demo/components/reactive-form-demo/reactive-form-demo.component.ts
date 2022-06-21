import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatePassword } from "./../../utils/password.validator";

@Component({
  selector: 'reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit{

  submitted = false;

  // City names
  cities: string[] = ['Gurgaon', 'Noida', 'Bangalore', 'Mumbai']

  constructor(
    public formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe(value => {
      console.log(value)
    })
  }


  registrationForm = this.formBuilder.group({
      firstName: ['Deepak', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['Dhull', [Validators.required]],
    email: ['d@a.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    address: this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cityName: ['', [Validators.required]]
    }),
    gender: ['male'],
    passwordGroup: this.formBuilder.group({
      password: ['', [Validators.required] ],
      confirmPassword: ['', Validators.required]
    }, {
      validator: ValidatePassword.MatchPassword,
      
    }),
    hobbies: this.formBuilder.array([])
  });


   // Getter method to access formcontrols
   get myForm() {
    return this.registrationForm.controls;
  }

  get addressForm() {
    return this.registrationForm.get('address');
  }

  get passWordGroupForm() {
    return this.registrationForm.get('passwordGroup');
  }
  
  // Choose city using select dropdown
  changeCity(e: any) {
    this.registrationForm.get('address.cityName')?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  /*############### Add Dynamic Elements ###############*/
  get Userhobbies() {
    return this.registrationForm.get('hobbies') as FormArray
  }

  addHobbies() {
    this.Userhobbies.push(this.formBuilder.control('Hobbie'))
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
    
    console.log(this.registrationForm)
    if(this.registrationForm.valid) {
      console.log(this.registrationForm.value)
    }
  }

}
