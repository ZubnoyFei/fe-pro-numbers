/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
let minimalNumber = Math.min(minFirst,minSecond);
let maximalNumber = Math.max(maxFirst,maxSecond);
return minimalNumber * maximalNumber;
};

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    return 2 * Math.PI * radius;
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
   let numbers = "+1".padEnd(accuracy, "0");
   return Math.round(number * numbers)/numbers;
}


/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {
    if(number%2===0 ){
        return Math.floor(number)
    } else {
        return Math.ceil(number)
    }
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    from = Math.ceil(min);
    to = Math.floor(max);
    return Math.floor(Math.random() * (from - to + 1)) + to;
};
