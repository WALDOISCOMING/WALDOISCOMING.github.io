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
&lt;template&gt;
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
          <p class="inner-blog-text-30">컴포넌트에서 부모-자식 관계는 가장 일반적으로 사용됩니다</p>
          <p class="inner-blog-text-30">부모-자식 관례는 parent가 child에서 보낼때는 props, child에서 parent로 보낼때는 emit을 사용하여 데이터를 전달합니다.</p>
          <img class="w-100" src="/img/web-development/vue-props-emit.png" alt="vue props emit"></img>
        </div>
        <div class="desc mt--45 mb--50">
          <p>props</p>
          <p class="inner-blog-text-10">HTML 속성은 대소 문자를 구분하지 않으므로 문자열이 아닌 템플릿을 사용할 때 camelCased prop 이름에 해당하는 kebab-case(하이픈 구분)를 사용해야 합니다.</p>
          <p class="inner-blog-text-30">prop에 특정 타입이 지정된 prop의 리스트를 구현할 수 있습니다.
            <pre>
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}</pre>
          </p>
          <p class="inner-blog-text-30">Parent
            <pre>
&lt;! -- 정적인 string 형식의 prop --&gt;
&lt;blog-post title="My journey with Vue"&gt;&lt;/blog-post&gt;
&lt;!-- 변수에 담긴 값을 동적으로 할당 --&gt;
&lt;blog-post v-bind:title="post.title"&gt;&lt;/blog-post&gt;

&lt;!-- `42`는 정적인 값이지만, Vue에서 해당 값이 숫자라는 것을 알 수 있도록 하기 위해 --&gt;
&lt;!-- v-bind를 이용해 문자열이 아닌 JavaScript 표현식이라는 것을 알려줍니다.      --&gt;
&lt;blog-post v-bind:likes="42"&gt;&lt;/blog-post&gt;

&lt;!-- 변수의 값을 동적으로 할당할 수도 있습니다. --&gt;
&lt;blog-post v-bind:likes="post.likes"&gt;&lt;/blog-post&gt;

&lt;!-- 값이 없는 prop은 `true` 를 전달합니다.. --&gt;
&lt;blog-post is-published&gt;&lt;/blog-post&gt;

&lt;!-- `false`는 정적인 값이지만, Vue에서 해당 값이 논리 자료형이라는 것을 알 수 있도록 하기 위해 --&gt;
&lt;!-- v-bind를 이용해 문자열이 아닌 JavaScript 표현식이라는 것을 알려줍니다.                --&gt;
&lt;blog-post v-bind:is-published="false"&gt;&lt;/blog-post&gt;

&lt;!-- 변수의 값을 동적으로 할당할 수도 있습니다. --&gt;
&lt;blog-post v-bind:is-published="post.isPublished"&gt;&lt;/blog-post&gt;

&lt;!-- 해당 배열은 정적인 값이지만, Vue에서 해당 값이 배열이라는 것을 알 수 있도록 하기 위해 --&gt;
&lt;!-- v-bind를 이용해 문자열이 아닌 JavaScript 표현식이라는 것을 알려줍니다.          --&gt;
&lt;blog-post v-bind:comment-ids="[234, 266, 273]"&gt;&lt;/blog-post&gt;

&lt;!-- 변수의 값을 동적으로 할당할 수도 있습니다. --&gt;
&lt;blog-post v-bind:comment-ids="post.commentIds"&gt;&lt;/blog-post&gt;

&lt;!-- 해당 오브젝트는 정적인 값이지만, Vue에서 해당 값이 배열이라는 것을 알 수 있도록 하기 위해 --&gt;
&lt;!-- v-bind를 이용해 문자열이 아닌 JavaScript 표현식이라는 것을 알려줍니다.             --&gt;
&lt;blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
&gt;&lt;/blog-post&gt;

&lt;!-- 변수의 값을 동적으로 할당할 수도 있습니다. --&gt;
&lt;blog-post v-bind:author="post.author"&gt;&lt;/blog-post&gt;

&lt;!-- 오브젝트의 모든 속성을 전달하길 원하는 경우, v-bind:prop-name 대신 v-bind 만 작성함으로써 모든 속성을 prop으로 전달할 수 있습니다. --&gt;
post: {
  id: 1,
  title: 'My Journey with Vue'
}
&lt;blog-post v-bind="post"&gt;&lt;/blog-post&gt;

&lt;!-- 위 오브젝트는 아래와 같이 전달됩니다. --&gt;
&lt;blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
&gt;&lt;/blog-post&gt;</pre>
          </p>
        </div>
          <p class="inner-blog-text-30">Child
            <pre>
