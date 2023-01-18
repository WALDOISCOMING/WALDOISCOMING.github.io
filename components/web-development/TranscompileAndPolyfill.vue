<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“transcompile과 polyfill, 그리고 Babel에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>이전에 설명드린 것 처럼, ECMAScript의 기능들은 강력하고 적절한 기능들이 많지만 ES6가 초기에 나왔을 때, 지원되는 브라우저가 적어 기능이 동작하지 않은 경우가 많았습니다.</p>
          <p>이러한 이슈를 회피하기 위해 <code>transcompile</code>와 <code>polyfill</code>이라는 개념을 통해 이슈를 회피합니다.</p>
          <p class="inner-blog-text-10">compile은 한 언어로 작성된 소스 코드를 다른 언어(Java -> Bytecode)로 변환하는 것입니다.</p>
          <p class="inner-blog-text-10">transcompile은 한 언어로 작성된 소스 코드를 비슷한 추상화(abstraction)를 가지는 다른 언어(c++->c, javascript ES6 -> javascript ES5)로 변환하는 것입니다.</p>
          <p class="inner-blog-text-10"><a href="https://babeljs.io/repl">babel 클라우드 테스트 환경</a>에서 간략한, transcompile 예시를 보여드리겠습니다.</p>
          <p class="inner-blog-text-10">화살표 함수가 기본 함수 형식으로 변환되고, for/of 형식이 기본 for문으로 변환되었습니다.</p>
          <img class="w-100" src="/img/web-development/babel-transcompile.png" alt="babel transcompile"/>
          <p class="inner-blog-text-10">transcompile은 기존에 있던 함수를 통해, 버전에 맞추어 변환해주는 기능입니다. 하지만 아래를 보시면 Promise 같이 새로 생긴 객체는 변환되지 않고 그대로 가져오고 있습니다.</p>
          <img class="w-100" src="/img/web-development/babel-promise.png" alt="babel promise"/>
          <p class="inner-blog-text-10">polyfill은 충전솜이라는 의미로, 브라우저에서 지원하지 않는 코드를 사용가능한 코드 조각이나 플러그인로 채워 넣는 것을 말합니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Vue 예제를 통해 transcompile과 polyfill 작업을 진행하도록 하겠습니다.</p>
          <p class="inner-blog-text-10">Vue3 프로젝트 개요</p>
          <p class="inner-blog-text-30">Node js(16.14.2) | NPM(8.5.5) @vue/cli(5.0.8)<code>공유드리는 버전은 제가 사용한 버전으로, 맞추실 필요는 없습니다.</code></p>
          <p class="inner-blog-text-30"><a href="https://nodejs.org/ko/download/">Node js</a>설치 하신뒤 시스템 환경 변수를 설정 해 주세요.</p>
          <p class="inner-blog-text-30">위의 다운로드는 NPM도 포함되므로 추가 설정을 하시면 NPM은 따로 설치해 주세요.</p>
          <p class="inner-blog-text-30">NPM까지 모두 설치완료 되시면 <strong>cmd)</strong> npm install -g @vue/cli 를 입력해주세요.</p>
          <p class="inner-blog-text-30">정상적으로 설치가 되셨으면,(<strong>cmd)</strong> vue -V를 치고 정상적일 경우) <strong>cmd)</strong> vue create 프로젝트이름 으로 입력하시고, vue버전은 vue3으로 선택해주세요.</p>
          <img class="w-100" src="/img/web-development/transpoly-create-vue.png" alt="vue 3 project create"/>
          <p class="inner-blog-text-30">프로젝트를 생성하고 나면 기본적인 폴더 구조는 아래와 같이 구성됩니다.</p>
          <p class="inner-blog-text-30">
            <pre>├─ public</br>├─ babel.config.js</br>├─ jsconfig.json</br>├─ package.json</br>├─ vue.config.js</br>├─ src</br>   ├─ main.js</br>   ├─ App.vue</pre>
          </p>
          <p class="inner-blog-text-30"><strong>vue.config.js</strong> 임시 프로젝트이므로 테스트 중 eslint때문에 문법오류가 잦게 일어나면 disable 하시고 진행하세요.
            <pre>
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //lintOnSave: false,
  transpileDependencies: true
})
            </pre>
          </p>
          <p class="inner-blog-text-30">먼저 src/components/HelloWorld.vue에 들어가, script 부분을 아래와 같이 변경해 주세요</p>
          <p class="inner-blog-text-30"><strong>HelloWorld.vue</strong> 화면이 처음 생성될때 transcompile과 polyfill이 필요한 내용들을 몇개 추가합니다.
            <pre>
