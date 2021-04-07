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

Not all the observables have to complete, like buttons, an user can click on a button several times, that observable doesn't require to complete buut an http request has to end once the response is processed.

Traditionally we use promisses or callbacks, an observable is a different way to handle asynchronously responses, not necesarily a better way, it is ust how Angular handles this kind of response.

Observables have a rgeat advantage, which are operators

# Using Observables

Any component can use an observable, to do so, we have to subscribe to it. We have seen several cases before in the routing section.

when chhanging the routes and keepingg tabs on the id passed by the component to the url wew use subscribe with the parameters of such url.
we use the observables when we were monitoring the events emmited by the services. In all cases we had to code what happened with the given response or the observable
