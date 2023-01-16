import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/theme/base16-dark.css'
import 'codemirror/lib/codemirror.css'
// runmode js
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/runmode/runmode.js'

Vue.use(VueCodemirror,  {
  options: {
    tabSize: 4,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
  },
})
