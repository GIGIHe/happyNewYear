<template>
    <div class="note-wrapper w1170">
   <h3>标题</h3>
   <input type="text" placeholder="测试标题">
    <h3>内容</h3>
    <div class="rich-editor">
      <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
       @change="onEditorChange($event)"
    >
    </quill-editor>
    </div>
    <div class="catagory">
 <strong>分类：</strong>
 <myRadio :options="catagories" v-model="formData.catagory" class="mt"></myRadio>
    </div>
   
    <button class="btn" @click="handleSubmit">发表</button>
    </div>
</template>

<script>
import myRadio from '@/components/radio'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor } from 'vue-quill-editor'
import {Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend) 
    export default {
       components: {quillEditor,myRadio},
    data() {
      return {
     catagories:[],
     formData:{
        catagory:'',
       title:'',
       content: '',
       contentText:'',
     },
     
        // 富文本框参数设置
        editorOption: {  
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action:"http(s)://upload-z1.qiniup.com" ,
              response: (res) => {
                return res.info
              }
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
    methods:{
      getData(){
            this.$axios.get('/catagory').then(res=>{
              // console.log(res)
              this.catagories = res.data
            })
      },
        onEditorChange({ quill, html, text }) {
        // console.log('editor change!', quill, html, text)
        // console.log('quill',quill)
        // console.log('html',html)//contenetText带有标签的文本
        // this.content = text
        this.formData.contentText = text
        // this.formData.contentText = this.formData.contentText.substring(0,100)+'...'
          // console.log( text)
      },
      handleSubmit(){
       
        this.$axios.post('/article',this.formData).then(res=>{
             if(res.code==200){
               this.$message.success(res.msg);
               this.$router.push('/')
             }
        }).catch(err=>{
          this.$message.info(res.err)
        })
      
    }
    },
    created(){
      this.getData()
    }
    }
 
    
</script>

<style scoped lang="scss"> 
.note-wrapper{
    background-color: #fff;
    padding: 15px;
    margin-top: 40px;
    h3{
        font-weight: 600px;
        color: #444;
    }
    input{
      text-indent: 1em;
    }
    .catagory{
      font-weight: 500;
      font-weight: 14px;
      color: #555;
      margin: 10px 0;
      .mt{
       margin-top: 10px;
      }
    }
    input{
        width: 100%;
        height: 40px;
        border: 1px solid #f1f1f1;
        outline: none;
        border-radius: 4px;  
    }
    .btn{
        margin-top: 20px;
        height: 30px;
        width: 50px;
        line-height: 2;
        text-align: center;
        background-color: rgba($color: #f1f1f1, $alpha: .3);
        outline: none;
        border:1px solid #409eff;
        font-size: 12px;
        cursor: pointer;
        border-radius: 4px;
    }
    .btn:active{
        background-color: #409eff;
    }
}
</style>
<style>
.ql-container{
min-height: 300px;
}
</style>
