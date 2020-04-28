function squareNeeded(grains){
    let squares = 0 ;
    while (2**squares - 1 < grains){
        squares++;
    }
    return squares;
}