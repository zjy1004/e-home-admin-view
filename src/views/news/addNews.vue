<template>
  <div>
    <el-card>
      <div slot="header">
        添加新闻
      </div>
      <el-form :model="formData" label-position="left" label-width="80px">
        <el-form-item label="新闻头图" required>
          <UploadImg v-model="formData.img"></UploadImg>
        </el-form-item>
        <el-form-item label="新闻标题" required>
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" required>
          <el-select v-model="formData.author">
            <el-option v-for="(item, index) in users"
                       :label="item.nickname"
                       :key="index"
                       :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻内容" required>
          <quill-editor v-model="formData.content"
                        ref="myQuillEditor"
                        @change="editChange($event)"
                        :options="editorOption">
          </quill-editor>
        </el-form-item>
        <el-form-item label="新闻分类" required>
          <el-select v-model="formData.type">
            <el-option v-for="(item, index) in categories"
                       :label="item.title"
                       :key="index"
                       :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
  import UploadImg from '@/components/UploadImg'
  export default {
    components: {quillEditor, UploadImg},
    name: "addNews",
    data() {
      return {
        formData: {
          title: "",
          content: "",
          contentText: "",
          img: "",
          author: "",
          type: "",
          look_num: ""
        },
        users: [],
        token: '',
        categories: [],
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
      getUser() {
        this.$axios.get('/admin/adminUser').then(res => {
          if (res.code == 200) {
            this.users =res.data
          }
        })
      },
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          if (res.data.code == 200) {
            this.token = res.data.data
          }
        })
      },
      editChange({ quill, html, text }) {
        this.formData.contentText = text
      },
      handleSubmit() {
        this.$axios.post('/admin/news', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/news')
          }
        })
      },
      getCategory() {
        this.$axios.get('/admin/category').then(res => {
          if (res.code == 200) {
            this.categories = res.data
          }
        })
      }
    },
    created() {
      this.getUser();
      this.getToken();
      this.getCategory()
    }
  }
</script>

<style>

 .ql-container {
   min-height: 200px;
}
</style>
