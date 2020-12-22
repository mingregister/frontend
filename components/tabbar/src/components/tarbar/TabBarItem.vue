<template>
    <div class="tar-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            console.log('itemClick');
            this.$router.push(this.path)
        },
    }
}
</script>

<style scoped>
/* @import "../assets/css/base";
body {
    padding: 0;
    margin: 0;
} */

.tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}

.tar-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}

/* .active {
    color: blue;
} */
</style>