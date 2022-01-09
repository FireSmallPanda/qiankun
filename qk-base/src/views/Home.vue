<template>
  <div class="home">
    {{'vue 主应用页面'}}
      <button @click="setUserInfo()">设定用户信息</button>
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
     // 设置用户信息
    setUserInfo(){
      let userInfo = {
        name:"小凌",
        age:18
      }
      this.userInfo = userInfo
      window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
