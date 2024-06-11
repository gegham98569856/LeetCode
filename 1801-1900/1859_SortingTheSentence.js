//1859
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let arr = s.split(' ')
    let res = ''
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[j][arr[j].length - 1] < arr[min][arr[min].length - 1]){
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
        res = res + arr[i].slice(0, arr[i].length - 1) + ' '
    }
    res = res.slice(0, res.length - 1)
    return res
};

