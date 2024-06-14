var iter = 3e6;

(function runner() {
    if (--iter < 0)
        return;
    setTimeout(function () { }, 0).unref();
    setImmediate(runner);
}());