<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“Javascript 기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>JavaScript는 cross-platform, object-oriented scripting language 입니다.</p>
          <p>JavaScript는 standard library of objects(Date, Math 등)이 포함되어 있으며, 연산자, 제어 구조 및 명령문과 같은 핵심 언어 요소 집합이 포함되어 있습니다.</p>
          <p>표준화된 서비스를 제공하기 위하여, ECMAScript라고 하는 이 표준화된 JavaScript 로 애플리케이션에서 동일한 방식으로 동작됩니다. 이 ECMA에 관한 상세 내용은 이후에 상세하게 정리합니다.</p>
          <p>그러면 이제 아래에 있는 console.log("Hello, world!")를 console.log("hello, world!")로 바꾸신 뒤 '입력 스크립트 Run' 버튼을 눌러주세요.</p>
          <CodeMirrorComponent :code="codeMirrorList[0].code" />
        </div>
        <div class="desc mt--45 mb--50">
          <p>JavaScript의 기본 문법과 변수 선언, 자료형 및 리터럴</p>
          <p class="inner-blog-text-10"><li>기본</li></p>
          <p class="inner-blog-text-30">JavaScript는 대소문자를 구별하며 유니코드 문자셋을 이용합니다. 예를 들면, Früh(독일어로 "이른")을 변수명으로 사용할 수도 있습니다.</p>
          <p class="inner-blog-text-30">JavaScript에서는 명령을 명령문(statement) (en-US)이라고 부르며, 세미콜론(;)으로 구분합니다. 명령문이 한 줄을 다 차지할 경우에는 세미콜론이 필요하지 않습니다. 그러나 한 줄에 두 개 이상의 명령문이 필요하다면 반드시 세미콜론으로 구분해야 합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[1].code" />
          <p class="inner-blog-text-10"><li>선언</li></p>
          <p class="inner-blog-text-30">JavaScript의 선언에는 3가지 방법이 있습니다.</p>
          <p class="inner-blog-text-50">var : 변수를 선언. 추가로 동시에 값을 초기화.</p>
          <p class="inner-blog-text-50">let : 블록 스코프 지역 변수를 선언. 추가로 동시에 값을 초기화.</p>
          <p class="inner-blog-text-50">const : 블록 스코프 읽기 전용 상수를 선언.</p>
          <p class="inner-blog-text-30"><li>변수</li></p>
          <p class="inner-blog-text-50">애플리케이션에서 값에 상징적인 이름으로 변수를 사용합니다. 변수명은 식별자(identifiers)라고 불리며 특정 규칙을 따릅니다.</p>
          <p class="inner-blog-text-50">JavaScript 식별자는 문자, 밑줄 (_) 혹은 달러 기호 ($)로 시작해야 하는 반면 이후는 숫자 (0–9) 일 수도 있습니다.</p>
          <p class="inner-blog-text-50">JavaScript가 대소문자를 구분하기에, 문자는 "A"부터 "Z" (대문자)와 "a"부터 "z" (소문자)까지 모두 포함합니다.</p>
          <p class="inner-blog-text-30"><li>변수 선언</li></p>
          <p class="inner-blog-text-50"><code>var x = 42</code>와 같이 var 키워드로 변수를 선언할 수 있습니다. 이 구문은 실행 맥락에 따라 지역 및 전역 변수를 선언하는데 모두 사용될 수 있습니다.</p>
          <p class="inner-blog-text-50"><code>let y = 13</code>와 같이 const 혹은 let 키워드로 변수를 선언할 수 있습니다. 이 구문은 블록 스코프 지역 변수를 선언하는데 사용될 수 있습니다. 아래 변수 스코프를 참고하세요.</p>
          <p class="inner-blog-text-30"><li>변수 할당</li></p>
          <p class="inner-blog-text-50">지정된 초기 값 없이 var 혹은 let 문을 사용해서 선언된 변수는 undefined 값을 갖습니다.</p>
          <p class="inner-blog-text-50">선언되지 않은 변수에 접근을 시도하는 경우 ReferenceError 예외가 발생합니다.</p>
          <p class="inner-blog-text-50">undefined 값은 불리언 맥락(context)에서 사용될 때 false로 동작합니다.</p>
          <p class="inner-blog-text-50">undefined 값은 수치 맥락에서 사용될 때 NaN으로 변환됩니다.</p>
          <p class="inner-blog-text-50">null 값을 평가할 때, 수치 맥락에서는 0으로, 불리언 맥락에서는 false로 동작합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[2].code" />
          <p class="inner-blog-text-30">변수 스코프</p>
          <p class="inner-blog-text-50">어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다.</p>
          <p class="inner-blog-text-50">ECMAScript 2015 이전의 JavaScript는 블록 문 스코프가 없습니다. 그래서 오히려, 블록 내에 선언된 변수는 그 블록 내에 존재하는 함수(혹은 전역 스코프)에 지역적입니다.</p>
          <p class="inner-blog-text-50">예를 들어서 아래의 코드는 5라는 로그가 남는데. x의 스코프가 전역 맥락 (혹은 코드가 함수의 일부분이라면 함수 맥락)이기 때문입니다. x의 스코프는 if문 블록에 제한되지 않습니다.</p>
          <pre>
            if (true) {
              var x = 5;
            }
            console.log(x); // 5
          </pre>
          <p class="inner-blog-text-50">let 선언을 사용하면 아래와 같이 지역 변수와 같이 사용가능합니다.</p>
          <pre>
            if (true) {
              let y = 5;
            }
            console.log(y); // ReferenceError: y is not defined
          </pre>
          <p class="inner-blog-text-30">변수 호이스팅(Hoisting)</p>
          <p class="inner-blog-text-50">자바스크립트 함수는 실행되기 전 함수 안에 필요한 변수값들을 모두 모아서 유효 범위{} 의 최상단에 선언하는 개념입니다.</p>
          <p class="inner-blog-text-50">var 변수는 끌어올려지지만, 할당되는 부분은 끌어 올려지지 않습니다. let/const 변수는 호이스팅이 발생되지 않습니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[3].code" />

          <pre>
            /* 함수 선언 */
            foo(); // "bar"
            function foo() {
              console.log('bar');
            }
            /* 함수 표현식 */
            baz(); // TypeError: baz is not a function
            var baz = function() {
              console.log('bar2');
            };
          </pre>
          <p class="inner-blog-text-30">상수</p>
          <p class="inner-blog-text-50">const 키워드로 읽기 전용 상수를 만들 수 있습니다. 스코프 규칙은 let 블록 스코프 변수와 동일합니다.</p>
          <p class="inner-blog-text-10"><li>데이터 구조 및 형</li></p>
          <p class="inner-blog-text-30">최신 ECMAScript 표준은 8가지 데이터 형(7개의 Primitive와 Object)을 정의합니다.</p>
          <p class="inner-blog-text-50">Boolean. true와 false</p>
          <p class="inner-blog-text-50">null. null 값을 나타내는 특별한 키워드. (JavaScript는 대소문자를 구분하므로, null은 Null, NULL 혹은 다른 변형과도 다릅니다.)</p>
          <p class="inner-blog-text-50">undefined. 값이 정의되어 있지 않은 최상위 속성.</p>
          <p class="inner-blog-text-50">Number (en-US). 정수 또는 실수형 숫자. 예: 42 혹은 3.14159.</p>
          <p class="inner-blog-text-50">BigInt (en-US). 임의 정밀도의 정수. 예: 9007199254740992n.</p>
          <p class="inner-blog-text-50">String. 문자열. 예:"안녕"</p>
          <p class="inner-blog-text-50">Symbol. (ECMAScript 2015에 도입) 인스턴스가 고유하고 불변인 데이터 형.</p>
          <p class="inner-blog-text-30">자료형_변환</p>
          <p class="inner-blog-text-50">JavaScript는 동적 형지정(정형) 언어입니다. 이는 변수를 선언할 때 데이터 형을 지정할 필요가 없음을 의미합니다. 또한 데이터 형이 스크립트 실행 도중 필요에 의해 자동으로 변환됨을 뜻합니다.</p>
          <p class="inner-blog-text-30">숫자와 '+' 연산자</p>
          <p class="inner-blog-text-50">숫자와 문자열 값 사이에 + 연산자를 포함한 식이라면, 숫자 값을 문자열로 변환합니다.</p>
          <p class="inner-blog-text-30">리터럴</p>
          <p class="inner-blog-text-50">데이터를 선언하는 방식을 말합니다. 선언 시 지정된 형식으로 할당해주면, 따로 지정하지 않아도 데이터 type를 지정해주는 것 입니다.</p>

        </div>
    </div>


    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide">https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide</a>
      <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_Types#%EA%B8%B0%EB%B3%B8">https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_Types#%EA%B8%B0%EB%B3%B8</a>
      <a href="https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html">https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html</a>
    </div>
  </div>
</template>

<script>
  import MirrorConsole from 'codemirror-console';
  import CodeMirrorComponent from '/components/CodeMirrorComponent'
    export default {
        name: 'JS',
        components: {
          CodeMirrorComponent
        },
        data () {
            return {
              codeMirrorList: [
                {
                  code : `console.log("Hello, world!")`
                },
                {
                  code :
                    `var 갑을 = "병정";\nvar Früh = "foobar";\nconsole.log("갑을", 갑을);\nconsole.log("Früh", Früh);`
                },
                {
                  code :
                  `var a;\nconsole.log(!a);\nvar b;\nconsole.log(b+2);\nvar c = null;\nconsole.log(c*24)`
                },
                {
                  code :
                  '// var v;\nconsole.log(`v가 선언 되었습니다. v :  ${v}`);\nvar v = "Hello Var";\nconsole.log(`가 할당되었습니다. v : ${v}`);\nlet l = "Hello Let";\nconsole.log(`l가 선언/할당 되었습니다. l :${l}`);'
                }
              ],
            }
        },

        mounted () {
        },
        methods: {
        },
    };
</script>
