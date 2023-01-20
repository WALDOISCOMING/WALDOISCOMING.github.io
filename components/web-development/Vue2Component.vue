<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">Vue Component 기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Vue에서는 화면 또는 기능을 적절하게 분리하여 Component화 하고 개발을 하고 이것을 연결하여 프로그램이 작동하도록 구현하는 방법을 사용합니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Component 기초</p>
          <p>진행하기 앞서, 실제 개발을 하며 진행하는 것이 적절해 저번 장에 진행했던, 프로젝트를 open합니다.</p>
          <p class="inner-blog-text-30">HelloWorld.vue 의 template 내용을 아래와 같이 div 하나만 제외하고 제거합니다.
            <pre>
&lt;template>
  &lt;div class="hello"&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
          </p>
          <p class="inner-blog-text-30">HelloWorld.vue 위치에 GlobalComponent.vue를 생성해 주세요.
            <pre>
&lt;template>
  &lt;div&gt;
    Global Component 입니다.
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  name: 'global-component',
}
&lt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-30">HelloWorld.vue 위치에 LocalComponent.vue를 생성해 주세요.
            <pre>
&lt;template&gt;
  &lt;div&gt;
    Local Component 입니다.
  &lt;/div&gt;
&lt;/template&gt;
export default {
  name: 'local-component',
}
&lt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-10"><li>전역 등록</li></p>
          <p class="inner-blog-text-30">전역 등록은 등록 이후 전체에서 사용 가능한 Component가 됩니다.</p>
          <p class="inner-blog-text-30">사용 시 편리해지지만, 전역 등록을 할때마다 리소스가 커집니다. 전역적으로 필요한 Component에서 사용 필요합니다.</p>
          <p class="inner-blog-text-30">전역 컴포넌트를 등록하려면, Vue.component(tagName, options)를 사용합니다. tagName은 추후 사용될 이름, options에는 사용할 컴포넌트를 넣어주세요.
            <pre>main.js 에서 전역 컴포넌트를 등록합니다
...
import globalComponent from "@/components/GlobalComponent"
Vue.component('global-component', globalComponent)
...
            </pre>
          </p>
          <p class="inner-blog-text-30">HelloWorld.vue에서 컴포넌트를 호출합니다.
            <pre>
&lt;template>
  &lt;global-component&gt;&lt;/global-component&gt;
&lt;/template&gt;</pre>
          </p>
          <img class="w-100" src="/img/web-development/vue-global-component.png" alt="vue global component"></img>
          <p class="inner-blog-text-10"><li>지역 등록</li></p>
          <p class="inner-blog-text-30">지역 등록을 하면, 리소스에 부담은 적게 가지만 선언 해준곳에서만 사용 가능합니다. 적게 사용되거나, 특정한 부분에서 쓰일때 사용됩니다.</p>
          <p class="inner-blog-text-30">HelloWorld.vue
            <pre>
&lt;template>
  &lt;global-component&gt;&lt;/global-component&gt;
  &lt;local-component&gt;&lt;/local-component&gt;
&lt;/template&gt;
&lt;script&gt;
import localComponent from '@/components/LocalComponent'
export default {
  name: 'HelloWorld',
	components: {
    localComponent
  },
}
&lt;/script&gt;</pre>
          </p>
          <img class="w-100" src="/img/web-development/vue-local-component.png" alt="vue local component"></img>

        </div>
        <div class="desc mt--45 mb--50">
          <p>Component props와 emit</p>
          <p class="inner-blog-text-10"><li>기본</li></p>
        </div>
    </div>


    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://kr.vuejs.org/v2/guide/">https://kr.vuejs.org/v2/guide/</a>
    </div>
  </div>
</template>

<script>
  import MirrorConsole from 'codemirror-console';
  import CodeMirrorComponent from '/components/CodeMirrorComponent'
    export default {
        name: 'Vue2Component',
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
