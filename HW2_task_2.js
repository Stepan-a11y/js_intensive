function selectFromInterval(arr, firstIntParam, secondIntParam) {
    let newArr = [];

    if (!Array.isArray(arr)) {
        throw new Error("Ошибка!");
    } else {
        for (let elem of arr)
            if (typeof elem !== "number") {
                throw new Error("Ошибка!");
            } else {
                if (firstIntParam <= elem && secondIntParam >= elem) {
                    newArr.push(elem);
                } else if (secondIntParam <= elem && firstIntParam >= elem) {
                    newArr.push(elem);
                }
            }
    }
    console.log(newArr);
}