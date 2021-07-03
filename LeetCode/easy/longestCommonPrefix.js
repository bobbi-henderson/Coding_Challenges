var longestCommonPrefix = function(strs) {
    let answer = ""
    for(let i=0; i<strs[0].length; i++){
        for(let k=1; k<strs.length; k++){
            if(strs[k][i]!==strs[0][i]){
                break
            } else if (k===strs.length-1){
                if(answer.length === i){
                    answer = answer + strs[0][i]
                }
            }
        }
    }
    if(strs.length===1){
        answer = strs[0]
    }
    return answer
};