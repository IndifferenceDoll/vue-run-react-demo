<template>
  <div class="container">
    <h3>{{ desc }}</h3>
    <child-react-comp :message="message"></child-react-comp>
  </div>
</template>
<script>
import ChildReactComp from '../reactComp/index'

export default {
  data(){
    return{
      desc:'我是vue容器',
      message:'这是来自Vue父组件的信息'
    }
  },
  components:{
    'child-react-comp':ChildReactComp,
  }
}
</script>
<style lang="css" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: skyblue;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container h3 {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-bottom: 2px solid black;
  font-size: 30px;
  color: black;
  margin-bottom: 100px;
}
</style>