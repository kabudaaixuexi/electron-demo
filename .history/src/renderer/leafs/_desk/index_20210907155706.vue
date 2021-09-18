<template>
    <img class="desk_background" :style="{ 'backgroundImage':require('url('+ deskBackground + ')')}" :src="deskBackground" alt="">
    <section :ref="MenuDom" class="desk_container" v-if="isReset" >
        <nav class="Eldrag deskI" v-for="(el) in faceList" :key="el" @click="deskIClick" @dblclick="openClick(el)">
            <figure :style="{ backgroundImage:'url(' + el.icon + ')' }"></figure>
            <figcaption>{{ el.explain}}</figcaption>
        </nav>
    </section>
</template>
<style lang="scss">
@import '@renderer/styles/style.scss';
.desk_background {
    width: 100vw;
    min-height: 100vh;
    background-size: auto 100%;
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
</style>
<script src="./index.ts" />
