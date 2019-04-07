var str = '33721'; 
var arr = str.split(''); //Разбитие числа в массив
    let summ = 1;
    for(let x = 0; x < str.length; x++){ //умножение всех чисел числа
        summ = str[x] * summ;
    }
    summ = summ * summ * summ; //третья степень
console.log(summ);
