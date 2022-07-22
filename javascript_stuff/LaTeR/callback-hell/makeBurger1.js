const makeBurger = nextStep => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(function (buns) {
                putBeefBetweenBuns(buns, beef, function (burger) {
                    nextStep(burger)
                })
            })
        })
    })
}

// Make and serve the burger
makeBurger((burger) => {
    serve(burger);
});

// https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/