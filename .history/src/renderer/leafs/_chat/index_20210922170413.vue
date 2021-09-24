<template>
    <section class="_chat_identity">
        <nav v-for="(v, index) in identityList" :key="index"></nav>
    </section>
    <section class="_chat_chatroom"></section>
    <section class="_chat_specific"></section>
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
._chat_identity {
    @extend %Max;
    float: left;
    width: 66px;
    background: $color-default-derived-06;
}
._chat_chatroom {
    float: left;
    @extend %Max;
    width: 200px;
    background: $color-default-derived-02;
}
._chat_specific {
    width: calc(100vw - 266px);
    float: left;
    @extend %Max;
    background: rgb(242,242,242);
}
</style>
<script src="./index.ts" />
