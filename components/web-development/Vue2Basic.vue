<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">Vue 2 기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Vue3가 정식 배포되었지만, 개발측의 환경이나 라이브러리 사용으로 인하여 2를 사용하실수 있으므로 2위주로 설명하고, 이후 Vue2와 3차이를 설명하며 달라진 점을 정리하겠습니다.</p>
          <p>사용자 인터페이스를 만들기 위한 프로그레시브 프레임워크 입니다. Vue는 점진적으로 채택할 수 있도록 설계하였습니다.(PWA, Progressive Web App)</p>
          <p class="inner-blog-text-10">선언적 렌더링</p>
          <p class="inner-blog-text-30">Vue.js의 핵심에는 간단한 템플릿 구문을 사용하여 DOM에서 데이터를 선언적으로 렌더링 할 수있는 시스템이 있습니다.</p>
          <p class="inner-blog-text-30">기존에는 직접 dom에 접근하여 아래와 같이 수정했습니다.</p>
          <p class="inner-blog-text-30">
            <pre>html
...
&lt;div id='some-id'&gt;&lt;/div&gt;
...</pre>
            <pre>js
document.getElementById('some-id').innerValue = 'updated value';</pre>
          </p>
          <p class="inner-blog-text-30">vue에서는 데이터를 선언(관련 부분은 아래 Vue instance 설명) 후 텍스트 보간형식이나 바인딩(디렉티브)로 데이터를 추가 합니다.</p>
          <p class="inner-blog-text-30">아래는 텍스트 보간형식으로 텍스트를 보여주는 형식 입니다. 디렉티브는 아래에서 추가 설명합니다.</p>
          <p class="inner-blog-text-30">
            <pre>vue
...
{{messageDiv}}
...</pre>
          <p class="inner-blog-text-30">이제 message라는 데이터와 DOM이 연결되었으며 반응형이 되었습니다.
            <div>
              {{message}}
            </div>
          </p>
          <p class="inner-blog-text-10">조건문과 반복문</p>
          <p class="inner-blog-text-30">vue에서는 디렉티브를 통해 텍스트와 속성뿐 아니라 DOM의 구조에도 데이터를 바인딩 할 수 있습니다. 또한 Vue 엘리먼트가 Vue에 삽입/업데이트/제거될 때 자동으로 트랜지션 효과를 적용할 수 있는 강력한 전환 효과 시스템을 제공합니다.</p>
          <p class="inner-blog-text-30">
            <pre>vue
...
{{messageIf}}
...</pre>
          </p>
          <p class="inner-blog-text-30">간단히 버튼을 누르면 seen의 값을 toggle 시키도록 하겠습니다.</p>
          <div class="inner-blog-text-50" >
            <b-button @click="seen=!seen">{{seen === true ? '보입니다':'보이지않습니다'}}</b-button>
            <p v-if="seen">이제 나를 볼 수 있어요</p>
          </div>
          <p class="inner-blog-text-30">
            <pre>vue
...
{{messageFor}}
...</pre>
          </p>
          <p class="inner-blog-text-30">버튼을 누르면 list 값들을 추가하도록 하겠습니다.</p>
          <div class="inner-blog-text-50">
            <b-button @click="todos.push(`할일${todos.length}`)">값을 추가합니다.</b-button>
            <ol>
              <li v-for="todo in todos">
              {{ todo }}
              </li>
            </ol>
          </div>
          <p class="inner-blog-text-10">사용자 입력 핸들링</p>
          <p class="inner-blog-text-30">사용자가 앱과 상호 작용할 수 있게 하기 위해 v-on 디렉티브를 사용하여 Vue 인스턴스에서 메소드를 호출하는 이벤트 리스너를 추가 할 수 있습니다.</p>
          <p class="inner-blog-text-30">
            <pre>vue
