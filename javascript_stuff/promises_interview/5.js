async function* range(start, end) {
    for (let i = start; i <= end; i++) {
          yield Promise.resolve(i);
    }
}

(async () => {
    const gen = range(1, 3);
    for await (const item of gen) {
          console.log(item);
    }
})();

// https://javascript.plainenglish.io/5-frontend-interview-questions-to-help-you-master-asynchronous-javascript-3339d0f89fdc    