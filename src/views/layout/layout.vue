<template>
    <div class="clearfix">
<Header></Header>
<router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header'
    export default {
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>