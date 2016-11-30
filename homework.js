/**
 * Created by Яна on 27.11.2016.
 */
function load_homework() {

    //Разобрать функции обхода матриц. (map, ever, some и т.п.).

    var arr = [1, 2, 3, 4, 5];

    console.log("forEach:");
    arr.forEach(function (item, i, arr) {
        console.log(i + ": " + item + " (массив:" + arr + ")");
    });

    var moreArr = arr.filter(function (number) {
        return number > 1;
    });
    console.log("Filter:" + moreArr);

    function more(number) {
        return number > 1;
    }

    console.log("Every:" + arr.every(more));
    console.log("Some:" + arr.some(more));

    var arr1 = ['qwerty', 'asd'];

    var nameLengths = arr1.map(function (name) {
        return name.length;
    });
    console.log("Map:" + nameLengths);

    var sumResult = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    console.log("Reduse:" + sumResult);

    // Сгенерировать массив случайных чисел типа integer, размером ‎1 000 000. Отсортироать его по возрастанию и по убыванию.
    // Найти сумму елементов. Вывести результат в консоль( 3 массива, сумма, время работы циклов сортировки и генерации).

    var rndArr = [];
    var timeStart = new Date() * 1000;
    for (var i = 0; i < 1000000; i++) {
        rndArr.push(Math.floor((Math.random() * 100000) + 1));
    }
    console.log("Массив Random:");
    console.log(rndArr);
    var timeEnd = new Date() * 1000;
    var timeResult = timeEnd - timeStart;
    console.log("Время:" + timeResult);

    timeStart = new Date() * 1000;
    function asc(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    rndArr.sort(asc);
    console.log("Массив по возростанию:");
    console.log(rndArr);
    timeEnd = new Date() * 1000;
    var timeResultAsc = timeEnd - timeStart;
    console.log("Время:" + timeResultAsc);

    timeStart = new Date() * 1000;
    function desc(a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
    }

    rndArr.sort(desc);
    console.log("Массив по убыванию:");
    console.log(rndArr);
    timeEnd = new Date() * 1000;
    var timeResultDesc = timeEnd - timeStart;
    console.log("Время:" + timeResultDesc);

    var sumResultArr = rndArr.reduce(function (sum, current) {
        return sum + current;
    });
    console.log("Сумма:" + sumResultArr);


    // На скрине дано 3 матрици. А - матрица рядов, Б матрица столбов, С матрица опорного плана( квадратная матрица).
    // Решить транспортную задачу на основе этих матриц методом Северо- Западного угла.

    var matrixA = [60, 80, 100];
    var matrixB = [40, 60, 80, 60];
    // var matrixC = [[1, 3, 4, 2], [4, 5, 8, 3], [2, 3, 6, 7]];

    var sumMatrixA = matrixA.reduce(function (sum, current) {
        return sum + current;
    });
    console.log("Сумма А:" + sumMatrixA);

    var sumMatrixB = matrixB.reduce(function (sum, current) {
        return sum + current;
    });
    console.log("Сумма B:" + sumMatrixB);

    if (sumMatrixB === sumMatrixA) {
        var matrix = [];
        for (var i = 0; i < matrixA.length; i++) {
            matrix[i] = [];
            var strRes = "| ";

            for (var j = 0; j < matrixB.length; j++) {
                matrix[i][j] = Math.min(matrixA[i], matrixB[j]);
                matrixA[i] -= matrix[i][j];
                matrixB[j] -= matrix[i][j];
                strRes += matrix[i][j]+ " ";
            }
            strRes += "|";
            console.log(strRes);
        }
       //console.log("Результат: " + matrix);
    }


}