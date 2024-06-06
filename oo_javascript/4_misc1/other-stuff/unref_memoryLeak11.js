var formatBytes = function(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return (bytes / Math.pow(1024, i)).toFixed(1) + sizes[i]
};

setInterval(function() {
    var mem = process.memoryUsage();
    console.log('rss:', formatBytes(mem.rss), 'heapTotal:', formatBytes(mem.heapTotal), 'heapUsed:', formatBytes(mem.heapUsed));
}, 1000);

var method = function() {
    var tmr = setTimeout(function() { method() }, 0);
    if (process.argv[2] == '--unref') tmr.unref();
};

method();