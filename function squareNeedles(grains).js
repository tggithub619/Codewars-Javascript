function squareNeeded(grains){
    let squares = 0;
    while (2**squares - 1 < grains){
        squares++;
    }
    return squares;
}

function squaresNeeded(grains){
    let countSq = 0;
    let sumOfGrains = 0;
    let grainsInSQ = 1;
    while (sumOfGrains < grains) {
        sumOfGrains += grainsInSQ;
        grainsInSQ *= 2;
        countSq++;
    }
    return countSq;
}
