
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
    console.log("This was printed recursively");
    let previous = iterateNum - 1;
    let previous2 = iterateNum - 2;
    if(iterateNum == 1) return [0];
    else if(iterateNum == 2) return [0,1];
    let arr = fibsRec(previous);
    return arr.concat(arr.slice(-1)[0] + fibsRec(previous2).slice(-1)[0]);
}

