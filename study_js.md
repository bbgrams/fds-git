[https://helloworldjavascript.net/](https://helloworldjavascript.net/)

# 자바스크립트

## 1.1 코드의 실행
+ REPL (Read-Evaluate-Print-Loop) : 사용자의 입력을 읽어서 계산 한 후 출력하는 것을 반복
+ [repl.i](https://repl.it/repls/WorthyFussySystemcall)
- 실습이 가능한 페이지. 로그인 후 이용 가능. 실습했던 코드들을 저장 할 수 있고 공유도 가능.
- ctrl+enter로 RUN 가능


## 1.2 기본 문법
+ 대소문자의 구분 : 모든 부분에서 대소문자를 구분
+ 세미콜론(;)을 이용해서 각 구문을 구분.

```

const a=1;
const b=2;

```

+ 공백 : 공백의 수가 코드의 실행에 별 영향을 주지 않음.
+ 주석 : 부가적인 설명을 넣고 싶을 때 사용.

```

// 한 줄 주석
/* 여러 줄 주석 */
/*
여러 줄
주석
*/

```


## 1.3 값(value)과 그 리터럴(literal)
+ 프로그래밍은 근본적으로 값을 다루는 행위라 할 수 있음
- 값 : 메모리에 저장되는 것
- 리터럴 : 값을 프로그래밍 언어로 표현하려고 만든 것

```

1 // 정수
2.5 // 부동소수점 실수
'hello world' // 작은 따옴표 문자열(문자열 : string)
"JavaScript" // 큰 따옴표 문자열
true // 참임을 나타내는 진리 값
false // 거짓임을 나타내는 진리 값
null // '존재하지 않음' 을 나타내는 값
undefined // '정의된 적 없음'을 나타내는 값

```


## 1.4 값의 타입(type)
+ 자스에서는 모든 값이 타입(종류)가 있다.
 - typeof 연산자는 피연산자의 타입을 가리키는 문자열을 반환(1의 타입을 알 수 있는 함수)
 > 1+2, typeof 1
 - 연산자 : + - *  연산 기호, typeof도 포함
 - 피연산자 : 연산의 대상이 되는 값  1, 2
 
 ```
 
 typeof 1 // 'number'
typeof 2.5 // 'number'
typeof 'hello world' // 'string'
typeof true // 'boolean'
typeof null // 'object'
typeof undefined // 'undefined'
// 

```
