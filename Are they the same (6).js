function comp(array1, array2){
    if (array1 == null || array2 == null) {
        return false;
    }
    aSorted = array1.sort((a,b) =>  a - b);
    bSorted = array2.sort((a,b) =>  a - b);

    aSquared = array1.map((x) =>  x * x).sort((a, b) => a - b);

    return bSorted.toString() == aSquared.toString()
}