<template>
    <section class="_chat_identity"></section>
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
    background: $color-default-derived-04;
}
._chat_specific {
    width: calc(100vw - 266px);
    float: left;
    @extend %Max;
    background: $color-default-derived-04;
}
</style>
<script src="./index.ts" />
