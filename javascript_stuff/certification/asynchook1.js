// init async hook
function init(asyncId, type, triggerAsyncId, resource) {
    debug(asyncId)
}
// two functions with async/await
const computeAnswer = async () => { return 123 };

(async () => {
    const result = await computeAnswer();
    console.log(result);
})();