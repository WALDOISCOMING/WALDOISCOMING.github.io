<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">Vue mixin과 store 기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Vue에서 Vue 컴포넌트에 재사용 가능한 기능을 추가하는 mixin과 vue의 상태관리를 해주는 vuex의 store에 대하여 알아봅니다.</p>
          <p>mixin은 주로 js 등에서 서술해둔 스크립트를 vue template에서 호출하여 사용하는 방식을 가집니다.</p>
          <p>vuex는 vue script에서 State, Mutations, Actions, Getters요소를 통해 상태(저장된 값을) 관리합니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>mixin 기초</p>
          <p class="inner-blog-text-10">mixin은 주로, 공통적으로 사용되는 string이나 date관련 유틸리티들을 바로 UI에 적용할 때 사용됩니다.</p>
          <p class="inner-blog-text-30">
            <pre> mixin.js
export default {
  methods: {
    formatPhoneNumber(str) { // 간략히 전화번호의 양식을 맞추는 함수가 있습니다.
      str = str.replace(/[^0-9]/g, '');
      ...
      return str;
    }
  }
}
demo.vue
&lt;template&gt;
  &lt;p&gt;
  &lt;!-- vue template안에서도, 타 method를 바로 호출하여 사용합니다.--&gt;
    &#123;&#123; formatPhoneNumber(phonNum) &#125; &#125;
  &lt;/p&gt;
&lt;/template&gt;
&lt;script&gt;
import mixin from '@/mixins/mixin';
export default {
  mixins: [mixin], //mixins에 사용할 mixin을 등록합니다.
&lt;/script&gt;</pre>
          </p>
          <p class="inner-blog-text-30">
            mixin은 전역으로 적용할 수 있지만 mixin을 전역으로 적용하면 이후에 생성된 모든 Vue 인스턴스 에 영향을 미칩니다.
          </p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>vuex 기초</p>
          <p class="inner-blog-text-10">이전장에 설명한, props나 emit을 통해 컴포넌트 간 데이터를 처리 가능합니다.</p>
          <p class="inner-blog-text-10">하지만 parent-child가 1촌 관계가 아닌 복잡한 경우, 유저 관련 정보(JWT 관련), 회원가입 등 복잡한 입력이 있는 값의 저장이 필요한 경우 사용됩니다.</p>
          <p class="inner-blog-text-10">state</p>
          <p class="inner-blog-text-30">데이터. 공통으로 참조하기 위한 변수를 정의한 것입니다. 프로젝트의 모든 곳에서 이를 참조하고 사용할 수 있습니다.</p>
          <p class="inner-blog-text-10">mutations</p>
          <p class="inner-blog-text-30">state의 변경을 담당하며, mutations을 통해서만 state를 변경해야 합니다. 동기 처리 기준입니다</p>
          <p class="inner-blog-text-10">actions</p>
          <p class="inner-blog-text-30">mutations를 실행시키며, 외부에서 호출됩니다. 비동기 처리 기준입니다.</p>
          <p class="inner-blog-text-10">getters</p>
          <p class="inner-blog-text-30">외부에서 state의 값을 가져올때 사용됩니다.</p>
          <p class="inner-blog-text-30">유저의 권한을 가져오는 것을 예시로 간략하게 보여드리겠습니다.
            <pre> store/modules/layout.js
화면에서의 layout을 변경하는 vuex 입니다.
export const state = () => ({
  layoutType: "vertical",
  layoutWidth: "fluid",
  leftSidebarType: "light",
  topbar: "colored",
  loader: false,
});

export const getters = {
  layoutType: state => state.layoutType,
  leftSidebarType: state => state.leftSidebarType,
  layoutWidth: state => state.layoutWidth,
  topbar: state => state.topbar,
  loader: state => state.loader
};

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
    state.leftSidebarType = leftSidebarType;
  },
  CHANGE_TOPBAR(state, topbar) {
    state.topbar = topbar;
  },
  LOADER(state, loader) {
    state.loader = loader;
  },
};

export const actions = {
  changeLayoutType({ commit }, { layoutType }) {
    commit("CHANGE_LAYOUT", layoutType);
  },
  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit("CHANGE_LAYOUT_WIDTH", layoutWidth);
  },
  changeLeftSidebarType({ commit }, { leftSidebarType }) {
    commit("CHANGE_LEFT_SIDEBAR_TYPE", leftSidebarType);
  },
  changeTopbar({ commit }, { topbar }) {
    commit("CHANGE_TOPBAR", topbar);
  },
  changeLoaderValue({ commit }, { loader }) {
    commit("LOADER", loader);
  },
};
이제 위의 내용을 vuex에 등록한다.
store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const modules = {}
const rModules = require.context('./modules', false. /\.js$/)
export default new Vuex.store({
  modules
})
이 등록한 vuex를 vue에 등록한다.
main.js
import store from './store'
...
new Vue({
 ...,
 store
 ...
})

demo.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;compoment :width="layout.layoutWidth" /&gt;
  &lt;!-- map getter를 사용해 가져온 값을 바인딩합니다.--&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import { mapGetters } from "vuex"; // state
export default {
  computed: mapGetters(["layout"]),
  methods: {
      changeWidth(width) { // action을 호출해 줍니다.
      this.$store.dispatch("changeLayoutWidth", {
        layoutWidth: width,
      });
    },
&lt;/script&gt;</pre>
          </p>

        </div>
    </div>


    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://kr.vuejs.org/v2/guide/">https://kr.vuejs.org/v2/guide/</a>
      <a href="http://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/">http://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Vue2MixinAndStore',
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
