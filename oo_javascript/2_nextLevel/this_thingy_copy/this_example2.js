function hello() {
  console.log(this.name44);
  setTimeout(() => { console.log('using arrow ==> ', this.name44); }, 100);
  // because, we used function() in setTimeout, a new scope is created...
  setTimeout(function() { console.log('not using arrow ===> ', this); }, 100);
}

hello.call({name44: 'tom'});          // we are providing 'this' object to hello()