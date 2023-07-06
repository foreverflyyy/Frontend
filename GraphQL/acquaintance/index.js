/**
 * Написать функцию sostavChisla(massivChisel: number[], chislo: number),
 которая бы находила все возможные комбинации чисел из massivChisel,
 сумма которых равна chislo. При этом:
 1) massivChisel содержит, только уникальные положительные числа (> 0)
 2) в комбинации не должно быть повторений чисел
 3) все комбинации должны быть уникальными

 Для проверки работоспособности функции запустить runTests()

 @param massivChisel: number[]
 @param chislo: number[]
 @return Array<Array<number>>
 */
function sostavChisla(massivChisel, chislo) {

    const resultArray = [];
    const receivedArr = massivChisel.sort();

    for(let i = receivedArr.length - 1; i >= 0; i--){
        if(receivedArr[i] > chislo)
            continue;

        if(receivedArr[i] === chislo) {
            resultArray.push([receivedArr[i]]);
            continue;
        }

        let flag = false;

        do {
            let checkedNumbers = [receivedArr[i]];
            let summingNumber = receivedArr[i];

            for(let j = i - 1; j >= 0; j--){

                const newSum = summingNumber + receivedArr[j];

                if(i === j || newSum > chislo)
                    continue;

                checkedNumbers.push(receivedArr[j]);
                summingNumber += receivedArr[j];

                if(summingNumber === chislo) {
                    resultArray.push(checkedNumbers);
                    flag = true;
                    break;
                }
            }
        } while(flag)

        /*if(summingNumber === chislo){
            let flag = true;
            for(let subArr of resultArray){
                if(compareNumericArrays(subArr, checkedNumbers)){
                    flag = false;
                    break;
                }
            }

            if(flag)
                resultArray.push(checkedNumbers);
        }*/
    }

    return resultArray;
}

const obj = [
    {
        chislo: 8,
        massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
        result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
        chislo: 8,
        massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
        result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
        chislo: 15,
        massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
        result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
    },];

const num = 8;
const massivChisel = [1, 2, 3, 4, 5, 6, 7, 8];

const result = sostavChisla(massivChisel, num);
console.log(result);



// второй метод искать оставшиуся часть через find


// console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 99));

function compareNumericArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    arr1 = [...arr1].sort();
    arr2 = [...arr2].sort();

    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let el1 of arr1) {
        if(arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
            return false;
        }
    }

    return true;
}

//runTests();

function runTests() {
    const tests = [
        {
            chislo: 5,
            massivChisel: [8, 2, 3, 4, 6, 7, 1],
            result: [[2, 3], [4, 1]]
        },
        {
            chislo: 99,
            massivChisel: [8, 2, 3, 4, 6, 7, 1],
            result: []
        },
        {
            chislo: 8,
            massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
            result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
        },
        {
            chislo: 8,
            massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
            result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
        },
        {
            chislo: 15,
            massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
            result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
        },

    ];

    let errors = 0;
    for(const test of tests) {
        let result;
        try{
            result = sostavChisla(test.massivChisel, test.chislo);

            if(!compareArraysOfNumericArrays(
                result,
                test.result)
            ) {
                errors++;
                console.log('--------------------------------------------')
                console.log("failed for test", test, "Got result", result);
            }
        } catch(e) {
            errors++;
            console.log("failed for", test, 'exception', e.message);
        }
    }

    if(errors === 0) {
        console.log('checkStringForBracects test successfuly completed');
    } else {
        console.log(`checkStringForBracects test failed with ${errors} errors`);
    }
}

/*const resultArray = [];
const receivedArr = massivChisel.sort();

let fn = (a, n) => [...Array(2e3)]
    .map((x, q) => {
        //console.log("x, q:" + x + ", " + q);
        return a.filter((x, i) => q & 1 << i).sort();
    })
    .sort()
    .filter((x, i, a) => {
        console.log(`x: ${x}, i: ${i}, a: ${a}`)
        return x + "" != a[i - 1] & eval(x.join`+`) == n
    });

let arr1 = massivChisel

return fn([1, 2, 3, 4, 5, 6, 7, 8], 8);*/
