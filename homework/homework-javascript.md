## 문제 1

두 수 `x`, `y`를 입력받아 큰 수를 반환하는 함수(larger)를 작성하세요.

```js
function larger(x, y){
  if (x > y){
    return x;
  }
  else{
    return y;
  }
}

larger(4, 9);
```

## 문제 2

세 수 `x`, `y`, `z`를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수(isPositive)를 작성하세요.


```js
function isPositive(x, y, z){
  let multiply = x * y * z;
  if( multiply > 0 ){
    return true;
  }else if(multiply <= 0 ){
    return false;
  }else{
    throw new Error('입력값이 잘못되었습니다.');
  }
}

isPositive(1, 0, 2);
```


## 문제 3

어떤 숫자(num)가 짝수인지 홀수인지 출력하는 함수(printEvenOdd)를 작성하세요.


```js
function printEvenOdd(num){
  if(num%2 === 0){
    return "짝수";
  }else{
    return "홀수";
  }
}

printEvenOdd(5);
```

## 문제 3-1

문제 3번의 함수(printEvenOdd)를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 함수(printEvenOdd20)를 작성하세요.

호출 예시:

```js
function printEvenOdd20(){
  let num = 0;
  for ( i=1; i < 21; i++){
    num = i;
    if(num % 2 ===0){
      console.log(num + " : 짝수");
    }else{
      console.log(num + " : 홀수");
    }
  }
}


printEvenOdd20();
```
