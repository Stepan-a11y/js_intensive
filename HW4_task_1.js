function createDebounceFunction(callback, timeDelay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeDelay);
    };
} 