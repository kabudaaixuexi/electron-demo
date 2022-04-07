<template>
    <nav class="notepad_header">
        <!-- 调整左侧布局 -->
        <article class="notepad_header_layout">
            <svg @click="layoutChange(1)" :class="{layout_sel:layoutType == 1}" t="1642425593200" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3055" width="24" height="24"><path d="M450.56 563.2a10.24 10.24 0 0 1 10.16832 9.04192L460.8 573.44v245.76a10.24 10.24 0 0 1-9.04192 10.16832L450.56 829.44H204.8a10.24 10.24 0 0 1-10.16832-9.04192L194.56 819.2V573.44a10.24 10.24 0 0 1 9.04192-10.16832L204.8 563.2h245.76z m368.64 0a10.24 10.24 0 0 1 10.24 10.24v245.76a10.24 10.24 0 0 1-10.24 10.24H573.44a10.24 10.24 0 0 1-10.24-10.24V573.44a10.24 10.24 0 0 1 10.24-10.24z m-378.89024 20.48h-225.28v225.28h225.28V583.68z m368.64 0h-225.28v225.28h225.28V583.68zM450.56 194.56a10.24 10.24 0 0 1 10.24 10.24v245.76a10.24 10.24 0 0 1-10.24 10.24H204.8a10.24 10.24 0 0 1-10.24-10.24V204.8a10.24 10.24 0 0 1 10.24-10.24z m368.64 0a10.24 10.24 0 0 1 10.16832 9.04192L829.44 204.8v245.76a10.24 10.24 0 0 1-9.04192 10.16832L819.2 460.8H573.44a10.24 10.24 0 0 1-10.16832-9.04192L563.2 450.56V204.8a10.24 10.24 0 0 1 9.04192-10.16832L573.44 194.56h245.76z m-378.89024 20.48h-225.28v225.28h225.28V215.04z m368.64 0h-225.28v225.28h225.28V215.04z" p-id="3056" fill="#ffffff"></path></svg>
            <svg @click="layoutChange(2)" :class="{layout_sel:layoutType == 2}" t="1642425504212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2646" width="24" height="24"><path d="M327.68 686.08a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H204.8a10.24 10.24 0 0 1-10.24-10.24V696.32a10.24 10.24 0 0 1 10.24-10.24z m491.52 0a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H450.56a10.24 10.24 0 0 1-10.24-10.24V696.32a10.24 10.24 0 0 1 10.24-10.24z m-501.76 20.48H215.04v102.4h102.4V706.56z m491.52 0H460.8v102.4h348.16V706.56zM327.68 440.19712a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H204.8a10.24 10.24 0 0 1-10.24-10.24v-122.88a10.24 10.24 0 0 1 10.24-10.24z m491.52 0a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H450.56a10.24 10.24 0 0 1-10.24-10.24v-122.88a10.24 10.24 0 0 1 10.24-10.24z m-501.76 20.48H215.04v102.4h102.4v-102.4z m491.52 0H460.8v102.4h348.16v-102.4zM327.68 194.56a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H204.8a10.24 10.24 0 0 1-10.24-10.24V204.8a10.24 10.24 0 0 1 10.24-10.24z m491.52 0a10.24 10.24 0 0 1 10.24 10.24v122.88a10.24 10.24 0 0 1-10.24 10.24H450.56a10.24 10.24 0 0 1-10.24-10.24V204.8a10.24 10.24 0 0 1 10.24-10.24z m-501.76 20.48H215.04v102.4h102.4V215.04z m491.52 0H460.8v102.4h348.16V215.04z" p-id="2647" fill="#ffffff"></path></svg>
        </article>
        <!-- 删除或者新建 -->
        <article class="notepad_header_option">
            <svg @click="removeNote" t="1642426275804" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4681" width="24" height="24"><path d="M256 256h554.666667v640H256V256z m42.666667 42.666667v554.666666h469.333333V298.666667H298.666667z m128 128h42.666666v298.666666h-42.666666v-298.666666z m170.666666 0h42.666667v298.666666h-42.666667v-298.666666zM213.333333 256h640v42.666667H213.333333V256z m213.333334-85.333333h213.333333v42.666666h-213.333333V170.666667z" fill="#ffffff" p-id="4682"></path></svg>
            <svg @click="addNote" t="1642426333096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5560" width="21" height="22"><path d="M512 884.736H197.973333c-32.768 0-59.392-26.624-59.392-59.392V197.973333c0-32.768 26.624-59.392 59.392-59.392h628.053334c32.768 0 59.392 26.624 59.392 59.392v314.026667c0 11.605333-8.874667 20.48-20.48 20.48s-20.48-8.874667-20.48-20.48V197.973333c0-9.557333-8.874667-18.432-18.432-18.432H197.973333c-9.557333 0-18.432 8.874667-18.432 18.432v627.370667c0 9.557333 8.874667 18.432 18.432 18.432h314.026667c11.605333 0 20.48 8.874667 20.48 20.48s-8.874667 20.48-20.48 20.48z" p-id="5561" fill="#ffffff"></path><path d="M864.256 408.917333H159.744c-11.605333 0-20.48-8.874667-20.48-20.48s8.874667-20.48 20.48-20.48h704.512c11.605333 0 20.48 8.874667 20.48 20.48s-8.874667 20.48-20.48 20.48zM864.256 708.608H512c-11.605333 0-20.48-8.874667-20.48-20.48s8.874667-20.48 20.48-20.48h352.256c11.605333 0 20.48 8.874667 20.48 20.48s-8.874667 20.48-20.48 20.48z" p-id="5562" fill="#ffffff"></path><path d="M688.128 884.736c-11.605333 0-20.48-8.874667-20.48-20.48V512c0-11.605333 8.874667-20.48 20.48-20.48s20.48 8.874667 20.48 20.48v352.256c0 11.605333-8.874667 20.48-20.48 20.48z" p-id="5563" fill="#ffffff"></path></svg>
        </article>
        <!-- 字体 -->
        <fontStyle :changeStyle="changeStyle"/>
        <!-- 翻译 -->
        <translate  :changeStyle="changeStyle"/>
        <!-- 语音 -->
        <!-- <voice /> -->
        <!-- 其他选项-设置该笔记密码-上传图片 -->
        <uploadImg :changeEncryption="changeEncryption" :handleExceed="handleExceed" :addImage="addImage" :curNote="curNote"/>
        <!-- 搜索笔记 -->
        <!-- <article class="notepad_header_search"> -->
            <!-- <svg t="1642429187757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10613" width="24" height="24"><path d="M490.666667 810.666667C315.733333 810.666667 170.666667 665.6 170.666667 490.666667S315.733333 170.666667 490.666667 170.666667 810.666667 315.733333 810.666667 490.666667 665.6 810.666667 490.666667 810.666667z m0-42.666667c153.6 0 277.333333-123.733333 277.333333-277.333333S644.266667 213.333333 490.666667 213.333333 213.333333 337.066667 213.333333 490.666667 337.066667 768 490.666667 768z m264.533333-42.666667l119.466667 119.466667-29.866667 29.866667-119.466667-119.466667 29.866667-29.866667z" fill="#ffffff" p-id="10614"></path></svg> -->
        <!-- </article> -->
        
        <el-autocomplete
            v-model="input"
            size="small"
            popper-class="autocomplete"
            :fetch-suggestions="querySearchAsync"
            placeholder="输入关键字搜索笔记"
            @select="handleSelect"
        >
            <template #default="{ item }">
                <div class="search_content">
                    <span v-html="item.subtitle" />
                    <span v-html="item.content" />
                </div>
            </template>
        </el-autocomplete>
        <!-- 推出登录 -->
        <article class="notepad_header_loginc">
            <svg @click="unLogin" t="1642772009937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662" width="24" height="24"><path d="M512.004605 941.79372c-213.295897 0-386.809743-173.530219-386.809743-386.809743 0-143.214772 78.666664-274.021957 205.252711-341.496721 10.536984-5.564739 23.50432-1.614777 29.084409 8.857738 5.628184 10.472516 1.599428 23.50432-8.857738 29.084409-112.563682 59.959603-182.500521 176.280866-182.500521 303.554574 0 189.567473 154.247037 343.830883 343.830883 343.830883 189.599196 0 343.830883-154.263409 343.830883-343.830883 0-126.889969-69.584821-243.066945-181.605128-303.154461-10.457166-5.564739-14.437827-18.59552-8.809643-29.068036 5.580089-10.472516 18.675338-14.374382 29.084409-8.794293 125.994576 67.554582 204.309222 198.217481 204.309222 341.016791C898.814348 768.263501 725.315852 941.79372 512.004605 941.79372L512.004605 941.79372zM512.004605 576.50513c-11.864212 0-21.441335-9.641591-21.441335-21.521153L490.56327 103.737666c0-11.879562 9.577123-21.521153 21.441335-21.521153 11.879562 0 21.537526 9.641591 21.537526 21.521153l0 451.246311C533.54213 566.863539 523.884167 576.50513 512.004605 576.50513L512.004605 576.50513z" p-id="2663" fill="#ffffff"></path></svg>
        </article>
        <!-- 设置 -->
        <setup />
    </nav>
    <section class="notepad_sidebar">
        <article :style="{width: layoutType == 2? '160px' : '320px',minWidth: layoutType == 2? '120px':'280px'}" class="notepad_sidebar_left">
            <nav :class="{notepad_list:layoutType == 2,notepad_list_box:layoutType == 1}">
                <div @dblclick="preEditSubtitle" draggable="true" @click="noteChange(item)" :class="{notepad_item:true,notepad_item_cur:curNote.noteid == item.noteid}" v-for="item in noteList" :key="item.noteid">
                    <svg @click="concealClick" v-show="item.lock" t="1642752345538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1689" width="12" height="12"><path d="M385.150849 385.662338l-128.895105 0 0-150.377622q0-49.102897 19.436563-91.556444t53.706294-74.677323 80.815185-50.637363 101.786214-18.413586q49.102897 0 94.625375 18.413586t80.815185 50.637363 56.263736 74.677323 20.971029 91.556444l0 150.377622-123.78022 0 0-121.734266q0-64.447552-35.804196-99.74026t-97.182817-35.292707q-55.240759 0-88.999001 35.292707t-33.758242 99.74026l0 121.734266zM826.053946 447.040959q27.62038 0 47.568432 19.948052t19.948052 47.568432l0 317.122877q0 27.62038-9.718282 51.66034t-26.597403 41.942058-39.896104 28.131868-50.637363 10.22977l-516.603397 0q-27.62038 0-50.125874-10.22977t-38.361638-27.108891-24.551449-39.384615-8.695305-48.07992l0-324.283716q0-27.62038 19.436563-47.568432t47.056943-19.948052l61.378621 0 128.895105 0 255.744256 0 123.78022 0 61.378621 0z" p-id="1690" fill="#ffffff"></path></svg>
                    <el-input
                        v-model="item.subtitle"
                        @change="subtitleChange"
                        debounce
                        focus
                        class="el_input"
                        :disabled="disabled"
                        placeholder="双击此处设置标题"
                        />
                    <dir class="notepad_item_b">{{item.latestTime}}</dir>
                </div>
                <el-empty image="https://6865-heynu-dk4kq-1302499346.tcb.qcloud.la/external/empty_note.png?sign=1c52f24622f0b2293bf24c6a5094b712&t=1642520550" description="新增一条笔记吧～" v-if="!noteList.length" :image-size="70" />
            </nav>
        </article>
        <middle class="middle"></middle>
        <article contenteditable allowDrop :class="`notepad_sidebar_cont`" />
    </section>
    <!-- 登陆弹窗 -->
    <dialogLogin 
        :dialogVisible="loginDialog"
        @DialogVisible="changeLoginDialog"
        />
    <el-dialog v-model="unlockVisible" :title="unlockTitle">
        <el-input v-model="unlockValue" placeholder="请输入密码" clearable />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="unlockVisible = false">取消</el-button>
                <el-button type="primary" @click="unlockChange">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style lang="scss" scope>
