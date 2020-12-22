<template>
    <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>
<style>
/* @import "../assets/css/base"; */
body {
    padding: 0;
    margin: 0;
}

#tar-bar {
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
}

.tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
}

.tar-bar-item img {
    width: 24px;
    height: 24px;
}
</style>