# Observables

An observable is a data source, it could be several things, user input, http requests, rxjs

it is implementetd using patterns

you can think o it as a time line, it emmits, sends and reveive information, either by its own or by a user input

your code ill be te observer

we have 3 ways to handle information
 - handle data
 - handle error or 
 - handle completion

These ways are defined by the developer, given each case, we decide what to do with the response

Defining a custom observable:
```
/**
 * The custom observable is a simple counter it will return a 
 * number each 1000 milliseconds, when it reaches 4 will throw 
 * an error, if by any chance the error isn't thrown, it will 
 * complete at 5
 */

const customeIntervalObservable = Observable.create( observer => {
  let count = 0;
  setInterval ( () => {
    observer.next(count);
    if( count === 5 ) {
      observer.complete();
    }
    if( count > 3 ) {
      observer.error(new Error('Count is greater than 3'));
    }
    count++;
  }, 1000);
})
```

Not all the observables have to complete, like buttons, an user can click on a button several times, that observable doesn't require to complete buut an http request has to end once the response is processed.

Traditionally we use promisses or callbacks, an observable is a different way to handle asynchronously responses, not necesarily a better way, it is ust how Angular handles this kind of response.

Observables have a great advantage, which are operators

# Using Observables

Any component can use an observable, to do so, we have to subscribe to it. We have seen several cases before in the routing section.

when chhanging the routes and keepingg tabs on the id passed by the component to the url wew use subscribe with the parameters of such url.
we use the observables when we were monitoring the events emmited by the services. In all cases we had to code what happened with the given response or the observable
 
## Operators
Observables are used via subscriptions, on each subscriptor we can decide what to do with the response data but we can transform the result data to be whatever we want it to be, it is done via *operators* the function to use such operators is *pipe*

We could transform the result data changing directly the observable code but there are other onservables that we do not have acces to the code, in such cases, we use operators, there is where we define the customized data that is returned

Simply adding the pipe to our observable does not work, we have to use the pipe before the subscribe call, it means we have to define the pipe each time we use the operator if we want the same custom data in another place.

We can add as many operators as we want in the pipe functions, we just separate them with commas, see example below:

```
this.obsSubscription = customIntervalObservable
  .pipe(
    filter ( data => {
      return data > 0; //send only data > 0
    }),
    map ( (data: number) => {
      return 'Round: ' + (data + 1); // add Round word before the return number
    })
  )
  .subscribe( data => { // code executen on success state
      console.log(data);
    }, error => {       // code executed on error state
      console.log(error);
      alert(error.message);
    }, () => {          //code executed on complete state
      console.log('Completed!');
    }
  );

```

Visit [Academind - RxJs Tutorial](https://academind.com/tutorials/rxjs-6-what-changed/) or [Learn RxJs](https://www.learnrxjs.io/learn-rxjs/operators) for detail information about observables, operators and other useful RxJs functions.

# Subjects

A good way to communicate between components using services is EventEmitter, it allows us to subscribe to it and make our components react to changes in our services data.

We can replace them with a better approach, another type of observable which is *Subject*, replace our EventEmitter with subjects is fairly simple, just replace:

```
/*
  EventEmitter is from @angular/core
  Subject is from rxjs
*/

export class SomeService {
  ...
  someUserAction = new EventEmitter<boolean>(); => 
  someUserAction = new Subject<boolean>();
  ...
} 
```

To change the state of the subject we replace emit for next:
```
this.someUserAction.emit(true); => this.someUserAction.next(true);
```

The subscription remains unchanged.

Using Subjects instead of EventEmitters is the recommended way of passing messages or trigger events, they are more efficient behind the scenes, you can use operators to change the result data and they are very similar to the Observables.

Don't forget to unsubscribe from the subjects when you dont need them anymore, by rule if you use subscribe in a component, always add an object to store the subscription, assign the subject subscription to it, add the OnDestroy interface and the ngOnDestroy method definition to unsubscribe from the subscription object.

```
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'

export class CustomComponent implements OnInit, OnDestroy {
  ...
  private activeSubscription: Subscription; //from rxjs
  ...
  ngOnInit() {
    ...
    this.activeSubscription = this.someService.customSubject.subscribe( data => {
      // code to be executed on data changed
    });
    ...
  }
  ...
  ngOnDestroy(): void {
    this.activeSubscription.unsubscribe();
  }
```

## Note 
The subject is only when passing messages between components, when data is passed using @Output in the component the EventEmitter is the appropriate way to go


# Observable vs Subject

Both elements are similar but differ in a sense of that an observable is a passive listener and a subject is an active listener, ie, we have to define when to trigger the 'next' step, and such trigger can be called externally and from any component using the subject; observables on the other hand, use the next method too but it is used inside the observable definition and it can only be triggered from it like when an http request completes or any other asynch function defined/called in it.
