<template>
  <div class="home">
    <div>{{'vue 子应用'}}</div> 
    <div><img alt="Vue logo" src="../assets/logo.png"></div> 
    <div v-if="userInfo">你好我是：{{userInfo.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    
  },
  data(){
    return {
      userInfo:null
    }
  },
  methods:{
  },
  mounted(){
    let info = sessionStorage.getItem('userInfo');
    if(info){
      this.userInfo = JSON.parse(info)
    }
  }
}
</script>
<style scoped>

</style>
