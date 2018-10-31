<template>
  <div>
    <el-form>
      <el-form-item label="新闻内容" required>
        <QuillEditor v-model="richText"></QuillEditor>
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
        },
        richText: {},
      }
    },
    watch: {
      richText(val) {
        console.log(val);
        (this.formData.contentText = val.contentText);
          (this.formData.content = val.content);
      }
    },
  }
</script>

<style scoped>

</style>
