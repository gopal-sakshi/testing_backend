function hello() {
    setTimeout(function() {
      console.log(this.name);
    }, 100);
}
hello.call({name: 'tom'});