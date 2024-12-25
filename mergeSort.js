
function mergeSort(arr) {
    if(arr.length == 1) return arr;
    let middleIndex = Math.floor(arr.length / 2);
    let firstOne = mergeSort(arr.slice(0, middleIndex));
    let secondOne = mergeSort(arr.slice(middleIndex));
    return merge(firstOne, secondOne);
}

function merge(arr1, arr2) {
    let arr = [];
    let i = 0, j = 0;
    while(arr.length < arr1.length + arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i += 1;
            i >= arr1.length ? arr.push(...arr2.slice(j)): null ;
        } else {
            arr.push(arr2[j]);
            j += 1;
            j >= arr2.length ? arr.push(...arr1.slice(i)): null ; 
        }
    } 
    return arr;
}


