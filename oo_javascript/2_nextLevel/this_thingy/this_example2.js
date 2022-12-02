function hello() {
    setTimeout(() => {
      console.log('using arrow ==> ', this.name44);
    }, 100);
    setTimeout(function() {                                         // because, we used function() in setTimeout, a new scope is created...
      console.log('not using arrow ===> ', this.name44);
    }, 100);
}
hello.call({name44: 'tom'});          // we are providing 'this' object to hello()