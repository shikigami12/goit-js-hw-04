/**
 * Function that calculates average calories consumed per day
 * @param days - array of objects with days and calories
 * @returns {number|string} - average calories consumed per day, 0 if array is empty
 */
function calcAverageCalories(days) {
    if (!Array.isArray(days) || days.length === 0) {
        return 0;
    }

    if (days.some(day => typeof day !== 'object' || !day.hasOwnProperty('calories'))) {
        throw new Error('Please enter valid data. Array should contain objects with "calories" property');
    }

    const records = days.length;
    let total = 0;
    for (let i = 0; i < records; i++) {
        total += days[i].calories;
    }

    return Math.round(total / records);
}


console.log(
    calcAverageCalories([
        {day: "monday", calories: 3010},
        {day: "tuesday", calories: 3200},
        {day: "wednesday", calories: 3120},
        {day: "thursday", calories: 2900},
        {day: "friday", calories: 3450},
        {day: "saturday", calories: 3280},
        {day: "sunday", calories: 3300}
    ])
); // 3180

console.log(
    calcAverageCalories([
        {day: "monday", calories: 2040},
        {day: "tuesday", calories: 2270},
        {day: "wednesday", calories: 2420},
        {day: "thursday", calories: 1900},
        {day: "friday", calories: 2370},
        {day: "saturday", calories: 2280},
        {day: "sunday", calories: 2610}
    ])
); // 2270

console.log(
    calcAverageCalories([])
); // 0