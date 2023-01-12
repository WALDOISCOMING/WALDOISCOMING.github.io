import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

import 'codemirror/theme/base16-dark.css'
import 'codemirror/lib/codemirror.css'

Vue.use(VueCodemirror,  {
  options: {
    tabSize: 4,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
  },
})
