<script>
export default {
  props: ["msg"],
  setup(props) {
    return { props };
  },
};
</script>
<template>
  <h1 class="">{{ props.msg }}</h1>
</template>
<style scoped>
h1 {
  color: aqua;
  font-style: 50px;
}
</style>
