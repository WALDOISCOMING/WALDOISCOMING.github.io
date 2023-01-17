<template>
  <div>
    <no-ssr placeholder="Codemirror Loading...">
      <div align="right">
        <button class="brook-btn bk-btn-pink" @click="scriptCode = ''">
          입력 스크립트 Clear
        </button>
        <button  class="brook-btn bk-btn-theme" @click="onScriptClick">
        입력 스크립트 Run
          </button>
        </div>
      <codemirror
        @input="onCodeChange($event)"
        :value="scriptCode">
      </codemirror>

      <b-card class="bk-accordion-style--2">
        <b-card-header >
          <div class="acc-btn">
            결과창
          </div>
        </b-card-header>
        <b-collapse visible>
          <b-card-body>
            <b-card-text>
              <div ref="codeMirrorContent"></div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </no-ssr>
  </div>
</template>

<script>
  import MirrorConsole from 'codemirror-console';
    export default {
      name: 'CodeMirrorComponent',
      props: {
        code: {
          type: String,
          default: ''
        }
      },
      components: {
      },
      data () {
        return {
          scriptCode: '',
          codeResult: '',
        }
      },

      mounted () {
        this.scriptCode = this.code;
      },
      methods: {
        onCmReady(cm) {
          console.log('the editor is readied!', cm)
        },
        onCmFocus(cm) {
          console.log('the editor is focus!', cm)
        },
        onScriptClick(){
          try {
          var editor = new MirrorConsole();
          editor.setText(this.scriptCode);

          var tmp =  document.createElement("div");
          let codeMirrorContentbody = this.$refs.codeMirrorContent
          codeMirrorContentbody.innerHTML = '';
          codeMirrorContentbody.appendChild(tmp);
          editor.swapWithElement(tmp); // insert editor
          this.codeResult = '';
          var consoleMock = {
            log: function (arg) {
              let line = document.createElement("div");
              line.appendChild(document.createTextNode(arg));
              codeMirrorContentbody.appendChild(line);
            }
          }
          editor.runInContext({ console: consoleMock }, function (result, error) {
            if (error) {
              let line = document.createElement("div");
              line.appendChild(document.createTextNode(error));
              codeMirrorContentbody.appendChild(line);
            }
          });
          editor.destroy();// remote editor
          } catch(e) {
            console.log(e)
          }
        },

        onCodeChange(newCode) {
          this.scriptCode = newCode;
        }
      },
    };
</script>
