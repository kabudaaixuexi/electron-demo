<template>
    <section class="_chat_identity"></section>
    <section class="_chat_chatroom"></section>
    <section class="_chat_specific"></section>
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
._chat_identity {
    @extend %Max;
    width: 80px;
    background: $color-default-derived-04;
}
._chat_chatroom {
    @extend %Max;
    width: 200px;
    background: $color-default-derived-08;
}
._chat_specific {
    @extend %Max;
    background: $color-default-derived-06;
}
</style>
<script src="./index.ts" />
