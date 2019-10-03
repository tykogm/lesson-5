"use strict"
/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source, example) {
    if (typeof source !== 'string') {
        return 'Error: first parameter is not a string type';
    }
    if (typeof example !== 'string') {
        return 'Error: second parameter is not a string type';
    }
    if (!example.length || !source.length) {
        return false;
    }

    const lowerCareSource = source.toLowerCase();
    const lowerCareExample = example.toLowerCase();
    return lowerCareSource.indexOf(lowerCareExample) !== -1;
}
//console.log(checkSpam('', ''));

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
