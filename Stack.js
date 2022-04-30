function Stack() {
    this.elements = {};
    this.count = 0;

    this.push = function (item) {
        this.elements[this.count] = item;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) return undefined;
        this.count--;
        let res = this.elements[this.count];
        delete this.elements[this.count];
        return res;
    }

    this.length = function () {
        return this.count;
    }

    this.peek = function () {
        return this.elements[this.count - 1];
    }
}
