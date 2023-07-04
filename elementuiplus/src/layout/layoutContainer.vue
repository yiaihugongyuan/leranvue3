<script setup>
import layoutAside from './layoutAside.vue';
import layoutHeader from './layoutHeader.vue';
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-header><layout-header></layout-header></el-header>
            <el-container>
                <el-aside width="200px"><layout-aside></layout-aside></el-aside>
                <el-container>
                    <el-main><router-view></router-view></el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>