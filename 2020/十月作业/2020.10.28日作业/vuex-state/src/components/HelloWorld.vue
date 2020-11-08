<template>
  <div class="hello">
    
    <h3>我叫{{ name }},我今年{{ age }}岁了</h3>
  </div>
</template>

<script>
//引入mapState
import { mapState } from "vuex";
export default {
  name: "HelloWorld",

  //组件是私有的  才在data中定义数据
  data() {
    return {
      
    }
  },
  computed: {
    // name() {
    //   return this.$store.state.name;
    // },
    // age() {
    //   return this.$store.state.age;
    // }
    ...mapState(["name", "age"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
