Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
        throw new Error("Пустое значение this!")
    }

    if (typeof callback !== "function") {
        throw new Error("Callback не является функцией")
    }

    let context = this;

    if (thisArg !== undefined) {
        context = thisArg;
    }

    let startArr = context;
    let finalArr = [];
    for (let i = 0; i < startArr.length; i++) {
        if (callback.call(context, startArr[i], i, startArr)) {
            finalArr.push(startArr[i]);
        }
    }
    return finalArr;
}