...
{{messageClick}}
...</pre>
          </p>
          <p class="inner-blog-text-30">버튼을 누르면 글자가 뒤집히는 상호작용기능을 추가해 보겠습니다.</p>
          <div class="inner-blog-text-30">
            <b-button @click="message = message.split('').reverse().join('')">뒤집습니다.</b-button>
            <p class="inner-blog-text-50">{{ message }}</p>
          </div>
          <p class="inner-blog-text-10">컴포넌트를 사용한 작성방법</p>
          <p class="inner-blog-text-30">컴포넌트 시스템는 작고 독립적이며 재사용할 수 있는 컴포넌트로 구성된 대규모 애플리케이션을 구축할 수 있게 해주는 추상적 개념입니다. 모든 유형의 애플리케이션 인터페이스를 컴포넌트 트리로 추상화할 수 있습니다.</p>
          <img class="w-100" src="/img/web-development/vue-component.png" alt="vue component"/>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Vue 인스턴스</p>
          <p class="inner-blog-text-10">Vue 인스턴스 생성</p>
          <p>Vue 인스턴스에 대하여 진행하기 전에, Vuejs 프로젝트를 실행하도록 하겠습니다. 설치가 안되셨다면, 아래 내용을 진행해 주세요.</p>
          <p class="inner-blog-text-30">Node js(16.14.2) | NPM(8.5.5) @vue/cli(5.0.8)<code>공유드리는 버전은 제가 사용한 버전으로, 맞추실 필요는 없습니다.</code></p>
          <p class="inner-blog-text-30"><a href="https://nodejs.org/ko/download/">Node js</a>설치 하신뒤 시스템 환경 변수를 설정 해 주세요.</p>
          <p class="inner-blog-text-30">위의 다운로드는 NPM도 포함되므로 추가 설정을 하시면 NPM은 따로 설치해 주세요.</p>
          <p class="inner-blog-text-30">NPM까지 모두 설치완료 되시면 <strong>cmd)</strong> npm install -g @vue/cli 를 입력해주세요.</p>
          <p class="inner-blog-text-30">정상적으로 설치가 되셨으면,(<strong>cmd)</strong> vue -V를 치고 정상적일 경우) <strong>cmd)</strong> vue create 프로젝트이름 으로 입력하시고, vue버전은 vue2으로 선택해주세요.</p>
          <p class="inner-blog-text-30">완료되시고, 프로젝트를 VS Code 등 에디터로 열면 아래와 같이 트리구조로 나타날 것 입니다.</p>
          <p class="inner-blog-text-30">
            <pre>├─ node_modules</br>├─ public</br>├─ package.json</br>├─ vue.config.js</br>            ├─ src</br>   ├─ main.js</br>   ├─ App.vue</br>   ├─ components</br>      ├─ HelloWorld.vue</pre>
          </p>
          <li class="inner-blog-text-30">node_modules : npm install 하여 설치된 라이브러리들이 설치되는 위치 입니다. 용량이 많으므로 .gitignore에 폴더 추가하여 push 되지 않도록 해주세요.</li>
          <li class="inner-blog-text-30">public : 정적 자산(index.html, css, 이미지, js)가  있는 폴더입니다. 이후 설명할 src/assets와 다르게 웹팩의 처리가 되지 않습니다.</li>
          <li class="inner-blog-text-30">package.json : 프로젝트 설정, 배포, 관리를 위한 문서입니다.</li>
          <p class="inner-blog-text-50">
            <pre>
{
  "name": "testapp", // 앱 이름
  "version": "0.1.0", // 앱 버전
  "private": true,
  "scripts": { // 실행 스크립트 npm run scripts내용
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": { // 의존성(라이브러리)
    "core-js": "^3.8.3",
    "vue": "^2.6.14"
  },
  "devDependencies": { // 개발전용 의존성
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3",
    "vue-template-compiler": "^2.6.14"
  },
...
}</pre>
          </p>
          <li class="inner-blog-text-30">vue.config.js : @vue/cli-service 사용하면 자동적으로 로드가 되며, 프로젝트에 대한 추가적일 설정을 담당합니다.</li>
          <p class="inner-blog-text-50">프록시 통신, webpack.config.js을 대신한 웹팩 설정을 담당합니다.</p>
          <li class="inner-blog-text-30">src : Vue 애플리케이션의 소스 디렉토리입니다.</li>
          <p class="inner-blog-text-50">main.js : 이 파일은 애플리케이션의 진입점입니다. Vue 앱을 초기화하고 index.html 파일에서 어떤 HTML 엘리멘트를 앱에 붙여야 하는지 나타냅니다. 전역 컴포넌트나 부가적인 Vue 라이브러리를 등록합니다.</p>
          <p class="inner-blog-text-50">App.vue: Vue 애플리케이션의 최상위 컴포넌트입니다. 라우터 형식을 사용하려면 이곳에 vue-router 컴포넌트를 추가해서 사용합니다.</p>
          <p class="inner-blog-text-50">assets : CSS나 이미지 등의 정적 자산(static assets)을 저장하는 디렉토리입니다. 이 파일들은 src 디렉토리에 포함되어 있기 때문에 Webpack의 처리를 받습니다. 즉, Sass/SCSS나 Stylus와 같은 전처리 도구를 사용할 수 있습니다.</p>
          <p class="inner-blog-text-50">그외 : 그외인 component, router, util javascript, plugin, mixin과 같은 내용들은 폴더와 상관없이, 유저가 import 시키면 정상적으로 동작됩니다.</p>
          <p class="inner-blog-text-30">Vue 앱은 new Vue를 통해 만들어진 루트 Vue 인스턴스로 구성되며 선택적으로 중첩이 가능하고 재사용 가능한 컴포넌트 트리로 구성됩니다. </p>
          <p class="inner-blog-text-30">main.js 에 진입하시면 new Vue로앱을 create해주고 있습니다. 이 create된 내용을 기반으로 components들은 중첩/재사용 되도록 구성됩니다.
            <pre>
