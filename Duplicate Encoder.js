function duplicateEncode(word){
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        for(let k = 0; k < word.length; k++) {
            if(word[i].toLowerCase() === word[k].toLowerCase()) { count++ }
        }
        if (count > 1) { arr.push(')')}
        else { arr.push('(')}
    } return arr.join('')
}