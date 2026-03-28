function massive(arr) {
    var max = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log("Максимальное значение в массиве: " + massive([1, 5, 23, 10]))
console.log("Максимальное значение в массиве: " + massive([100, 2, 45, 8]))
console.log("Максимальное значение в массиве: " + massive([7, 12, 0, 3]))
console.log("Максимальное значение в массиве: " + massive([55, 11, 99, 4]))
console.log("Максимальное значение в массиве: " + massive([33, 66, 22, 11]))