@import '@renderer/styles/style.scss';
// .el-overlay {
//     background-color:rgba(0,0,0,0.9);
// }
.notepad_header {
    width: 100%;
    background: rgb(38,39,42);
    border-bottom:1px solid rgb(11,12,11) ;
    height: 52px;
    position: fixed;
    top: 0;
    padding-left: 80px;
    padding-right: 20px;
    @extend %Flex-Center-Start;
    .notepad_header_layout {
        @extend %Flex-Center-Start;
        padding:4px 12px;
        background: #bba14c;
        @include BR(6px);
        opacity: .9;
        transition: .3s;
        &:hover {
            opacity: 1;
        }
        svg {
            transition: .35s;
            margin-right: 2px;
            &:hover {
               transform: scale(1.2);
            }
        }
        .layout_sel {
            background: $color-default-derived-06;
            // border:1px solid  $color-default-derived-02;
            @include BR(4px);
        }
    }
    .notepad_header_option {
        @extend %Flex-Center-Start;
        padding:4px 12px;
        svg {
            @include BR(2px);
            transition: .35s;
            box-sizing: content-box;
            opacity: .9;
            &:hover {
                opacity: 1;
                background: $color-default-derived-08;
            }
        }
        svg:nth-of-type(1) {
            padding: 2px;
            margin: 0 6px 0 12px;
        }
        svg:nth-of-type(2){
            padding: 3px;
        }
    }
    // .notepad_header_search {
    //     @extend %Flex-Center-Start;
    //         padding-left: 64px;
    //     svg {
    //         @include BR(3px);
    //         transition: .35s;
    //         box-sizing: content-box;
    //         opacity: .9;
    //         padding: 3px;
    //         margin-right: 12px;
    //         &:hover {
    //             opacity: 1;
    //             background: $color-default-derived-06;
    //         }
    //     }
    // }
    .notepad_header_loginc {
        @extend %Flex-Center-Start;
            padding-left: 64px;
        svg {
            @include BR(3px);
            transition: .35s;
            box-sizing: content-box;
            opacity: .9;
            padding: 3px;
            margin-right: 12px;
            &:hover {
                opacity: 1;
                background: $color-default-derived-06;
            }
        }
    }
}
.autocomplete {
    .el-scrollbar {
        li {
            line-height: 20px;
            padding: 0 6px;
        }
    }
    .search_content {
        padding: 0 2px;
        margin: 4px 0;
        position: relative;
        background: $color-default-derived-06;
        @include BR(3px);
        &:hover{
            transition: .3s;
            background: #bba14c;
        }
        span:nth-of-type(1) {
            padding: 10px 8px 0 8px;
            display: block;
            color: $color-primary-derived-08;
            font-size: 14px;
            border-radius: 3px 3px 0 0;
        }
        span:nth-of-type(2) {
            padding: 5px 8px 8px 8px;
                @extend %OVT;
                display: block;
                font-size: 12px;
                color: $color-default-derived-02;
                border-radius: 0 0 3px 3px;
            span {
                padding: 5px 0 8px 0;
                @extend %OVT;
                display: block;
                font-size: 12px;
                color: $color-default-derived-02;
                border-radius: 0 0 3px 3px;
            }
            
        }
    }
}

