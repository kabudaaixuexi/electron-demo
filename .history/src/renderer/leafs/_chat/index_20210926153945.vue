<template>
    <section v-if="loginDialog">
        <img class="background" :src="'http://192.168.5.85:25566/resources/chat/background.jpg'" alt="">
    </section>
    <template v-else>
    
    <section class="_chat_identity">
        <nav @click="userClick">
            <img class="identity_user" :src="storeStateChat['userinfo'].arturl || 'http://192.168.5.85:25566/assets/user.png'">
        </nav>
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
            @click="changeSource(index)"
            :key="index">
            <img :src="v.data.url || v.__url_default">
            <figure>
                <fieldset class="chatroom_t">{{v.__source}}</fieldset>
                <figcaption class="chatroom_b">{{v.__latest.__conn || ''}}</figcaption>
            </figure>
        </nav>
    </section>
    <!-- 详情 -->
    <section class="_chat_specific">
        <article class="specific_head">
            <span>{{currentRoom.__source}}</span>
        </article>
        <article class="specific_con">
            <div
                :class="{specific_new: storeStateChat['userinfo'].uid === v.__sender, outher:storeStateChat['userinfo'].uid !== v.__sender}"
                v-for="(v, __i) in currentRoom.data"
                :key="__i">
                <div class="new" v-if="storeStateChat['userinfo'].uid !== v.__sender">
                    <img class="new_pic" :src="storeStateChat['userinfo'].arturl || 'http://192.168.5.85:25566/assets/user.png'" alt="">
                    <div class="new_con">
                        <div class="new_con_uid">{{v.__sender}}</div>
                        <div class="new_con_message">
                            <span>{{v.__message.__conn}}</span>
                        </div>
                    </div>
                </div>
                <div class="new" v-else>
                    <div class="new_con">
                        <div class="new_con_uid">{{v.__sender}}</div>
                        <div class="new_con_message">
                            <span>{{v.__message.__conn}}</span>
                        </div>
                    </div>
                    <img class="new_pic" :src="storeStateChat['userinfo'].url || 'http://192.168.5.85:25566/assets/user.png'" alt="">
                </div>
            </div>
        </article>
        <article class="specific_foot">
            <el-input
                @keyup.enter="sendNew"
                input-style="border: none;height:100%;"
                v-model.trim="newInput" />
        </article>
    </section>
    </template>
    <!-- chat登陆弹窗 -->
    <dialogChatLogin 
        :dialogVisible="loginDialog"
        @DialogVisible="changeLoginDialog"
        />
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
.el-popper {
    padding: 6px;
    opacity: .6;
}
.background {
    width: 100vw;
    min-height: 100vh;
    // background-size: auto 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    filter:blur(5px) contrast(.8);
    z-index: 0;
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
        .specific_new {
            display: flex;
            justify-content: flex-end;
            .new {
                margin: 12px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-end;
                .new_pic {
                    margin: 0 6px;
                    @include WH(36px);
                    @include BR(4px);
                }
                .new_con {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: flex-start;
                    .new_con_uid {
                        margin: 4px 0 2px 0;
                        font-size: 14px;
                        font-family:initial;
                        color: $color-default-derived-06;
                    }
                    .new_con_message {
                        max-width: 210px;
                        height: auto;
                        background:$color-fill-main;
                        padding:7px 6px;
                        word-wrap: break-word;
                        font-size: 14px;
                        @include BR(6px);
                        position: relative;
                    }
                    .new_con_message ::before {
                        position:absolute;  
                        content: "";
                        display: inline-block;
                        bottom:15px;  
                        right:-8px;  
                        width:0;  
                        height:0;  
                        border-top:2px solid transparent;  
                        border-bottom:6px solid transparent;  
                        border-left:10px solid #fff; 
                    }
                }
            }
        }
        .outher {
            display: flex;
            justify-content: flex-start;
            .new {
                margin: 12px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                .new_pic {
                    margin: 0 6px;
                    @include WH(36px);
                    @include BR(4px);
                }
                .new_con {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    .new_con_uid {
                        margin: 4px 0 2px 0;
                        font-size: 14px;
                        font-family:initial;
                        color: $color-default-derived-06;
                    }
                    .new_con_message {
                        max-width: 210px;
                        word-wrap: break-word;
                        background:$color-fill-main;
                        padding:7px 6px;
                        font-size: 14px;
                        @include BR(6px);
                        position: relative;
                    }
                    .new_con_message ::before {
                        position:absolute;  
                        content: "";
                        display: inline-block;
                        bottom:15px;  
                        left:-8px;  
                        width:0;  
                        height:0;  
                        border-top:2px solid transparent;  
                        border-bottom:6px solid transparent;  
                        border-right:10px solid #fff; 
                    }
                }
            }
        }
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
