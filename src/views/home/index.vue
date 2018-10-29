<template>
  <div>
    <el-form>
      <el-form-item label="新闻内容" required>
        <QuillEditor v-model="formData.content"></QuillEditor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import QuillEditor from '@/components/QuillEditor'
  export default {
    components: {QuillEditor},
    name: "index",
    data() {
      return {
        formData: {
          content: '',
          contentText: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
