const numbers = [2, 6, 7, 8, 1];

//filter 함수를 이용하여 원하는 값 추출
const even1 = numbers.filter(function(x){
    if(x%2 == 0){
        console.log(x + 'is even!');
        return true;
    }
});

console.log('=================');


// function 대신 x => () 를 이용
const even2 = numbers.filter(x => {
    if(x%2 == 0){
        console.log(x + 'is even!');
        return true;
    }
});