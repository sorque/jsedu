let count = {
    number: prompt('Нужно ввести число от 0 до 999'),
    единицы: 0,
    десятки: 0,
    сотни: 0,
};

if ((count.number <= 999) && (count.number >= 0)){
    count.единицы = Math.floor(count.number % 10);
    count.десятки = Math.floor(count.number / 10 % 10);
    count.сотни = Math.floor(count.number / 100 % 10);
} else {
    count.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(count);