# 2018-09-13 목요일 HTML 5일차

## 1. visual 영역 만들긩 

### background 삽입
- multi background : 먼저 선언한 bg image가 가장 가장 위로 깔린다.
- 순서가  중요*
- 그 순서에 따라reapeat도 설정된다.
- attachment : fix / 배경 고장
-  background : yellow url("images/bg_flower.png") no-repeat 50% 0 / 500px 200px fixed;
    * (yellow 배경색, bg_flower.png 배경이미지, 반복없음, 50% 위치 / 500px의 사이즈, fixed)
- background 대표속성으로 멀티 백그라운드를 주려면 색상을 설정하면 안된다.
    * 배경은 반드시 따로 설정해야함.( background 속성 다음에 설정 )
- background 대표속성(단축표기법)은 bg-color가 기본적으로 투명으로 설정되어있다.

### css animation
1. 시나리오 먼저 작성
    1. 애니메이션 이름 textAni
    1. 내가 이 애니메이션에 어떤 효과를 주고싶은지.
        1. 텍스트 이동 : 왼쪽상단(0,0) → 오른쪽 하단(400px, 75px) -  padding, p:a
        1. 텍스트 크기 : 12px → 24px -  font size OR transform scale(이번예제에서는 좋지않음)
        1. 텍스트 투명도 : 0.2 → 1  - color : rgba()
    1. @keyframes : 이제부터 애니메이션을 선언하겠다는
        1. from{} / 0%{} : 시작하는 선언 블록
        1. to{} / 100%{} : 종료하는 선언 블록 

1. animation과 transfore, scale, translate, rotate 를 이용하여 이동하는것이 성능상 좋다.


---
1. 꽃 시나리오
    1. 애니메이션 이름 flowerAni
    1. 애니메이션 반복 
        - animation-iteration-count : 숫자를 적으면 그 횟수만큼 동작한다. 또는 infinite
    1. 애니메이션의 진행 방향
        - animation-direction: alternate 역방향 

1. Animation  대표속성(단축표기법)
    1. 선언 순서는 상관없음
    1. 값과 값 상태를 띄어쓰기로 구분
    1. name, duration은 필수값
    1. duration 1s,  delay 1s로 둘다 똑같을때, duration은 필수값이기 때문에 먼저 선언된 (n)s를 duration으로 인식한다.
    1. ease in 느리게 빠르게
    1. ease out 바르게 느리게
    1. ease in out 느리게 빠르게 느리게

## Transition
1. 시작하는 박스에 설정
1. background, border-radius가 1단계적으로 바뀌는건 가능.
1. border-radius가 둥그랬다가 네모였다가 세모였다가....등등등 하는거는 transition으로 불가능. animation으로 가능
1. property에 all이라고 적으면 box1과 box1:hover에 적용되는 모든 변화가 선택된다.
1. `css shape 구글링`







# 2018-09-14 금요일 HTML 6일차

1. 로그인 `<section>`
    1. `<form>` 
        * form 태그는 필수속성이 있음.
            * `[action= "보낼 서버"], [method="GET", "POST"]`
        * `<form>` 태그 밑에는 필수로 `<fieldset>`을 데리고 다녀야함
        * div: 범용 그루핑태그, fieldset : 폼서식 전용 그루핑태그
        * 필수요소, 선택요소를 따로따로 fieldset으로 묶는다
        * `<fieldset>`으로 묶은 세트의 목적을 `<legend>`로 명시한다
    1. input과 label
        * input의 id값을 `for=""`에다가 넣으면 두개가 묶임
        * name 서버로 내용을 보낼 때, 데이터가 name="" 에 담겨서 전송된다. 
        * required : 필수 입력 서식일 경우 추가(아이디,비밀번호)
        * size : 20으로 설정하면 20글자만큼의 길이가 설정된다.


    1. button[type="submit"].btn-login


    1. .login 디자인
        1. .login(배경색-주황, 상자 그림자)
        1. .login-heading(글자색상, 글꼴굵기, 들여쓰기-10px)
        1. .login-form(margin-10px, 둥근모서리-5px, 배경색-white, padding-10px, )
        1. .user-id, .user-pw
            * label : (font-size:4em) 최대 글자가 4글자이기때문에 4em으로 설정한다.
            * input : w-100px, h-22px
        1. 


        * radial-gradient(circle at left top) : 원형그라디언트 왼쪽에서 위로


1. dl dt dd : 용어 정의 태그
    1. 이름과 값이 있는 정보
    1. dt : title
    1. dd : 설명
    1. dl 내부의 태그들을 div로 묶을 수는 있지만 연관된 정보가 있는 세트만 묶을 수 있다.
    




[폼 액션 서버url 테스트](https://formspree.io/)