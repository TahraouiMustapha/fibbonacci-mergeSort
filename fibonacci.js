
function fibs(iterateNum) {
    let arr = [];
    for(let i=0; i < iterateNum; i++) {
        if(i == 0  || i == 1) arr.push(i);
        else arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

// function to solve the problem recursively

function fibsRec(iterateNum) {
    let previous = iterateNum - 1;
    let previous2 = iterateNum - 2;
    if(iterateNum == 1) return [0];
    else if(iterateNum == 2) return fibsRec(previous).concat(1);
    return fibsRec(previous).concat(fibsRec(previous).pop() + fibsRec(previous2).pop());
}


