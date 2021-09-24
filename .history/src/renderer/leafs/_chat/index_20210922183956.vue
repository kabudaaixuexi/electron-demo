<template>
    <section class="_chat_identity">
        <nav @click="identityClick(v)" v-for="(v, index) in identityList" :key="index">
            <img :class="v.__class" :src="v.data.url ? v.data.url : v.__url_default">
        </nav>
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
    @include Flex-Direction(column);
    @extend %Flex-Center-Start;
    nav {
        @extend %Max;
        height: 66px;
        @extend %Flex-Center-Center;
        img {
            @extend %Block;
            @include WH(44px);
        }
        .identity_chat {
            @include Flex-Direction(column);
        }
        .identity_user {
            @include Flex-Direction(column);
        }
    }
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
