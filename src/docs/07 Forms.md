# Forms

Working with forms in Angular is not the same as a regular app, we're not submitting the data to a server right away, we're handling the form and then we use another service from angular to get the information preserved. Angular will help us to validate the form and the data in it.

Here we'll understand what Angular does and why

# Handling forms

Angular provides 2 ways of handle the forms Template Driven (TD) and Reactive

## 1. Template Driven (TD)
The form is created by a template and Angular infers the form object from it

To use this approach we need to make sure the *FormsModule* is in the imports list, with the import Angular will create the form for you when the form tag is detected. Angular will not detect the input fields either classic or custom automatically, to let angular know there's a field we have to add to it the ngModel attribute which is part of the _FormsModule_

app-form.component.html.
```
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <input
      type="text"
      name="username"
      id="username"
      class="form-control"
      ngModel
  />
  <input
      type="email"
      name="email"
      id="email"
      class="form-control"
      ngModel
  />
  <select
      id="secret"
      name="secret"
      class="form-control"
      ngModel>
      <option value="pet">Your first pet</option>
      <option value="teacher">Your first teacher</option>
  </select>
  <button type="submit" *ngIf="!f.valid">
</form>
```

app-form.component.ts
```
import { Component } from '@angular/core';
import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent {
  suggestUsername() {
    const suggestedUsername = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
```
To submit the form, ngSubmit is needed and a function has to be assigned to it, in that function we'll validate and then process the data.

We can assign the form to any variable to refer the object and use it inside the html code by using the #, but the form is a special object and it requires that the ngForm object to be assigned to the variable to pass the from object to the submit function.

The NgForm object helps us by giving us a lot of ootb properties that we can use to validate and process the form data

Another way to access the form data/properties is via ViewChild

app-form.component.ts
```
import { Component } from '@angular/core';
import { ngForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent {
  @ViewChild('f') signUpForm: NgForm;

  suggestUsername() {
    const suggestedUsername = 'Superuser';
  }

  onSubmit() {
    console.log(this.singUpForm);
  }
}
```

It is the same as passing the form as parameter to the onSubmit function, this works if we want to have the form state not only in the submit function but in other part of the component, we'll use this approach later in the course.

### Grouping form control
We can also divide the form into groups by adding a wrapping tag (div, span, etc) to the fileds we want to group, then we assign either a form variable with # and then assign the ngModelGroup directive to it or directly setting the ngModelGroup attribute to that variable

### Radio buttons

Typescript
```
const genders: String[] = ['male', 'female'];
```
HTML
```
<div class="radio" *ngFor="let elem of genders">
  <label>
    <input
        type="radio"
        name="gender"
        ngModel
        [value]="elem">
    {{ elem }}
  </label>
</div>
```

### Set and Patch form values
There are 2 ways to set the values on a form:

- Set: Using our ViewChild object signup we can access to the entire form by using: `this.signUpForm.setValue()` but using this approach means we have to manually set the value of all the fields in the form, following the form tree, meaning if we have groups or any other field division we have to provide field complete path to set the values.
  ```
  this.signUpForm.setValue({
    field1: 'value',
    group1: {
      groupField1: 'value',
      ...
      groupFieldN: 'value'
    },
    ...
    fieldN: 'value'
  })
  ```
- Patch: We use the ViewChild approach but instead we use now `this.signUpForm.form.patchValue()` but in this case we only give the path for the field and its value like this:
  ```
  this.signUpForm.form.patchValue({
    groupX: {
      groupFieldY: 'value'
    },
    fieldW: 'value'
  })
  ```

### Using the form data
Now that we have seen all the properties and advantages of using a form we need to know how to access the data in such forms. Using the data is not complicated it is just a matter of knowing where it is stored. Given the form in our app-form.component.html, we use the data as follow:

Typescript
```
...
@ViewChild('f') signUpForm: NgForm;
user = {
  username: '',
  email: '',
  secretQuestion: '',
  gender: ''
}
...
onSubmit() {
  this.user.username = this.signUpForm.value.username;
  ...
  this.gender = this.signUpForm.value.gender;
}
```
If it were the case that the field is inside a ngModelGroup, we simply add the group object name before the fieldname.

### Resetting the form
We have 2 ways of resetting the form values, the simplest is to use: `this.signUpForm.reset()` and the other way is passing the a form object containing all of the field values with their respective paths, this is used when we want to reset the form to specific, predefined or custom values.


## 2. Reactive
The form is created programmatically and then it is synschronized with the DOM.

We need to define our Form variable of type FormGroup (from @angular/forms), we also need to add the FormReactiveModule in our app definition.

On the init method we'll initialize the form to make sure we define the form before render the html. The elements are just key-value pairs that we define as follow:

```
export class FormComponent implements OnInit {
  ...
  signUpForm: FormGroup
  ...

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormGroup(null),
      'email': new FormGroup(null),
      'gender': new FormGroup('male');
    })
  }
}
```

Still we require the html form be present in the html to link the object from the script and then add the proper validators and other functionality to the form.

# Form validators

Angular provides us with several form validators, to know the entire list of validators visit the angular [documentation](https://angular.io/api/forms/Validators)

## Providing feedback about errors to users as they type

A good way to provide feedback about the field the user is typing is by adding error messages or changing the field color. This can be achieved by adding custom style for ng-invalid, ng-dirty and/or ng-touched classes, we can also use a similar approach taken in the form tag, it is adding a # to a fieldname and assign the ngModel value, it will provide a way to identify the field and output error messages:

app-form.component.html.
```
<form (ngSubmit)="onSubmit()" #f="ngForm">
  <input
      type="text"
      name="username"
      id="username"
      class="form-control"
      ngModel
      required
  />
  <input
      type="email"
      name="email"
      id="email"
      class="form-control"
      ngModel
      required
      #email="ngModel"
  />
  <span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email</span>
  <select
      id="secret"
      name="secret"
      class="form-control"
      ngModel>
      <option value="pet">Your first pet</option>
      <option value="teacher">Your first teacher</option>
  </select>
  <button type="submit">
</form>
```

## Using default values for the form fields

To do this we use one way binding on the form fields, to do this we add [] to the ngModel property and assign a predefined value to the field

app-form.component.ts
```
...
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion: String = "pet";
...
```
app-form.component.html
```
...
  <select
      id="secret"
      name="secret"
      class="form-control"
      [ngModel]="defaultQuestion">
      <option value="pet">Your first pet</option>
      <option value="teacher">Your first teacher</option>
  </select>
...
```
We can also use 2 way binding to react to form field changes, to do that we use _([ngModel])_ and then assign the variable we defined in the component typescript definition