var vm = new Vue({
  // 옵션
}).$mount("#app");</pre>
          </p>
          <p class="inner-blog-text-10">데이터와 메소드</p>
          <p class="inner-blog-text-30">Vue 인스턴스가 생성될 때 data 객체에 있는 모든 속성이 Vue의 반응형 시스템에 추가됩니다. 각 속성값이 변경될 때 뷰가 “반응”하여 새로운 값과 일치하도록 업데이트됩니다.</p>
          <p class="inner-blog-text-30">데이터가 변경되면 화면은 다시 렌더링됩니다. 유념할 점은, data에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형입니다.</p>
          <p class="inner-blog-text-30">아래는 vue에서 데이터와 메소드, 템플릿(UI부분)를 쓰는 방식을 간략히 공유드립니다.
            <pre>
&lt;script&gt;
import somescript from "@/path/script"
import somecomponent from "@/path/compoment"
export default {
  components: { somecomponent }, // 타 컴포넌트를 사용하려면, import되어 있는 compoment를 등록해줘야 합니다.
	data() {
		return {
			message : '안녕하세요.'
		};
	},
	created(){ // lifecycle중 하나인 created 입니다.
    this.message = '안녕하세요. 안녕히가세요.' // vue script 내에서 data 접근을 위해서는 this 를 붙여야합니다.
    this.messageChange('안녕히가세요'); // method 호출시에도 this를 붙여야합니다.
    somescript.something(); // 타 import script(js)는 호출 시 this를 붙이지 않고 바로 호출합니다.
	},
	methods: {
		messageChange(value){
      this.message = value; // method 내에서 데이터/method 호출 시에 모두 this를 붙여야합니다.
    }
  }
&lt;/script&gt;
&lt;template&gt; &lt;!-- vue는 싱글 파일 컴포넌트 구조이므로, 추후 설명할 slot이 아니라면, template의 child는 하나만 존재해야합니다. template의 child 아래에는 여러개의 child가 존재해도 됩니다.--&gt;
  &lt;button @click="messageChange" &gt; &lt;!-- template 안에서 데이터/method 호출 참조시에는 this를 붙이지 않아야합니다.--&gt;
  &lt;/button&gt;
&lt;/template&gt;</pre>
          </p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>조건문과 반복문</p>
          <p class="inner-blog-text-10"><li>기본</li></p>
          <p class="inner-blog-text-30">JavaScript는 대소문자를 구별하며 유니코드 문자셋을 이용합니다. 예를 들면, Früh(독일어로 "이른")을 변수명으로 사용할 수도 있습니다.</p>
          <p class="inner-blog-text-50">어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다.</p>
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
        </div>
        <div class="desc mt--45 mb--50">
          <p>사용자 입력 핸들링</p>
          <p class="inner-blog-text-10"><li>기본</li></p>
          <p class="inner-blog-text-30">JavaScript는 대소문자를 구별하며 유니코드 문자셋을 이용합니다. 예를 들면, Früh(독일어로 "이른")을 변수명으로 사용할 수도 있습니다.</p>
          <p class="inner-blog-text-50">어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다.</p>
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
          <p class="inner-blog-text-10">Vue lifecycle</p>
          <img class="w-100" src="/img/web-development/vue-lifecycle.png" alt="vue lifecycle"/>
          <li class="inner-blog-text-30">beforeCreate </li>
          <p class="inner-blog-text-50">Vue 인스턴스가 초기화 된 직후에 발생됩니다. 컴포넌트가 DOM에 추가되기 전이므로 this.$el, data,method,watcher 등에도 접근 불가합니다.</p>
          <li class="inner-blog-text-30">created</li>
          <p class="inner-blog-text-50">data를 반응형으로 추적할 수 있게 되지만 DOM에는 추가되지 않은 상태입니다. computed, methods, watch 등이 활성화되어 접근이 가능하게 됩니다. 하지만 아직까지 DOM에는 추가되지 않은 상태입니다.</p>
          <li class="inner-blog-text-30">beforeMount</li>
          <p class="inner-blog-text-50">DOM에 부착하기 직전에 호출되는 beforeMount입니다. 가상 DOM이 생성되어 있으나 실제 DOM에 부착되지는 않은 상태입니다.</p>
          <li class="inner-blog-text-30">mounted</li>
          <p class="inner-blog-text-50">가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로, this.$el을 비롯한 data, computed, methods, watch 등 모든 요소에 접근이 가능합니다.</p>
          <p class="inner-blog-text-50">vue compoment구조에서는 parent는 먼저 created 되지만, child가 mounted가 된 이후 mounted가 됩니다.</p>
          <img class="w-100" src="/img/web-development/vue-mounted-parent-child.png" alt="vue mounted parent child"/>
          <li class="inner-blog-text-30">beforeUpdate</li>
          <p class="inner-blog-text-50">data의 값이 변해서, DOM에 변화 직전에 호출됩니다.</p>
          <li class="inner-blog-text-30">updated</li>
          <p class="inner-blog-text-50">DOM이 변경된 이후에 호출됩니다. 변경할 내용이 있다면 여기에서 data를 변경하면 무한루프가 발생될 수 있으므로 ref나 dom에 직접 접근하여 변경을 해야합니다.</p>
          <li class="inner-blog-text-30">beforeDestroy</li>
          <p class="inner-blog-text-50">인스턴스가 해체되기 직전에 beforeDestroy 호출됩니다. 아직 해체되기 이전이므로 모든 속성에 접근이 가능합니다.</p>
          <li class="inner-blog-text-30">destroyed</li>
          <p class="inner-blog-text-50">인스턴스가 해체되고 난 직후에 destroyed 호출됩니다. 해체가 끝난 이후기 때문에, 인스턴스의 속성에 접근할 수 없습니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>템플릿 문법</p>
          <p>Vue.js는 렌더링 된 DOM을 기본 Vue 인스턴스의 데이터에 선언적으로 바인딩 할 수있는 HTML 기반 템플릿 구문을 사용합니다. 모든 Vue.js 템플릿은 스펙을 호환하는 브라우저 및 HTML 파서로 구문 분석 할 수있는 유효한 HTML입니다.</p>
          <p class="inner-blog-text-10"><li>보간법</li></p>
          <p class="inner-blog-text-30">보간법에서 데이터 바인딩의 가장 기본 형태는 “Mustache” 구문(이중 중괄호)을 사용하는것 입니다</p>
          <p class="inner-blog-text-50">Mustaches는 HTML 속성에서 사용할 수 없습니다. 대신 v-bind 디렉티브를 사용해야 합니다.</p>
          <p class="inner-blog-text-50">보간법에서 사용할 경우 <a jref="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators">Javascript 표현식</a>을 사용 할 수 있습니다.</p>
          <p class="inner-blog-text-50">하나의 단일 표현식 만 포함므로 선언문, 조건문은 동작하지 않습니다.</p>
          <pre>
{{messageMustache}}
          </pre>
          <p class="inner-blog-text-10"><li>디렉티브</li></p>
          <p class="inner-blog-text-30">
            <table class="table">
              <thead>
                <tr>
                  <th class="pricing-header">
                    <span class="heading-h4">디렉티브 이름</span>
                  </th>
                  <th class="pricing-header">
                    <span class="heading-h4">설명</span>
                  </th>
                  <th class="pricing-header">
                    <span class="heading-h4">예</span>
                  </th>
                  <th class="pricing-header">
                    <span class="heading-h4">특징</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-text</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span> the element's text content를 update.</br>dom의 innerText</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span v-pre>&lt;span v-text="msg"&gt;&lt;/span&gt;</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-html</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>the element에 html content를 넣어줍니다.</br>dom의 innerHTML</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>&lt;div v-html="html"&gt;&lt;/div&gt;</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>v-html은 보안상 많은 문제가 있으므로 쓰지 않는걸 권장.</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-show</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>바인딩 된 값을 통해 element에 display none-block을 토글형식으로 지정.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>&lt;div v-show="show"&gt;show!&lt;/div&gt;</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-if</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>바인딩 된 값으로 if문을 지원하며, 초기 화면 렌더링 시 false인 경우 렌더링 되지 않음.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li>&lt;div v-if="something"&gt;if-문&lt;/div&gt;
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>v-if가 v-for보다 우선순위가 높으므로, v-for내에서 v-if를 쓰지 않는걸 권장.</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-else</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>if문 이후 else 지원</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li>&lt;div v-else&gt;else-문&lt;/div&gt;
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-else-if</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>바인딩 된 값으로 else-if 지원.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li>&lt;div v-else="something === '1'"&gt;else-if-1-문&lt;/div&gt;</br>&lt;div v-else="something === '2'"&gt;else-if-2-문&lt;/div&gt;
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>else-if는 if나 else와 다르게 block에서 여러개 사용 가능.</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-for</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>data 값을 for문을 통해, template나 element를 여러번 렌더링.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;div v-for="(value, name, index) in item :key="value.id"&gt{{value.text}}&lt;/div&gt
                      </li>
                      <li v-pre>&lt;div v-for="item in item :key="item.id"&gt{{item.text}}&lt;/div&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>for문은 Array | Object | number | string | Iterable 모두 가능</span></li>
                      <li><span v-pre>for문 내의 요소들을 변경/수정 들의 작업을 하기위해서는 :key에 중복되지 않는 id를 할당해줘야 합니다.</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-on</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>element에 이벤트 리스너를 연결.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;button v-on:click="doThis"&gt버튼01&lt;/button&gt
                      </li>
                      <li v-pre>&lt;button @click="doThis"&gt버튼02&lt;/button&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-bind</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>element의 속성을 할당합니다.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;img v-bind:src="imageSrc"&gt;&lt;/img&gt
                      </li>
                      <li v-pre>&lt;img :src="imageSrc"&gt버튼02&lt;/img&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-model</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>element에서 양방향성 값을 할당합니다.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;input type="text" v-model="name"&gt;&lt;/input&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>lazy</span></li>
                      <span>IME가 아닌 입력 이벤트 이후 값을 업데이트.</span>
                      <span v-pre>&lt;input v-model.lazy="msg" /&gt;</span>
                      <li><span>number</span></li>
                      <span>입력을 숫자로 변환(00 -> 0, 숫자 아닌 내용은 clear)</span>
                      <span v-pre>&lt;input v-model.number="msg" /&gt;</span>
                      <li><span>trim</span></li>
                      <span>공백을 자동으로 trim</span>
                      <span v-pre>&lt;input v-model.trim="msg" /&gt;</span>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-slot</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>parent가 child의 element를 지정할때 사용</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>부모</span></li>
                      <span>&lt;template&gt; ...
&lt;Child  v-slot:child="props"&gt;부모전달내용&lt;/Child&gt;</span>
                    </ul>

                    <ul>
                      <li><span>자식</span></li>
                      <span>&lt;template&gt; ...
&lt;slot name="test"&gt;자식내용&lt;/slot&gt;</span>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-pre</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>element와 모든 child들의 컴파일을 skip.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;span v-pre&gt;{{ this will not be compiled }}&lt;/span&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-once</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>element와 compoment를 한 번만 렌더링하고 향후 업데이트를 건너뜀.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li v-pre>&lt;div v-once&gt; &lt;p v-once&gt;{{msg}}&lt;/p&gt;&lt;/div&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>한번만 렌더링 되는 element 최적화 때 사용.</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>v-cloak</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>렌더링되어 바인딩 되기 전에 머스태쉬 태그를 랜더링 하지 않음.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li>
[v-cloak] {
  display: none;
}
                      </li>
                      <li v-pre>&lt;div v-cloak&gt;{{msg}}&lt;div&gt
                      </li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span></span></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
          <p class="inner-blog-text-30">약어</p>
          <p class="inner-blog-text-30">v-bind와 v-on에 대해 특별한 약어를 제공합니다.</p>
          <p class="inner-blog-text-30">v-bind 약어</p>
          <p class="inner-blog-text-30">
            <pre v-pre>&lt;div v-once&gt;
&lt;!-- 전체 문법 --&gt;
&lt;a v-bind:href="url"&gt; ... &lt;/a&gt;
&lt;!-- 약어 --&gt;
&lt;a :href="url"&gt; ... &lt;/a&gt;
&lt;!-- shorthand with dynamic argument (2.6.0+) --&gt;
&lt;a :[key]="url"&gt; ... &lt;/a&gt;</pre>
          </p>
          <p class="inner-blog-text-30">v-on 약어</p>
          <p class="inner-blog-text-30">
            <pre v-pre>
&lt;!-- 전체 문법 --&gt;
&lt;a v-on:click="doSomething"&gt; ... &lt;/a&gt;
&lt;!-- 약어 --&gt;
&lt;a @click="doSomething"&gt; ... &lt;/a&gt;
&lt;!-- shorthand with dynamic argument (2.6.0+) --&gt;
&lt;a @[event]="doSomething"&gt; ... &lt;/a&gt;</pre>
          </p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>computed와 watch</p>
          <p class="inner-blog-text-10">computed는 반응형 getter입니다. 함수 내에 속한 프로퍼티의 변경여부를 추적하여 computed의 선언된 내용을 진행합니다.</p>
          <p class="inner-blog-text-10">message를 watch하고 있다가, 변경이 되면 reversedMessage를 진행합니다.</p>
          <p class="inner-blog-text-30" v-pre>
          <pre>
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }</pre>
          </p>
          <p class="inner-blog-text-10">watch는 Vue 인스턴스의 특정 프로퍼티가 변경될때 지정한 콜백함수가 실행됩니다.</p>
          <p class="inner-blog-text-30" v-pre>
          <pre>
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }</pre>
          </p>
          <p class="inner-blog-text-10">computed는 동적 getter를 사용하여 종속 프로퍼티들의 변경 내용을 타 변수로 전달합니다. getter을 쓰므로 캐싱이 되지만 그러한 이유로 복잡한 작업은 부적절합니다.</p>
          <p class="inner-blog-text-10">watch는 하나의 프로퍼티 변경 시 콜백함수가 호출되어, 변경에 따른 function 호출 등의 용도입니다. computed보다 종속적이지 않으므로 복잡한 작업을 진행해도 됩니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>클래스와 스타일 바인딩</p>
          <p class="inner-blog-text-10">vue에서는 각 클래스와 인라인스타일에 v-bind를 사용하여, 조작합니다.</p>
          <p class="inner-blog-text-30" v-pre> v-bind 클래스, Object 방식.
            <pre>
