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
        <!-- 选中内容字体处理 -->
        <article class="notepad_header_text">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <svg t="1642425056499" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1289" width="24" height="24"><path d="M821.400722 942.593945h-7.375991c-22.476921 0-42.587957-13.967106-50.436716-35.029817l-61.736063-165.670204c-7.848759-21.062711-27.958772-35.029818-50.436716-35.029818H368.32474c-22.848381 0-43.207058 14.425547-50.78157 35.982516l-57.540508 163.765831c-7.574512 21.556968-27.933189 35.982516-50.78157 35.982516h-6.620791c-37.697577 0-63.717184-37.752836-50.299593-72.982198L439.295118 116.068506c7.950066-20.8734 27.963888-34.667567 50.299593-34.667568h44.810578c22.335704 0 42.35055 13.794168 50.299593 34.667568l286.99441 753.543241c13.418614 35.229362-12.600993 72.982198-50.29857 72.982198zM494.209822 251.526617L391.187447 537.502837c-12.636808 35.07689 13.355169 72.067362 50.63933 72.067362h135.677099c37.346583 0 63.342654-37.105083 50.588166-72.206532L524.231579 251.526617a33.022091 33.022091 0 0 1-0.181125-0.52291c-4.951779-14.642488-25.703405-14.370289-29.840632 0.52291z" fill="#bba14c" p-id="1290"></path><path d="M821.399699 958.708971h-7.379061c-29.045523 0-55.369052-18.291598-65.518203-45.519729L686.744883 747.514945c-5.459339-14.672164-19.667945-24.537859-35.323507-24.537859H368.329856c-15.986089 0-30.28884 10.132778-35.590589 25.214264l-57.540508 163.762761c-9.818623 27.959795-36.33044 46.75486-65.973574 46.75486h-6.623861a69.940932 69.940932 0 0 1-57.587579-30.257117 69.920466 69.920466 0 0 1-7.773034-64.573691L424.234097 110.329804C434.492742 83.392292 460.753849 65.290005 489.594711 65.290005h44.811602c28.840862 0 55.101969 18.102287 65.360613 45.039799L886.760313 863.878163a69.920466 69.920466 0 0 1-7.773034 64.573691 69.940932 69.940932 0 0 1-57.58758 30.257117zM368.329856 690.753173h283.092544c29.045523 0 55.384401 18.291598 65.518202 45.511544l61.757553 165.674296c5.460362 14.680351 19.667945 24.546046 35.323506 24.546046h7.379061c12.58769 0 23.916712-5.947456 31.05939-16.316617 7.143701-10.360975 8.66945-23.059182 4.185322-34.82004L569.650001 121.800044c-5.522784-14.530948-19.699668-24.286126-35.244712-24.286126h-44.811602c-15.545044 0-29.721929 9.755178-35.244712 24.286126L167.354566 875.348402c-4.484128 11.761881-2.958378 24.459065 4.185322 34.82004 7.143701 10.369162 18.4717 16.316617 31.05939 16.316617h6.623861c15.986089 0 30.272467-10.132778 35.57524-25.206078L302.33991 737.499847c9.833973-27.959795 36.362162-46.746674 65.989946-46.746674z m209.171974-65.068971H441.824731c-22.75219 0-44.135196-11.107989-57.20998-29.721928-13.091156-18.622126-16.284895-42.514279-8.575306-63.920822l103.013165-285.971104c3.477194-12.697183 15.687284-21.99699 30.020734-21.99699 13.893428 0 25.756617 8.543583 30.241768 21.760607L643.22367 531.860327c7.788383 21.414729 4.641717 45.346791-8.434089 64.014966-13.074783 18.661012-34.488489 29.80891-57.287751 29.808909z m-68.318992-368.356462L406.343635 542.961152c-4.217045 11.713786-2.533706 24.27794 4.626367 34.474163 7.15905 10.17985 18.409279 16.024975 30.854729 16.024975h135.677099c12.477172 0 23.727401-5.861498 30.886451-16.073071 7.15905-10.219759 8.81169-22.799262 4.562922-34.521234L509.182838 257.32774z m-0.109494-17.142426l-0.015349 16.111956h0.031722l-0.016373-16.111956z" fill="#bba14c" p-id="1291"></path></svg>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <!-- 调整为粗体 -->
                        <svg @click="changeStyle({command:'bold'})" t="1642430120162" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15632" width="24" height="24"><path d="M768.96 575.072c-22.144-34.112-54.816-56.8-97.984-68.032v-2.176c22.88-10.88 42.112-23.04 57.696-36.48 15.616-12.704 27.584-26.144 35.936-40.288 16.32-29.76 24.128-60.96 23.392-93.632 0-63.872-19.776-115.232-59.328-154.08-39.2-38.464-97.824-58.048-175.84-58.784H215.232v793.728H579.52c62.432 0 114.496-20.864 156.256-62.624 42.112-39.936 63.52-94.176 64.224-162.752 0-41.376-10.336-79.68-31.04-114.88zM344.32 228.832h194.912c43.904 0.736 76.224 11.424 96.896 32.128 21.056 22.144 31.584 49.184 31.584 81.12s-10.528 58.432-31.584 79.488c-20.672 22.848-52.992 34.304-96.896 34.304H344.32V228.832z m304.352 536.256c-20.672 23.584-53.344 35.744-97.984 36.48H344.32v-238.432h206.336c44.64 0.704 77.312 12.512 97.984 35.392 20.672 23.232 31.04 51.168 31.04 83.84 0 31.904-10.336 59.488-31.008 82.72z" p-id="15633" fill="#bba14c"></path></svg>
                        <!--调整为斜体-->
                        <svg @click="changeStyle({command:'italic'})" t="1642429758642" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15253" width="24" height="24"><path d="M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z" p-id="15254" fill="#bba14c"></path></svg>
                        <!-- 添加下划线 -->
                        <svg @click="changeStyle({command:'underline'})" t="1642430158409" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15851" width="24" height="24"><path d="M512 811.296a312 312 0 0 0 312-312V89.6h-112v409.696a200 200 0 1 1-400 0V89.6h-112v409.696a312 312 0 0 0 312 312zM864 885.792H160a32 32 0 0 0 0 64h704a32 32 0 0 0 0-64z" p-id="15852" fill="#bba14c"></path></svg>
                        <!-- 添加删除线 -->
                        <svg @click="changeStyle({command:'strikeThrough'})" t="1642430238569" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17065" width="24" height="24"><path d="M756.037818 539.624727c61.998545 40.634182 93.486545 96.977455 93.486546 169.053091 0 71.493818-30.487273 128.954182-90.274909 171.194182-57.437091 39.796364-133.632 59.764364-228.584728 59.764364-96.116364 0-172.334545-22.272-227.421091-65.629091-63.301818-50.408727-98.443636-126.650182-105.495272-227.421091h70.330181c8.215273 78.498909 35.165091 137.146182 82.059637 175.825454 42.193455 34.001455 102.004364 51.595636 179.362909 51.595637 73.844364 0 133.632-15.290182 179.339636-43.426909 44.544-29.253818 68.002909-69.12 68.002909-118.365091 0-57.437091-29.323636-101.981091-85.597091-133.632-18.338909-10.705455-50.641455-23.901091-97.256727-38.958546H221.090909a34.909091 34.909091 0 0 1 0-69.818182h145.105455c-22.853818-8.448-39.959273-15.965091-51.2-22.528-64.512-36.328727-96.162909-89.088-96.162909-157.044363 0-72.680727 29.323636-127.790545 90.298181-166.469818C363.008 87.412364 433.338182 69.818182 517.748364 69.818182c91.461818 0 164.119273 22.272 218.018909 66.816 55.109818 44.544 86.760727 110.173091 93.789091 196.957091h-71.517091c-9.355636-65.629091-33.978182-114.874182-73.844364-148.875637-39.866182-34.001455-96.116364-50.408727-168.797091-50.408727-68.002909 0-120.738909 11.729455-159.418182 35.141818-44.544 25.832727-65.629091 65.675636-65.629091 118.411637 0 46.917818 25.762909 83.223273 78.49891 111.36 24.669091 11.729455 78.545455 30.510545 160.628363 53.922909 20.014545 5.725091 38.772364 11.264 56.32 16.663272H826.181818a34.909091 34.909091 0 0 1 0 69.818182h-70.144z" fill="#bba14c" p-id="17066"></path></svg>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <!-- 调整字体 -->
                        <span class="notepad_header_text_fontname" @click="changeStyle({command:'fontName',value:item.value})" :style="{fontFamily: item.value}" v-for="item in fontNames" :key="item.value">
                            {{ item.name }}
                        </span>
                    </el-dropdown-item>
                    <el-dropdown-item v-for="item in fontSizes" :key="item.value">
                        <!-- 调整字号 -->
                        <span class="notepad_header_text_fontsize" @click="changeStyle({command:'fontSize',value:item.value})">
                            <font :size="item.value">{{ item.name }}</font>
                        </span>
                    </el-dropdown-item>
                    <!-- <el-dropdown-item v-for="item in backColors" :key="item.value">
                        调整背景色
                        <span class="notepad_header_text_backcolor" @click="changeStyle({command:'backColor',value:item.value})" :style="{backgroundColor: item.value}" >
                            {{ item.name }}
                        </span>
                    </el-dropdown-item> -->
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-color-picker size="small" @active-change="colorChange" show-alpha />
        </article>
        <!-- 翻译 -->
        <translate  :onTranslate="onTranslate"/>
        <!-- 其他选项-设置该笔记密码-上传图片 -->
        <article class="notepad_header_other">
            <svg @click="changeEncryption(false)" v-if="curNote?.lock" t="1642428741806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7519" width="24" height="24"><path d="M782.56543127 859.61428833H241.43456873a38.33276506 38.33276506 0 0 1-38.33276441-38.33276507v-310.49539439a38.33276506 38.33276506 0 0 1 38.33276441-38.33276439h541.13086254a38.33276506 38.33276506 0 0 1 38.33276441 38.33276438v310.49539439a38.33276506 38.33276506 0 0 1-38.33276441 38.33276508zM241.43456873 498.00854118a12.77758836 12.77758836 0 0 0-12.77758837 12.77758768v310.4953944a12.77758836 12.77758836 0 0 0 12.77758837 12.77758835h541.13086254a12.77758836 12.77758836 0 0 0 12.77758837-12.77758835v-310.49539439a12.77758836 12.77758836 0 0 0-12.77758837-12.77758769z" fill="#ffffff" p-id="7520"></path><path d="M512.0638877 721.61633542a68.74342495 68.74342495 0 1 1 68.61564887-68.74342495 68.74342495 68.74342495 0 0 1-68.61564887 68.74342495z m0-111.80389712a43.18824824 43.18824824 0 1 0 43.06047284 43.06047216 43.18824824 43.18824824 0 0 0-43.06047284-43.06047216z" fill="#ffffff" p-id="7521"></path><path d="M515.00273294 777.70994742a12.77758836 12.77758836 0 0 1-12.77758767-12.77758835v-48.42705899a12.77758836 12.77758836 0 0 1 25.55517606 0V764.93235907a12.77758836 12.77758836 0 0 1-12.77758838 12.77758835zM706.66655698 497.62521293H300.59480207a12.77758836 12.77758836 0 0 1-12.77758767-12.77758767V372.66039987a11.88315711 11.88315711 0 0 1 1.14998274-5.11103534 215.43013822 215.43013822 0 0 1 430.22139601 2.81106984 7.02767327 7.02767327 0 0 1 0 2.29996551v112.18722538a12.77758836 12.77758836 0 0 1-12.52203617 12.77758767z m-393.29416655-25.55517604h380.51657819v-97.49299842-1.40553491a189.87496151 189.87496151 0 0 0-379.49437086 0 11.24427735 11.24427735 0 0 1-0.89443125 4.08882867z" fill="#ffffff" p-id="7522"></path></svg>
            <svg @click="changeEncryption(true)" v-else t="1642428986588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9669" width="24" height="24"><path d="M512 726.8352c-11.264 0-20.48-9.216-20.48-20.48V601.7024c0-11.264 9.216-20.48 20.48-20.48s20.48 9.216 20.48 20.48v104.5504c0 11.3664-9.216 20.5824-20.48 20.5824z" p-id="9670" fill="#ffffff"></path><path d="M790.3232 436.3264H324.7104l0.512-57.7536c0-101.9904 83.456-185.4464 185.4464-185.4464 82.432 0 152.7808 54.5792 176.7424 129.3312 3.6864 11.3664 16.384 17.2032 27.4432 12.4928 9.728-4.096 14.7456-14.9504 11.5712-24.9856-29.2864-91.2384-115.0976-157.696-215.6544-157.696-124.5184 0-226.4064 101.888-226.4064 226.4064l-0.512 57.6512h-50.176c-22.528 0-40.96 18.432-40.96 40.96v353.4848c0 22.528 18.432 40.96 40.96 40.96h556.6464c22.528 0 40.96-18.432 40.96-40.96V477.2864c0-22.528-18.432-40.96-40.96-40.96z m0 374.0672c0 11.264-9.216 20.48-20.48 20.48H254.1568c-11.264 0-20.48-9.216-20.48-20.48V497.5616c0-11.264 9.216-20.48 20.48-20.48h515.6864c11.264 0 20.48 9.216 20.48 20.48v312.832z" p-id="9671" fill="#ffffff"></path></svg>
            <el-upload
                action="http://localhost:25566/upload/note"
                :show-file-list="false"
                multiple
                :limit="3"
                :on-success="handleExceed"
            >
                <svg @click="addImage" t="1642428817304" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8244" width="24" height="24"><path d="M428.576 378.368a50.176 50.176 0 1 0-100.352 0 50.176 50.176 0 0 0 100.352 0m0 0z m166.944 256.448h41.504v-41.504c0-30.56 18.336-56.8 44.512-68.736l-6.944-23.808v-1.664h0.064l-45.408-137.184-158.496 204.512-42.496-71.968-168.576 170.112h276.096a75.36 75.36 0 0 1 59.744-29.76m267.712-361.664a112.704 112.704 0 0 0-112.384-112.384H273.152a112.704 112.704 0 0 0-112.384 112.384v477.664a112.704 112.704 0 0 0 112.384 112.384h337.184v-0.032l0.128 0.032a21.088 21.088 0 1 0 0-42.176l-0.128 0.032v-0.032H273.152a70.304 70.304 0 0 1-70.24-70.24V273.152c0-38.752 31.488-70.24 70.24-70.24h477.664c38.752 0 70.24 31.488 70.24 70.24v335.136c0 0.256-0.128 0.448-0.128 0.672a21.088 21.088 0 1 0 42.176 0l-0.064-0.256h0.192V273.152m-21.888 416.224h-107.424v-107.424a21.088 21.088 0 1 0-42.176 0v107.424H584.32a21.088 21.088 0 1 0 0 42.176h107.424v107.424a21.088 21.088 0 1 0 42.176 0V731.52h107.424a21.088 21.088 0 1 0 0-42.144" p-id="8245" fill="#ffffff"></path></svg>
            </el-upload>
        </article>
        <!-- 搜索笔记 -->
        <article class="notepad_header_search">
            <!-- <svg t="1642429187757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10613" width="24" height="24"><path d="M490.666667 810.666667C315.733333 810.666667 170.666667 665.6 170.666667 490.666667S315.733333 170.666667 490.666667 170.666667 810.666667 315.733333 810.666667 490.666667 665.6 810.666667 490.666667 810.666667z m0-42.666667c153.6 0 277.333333-123.733333 277.333333-277.333333S644.266667 213.333333 490.666667 213.333333 213.333333 337.066667 213.333333 490.666667 337.066667 768 490.666667 768z m264.533333-42.666667l119.466667 119.466667-29.866667 29.866667-119.466667-119.466667 29.866667-29.866667z" fill="#ffffff" p-id="10614"></path></svg> -->
        </article>
        
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
        <article class="notepad_header_loginc">
            <svg @click="unLogin" t="1642772009937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662" width="24" height="24"><path d="M512.004605 941.79372c-213.295897 0-386.809743-173.530219-386.809743-386.809743 0-143.214772 78.666664-274.021957 205.252711-341.496721 10.536984-5.564739 23.50432-1.614777 29.084409 8.857738 5.628184 10.472516 1.599428 23.50432-8.857738 29.084409-112.563682 59.959603-182.500521 176.280866-182.500521 303.554574 0 189.567473 154.247037 343.830883 343.830883 343.830883 189.599196 0 343.830883-154.263409 343.830883-343.830883 0-126.889969-69.584821-243.066945-181.605128-303.154461-10.457166-5.564739-14.437827-18.59552-8.809643-29.068036 5.580089-10.472516 18.675338-14.374382 29.084409-8.794293 125.994576 67.554582 204.309222 198.217481 204.309222 341.016791C898.814348 768.263501 725.315852 941.79372 512.004605 941.79372L512.004605 941.79372zM512.004605 576.50513c-11.864212 0-21.441335-9.641591-21.441335-21.521153L490.56327 103.737666c0-11.879562 9.577123-21.521153 21.441335-21.521153 11.879562 0 21.537526 9.641591 21.537526 21.521153l0 451.246311C533.54213 566.863539 523.884167 576.50513 512.004605 576.50513L512.004605 576.50513z" p-id="2663" fill="#ffffff"></path></svg>
        </article>
        <!-- <el-input size="small" v-model="input" placeholder="" /> -->
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
    .notepad_header_text {
        @extend %Flex-Center-Start;
        padding-left: 50px;
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
    .notepad_header_other {
        @extend %Flex-Center-Start;
        padding-left: 100px;
        .el-upload {
            @extend %Flex-Center-Center;
        }
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
    .notepad_header_search {
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
            overflow-y: scroll;
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
            overflow-y: scroll;
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
        overflow-y: scroll;
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

.notepad_header_text_icon {
    background: $color-primary-derived-02;
    @include BR(3px);
    transition: .35s;
    box-sizing: content-box;
    opacity: .9;
    padding: 3px;
    margin:0 10px;
    &:hover {
        opacity: 1;
        background: $color-default-derived-06;
    }
}
.notepad_header_text_fontname {
    @include BR(3px);
    color: #bba14c;
    transition: .35s;
    box-sizing: content-box;
    opacity: .9;
    padding:6px;
    margin: 0 5px;
    &:hover {
        opacity: 1;
        background: $color-default-derived-02;
    }
}
.notepad_header_text_fontsize {
    @include BR(3px);
    color: $color-default-derived-08;
    display: inline-block;
    height: fit-content;
    line-height: initial;
    transition: .35s;
    box-sizing: content-box;
    opacity: .9;
    padding:6px;
    margin: 0 3px;
    &:hover {
        opacity: 1;
        background: $color-default-derived-02;
    }
}
</style>
<script src="./index.ts" />
