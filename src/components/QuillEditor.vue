<template>
  <div>
    <quill-editor v-model="formData.content"
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
      value: Object
    },
    data() {
      return{
        formData: {
          content: "",
          contentText: ""
        },
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
        this.formData.contentText = text;
        this.formData.contentText = this.formData.contentText.substring(0, 10) + "...";
        this.$emit("input", {...this.formData});
      },
    },
    created() {
      this.getToken()
    },
    watch: {
      value(val) {
        return this.formData = val;
      }
    }
  }
</script>

<style scoped>

</style>
