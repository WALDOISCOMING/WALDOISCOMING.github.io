<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“Javascript ECMA기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>ECMA 란</p>
          <p class="inner-blog-text-10">ECMA International에 의해 제정된 ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어입니다. 스크립트 언어들이 모두 호환되도록 만들어진 표준화된 스펙입니다.</p>
          <p class="inner-blog-text-10">ECMAScript는 프로그래밍 언어의 값, 타입, 객체와 프로퍼티, 함수, 표준 빌트인 객체 등 핵심 문법을 규정합니다. 브라우저에서는 ECMASscript를 준수하여 엔진을 구현하고, 런타임에서는 Node.js를 사용하여 구현합니다.</p>
          <p class="inner-blog-text-10">이러한 이유로 같은 ECMAScript를 준수하여도, 실행환경에 따라 사용되는 API가 다를 수 있습니다.</p>
          <img class="w-100" src="/img/web-development/diff-browser-node.png" alt="diff-browser-node">
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2015(ES6)</p>
          <p class="inner-blog-text-10">ECMAScript 2015 개정판에 대하여 설명합니다. 주요한 개정판으로, 라이브러리를 사용하면 거의 필요적으로 포함되는 내용입니다.</p>
          <li class="inner-blog-text-10">The let keyword</li>
          <p class="inner-blog-text-30">let은 블록 스코프 지역 변수를 선언하고 추가로 동시에 값을 초기화합니다.</p>
          <p class="inner-blog-text-30">
          <pre>
            var x = 10;
            // Here x is 10
            {
              let x = 2;
              // Here x is 2
            }
            // Here x is 10
          </pre>
          </p>
          <li class="inner-blog-text-10">The const keyword</li>
          <p class="inner-blog-text-30">const는 블록 스코프 읽기 전용 상수를 선언합니다.</p>
          <li class="inner-blog-text-10">Arrow Functions</li>
          <p class="inner-blog-text-30">화살표 함수는 짧은 함수를 표현할 때 사용됩니다.</p>
          <p class="inner-blog-text-30">화살표 함수에서 단일 구문정도면 return이나 중괄호 없어도 됩니다. 또한 매개변수가 하나만 있는 경우 괄호도 건너뛸 수 있습니다.</p>
          <p class="inner-blog-text-30">화살표 함수에서는 this가 없어 Object method를 사용할때 적합하지 않습니다. 원하는 함수의 this가 아닌 caller가 호출됩니다.</p>
          <p class="inner-blog-text-30">화살표 함수에서는 호이스팅이 동작되지 않으므로, 사용전 적용해야합니다.</p>
          <p class="inner-blog-text-30">화살표 함수에서는 상수값을 사용하므로, const를 사용하는걸 추천합니다.</p>
          <p class="inner-blog-text-30">단일문에서만 return이나 중괄호를 쓰지 않아도 되므로 return이나 중괄호를 사용하는걸 권장합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[0].code" />
          <li class="inner-blog-text-10">The ... Operator</li>
          <p class="inner-blog-text-30">iterable을 배열처럼 확장시킵니다. 배열을 copy할때 깊은 복사를 사용하거나, 배열이 아닌 값으로 전달할때 사용됩니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[1].code" />
          <li class="inner-blog-text-10">For/of</li>
          <p class="inner-blog-text-30">For/of은 loop에 iterable objects를 통해 반복 가능한 데이터 구조를 반복할 수 있습니다.</p>
          <p class="inner-blog-text-30">이때 loop의 object 사용 시 변수 오염을 막기 위해 let이나 const 사용을 권장합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[2].code" />
          <li class="inner-blog-text-10">Map Objects</li>
          <p class="inner-blog-text-30">객체를 키로 사용가능한 Map 입니다.</p>
          <p class="inner-blog-text-30">
            <pre>
            const fruits = new Map([
            ["apples", 500],
            ["bananas", 300],
            ["oranges", 200]
            ]);
            </pre>
          </p>
          <li class="inner-blog-text-10">Set Objects</li>
          <p class="inner-blog-text-30">
            <pre>
            // Create a Set
            const letters = new Set();
            // Add some values to the Set
            letters.add("a");
            letters.add("b");
            letters.add("c");
            </pre>
          </p>
          <li class="inner-blog-text-10">Classes</li>
          <p class="inner-blog-text-30">Javascript Object template입니다. class 키워드를 통해 클래스를 만들고, constructor()로 생성자를 정의합니다.</p>
          <p class="inner-blog-text-30">내부에 public private(#) 형식으로 생성자를 생성하고, 함수를 제작하여 호출되도록 합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[3].code" />
          <li class="inner-blog-text-10">Promises</li>
          <p class="inner-blog-text-30">Prmoise는 작업의 상태, 결과값을 나타냅니다. 주로 통신이나 오랜 처리 작업을 가지는 작업에서 사용됩니다.</p>
          <p class="inner-blog-text-30">pending(대기), rejected(실패), fullfill(성공) 상태로 나뉩니다.</p>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png" alt="promise img" />
          <p class="inner-blog-text-30">
            <pre>
              const myPromise = new Promise(function(myResolve, myReject) {
              // "Producing Code" (May take some time)
                myResolve(); // when successful
                myReject();  // when error
              });
              // "Consuming Code" (Must wait for a fulfilled Promise).
              myPromise.then(
                function(value) { /* code if successful */ },
                function(error) { /* code if some error */ }
              );
            </pre>
          </p>
          <CodeMirrorComponent :code="codeMirrorList[4].code" />
          <li class="inner-blog-text-10">Symbol</li>
          <p class="inner-blog-text-30">Symbol은 unique하고 "hidden"한 식별자를 만들 때 사용합니다. id와 같은 고유 식별자에서 사용됩니다.  </p>
          <p class="inner-blog-text-30">
            <pre>
              const person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
              };
              let id = Symbol('id');
              person[id] = 140353;
              // Now person[id] = 140353
              // but person.id is still undefined
            </pre>
          </p>
          <li class="inner-blog-text-10">Default Parameters</li>
          <p class="inner-blog-text-30">함수에서 param 전달 시 default값을 설정합니다.</p>
          <p class="inner-blog-text-30">
            <pre>
              function myFunction(x, y = 10) {
                // y is 10 if not passed or undefined
                return x + y;
              }
              myFunction(5); // will return 15
            </pre>
          </p>
          <li class="inner-blog-text-10">Function Rest Parameter</li>
          <p class="inner-blog-text-30">함수에서 ... 전달 시 무한한 수의 인수를 배열로 처리할 수 있습니다.</p>
          <p class="inner-blog-text-30">
            <pre>
              function sum(...args) {
                let sum = 0;
                for (let arg of args) sum += arg;
                return sum;
              }

              let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
            </pre>
          </p>
          <li class="inner-blog-text-10">String.includes()</li>
          <p class="inner-blog-text-30">String에 인자로 들어온 값이 포함되어 있으면 true, 아니면 false 입니다.</p>
          <li class="inner-blog-text-10">String.startsWith()</li>
          <p class="inner-blog-text-30">String에 인자로 들어온 값이 앞 부분에 포함되어 있으면 true, 아니면 false 입니다.</p>
          <li class="inner-blog-text-10">String.endsWith()</li>
          <p class="inner-blog-text-30">String에 인자로 들어온 값이 뒷 부분에 포함되어 있으면 true, 아니면 false 입니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[5].code" />
          <li class="inner-blog-text-10">Array.from()</li>
          <p class="inner-blog-text-30">length 속성이 있는 객체나 반복 가능한 객체에서 Array 객체를 반환합니다.</p>
          <li class="inner-blog-text-10">Array keys()</li>
          <p class="inner-blog-text-30">배열의 Key가 있는 Array Iterator 객체를 반환합니다.</p>
          <li class="inner-blog-text-10">Array find()</li>
          <p class="inner-blog-text-30">함수를 통과하는 첫 번째 배열 요소의 값을 반환합니다.</p>
          <li class="inner-blog-text-10">Array findIndex()</li>
          <p class="inner-blog-text-30">함수를 통과하는 첫 번째 배열 요소의 인덱스를 반환합니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[6].code" />
          <li class="inner-blog-text-10">New Math Methods</li>
          <p class="inner-blog-text-30">Math.trunc(),Math.sign(), Math.cbrt(), Math.log2(), Math.log10().</p>
          <li class="inner-blog-text-50">Math.trunc(x) : 인수 x의 interger를 return합니다.</li>
          <li class="inner-blog-text-50">Math.sign(x) : 인수 x의 숫자가 양수(1), 음수(-1) 0 을 판별합니다.</li>
          <li class="inner-blog-text-50">Math.cbrt(x) : 인수 x의 세제곱근을 반환합니다.</li>
          <li class="inner-blog-text-50">Math.log2(x) : 인수 x의 밑이 2인 로그를 반환합니다.</li>
          <li class="inner-blog-text-50">Math.log10(x) : 인수 x의 밑이 10인 로그를 반환합니다.</li>
          <p class="inner-blog-text-10"><li>New Number Properties</li></p>
          <p class="inner-blog-text-30">EPSILON, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER.</p>
          <li class="inner-blog-text-50">EPSILON : 앱실론.</li>
          <li class="inner-blog-text-50">MIN_SAFE_INTEGER : 최소 수.</li>
          <li class="inner-blog-text-50">MAX_SAFE_INTEGER : 최대 수.</li>
          <p class="inner-blog-text-10"><li>New Number Methods</li></p>
          <p class="inner-blog-text-30">Number.isInteger(), Number.isSafeInteger()</p>
          <li class="inner-blog-text-50">Number.isInteger(x) : 인수 x이 int면 true 아니면 false를 반환합니다.</li>
          <li class="inner-blog-text-50">Number.isSafeInteger(x) : 인수 x이 int숫자 범위면 true 아니면 false를 반환합니다.</li>
          <p class="inner-blog-text-10"><li>New Global Methods</li></p>
          <p class="inner-blog-text-30">isFinite(), isNaN()</p>
          <li class="inner-blog-text-50">isFinite(x) : 인수 x가 infinite나 Nan인 경우 false 아니면 true를 반환합니다.</li>
          <li class="inner-blog-text-50">isNaN(x) : 인수 x가 Nan(숫자가 아님)인 경우는 true, 아니면 false를 반환합니다.</li>
          <p class="inner-blog-text-10"><li>Object entries</li></p>
          <p class="inner-blog-text-30">entry() 메서드는 키/값 쌍이 있는 Array Iterator 객체를 반환합니다.</p>
          <p class="inner-blog-text-10"><li>JavaScript Modules</li></p>
          <p class="inner-blog-text-30">JavaScript Modules은 두 방식으로 import 합니다.</p>
          <p class="inner-blog-text-50">파일 내 명명된 일부만 import하는 방식
            <pre>import { name, age } from "./person.js";
            </pre>
          </p>
          <p class="inner-blog-text-50">파일 전체를 import 하는 방식
            <pre>import message from "./message.js";
            </pre>
          </p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>Javascript 2016</p>
          <li class="inner-blog-text-10">JavaScript Exponentiation (**) 거듭제곱</li>
          <p class="inner-blog-text-30">x ** y : 밑수 : x, 지수 : y</p>
          <li class="inner-blog-text-10">JavaScript Exponentiation assignment (**=) 거듭제곱</li>
          <p class="inner-blog-text-30">x**=y : 밑수 : x, 지수 : y</p>
          <li class="inner-blog-text-10">JavaScript Array includes()</li>
          <p class="inner-blog-text-30">요소가 배열에 있는지 확인할 수 있습니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2017</p>
          <li class="inner-blog-text-10">비동기처리인 async, await가 추가된 점이 무척 중요한 부분입니다.</li>
          <li class="inner-blog-text-10">JavaScript String padding</li>
          <p class="inner-blog-text-30">string에 strt, end에 따라 앞이나 뒤에 인수로 주어진 값으로 채워넣습니다.</p>
          <p class="inner-blog-text-50">앞 부분에 인수를 추가(0005)
            <pre>let text = "5";<br/>text = text.padStart(4,0);</pre>
          </p>
          <p class="inner-blog-text-50">뒷 부분에 인수를 추가(5000)
            <pre>let text = "5";<br/>text = text.padEnd(4,0);</pre>
          </p>
          <li class="inner-blog-text-10">JavaScript Object entries()</li>
          <p class="inner-blog-text-30">객체의 키/값 쌍 배열을 반환합니다.</p>
          <li class="inner-blog-text-10">JavaScript Object values()</li>
          <p class="inner-blog-text-30">entries()와 유사하지만 객체 값의 단일 차원 배열을 반환합니다.</p>
          <li class="inner-blog-text-10">JavaScript async and await</li>
          <p class="inner-blog-text-30">비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환합니다.</p>
          <p class="inner-blog-text-30">async는 function 앞에 위치하여, 해당 함수는 항상 프라미스를 반환합니다.</p>
          <p class="inner-blog-text-30">await는 async 함수 안에서만 동작합니다.await 키워드를 만나면 프라미스가 처리될 때까지 기다립니다.</p>
          <p class="inner-blog-text-30">아래 예시도, 1,Hello World, 2 순서로 나올 것을 예상하지만, await가 있어 2가 먼저 출력됩니다.</p>
          <CodeMirrorComponent :code="codeMirrorList[7].code" />
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2018</p>
          <li class="inner-blog-text-10">Asynchronous Iteration</li>
          <p class="inner-blog-text-30">비동기 iterators and iterables가 추가되어 for/of 과 같은 구조에서도 aync/await를 사용할 수 있게 되었습니다.</p>
          <li class="inner-blog-text-10">Promise Finally</li>
          <p class="inner-blog-text-30">Promise에서 Finally로 try/catch/finally 구조를 사용할 수있게 되었습니다.</p>
          <p class="inner-blog-text-30">
            <pre>let myPromise = new Promise();</br>myPromise.then();</br>myPromise.catch();</br>myPromise.finally();</pre>
          </p>
          <li class="inner-blog-text-10">Object Rest Properties</li>
          <p class="inner-blog-text-30">Object에 나머지 Properties가 추가되었습니다. ...형식으로 변수를 지정하면, 나머지 값들이 할당됩니다.</p>
          <p class="inner-blog-text-30">
            <pre>let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };<br/>x; // 1<br/>y; // 2<br/>z; // { a: 3, b: 4 }</pre>
          </p>
          <li class="inner-blog-text-10">New RegExp Features</li>
          <p class="inner-blog-text-30">(\p{...}) 유니코드 속성, (?<= ) and (?<! ) , Named Capture Groups, s (dotAll) Flag</p>
          <li class="inner-blog-text-10">JavaScript Shared Memory</li>
          <p class="inner-blog-text-30"><a href="http://hacks.mozilla.or.kr/2017/11/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/">http://hacks.mozilla.or.kr/2017/11/a-cartoon-intro-to-arraybuffers-and-sharedarraybuffers/</a></p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2019</p>
          <p class="inner-blog-text-10"><li>String.trimStart()</li></p>
          <p class="inner-blog-text-30">trim()처럼 작동하지만 문자열 시작 부분에서만 공백을 제거합니다.</p>
          <p class="inner-blog-text-30">
            <pre>let text1 = "     Hello World!     ";<br/>let text2 = text1.trimStart();//Hello World!     </pre>
          </p>
          <p class="inner-blog-text-10"><li>String.trimEnd()</li></p>
          <p class="inner-blog-text-30">trim()처럼 작동하지만 문자열 뒷 부분에서만 공백을 제거합니다.</p>
          <p class="inner-blog-text-30">
            <pre>let text1 = "     Hello World!     ";<br/>let text2 = text1.trimStart();//     Hello World!</pre>
          </p>
          <p class="inner-blog-text-10"><li>Object.fromEntries</li></p>
          <p class="inner-blog-text-30">반복 가능한 키/값 쌍에서 객체를 생성합니다.</p>
          <p class="inner-blog-text-10"><li>Optional catch binding</li></p>
          <p class="inner-blog-text-30">필요하지 않으면 catch 매개변수를 생략할 수 있습니다.</p>
          <p class="inner-blog-text-10"><li>Array.flat()</li></p>
          <p class="inner-blog-text-30">중첩 배열을 병합하여 새 배열을 만듭니다.</p>
          <p class="inner-blog-text-30">
            <pre>const myArr = [[1,2],[3,4],[5,6]];<br/>const newArr = myArr.flat();//1,2,3,4,5,6</pre>
          </p>
          <p class="inner-blog-text-10"><li>Array.flatMap()</li></p>
          <p class="inner-blog-text-30">배열의 모든 요소를 ​​매핑한 다음 배열을 평면화하여 새 배열을 만듭니다.</p>
          <p class="inner-blog-text-10"><li>Revised Array.Sort()</li></p>
          <p class="inner-blog-text-30">sort()정렬 기능의 알고리즘이 향상되었습니다.</p>
          <p class="inner-blog-text-10"><li>Revised JSON.stringify()</li></p>
          <p class="inner-blog-text-30">\로 인코딩된 문자를 stringify 가능하도록 수정했습니다.</p>
          <p class="inner-blog-text-10"><li>Separator symbols allowed in string litterals</li></p>
          <p class="inner-blog-text-30">\u2028 ,\u2029가 string literals로 읽힐 수 있도록 수정했습니다.</p>
          <p class="inner-blog-text-10"><li>Revised Function.toString()</li></p>
          <p class="inner-blog-text-30">함수의 toString에서 공백, 주석등의 값이 포함되어 return 되도록 수정되었습니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2020</p>
          <p class="inner-blog-text-10"><li>BigInt</li></p>
          <p class="inner-blog-text-30">최대 15자릿수까지 지원되느니 Int형 변수가 추가되었습니다.</p>
          <p class="inner-blog-text-10"><li>String matchAll()</li></p>
          <p class="inner-blog-text-30">문자열 전체를 탐색하여 동일한 인수를 확인합니다. 동일한 인수, index 등을 배열로 return해 줍니다.</p>
          <p class="inner-blog-text-30">
            <pre>let text = "I love cats. Cats are very easy to love. Cats are very popular."<br/>const iterator = text.matchAll("Cats");<br/>console.log(Array.from(iterator)) //동일한 2개의 배열 return [['Cats',...],['Cats',...]] </pre>
          </p>
          <p class="inner-blog-text-10"><li>The Nullish Coalescing Operator (??)</li></p>
          <p class="inner-blog-text-30">?? 연산자는 null 또는 undefined 이 아니면 첫 번째 인수를 null 또는 undefined면 두 번째 인수를 반환합니다.</p>
          <p class="inner-blog-text-30">
            <pre>let name = null;<br/>let result = name ?? 'hello';// hello가 반환됩니다.</pre>
          </p>
          <p class="inner-blog-text-10"><li>The Optional Chaining Operator (?.)</li></p>
          <p class="inner-blog-text-30">중첩 Object를 안전하게 접근하는 방식입니다. 접근하는 Object가 null이나 undefined인 경우 NPE가 발생되지 않고, undefined가 return됩니다.</p>
          <p class="inner-blog-text-30">
            <pre>let car = {type:"Fiat", model:"500", color:"white"};<br/>let color = car?.color;// white<br/>car = null;</br>let color2 = car?.color//undefined</pre>
          </p>
          <p class="inner-blog-text-10"><li>Logical AND Assignment Operator (&&=)</li></p>
          <p class="inner-blog-text-30">두 값 사이 && Operator를 사용합니다.</p>
          <p class="inner-blog-text-10"><li>Logical OR Assignment (||=)</li></p>
          <p class="inner-blog-text-30">두 값 사이 || Operator를 사용합니다.</p>
          <p class="inner-blog-text-10"><li>Nullish Coalescing Assignment (??=)</li></p>
          <p class="inner-blog-text-30">두 값 사이 ?? Operator를 사용합니다. 첫 번째 값이 null 또는 undefined이면 두 번째 값이 할당됩니다.</p>
          <p class="inner-blog-text-10"><li>Promise allSettled()</li></p>
          <p class="inner-blog-text-30">allSettled()는 인수에 Promise배열을 넣어, 모든 Promise가 resolved(성공) 또는 rejected(실패) 되면 종료됩니다. all()은 인수에 Promise 배열을 넣는건 동일하지만, all()은 도중 하나라도 rejected가 되면 종료됩니다.</p>
          <p class="inner-blog-text-30">이러한 이유로 allSettled()는 서로 연관되지 않는 job에 적절하며, all()은 단계식으로 서로가 연관되어 있는 job인 경우 사용됩니다.</p>
          <p class="inner-blog-text-10"><li>Dynamic Import</li></p>
          <p class="inner-blog-text-30">동적으로 script 내에서 import(module)형식으로 import합니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Javascript 2021</p>
          <p class="inner-blog-text-10"><li>Promise any()</li></p>
          <p class="inner-blog-text-30">any()는 인자에 Promise 배열을 넣어, 가장 먼저 resolved 된 Promise를 return합니다. any 중 하나라도 resolved any는 성공하지만, 모두 다 rejected가 되면 실패합니다.</p>
          <p class="inner-blog-text-10"><li>replaceAll()</li></p>
          <p class="inner-blog-text-30">문자열 내에서 첫번째 인수인 값을 두번째 인수로 변경합니다.</p>
          <p class="inner-blog-text-10"><li>Numeric Separators (_)</li></p>
          <p class="inner-blog-text-30">숫자 구분 기호(_)를 도입했습니다. 1000과 1_000은 동일하게 처리됩니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>결론</p>
          <p class="inner-blog-text-10">ECMA에서 추가되는 script기능들은 적절하고, 효과적인 기능들이 많습니다.</p>
          <p class="inner-blog-text-10">하지만, 최신 ECMA가 적용되지 않은 브라우저라면, 이러한 기능들을 읽지 못하여 소스에서 오류가 발생됩니다.</p>
          <p class="inner-blog-text-10">매번 문제를 발생하던 IE만이 아니라, 2020년도의 ECMA script가 적용된 기능은 이전에서는 읽지 못하여 오류가 발생될 것 입니다.</p>
          <p class="inner-blog-text-10">이러한 문제를 회피하기 위해, polyfill와 babel을 통해 이슈를 회피했고 다음 장에서 설명하겠습니다.</p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://www.howdy-mj.me/javascript/how-to-read-ecmascript">https://www.howdy-mj.me/javascript/how-to-read-ecmascript</a>
      <a href="https://curryyou.tistory.com/200">https://curryyou.tistory.com/200</a>
      <a href="https://www.w3schools.com/js/js_es6.asp">https://www.w3schools.com/js/js_es6.asp</a>
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
                  code :
                    `var helloES5 = function(){\nreturn "Hello ES5!";\n}\nvar hello = () => "Hello World!";\nvar helloWithParam = (val) => "Hello " + val;\nvar helloWithOnlyOneParam = val => "Hello " + val;\nvar helloWithParams = (val1,val2) => {\nreturn "Hello " + val1 + " and " + val2\n};\nvar helloThis = ()=> {\nreturn this;\n}\nconsole.log(helloES5()) //Hello ES5!\nconsole.log(hello()) // Hello World!\nconsole.log(helloWithParam('You!')) // Hello You!\nconsole.log(helloWithOnlyOneParam('Me!')) // Hello Me!\nconsole.log(helloWithParams('You!','Me!')) // Hello You! and Me!\nconsole.log(helloThis()) // 원하는 helloThis의 object가 아닌 caller`
                },
                {
                  code:
                  `const numbers = [1,2,3,4,5];\nlet copyNumbers = [-1,0,...numbers, 6, 7];\nconsole.log(numbers); // 1,2,3,4,5\nconsole.log(copyNumbers); // -1,0,1,2,3,4,5,6,7\nconsole.log(Math.max(...numbers)); // 5\nconsole.log(Math.max(numbers)); // Nan\n`
                },
                {
                  code:
                  `var interVar = '-1'\nlet forLoop = [1,2,3,4,5];\nlet forInter = [-1,-2,-3,-4,-5];\nfor(let i=0;i<forLoop.length;i++) {\nconsole.log(forLoop[i]) // 1,2,3,4,5\n}\nfor(var interVar of forInter) {\nconsole.log(interVar) // -1,-2,-3,-4,-5\n}\nconsole.log(interVar) // -5`
                },
                {
                  code:
                  `class TestClass {\nname = '';\nyear = '';\n#namePrivate = ''; // private 선언\nconstructor(name, year) {\nthis.name = name;\nthis.year = year;\nthis.#namePrivate = name;\n}\ntest(){\nconsole.log('test function!') ;\nreturn 'hello function!';\n}\n}\nconsole.log(TestClass) // class의 내용들\nlet testUser = new TestClass('testUser', '2023');\nconsole.log(testUser) // object\nconsole.log(testUser.name) // testUser\nconsole.log(testUser.year) // 2023\nconsole.log(testUser.namePrivate) // undefined\nconsole.log(testUser.test()) // test 호출 및 return값.\n`
                },
                {
                  code:
                  `let promiseResolve = new Promise((resolve, reject)=>{\nresolve('success !'); // 다음의 reject는 무시됩니다.\nreject('fail !');\n}).then((result)=>{\nconsole.log(result);\n},(err)=>{\nconsole.log(err);\n})\nlet promise2 = new Promise((resolve, reject)=>{\nreject('fail !'); // 다음의 resolve는 무시됩니다.\nresolve('success !');\n}).then((result)=>{\nconsole.log(result);\n},(err)=>{\nconsole.log(err);\n})`
                },
                {
                  code:
                  `let text = "Hello world, welcome to the universe";\nconsole.log(text.includes("Hello")) // true\nconsole.log(text.includes("Helloa")) // false\nconsole.log(text.startsWith("Hello")) // true\nconsole.log(text.startsWith("Helloa")) // false\nconsole.log(text.endsWith("universe")) // true\nconsole.log(text.endsWith("universea")) // false`
                },
                {
                  code:
                  `let fromArr = Array.from("ABCDEFG")\nconsole.log(fromArr)// Returns [A,B,C,D,E,F,G]\nconst fruits = ["Banana", "Orange", "Apple", "Mango"];\nconst keys = fruits.keys();\nfor (let x of keys) {\nconsole.log(x) // 0,1,2,3\n}\nconst numbers = [4, 9, 16, 25, 29];\nlet firstFind = numbers.find((value,index,array)=>{\nreturn value > 20;\n});\nconsole.log(firstFind) // 25\nlet firstFindIndex = numbers.findIndex((value,index,array)=>{\nreturn value > 20;\n});\nconsole.log(firstFindIndex) // 3`
                },
                {
                  code:
                  `const getData = async() => {\nvar y = await "Hello World";\nconsole.log(y);\n}\nconsole.log(1);\ngetData();\nconsole.log(2);`
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
