### 문제 7 

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.
```js
function primeNumber(num){
  // num이 2 미만이거나, 정수가 아닐때 false
  if (num < 2 || !(Number.isInteger(num)) ) throw new Error('2 이상의 정수를 입력해주세요 ')
  // 2부터 받은 숫자까지 나누어서 떨어지면 소수가 아님 출력
  // 나누어 떨어지지 않으면 소수임 출력
  for( let i = 2; i <= num; i++){
    if ( num === i){
      console.log(`${num} : 소수`)
      break;
    } else if ( num % i === 0 ){
      console.log(`${num} : 소수가 아닙니다`)
      break;
    }
  }
}

primeNumber(15)
primeNumber(7)
```



### 문제 9 

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

```js
function star(num){
  //console.log( '*'.repeat(num) ) // num의 갯수만큼 * 출력
  for ( let i = 0; i < num; i++){
    console.log( '* '.repeat(i+1) )
  }
}

star(5);
```



### 문제 10 

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

```js
function starRhombus(star){
  // num - i만큼 별별?
  for ( let i = 1; i <= star; i++){
    let space = star - i
    console.log( ' '.repeat(space) + '* '.repeat(i) )
  }
  for ( let i = (star-1); i > 0; i--){
    let space = star - i
    console.log( ' '.repeat(space) + '* '.repeat(i) )
  }
}


starRhombus(5)
```
