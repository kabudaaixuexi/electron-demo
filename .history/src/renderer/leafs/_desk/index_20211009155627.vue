<template>
    <img class="desk_background" :src="deskBackground" alt="">
    <section :ref="MenuDom" class="desk_container" v-if="isReset" >
        <nav class="Eldrag deskI" v-for="(el) in faceList" :key="el" @dblclick.stop="openClick(el)">
            <figure :style="{ backgroundImage:'url(' + el.icon + ')' }"></figure>
            <figcaption>{{ el.explain}}</figcaption>
        </nav>
    </section>
    <figure>
        <el-dialog
            v-model="deskConfig['showDesk']"
            title="当前桌面："
            :modal="false"
            width="60%"
        >
            <section class="preview">
                <img :src="deskBackground" alt="">
                <div class="action"></div>
            </section>
            <section class="optional">
                <article class="queue">
                    <img
                        v-for="(v, i) in deskConfig['queueList']"
                        :key="i"
                        :src="v" alt="">
                </article>
                <article class="action">
                    <el-upload
                        id="upload"
                        class="upload-demo"
                        action="http://192.168.5.85:25566/upload"
                        :auto-upload="false"
                    >
                        <template #trigger>
                        <el-button size="small" type="primary">select file</el-button>
                        </template>
                        <el-button
                        style="margin-left: 10px"
                        size="small"
                        type="success"
                        @click="submitUpload"
                        >upload to server</el-button>
                    </el-upload>
                </article>
            </section>
        </el-dialog>
    </figure>
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
.desk_background {
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
.desk_container {
    color: $color-primary-main;
    @extend %Max;
    @extend %Flex-Start-Start;
    @include Flex-Direction(column);
    z-index: 0;
    position: relative;
    .deskI {
        width: 80px;
        height: 124px;
        padding-top: 22px;
        @include Flex-Direction(column);
        @extend %Flex-Center-Between;
        $tops: (
            1: calc((0 * 100px) + 46px),
            2: calc((1 * 100px) + 46px),
            3: calc((2 * 100px) + 46px),
            4: calc((3 * 100px) + 46px),
        );
        position: absolute;
        cursor: pointer;
        @each $topKey, $top in $tops {
            &:nth-of-type(#{$topKey}) {
                top: $top;
                left: 14px;
            }
        }
        figure {
            @include WH(60px);
            background-size: 60px 60px;
            border-radius: 50% ;
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
        figcaption {
            padding-bottom: 18px;
            &:hover {
                transition: 1s;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
            }
        }
    }
}
// deskCoupon
.preview {
    @extend %Flex-Center-Between;
    img {
        width: 360px;
        margin:0 6px;
    }
    .action {

    }
}
.optional {
    margin-top: 12px;
    @extend %Flex-Center-Between;
    .queue {
        @extend %Flex-Center-Start;
        flex-wrap: wrap;
        max-height: 124px;
        min-width: 466px;
        overflow-y: scroll;
        img {
            width: 100px;
            margin: 6px;
        }
    }
    .action {
        flex: 1;
        @include Flex-Direction(column);
        @extend %Flex-Center-Center;
    }
}
</style>
<style lang="scss">
    .el-dialog__header{
        .el-dialog__title{
            font-size: 16px;
            font-weight: bold;
            font-family: cursive;
            padding-left: 6px;
        }
    }
    .el-dialog__body {
        // padding:0
        padding-top: 0;
        padding-bottom: 30px;
    }
</style>
<script src="./index.ts" />
