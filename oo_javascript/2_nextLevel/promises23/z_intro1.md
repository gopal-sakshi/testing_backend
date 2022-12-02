<!-- passing callbacks into a function --> 
createAudioFileAsync(audioSettings, successCallback, failureCallback);

<!-- attach your callbacks --> 
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
--------------------------------------------------------------------------------------------------------------------------------------------

`Advantages`
- Chaining
    to execute two or more asynchronous operations back to back
    where each subsequent operation starts when the previous operation succeeds
- Nesting
    a nested catch only catches failures in its scope and below, 
    not errors higher up in the chain outside the nested scope. 
    When used correctly, this gives greater precision in error recovery:
- Chaining after a catch
    It's possible to chain after a failure, ie a catch, which is useful to accomplish new actions even after an action failed in the chain




`Terminology`
- floating promise ==> previous handler started a promise but did not return it, there's no way to track its settlement anymore
--------------------------------------------------------------------------------------------------------------------------------------------


a Promise can be in one of these 3 states
- pending 
- fulfilled
- rejected

settled =====> 
    if it is either fulfilled or rejected, but not pending.
resolved ====>
    the promise is settled or "locked-in" to match the eventual state of another promise, 
    and further resolving or rejecting it has no effect.


Promises have two possible mutually exclusive fates: 
- resolved
    A promise is resolved if trying to resolve or reject it has no effect
    the promise has been "locked in" to either follow another promise
    (or) the promise has been fulfilled or rejected.
- unresolved
    A promise is unresolved if it is not resolved
    if trying to resolve or reject it will have an impact on the promise.
- A promise can be "resolved to" 
    either a promise ============> it will store the promise for later unwrapping
    or thenable =================> it will store the thenable for later unwrapping; 
    or a non-promise value ======> in which case it is fulfilled with that value.
// https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

-----------------------------------------------------------------------------------------------------------------------------------

Promise.prototype.then()
Promise.prototype.catch()
Promise.prototype.finally()

- all three methods return promises
- so, they can be chained