.middle {
    display: block;
    width: 2px;
    cursor: col-resize;
    background: $color-default-derived-08;
    height: 100%;
    &:hover {
        background: rgba(11,12,11,0.5);
        transition: .2s;
        // transform: scaleX(3);
    }
}
.encryption {
    position: absolute;
    right: 0;
}
.notepad_sidebar {
    height: calc(100% - 52px);
    position: fixed;
    left: 0;
    width: 100%;
    background: $color-default-derived-06;
    top: 52px;
    display: flex;
    position: relative;
    .notepad_sidebar_left {
        transition: all .3s;
        width: 160px;
        .notepad_list {
            height: 100%;
            overflow-y: auto;
            .el-empty {
                transition: .3s;
                height: 80%;
            }
            .notepad_item {
                cursor: pointer;
                @include Flex-Direction(column);
                @extend %Flex-Start-Between;
                @include BR(6px);
                margin: 8px 6px;
                padding: 11px 20px;
                position: relative;
                height: 60px;
                svg {
                    position:absolute;
                    right: 6px;
                    top: 8px;
                }
                .el_input {
                    height: 20px !important;
                    line-height: 20px !important;
                    @extend %Max-Width;
                    margin-left: -4px;
                    input {
                        height: 20px !important;
                        line-height: 20px !important;
                        background: none;
                        border: none;
                        padding: 0;
                        @extend %OVT;
                        @extend %Max-Width;
                        color: $color-primary-derived-08;
                        font-size: 13px;
                        font-weight: 500;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                    }
                }
                .notepad_item_b {
                    color: $color-default-derived-02;
                    @extend %Max-Width;
                    @extend %OVT;
                    font-size: 12px;
                    font-family:Verdana, Geneva, Tahoma, sans-serif;
                }
                transition: all .3s;
                &:hover { 
                    background: $color-default-derived-08;
                    &::after {
                        content: "";
                        background: none
                    }
                }
                position: relative;
                &::after {
                    content: "";
                    width: calc(100% - 44px);
                    bottom: 0px;
                    position: absolute;
                    background: $color-default-derived-04;
                    height: 1px;
                    transform: scaleY(.5);
                }
            }
            .notepad_item_cur {
                background: #665b34 !important;
                opacity: .9;
                &:hover { 
                    background: #bba14c !important;
                    opacity: 1;
                }
                &::after {
                    content: "";
                    background: none
                }
            }
        }
        .notepad_list_box {
            height: 100%;
            overflow-y: auto;
            padding-bottom: 14px;
            transition: .3s;
            .el-empty {
                transition: .6s;
                height: 100%;
                width: 100%;
                margin-top: 40%;
            }
            min-width: 280px;
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(auto-fill, 70px);
            @keyframes mymove {
                0%{
                    width: 0;
                    opacity: 0;
                }
                30% {
                    opacity: 0;
                    transform: rotate(0);
                }
                // 65% {
                //     transform: rotate(10deg) scale(.6) translateX(-20px);
                // }
                100%{
                    width: calc(100% - 20px);
                }
            }
            .notepad_item {
                animation:mymove .8s 1 forwards;
                position: relative;
	            -webkit-animation:mymove .8s 1 forwards; /*Safari and Chrome*/
                cursor: pointer;
                @include Flex-Direction(column);
                @extend %Flex-Start-Between;
                @include BR(6px);
                margin:10px;
                padding: 11px 20px;
                height: 60px;
                border:1px solid $color-default-derived-04;
                svg {
                    position:absolute;
                    right: 6px;
                    top: 8px;
                }
                .el_input {
                    height: 20px !important;
                    line-height: 20px !important;
                    @extend %Max-Width;
                    margin-left: -4px;
                    input {
                        height: 20px !important;
                        line-height: 20px !important;
                        background: none;
                        border: none;
                        padding: 0;
                        @extend %OVT;
                        @extend %Max-Width;
                        color: $color-primary-derived-08;
                        font-size: 14px;
                        font-weight: 500;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                    }
                }
                .notepad_item_b {
                    color: $color-default-derived-02;
                    @extend %Max-Width;
                    @extend %OVT;
                    font-size: 12px;
                    font-family:Verdana, Geneva, Tahoma, sans-serif;
                }
                transition: all .3s;
                &:hover { 
                    background: $color-default-derived-08;
                    &::after {
                        content: "";
                        background: none
                    }
                }
            }
            .notepad_item_cur {
                background: #665b34 !important;
                opacity: .9;
                border: none;
                &:hover { 
                    background: #bba14c !important;
                    opacity: 1;
                }
                &::after {
                    content: "";
                    background: none
                }
            }
        }
    }
    .notepad_sidebar_cont {
        color: $color-primary-derived-08;
        border: none;
        outline: none;
        padding: 18px 12px;
        flex: 1;
        margin-right: 2px;
        height: 100%;
        overflow-y: auto;
        font-family:'Courier New', Courier, monospace;
        &:hover{
            transition: .3s;
            background:  $color-default-derived-08;
        }
        img {
            width: 120px;
            height: auto;
        }
    }
}
</style>
<script src="./index.ts" />
