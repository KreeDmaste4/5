
var first = +prompt('Введите превое число')
var second = +prompt('Введите второе число')
var thrid = +prompt('Введите третье число')

// > - больше < - меньше

if(first > second && first < thrid) {
    alert(first)
}else if (first < second && first > thrid){
    alert(first)
}else if (second > first && second < thrid){
    alert(second)
}else if (second < first && second > thrid){
    alert(second)
}else if (thrid < first && thrid > second){
    alert(thrid)
}else if (thrid > frisr && thrid < second){
    alert(thrid)
}