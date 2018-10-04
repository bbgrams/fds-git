### 문제 11 (과제@) 

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
function longestWordArr(input){
  const splitted = input.split(' ');
  splitted.sort((x,y) => y.length - x.length )
  return splitted[0]
}
longestWordArr('ediya starbucks hello javascript')
```

### 문제 12 (과제@)

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.
```js
function returnNewStr(s, n){
  return s.slice(0, n)
}
returnNewStr('samsung', 5)
```


### 문제 13 (과제@)

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
```js
function changeSnakeCase(input){
  let memory = '';
  for(let i = 0; i < input.length; i++){
    const camelCase = input[i]
    //input[i]의 대문자화가 대문자랑 같다면 '_' + input[i].toLowerCase 
    if( camelCase.toUpperCase() === camelCase){
      memory = memory + '_' + camelCase.toLowerCase()
    }else{
      memory += camelCase
    }
  }
  return memory
}
changeSnakeCase('asSoonAsPossible')
```

### 문제 15 (과제@)

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```
```js
function split(str, sec){
  let arr = [];
  let start = 0;
// sec와 같은 문자를 찾아서 분리한다.
  for ( let i = 0; i < str.length; i++){
    // 만약 str[i]= sec 이라면 슬라이스.
    if ( str[i] === sec ){
      arr.push(str.slice(start, i))
      start = i + 1;
    }else if( i === str.length - 1){
      arr.push(str.slice(start, i + 1))
    } else continue
  }
  return arr
}
split('As soon as possible', ' ')
```
