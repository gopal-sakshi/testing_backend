var length = 4;
function callback() {
    console.log(this.length); // What is logged?
}
const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback, 1, 2);              // returns undefined in node
                                            // returns 4 in window

// https://dmitripavlutin.com/javascript-this-interview-questions/