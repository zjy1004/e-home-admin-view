<template>
  <div>
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  @change="editChange($event)"
                  :options="editorOption">
    </quill-editor>
  </div>
</template>

<script>
  import axios from 'axios'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    name: "QuillEditor",
    components: {quillEditor},
    props: {
      content: ''
    },
    data() {
      return{
        token: '',
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: 'https://upload-z1.qiniup.com',
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                formData.append('token', this.token)
              } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          if (res.data.code == 200) {
            this.token = res.data.data
          }
        })
      },
      editChange({ quill, html, text }) {
        this.contentText = text;
        this.$emit('change', this.value)
      },
    },
    created() {
      this.getToken()
    },
    watch: {
      value(val) {
        this.content = val;
        this.contentText = val
      }
    }
  }
</script>

<style scoped>

</style>
