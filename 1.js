"use strict"
/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        return 'Error: parameter is not a string type';
    }

    if (str.length === 0) {
        return '';
    }

    const firstUpperLetter = str[0].toUpperCase();
    return firstUpperLetter + str.slice(1);
}
//console.log(upperCaseFirst('pitter'));

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