Vue.component('my-component', {
  props: {
    // 기본 타입 체크 (`Null`이나 `undefinded`는 모든 타입을 허용합니다.)
    propA: Number,
    // 여러 타입 허용
    propB: [String, Number],
    // 필수 문자열
    propC: {
      type: String,
      required: true
    },
    // 기본값이 있는 숫자
    propD: {
      type: Number,
      default: 100
    },
    // 기본값이 있는 오브젝트
    propE: {
      type: Object,
      // 오브젝트나 배열은 꼭 기본값을 반환하는
      // 팩토리 함수의 형태로 사용되어야 합니다.
      default: function () {
        return { message: 'hello' }
      }
    },
    // 커스텀 유효성 검사 함수
    propF: {
      validator: function (value) {
        // 값이 항상 아래 세 개의 문자열 중 하나여야 합니다.
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})</pre>
          </p>
        <div class="desc mt--45 mb--50">
          <p>emit</p>
          <p class="inner-blog-text-10">emit은 custom 이벤트로, (HTML의 대소문자 구분을 위해) DOM 템플릿의 v-on 이벤트리스너는 항상 자동으로 소문자 변환되기 때문에 이벤트 이름에는 kebab-case를 사용하는것이 권장됩니다.</p>
          <p class="inner-blog-text-10">parent-child에서만이 아닌 silbling 관계일때에도 emit을 사용하여 데이터 통신을 합니다.(parent가 담당하여 전달함)</p>
          <p class="inner-blog-text-30">Child
            <pre>Child
&lt;template&gt;
  &lt;button v-on:click="incrementCounter"&gt;{{ counter }}&lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment') // parent에 increment에 보내준다.
    }
  },
&lt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-30">Child
            <pre>Child
&lt;template&gt;
  &lt;button v-on:click="incrementCounter"&gt;{{ counter }}&lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter += 1
      this.$emit('increment') // parent에 increment에 보내준다.
      this.$emit('increment-value',counter) // parent에 increment-value에 보내며 변수값을 전달해준다.
    }
  },
&gt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-30">Parent
            <pre>Parent
&lt;template&gt;
  ...
  &lt;!-- emit 이벤트 명(child에서 불러줄 때) 케밥 형식으로 명명되며 :on에 호출된다. parent 받아주는 func은 응답 부분에 있으며 js이므로 camel로 명명된다.   --&gt;
  &lt;child-component v-on:increment="incrementTotal" v-on:increment-value="incrementTotalValue"&gt;&lt;/child-component&gt;
  ...
&lt;/template&gt;
&lt;script&gt;
  data: {
    total: 0
  },
  methods: {
    incrementTotal() {
      this.total += 1
    }
    incrementTotalValue(value) {
      alert(value)
    }
  }
&gt;/script&gt;</pre>
          </p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>sync</p>
          <p class="inner-blog-text-10">“양방향 바인딩”이 필요한 경우 사용됩니다. 성능은 좋지 못하지만, 특수한 경우 필요합니다.</p>
          <p class="inner-blog-text-30">
            <pre>
예를 들어 title이라는 prop을 갖는 요소가 있다고 할 때, 아래와 같이 새로운 값을 할당하도록 요청할 수 있습니다.
this.$emit('update:title', newTitle)
부모 요소는 이벤트를 감지하여 (원한다면) 로컬 data 속성을 업데이트 할 수 있습니다.
&lt;text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
&gt;&lt;/text-document&gt;

이러한 것들을 간단히 sync를 쓰면 아래와 같습니다.
&lt;text-document v-bind:title.sync="doc.title"&gt;&lt;/text-document&gt;</pre>
          </p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>slot</p>
          <p class="inner-blog-text-10">컴포넌트를 재사용 하는 기법입니다. 컴포넌트를 확장하거나, 재정의합니다.</p>
          <p class="inner-blog-text-30">
            <pre>slot 사용
아래와 같이 submit으로 선언된, component를 사용한다고 합시다.
&lt;button type="submit"&gt;
  &lt;slot>Submit&lt;/slot&gt;
&lt;/button&gt;
위 내용을 parent에서 아래와 같이 사용되면.
&lt;submit-button&gt;&lt;/submit-button&gt;
submit으로 나올 것 입니다.
&lt;button type="submit"&gt;
  Submit
&lt;/button&gt;
하지만 Save라는 값을 전달해 주면
&lt;submit-button&gt;
  Save
