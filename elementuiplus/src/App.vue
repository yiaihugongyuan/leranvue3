<script setup>
import 'element-plus/es/components/message/style/css'
</script>

<template>
    <router-view></router-view>
</template>

<style lang="less">
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border: 0;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    border: 0;

}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #c8c8c8;
    height: 7.42148%;
    transform: translateY(0%);
}

::-webkit-scrollbar-thumb:hover {
    background-color: #8b8989;
}
</style>