let s = "   fly me   to   the moon  ";

function lastWordLen(s){
    let arr=s.trim().split(" ");
    let lastWord=arr[arr.length-1]
    let length=lastWord.length;
    return length;
}

let result=lastWordLen(s);
console.log(result)