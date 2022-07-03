'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const len = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let pos_ratio = 0;
    let neg_ratio = 0;
    let zero_ratio = 0;

    for (let i = 0; i < len; i++)
    {   
        if (Math.sign(arr[i]) == 1)
        {
            pos++;
            continue;
        }
        if (Math.sign(arr[i]) == -1)
        {
            neg++;
            continue;
        }
        if (Math.sign(arr[i]) == 0)
        {
            zero++;
            continue;
        }
    }
    
    if (pos > 0)
    {
        let tmp = pos / len;
        pos_ratio = tmp.toFixed(6);
    }
    
    if (neg > 0)
    {
        let tmp = neg / len;
        neg_ratio = tmp.toFixed(6);    
    }
    if (zero > 0)
    {
        let tmp = zero / len;
        zero_ratio = tmp.toFixed(6);
    }
    
    console.log(pos_ratio);
    console.log(neg_ratio);
    console.log(zero_ratio);
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

