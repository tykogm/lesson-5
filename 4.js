"use strict"
/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение
function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        return 'Error: parameter is not a string type';
    }
    if (source.length<2) {
        return 'Error: string is wrong';
    }

    const numberStr = source.slice(1);
    const number = Number(numberStr);
    if (number !== number) {//checking NaN
        return 'Error: string is wrong';
    }
    return Number(numberStr);
}
//console.log(extractCurrencyValue('$err'));

extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;