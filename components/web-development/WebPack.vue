<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“웹팩 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>webpack은 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러 입니다. webpack이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 Dependency Graph를 만듭니다.</p>
          <p class="inner-blog-text-10">Dependency Graph는 하나의 파일(이미지나 폰트와 같은 에셋)이 다른 파일에 의존할 경우, 애플리케이션에 의존성으로 제공할 수 있습니다.</p>
          <li class="inner-blog-text-10">Entry(엔트리)</li>
          <p class="inner-blog-text-30">entry 속성은 Dependency Graph가 시작되는 Entry Points를 지정해 줍니다.</p>
          <p class="inner-blog-text-30">
            <pre>
module.exports = {
  entry: './path/to/my/entry/file.js',
};
            </pre>
          </p>
          <li class="inner-blog-text-10">Output(출력)</li>
          <p class="inner-blog-text-30">output 속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법입니다.</p>
          <p class="inner-blog-text-30">
            <pre>
const path = require('path');
module.exports = {
  ...
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
            </pre>
          </p>
          <li class="inner-blog-text-10">Loaders(로더)</li>
          <p class="inner-blog-text-30">loader를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환 하여 애플리케이션에서 사용하거나 Dependency Graph에 추가합니다.</p>
          <p class="inner-blog-text-30">
            <pre>
const path = require('path');
module.exports = {
  ...
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
            </pre>
          </p>
          <p class="inner-blog-text-30">require ()/import 문 내에서 '.txt' 파일로 확인되는 경로를 발견하면 번들에 추가하기 전에 raw-loader를 사용하여 변환하라는 명령어 입니다.</p>
          <li class="inner-blog-text-10">Plugins(플러그인)</li>
          <p class="inner-blog-text-30">plugin는 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 광범위한 작업을 수행 할 수 있습니다.</p>
          <p class="inner-blog-text-30">
            <pre>
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 내장 plugin에 접근하는 데 사용
module.exports = {
  ...
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
            </pre>
          </p>
          <p class="inner-blog-text-30">html-webpack-plugin은 생성된 모든 번들을 자동으로 삽입하여 애플리케이션용 HTML 파일을 생성합니다.</p>
          <li class="inner-blog-text-10">Mode(모드)</li>
          <p class="inner-blog-text-30">mode 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화 할 수 있습니다. 기본값은 production 입니다.</p>
          <li class="inner-blog-text-10">Browser Compatibility(브라우저 호환성)</li>
          <p class="inner-blog-text-30">구형 브라우저를 지원하기 위해 ECMA 관련 부분을 import 합니다.</p>
        </div>
        <div class="desc mt--45 mb--50">
          <p>Vue js에서 webpack 기본</p>
          <p class="inner-blog-text-10">vue js에서 webpack 사용시 자주 사용되는 내용들입니다.</p>
          <p class="inner-blog-text-30"><strong>vue.config.js</strong>
            <pre>
module.exports = {
...
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery', // $('#item');
        jQuery: 'jquery', // jQuery('#item');
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks : 10 // 사용되는 chunk파일 갯수 제한.
      })
    ],
    output: { // output 파일을 해쉬 형식으로 지정
      filename: '[name].[hash:8].js'
    }
  },
...
            </pre>
          </p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://webpack.kr/">https://webpack.kr/</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'WebPack',
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
