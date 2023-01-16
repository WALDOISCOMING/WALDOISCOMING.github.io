import Vue from 'vue'
import MirrorConsole from 'codemirror-console'


Vue.use(MirrorConsole,  {
  options: {
    tabSize: 4,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
  },
})
