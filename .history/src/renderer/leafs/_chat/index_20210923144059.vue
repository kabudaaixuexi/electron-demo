<template>
    <section class="_chat_identity">
        <el-tooltip
            v-for="(v, index) in identityList"
            :show-after="1000"
            :hide-after="300"
            :visible-arrow="false"
            :key="index"
            :content="v.__describe"
            :disabled="!v.__describe"
            placement="bottom-end"
            transition=".3s"
            effect="light">
            <nav @click="identityClick(v)">
                <img :class="v.__class" :src="v.data.url || v.__url_default">
            </nav>
        </el-tooltip>
    </section>
    <section class="_chat_chatroom">
        <nav>

        </nav>
    </section>
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
    padding-top: 24px;
    nav {
        @extend %Max;
        height: 66px;
        @extend %Flex-Center-Center;
        img {
            @extend %Block;
            @include WH(44px);
            @include BR(50%);
            transform: scale(var(--scale,1));
            &:active {
                --scale:.95;
                transition: .4s;
            }
            &:hover {
                cursor: pointer;
                transition: .3s;
                box-shadow: 1px 1px 6px 1px $color-primary-derived-02;
            }
        }
        .identity_chat {
            @include Flex-Direction(column);
            @include WH(36px);
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
