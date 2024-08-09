promises don’t make JavaScript code execute in parallel and cannot be used to make CPU-bound tasks non-blocking.
see process24.js

localhost:3077/blocking in your browser
thats it CPU is locked
all subsequent requests localhost:3077/non-blocking MUST wait for 5,6 seconds till above request is done
we used promises; but alas... promises dont make JS run parallelly