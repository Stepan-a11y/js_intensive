class Calculator {
    constructor(...args) {
        if (typeof args[0] !== "number" || typeof args[1] !== "number" || args.length > 2) {
            throw new Error("Ошибка!")
        }
        this.num1 = args[0];
        this.num2 = args[1];
    }

    setX(number) {
        if (number === undefined || typeof number !== "number") {
            throw new Error("Ошибка!")
        }
        this.num1 = number;
    }

    setY(number) {
        if (number === undefined || typeof number !== "number") {
            throw new Error("Ошибка!")
        }
        this.num2 = number;
    }

    logSum() {
        console.log(this.num1 + this.num2)
    }

    logMul() {
        console.log(this.num1 * this.num2)
    }

    logSub() {
        console.log(this.num1 - this.num2)
    }

    logDiv() {
        if (this.num2 === 0) {
            throw new Error("Ошибка!")
        }
        console.log(this.num1 / this.num2)
    }
}