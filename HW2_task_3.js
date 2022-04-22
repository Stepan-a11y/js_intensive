myIterable[Symbol.iterator] = function () {

    return {
        current: this.from,
        last: this.to,
        next: function () {
            if (typeof this.current !== "number" || typeof this.last !== "number" || this.last + 1 < this.current) {
                throw new Error("Ошибка!");
            } else {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }
}