/**
 * Function that checks if the total amount of products can fit in the container
 * @param products - object with products and their amounts
 * @param containerSize - number, the size of the container
 * @returns {boolean|string} - true if the total amount of products can fit in the container, false otherwise
 */
function isEnoughCapacity(products, containerSize) {
    if (typeof products !== 'object' || typeof containerSize !== 'number') {
        return 'Please enter valid data. First parameter should be an object, second parameter should be a number';
    }

    let total = 0;
    for (let key in products) {
        total += products[key];
    }

    return total <= containerSize;
}


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false