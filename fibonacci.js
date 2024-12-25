
function fibs(iterateNum) {
    let arr = [];
    for(let i=0; i < iterateNum; i++) {
        if(i == 0  || i == 1) arr.push(i);
        else arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

// function to solve the problem recursively
