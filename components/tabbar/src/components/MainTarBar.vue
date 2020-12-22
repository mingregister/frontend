<template>
  <div>
    <TarBar>
        <TarBarItem path="/home" activeColor="red">
            <img slot="item-icon" src="@/assets/img/tarbar/logo.png" alt="">
            <img slot="item-icon-active" src="@/assets/img/tarbar/logo-active.svg" alt="">
            <div slot="item-text">首页</div>
        </TarBarItem>
        <TarBarItem path="/category">
            <img slot="item-icon" src="@/assets/img/tarbar/logo.png" alt="">
            <img slot="item-icon-active" src="@/assets/img/tarbar/logo-active.svg" alt="">
            <div slot="item-text">分类</div>
        </TarBarItem>
        <TarBarItem path="/cart">
            <img slot="item-icon" src="@/assets/img/tarbar/logo.png" alt="">
            <img slot="item-icon-active" src="@/assets/img/tarbar/logo-active.svg" alt="">
            <div slot="item-text">购物车</div>
        </TarBarItem>
        <TarBarItem path="/profile">
            <img slot="item-icon" src="@/assets/img/tarbar/logo.png" alt="">
            <img slot="item-icon-active" src="@/assets/img/tarbar/logo-active.svg" alt="">
            <div slot="item-text">我的</div>
        </TarBarItem>
    </TarBar>
  </div>
</template>

<script>
import TarBar from '@/components/tarbar/TarBar';
import TarBarItem from '@/components/tarbar/TabBarItem';
export default {
    name: "MainTarBar",
    components: {
        TarBar,
        TarBarItem
    }
}
</script>

<style>

</style>