<template>
    <section class="_chat_identity">
        <el-tooltip
            v-for="(v, index) in identityList"
            :show-after="600"
            :hide-after="300"
            :visible-arrow="false"
            :key="index"
            :offset="-6"
            :content="v.__describe"
            :disabled="!v.__describe"
            placement="bottom-end"
            effect="light">
            <nav @click="identityClick(v)">
                <img :class="v.__class" :src="v.data.url || v.__url_default">
            </nav>
        </el-tooltip>
    </section>
    <!-- 聊天室列表 -->
    <section class="_chat_chatroom">
        <nav
            :class="{current_room:currentRoom.__source === v.__source}"
            v-for="(v, index) in chatroomList"
            :key="index">
            <img :src="v.data.url || v.__url_default">
            <figure>
                <fieldset class="chatroom_t">Test123</fieldset>
                <figcaption class="chatroom_b">我是最新消息</figcaption>
            </figure>
        </nav>
    </section>
    <section class="_chat_specific">
        <article class="specific_head">
            <span>Test123</span>
        </article>
        <article class="specific_con">

        </article>
        <article class="specific_foot">
            <el-input
                @keyup.enter="sendNew"
                input-style="border: none;height:100%;"
                v-model.trim="newInput" />
        </article>
    </section>
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
.el-popper {
    padding: 6px;
    opacity: .6;
}
._chat_identity {
    .slide-fade-enter-active {
        transition: all 1.2s ease;
    }
    .slide-fade-leave-active {
        transition: all 1.2s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter,
    .expand-fade-leave-active {
        margin-left: 20px;
        opacity: 0;
    }
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
    @extend %Max-Height;
    overflow-y: scroll;
    width: 200px;
    background: $color-fill-main;
    .current_room {
        background: $color-fill-derived-08;
    }
    nav {
        @extend %Max-Width;
        height: 70px;
        padding: 15px 10px;
        @extend %Flex-Center-Center;
        img {
            @include WH(40px);
            @include BR(4px);
            @extend %Block;
            box-sizing: border-box;
            margin-right: 10px;
        }
        figure {
            flex: 1;
            @extend %Max;
            padding: 2px 0;
            @include Flex-Direction(column);
            @extend %Flex-Start-Between;
            .chatroom_t {
                border: none;
                font-size: 12px;
                font-weight: bold;
            }
            .chatroom_b {
                font-size: 10px;
            }
        }
    }
}
._chat_specific {
    width: calc(100vw - 266px);
    float: left;
    display: flex;
    @include Flex-Direction(column);
    @extend %Max;
    background: rgb(242,242,242);
    .specific_head {
        height: 60px;
        @extend %Max-Width;
        @extend %Flex-Center-Start;
        box-shadow: 1px 0px 1px 1px $color-fill-derived-08;
        padding: 20px;
        font-size: 14px;
    }
    .specific_con {
        height: 400px;
        @extend %Max-Width;
        overflow-y: scroll;
    }
    .specific_foot {
        flex: 1;
        @extend %Max-Width;
        border-top: .5px solid $color-fill-derived-08;
        .el-input {
            @extend %Max-Height;
        }
    }
}
</style>
<script src="./index.ts" />
