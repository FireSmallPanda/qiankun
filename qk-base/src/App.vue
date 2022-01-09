<template>
  <div>
    <el-menu :router="true" class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="/">主应用页面</el-menu-item>
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <!-- 加载VUE子应用 -->
    <div id="vue"></div>
    <!-- 加载React子应用 -->
    <div id="react"></div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data:()=>{
    return {
      activeIndex:""
    }
  },
  components: {

  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