&lt;script setup&gt;
import { onMounted } from 'vue'
onMounted(() => {
  // ES6 transcompile
  let arrowF = (x,y)=> { return x+y }
  console.log('arrow Function' , arrowF(1,2));
  // polyfill
  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
      myResolve("resolve success");
      myReject("reject success");
    }, 3000);
  });
  myPromise.then(function(value) {
    console.log('myPromise resolved : ', value)
  });
  // ECMAScript 2019
  let text1 = "     Hello World!     ";
  let text2 = text1.trimStart();
  console.log('trimStart : ', text2)
})
&lt;/script&gt;
            </pre>
          </p>
          <p class="inner-blog-text-30">위 내용을 작성하신 뒤, cmd에 npm run serve을 실행뒤 브라우저에서 개발자모드(크롬 F12)를 키신 뒤, 아래와 같이 로그가 뜨는지 확인합니다.</p>
          <img class="w-100" src="/img/web-development/transpoly-serve-log.png" alt="babel transcompile">
          <p class="inner-blog-text-30">상세 스펙은 <a href="https://babeljs.io/docs/en/babel-preset-env">https://babeljs.io/docs/en/babel-preset-env</a> 에서 확인하세요.</p>
          <p class="inner-blog-text-30">plugin-transform-runtime core-js 또는 @babel/polyfill 을 직접 import해서 생기는 global scope 오염 문제를(Promise, Set Map..) sandboxed 환경을 생성하여 해결합니다.</p>
          <p class="inner-blog-text-30"><strong>babel.config.js</strong>
            <pre>
module.exports = {
	presets: [
	  [
		  '@vue/cli-plugin-babel/preset',
		  {
			"targets": { // 타겟 버전 설정
				"browsers" : ["last 2 versions", "ie >= 10"]
			},
      "useBuiltIns": "usage", // 사용한 내역만
		  }
	  ]
	],
  plugins: [
    [ // polyfill 설정.
      '@babel/plugin-transform-runtime',
      {
        "corejs": "3",
      },
    ],
  ],
}
            </pre>
          </p>
          <p class="inner-blog-text-30">이후, <strong>cmd)</strong>npm run build를 한 뒤, dist(기본 빌드 폴더)로 진입하여 app.hashcode.js에서 내용을 확인합니다. </p>
          <p class="inner-blog-text-30"><strong>app.hash.js</strong>에서는 arrow function이 변환된 것이 확인됩니다.
            <pre>
(function(){var t=function(t,e){return t+e};console.log("arrow Function",t(1,2))
            </pre>
          </p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://ideveloper2.tistory.com/166">https://ideveloper2.tistory.com/166</a>
      <a href="https://babeljs.io/docs/en/">https://babeljs.io/docs/en/</a>
      <a href="https://royleej9.tistory.com/entry/babel-setting">https://royleej9.tistory.com/entry/babel-setting</a>
      <a href="https://tech.kakao.com/2020/12/01/frontend-growth-02/">https://tech.kakao.com/2020/12/01/frontend-growth-02/</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Babel',
        components: {
        },
        data () {
            return {
            }
        },

        mounted () {
        },
    };
</script>
