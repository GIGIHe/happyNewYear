<template>
    <div>
<label class="radios-label" v-for="(item,index) in options" :key="index">
    <input type="radio" class="radio-btn" v-model="currentVal" :value="item._id"> 
    <div class="radio-tt-wrap">
         <span class="radio-tt-wrap">{{item.name}}</span>
 </div>
</label>
    </div>
</template>

<script>
    export default {
        props:{
            options:{
                type:Array
            },
            value:{
               type:String 
            }
        },
        data(){
            return{
                currentVal:this.value
            }
        },
        watch:{
       value(val){
           this.currentVal = val
       },
    //    如果自身发生变化
    currentVal(val){
      this.$emit('input',val)
      this.$emit('change',val)
    }
      
        }
    }
</script>

<style scoped lang="scss">
.radio-btn{
    display: none
}
.radio-tt-wrap{
    display: inline-block;
    height: 40px;
    width: 60px;
    line-height:40px;
    text-align: center; 
    border: 1px solid #409eff;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 14px;
    color: #444;
}
.radio-btn:checked + .radio-tt-wrap{
    color: #fff;
    background-color: #409eff;
}
</style>