# Data Binding

Angular provides 4 types of data binding and they are all surrounded by [ ], ( ) or {{ }} depending on the type:

### Property binding
  We use it when we are passing data to the component as an attribute to the tag, when we call the component tag we simply add the property that we want to initialize with the expression that we want it to be set.

  <b>Everything inside the quotes after the initialization is an expression or a variable coming from the component, if we need to pass a string it has to be inside single quotes</b>

  See app.component.html app-persons component initialization: 
  ```
  app-persons [personsList]="persons"></app-persons>
  ```
  
  In this case personsList is the property we want to initialize and persons is the variable we want to pass as value, both properties must be of the same type, in this case string arrays.

### Event binding
 We use it when we define the component template to assign functionality to an element.

 See person-input.component.html button tag:
 ```
 <button type="button" (click)="onCreatePerson()">Create</button>
 ```

 In this case, we are binding the clic event to thhe onCreatePerson function in the component logic (person-input.component.ts) PersonInputComponent class.

### String interpolation
 We use it anyywhere wher we want to display a property value or an expression result.

 See person.component.html list element iteration:
 ```
 <li *ngFor="let person of personsList">{{ person }}</li>
 ```

 In thihs case, we are iterating through the personsList array and we are defining eachh element as person, so that value is the one we want to show as thhe list element text.

### 2 way binding
 We use it with form input elements to get its value and also write the value from the component logic.

 See person-input.component.html input field definition:
 ```
 <input type="text" id="name" [(ngModel)]="enteredPersonName" >
 ```

 We need to add the FormsModule import from the core angular library in the main app module to inject the ngModel event into all of our components
  

# Passing data to other components (Defining custom events)

  To pass any input field or property value to another component, it is needed to include the Output and EventEmitter modules from angular core to our broadcasting component

  To use them we need the following syntax:
  ```
  @Output() createPerson = new EventEmitter<string>();
  ```

  We define a property of 'type' @Output and initialize it as a new EventEmitter of type string in this particular case (it can be any native or custom type)

  Then we bind this property to the parent component as an event in the html template
  ```
  <app-person-input (createPerson)="onPersonCreated($event)"></app-person-input>
  ```

  Using the `$event` parameter is crucial as it will be used to link the property value and the event function.

  Finally, we just define the function for the event and receive the data as parameter:
  ```
  onPersonCreated(name: string) { this.persons.push(name); }
  ```

  Done. In this way we have successfuly passed the data from the persons-input component input field to the parent component and we've used such value.
