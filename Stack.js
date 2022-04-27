function Queue() {
    let collection = []

    this.push = function(element) {
        collection.push(element)
    }

    this.pop = function() {
        return collection.pop()
    }

    this.peek = function() {
        return collection[collection.length - 1]
    }

    this.size = function() {
        return collection.length
    }
}