...
data: {
  isActive: true,
  hasError: false
}
...
&lt;div v-bind:class="{ active: isActive }"&gt;&lt;/div&gt;
&lt;div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
&gt;&lt;/div&gt;
======================위의 내용은 아래와 같이 랜더링======================
&lt;div class="active"&gt;&lt;/div&gt;
&lt;div class="static active"&gt;&lt;/div&gt;</pre>
          </p>
          <p class="inner-blog-text-30" v-pre> v-bind 클래스, 배열 방식.
            <pre>
...
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
...
&lt;div v-bind:class="[activeClass, errorClass]"&gt;&lt;/div&gt;
======================위의 내용은 아래와 같이 랜더링======================
&lt;div class="active text-danger"&gt;&lt;/div&gt;</pre>
          </p>
          <p class="inner-blog-text-30" v-pre> v-bind 인라인스타일, Object 방식.
            <pre>
...
data: {
  activeColor: 'red',
  fontSize: 30,
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
...
&lt;div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt;&lt;/div&gt;
&lt;div v-bind:style="styleObject"&gt;&lt;/div&gt;</pre>
          </p>
          <p class="inner-blog-text-30" v-pre> v-bind 인라인스타일, 배열 방식.
            <pre>
&lt;v-bind:style="[baseStyles, overridingStyles]"&gt;&lt;/div&gt;</pre>
          </p>
        </div>
    </div>

    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://kr.vuejs.org/v2/guide/">https://kr.vuejs.org/v2/guide/</a><br/>
      <a href="https://wormwlrm.github.io/2018/12/29/Understanding-Vue-Lifecycle-hooks.html">https://wormwlrm.github.io/2018/12/29/Understanding-Vue-Lifecycle-hooks.html</a><br/>
      <a href="https://blog.jeongwoo.in/vue-js-watch%EC%99%80-computed-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95-e2edce37ec34">https://blog.jeongwoo.in/vue-js-watch%EC%99%80-computed-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95-e2edce37ec34</a><br/>
      <a href="https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started</a>
      <a href="https://codingcoding.tistory.com/483">https://codingcoding.tistory.com/483</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Vue2Basic',
        components: {
        },
        data () {
            return {
              message: '안녕하세요.',
              seen : false,
              todos: [
              "할일0",
              "할일1"
              ],
              messageDiv: '<div>{{message}}</div>',
              messageIf: '<div>\n<p v-if="seen">이제 나를 볼 수 있어요</p>\n</div>',
              messageFor: '<div>\n<ol>\n<li v-for="todo in todos">\n{{ todo }}\n</li>\n</ol>\n</div>',
              messageClick: '<div>\n<p>{{ message }}</p>\n<button v-on:click="reverseMessage">메시지 뒤집기</button>\n</div>',
              messageMustache: '{{ number + 1 }}\n{{ ok ? "YES" : "NO" }}\n{{ message.split("").reverse().join("") }}\n<div v-bind:id="`list-` + id"></div>',

            }
        },

        mounted () {
        },
        methods: {
        },
    };
</script>
