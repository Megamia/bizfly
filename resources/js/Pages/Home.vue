<template>
    <div>
        <a-row
            style=" height: 64px"
            align="center"
                justify="center"
        >
            <a-col
                :span="6"
                style="height: 100%"
                
                ><HomeOutlined
            /></a-col>
            <a-col :span="6">col-6</a-col>
            <a-col :span="6">col-6</a-col>
            <a-col :span="6">col-6</a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>
import { HomeOutlined } from "@ant-design/icons-vue";
</script>

<style lang="css"></style>