&lt;/submit-button&gt;
Save으로 나올 것 입니다.
&lt;button type="submit"&gt;
  Save
&lt;/button&gt;</pre>
          </p>
          <p class="inner-blog-text-30">
            <pre>slot을 여러개 쓰는 경우, name을 통해 사용해야 합니다.
name이 지정되지 않은 &lt;slot&gt;에는 암묵적으로 “default” 값이 사용됩니다.
&lt;base-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;Here might be a page title&lt;/h1&gt;
  &lt;/template&gt;

  &lt;template v-slot:default&gt;
    &lt;p&gt;A paragraph for the main content.&lt;/p&gt;
    &lt;p&gt;And another one.&lt;/p&gt;
  &lt;/template&gt;

  &lt;template v-slot:footer&gt;
    &lt;p>Here's some contact info&lt;/p&gt;
  &lt;/template&gt;
&lt;/base-layout&gt;
양쪽 모두 렌더링된 HTML은 아래와 같게 됩니다.

&lt;div class="container"&gt;
  &lt;header&gt;
    &lt;h1>Here might be a page title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p>A paragraph for the main content.&lt;/p&gt;
    &lt;p>And another one.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p>Here's some contact info&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;</pre>
          </p>

          <p class="inner-blog-text-30">
            <pre>범위가 있는 슬롯 (Scoped-Slots)
자식 컴포넌트에서만 접근할 수 있는 데이터에서 슬롯에 필요한 내용을 가져와야 할 수 있습니다.
아래 템플릿의 &lt;current-user&gt; 컴포넌트의 예를 살펴봅시다. 아래에는 user의 lastName을 사용하고 있습니다.

&lt;span&gt;
  &lt;slot&gt; user.lastName &lt;/slot&gt;
&lt;/span&gt;
본값을 사용자의 성말고 이름으로 바꾸고 싶을 수도 있습니다
하지만 작동하지 않습니다. 왜냐하면 &lt;current-user&gt; 컴포넌트만 user에 접근할 수 있는데 슬롯에 제공되는 내용들은 부모 컴포넌트에서 렌더링되기 때문입니다.
부모 컴포넌트의 슬롯에서 user를 쓸려면 user를 &lt;slot> 요소에 속성으로 연결해야 합니다.

&lt;span&gt;
  &lt;slot v-bind:user="user"&gt;
    user.lastName
  &lt;/slot&gt;
&lt;/span&gt;</pre>
          </p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>동적 컴포넌트</p>
          <p class="inner-blog-text-10">동적으로 컴포넌트를 포넌트를 트랜지션(전이)하고, is 속성으로 동적으로 바인드 합니다.</p>
          <p class="inner-blog-text-30">아래 3개의 방식으로 component를 동적으로 바인딩 합니다.
            <pre>template-A.vue
&lt;template&gt;
  &lt;div&gt;
  templateA
  &lt;/div&gt;
&lt;/template&gt;
templateB.vue
&lt;template&gt;
  &lt;div&gt;
  templateB
  &lt;/div&gt;
&lt;/template&gt;
templateC.vue
&lt;template&gt;
  &lt;div&gt;
  templateC
  &lt;/div&gt;
&lt;/template&gt;
parent.vue
&lt;template&gt;
 &lt;component :is="templateA"&gt;&lt;/component&gt;
 &lt;component :is="templateB"&gt;&lt;/component&gt;
 &lt;component :is="componentInstance"&gt;&lt;/component&gt;
&lt;/template&gt;
&lt;script&gt;
import templateA from './templateA'
  export default {
    components: {
      templateA: templateA,
      templateB: () => import('./templateB'),
    },
    data () {
      return {
        componentInstance: '',
      }
    },
    mounted () {
      let componentName = './templateC';
      this.componentInstance = () => import(componentName)
    }
  ...
&lt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-30">트랜지션된 컴포넌트를 메모리에 유지하여 상태를 보존하거나 다시 렌더링하지 않도록하려면 동적 컴포넌트를 keep-alive로 래핑하면 됩니다.
            <pre>
&lt;keep-alive&gt;
  &lt;component :is="currentView"&gt;
    &lt;!-- 비활성화 된 컴포넌트는 캐시 됩니다! --&gt;
  &lt;/component&gt;
&lt;/keep-alive&gt;</pre>
          </p>
        </div>
    </div>


    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://kr.vuejs.org/v2/guide/">https://kr.vuejs.org/v2/guide/</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Vue2Component',
        components: {
        },
        data () {
            return {
            }
        },

        mounted () {
        },
        methods: {
        },
    };
</script>
