<template>
	<article class="notepad_header_text">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <svg t="1642425056499" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1289" width="24" height="24"><path d="M821.400722 942.593945h-7.375991c-22.476921 0-42.587957-13.967106-50.436716-35.029817l-61.736063-165.670204c-7.848759-21.062711-27.958772-35.029818-50.436716-35.029818H368.32474c-22.848381 0-43.207058 14.425547-50.78157 35.982516l-57.540508 163.765831c-7.574512 21.556968-27.933189 35.982516-50.78157 35.982516h-6.620791c-37.697577 0-63.717184-37.752836-50.299593-72.982198L439.295118 116.068506c7.950066-20.8734 27.963888-34.667567 50.299593-34.667568h44.810578c22.335704 0 42.35055 13.794168 50.299593 34.667568l286.99441 753.543241c13.418614 35.229362-12.600993 72.982198-50.29857 72.982198zM494.209822 251.526617L391.187447 537.502837c-12.636808 35.07689 13.355169 72.067362 50.63933 72.067362h135.677099c37.346583 0 63.342654-37.105083 50.588166-72.206532L524.231579 251.526617a33.022091 33.022091 0 0 1-0.181125-0.52291c-4.951779-14.642488-25.703405-14.370289-29.840632 0.52291z" fill="#bba14c" p-id="1290"></path><path d="M821.399699 958.708971h-7.379061c-29.045523 0-55.369052-18.291598-65.518203-45.519729L686.744883 747.514945c-5.459339-14.672164-19.667945-24.537859-35.323507-24.537859H368.329856c-15.986089 0-30.28884 10.132778-35.590589 25.214264l-57.540508 163.762761c-9.818623 27.959795-36.33044 46.75486-65.973574 46.75486h-6.623861a69.940932 69.940932 0 0 1-57.587579-30.257117 69.920466 69.920466 0 0 1-7.773034-64.573691L424.234097 110.329804C434.492742 83.392292 460.753849 65.290005 489.594711 65.290005h44.811602c28.840862 0 55.101969 18.102287 65.360613 45.039799L886.760313 863.878163a69.920466 69.920466 0 0 1-7.773034 64.573691 69.940932 69.940932 0 0 1-57.58758 30.257117zM368.329856 690.753173h283.092544c29.045523 0 55.384401 18.291598 65.518202 45.511544l61.757553 165.674296c5.460362 14.680351 19.667945 24.546046 35.323506 24.546046h7.379061c12.58769 0 23.916712-5.947456 31.05939-16.316617 7.143701-10.360975 8.66945-23.059182 4.185322-34.82004L569.650001 121.800044c-5.522784-14.530948-19.699668-24.286126-35.244712-24.286126h-44.811602c-15.545044 0-29.721929 9.755178-35.244712 24.286126L167.354566 875.348402c-4.484128 11.761881-2.958378 24.459065 4.185322 34.82004 7.143701 10.369162 18.4717 16.316617 31.05939 16.316617h6.623861c15.986089 0 30.272467-10.132778 35.57524-25.206078L302.33991 737.499847c9.833973-27.959795 36.362162-46.746674 65.989946-46.746674z m209.171974-65.068971H441.824731c-22.75219 0-44.135196-11.107989-57.20998-29.721928-13.091156-18.622126-16.284895-42.514279-8.575306-63.920822l103.013165-285.971104c3.477194-12.697183 15.687284-21.99699 30.020734-21.99699 13.893428 0 25.756617 8.543583 30.241768 21.760607L643.22367 531.860327c7.788383 21.414729 4.641717 45.346791-8.434089 64.014966-13.074783 18.661012-34.488489 29.80891-57.287751 29.808909z m-68.318992-368.356462L406.343635 542.961152c-4.217045 11.713786-2.533706 24.27794 4.626367 34.474163 7.15905 10.17985 18.409279 16.024975 30.854729 16.024975h135.677099c12.477172 0 23.727401-5.861498 30.886451-16.073071 7.15905-10.219759 8.81169-22.799262 4.562922-34.521234L509.182838 257.32774z m-0.109494-17.142426l-0.015349 16.111956h0.031722l-0.016373-16.111956z" fill="#bba14c" p-id="1291"></path></svg>
            </span>
            <template #dropdown>
            <el-dropdown-menu style="padding: 20px 0">
                <el-dropdown-item>
                    <!-- 调整为粗体 -->
                    <svg @click="changeStyle({command:'bold'})" t="1642430120162" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15632" width="24" height="24"><path d="M768.96 575.072c-22.144-34.112-54.816-56.8-97.984-68.032v-2.176c22.88-10.88 42.112-23.04 57.696-36.48 15.616-12.704 27.584-26.144 35.936-40.288 16.32-29.76 24.128-60.96 23.392-93.632 0-63.872-19.776-115.232-59.328-154.08-39.2-38.464-97.824-58.048-175.84-58.784H215.232v793.728H579.52c62.432 0 114.496-20.864 156.256-62.624 42.112-39.936 63.52-94.176 64.224-162.752 0-41.376-10.336-79.68-31.04-114.88zM344.32 228.832h194.912c43.904 0.736 76.224 11.424 96.896 32.128 21.056 22.144 31.584 49.184 31.584 81.12s-10.528 58.432-31.584 79.488c-20.672 22.848-52.992 34.304-96.896 34.304H344.32V228.832z m304.352 536.256c-20.672 23.584-53.344 35.744-97.984 36.48H344.32v-238.432h206.336c44.64 0.704 77.312 12.512 97.984 35.392 20.672 23.232 31.04 51.168 31.04 83.84 0 31.904-10.336 59.488-31.008 82.72z" p-id="15633" fill="#bba14c"></path></svg>
                    <!--调整为斜体-->
                    <svg @click="changeStyle({command:'italic'})" t="1642429758642" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15253" width="24" height="24"><path d="M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z" p-id="15254" fill="#bba14c"></path></svg>
                    <!-- 添加下划线 -->
                    <svg @click="changeStyle({command:'underline'})" t="1642430158409" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15851" width="24" height="24"><path d="M512 811.296a312 312 0 0 0 312-312V89.6h-112v409.696a200 200 0 1 1-400 0V89.6h-112v409.696a312 312 0 0 0 312 312zM864 885.792H160a32 32 0 0 0 0 64h704a32 32 0 0 0 0-64z" p-id="15852" fill="#bba14c"></path></svg>
                    <!-- 添加删除线 -->
                    <svg @click="changeStyle({command:'strikeThrough'})" t="1642430238569" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17065" width="24" height="24"><path d="M756.037818 539.624727c61.998545 40.634182 93.486545 96.977455 93.486546 169.053091 0 71.493818-30.487273 128.954182-90.274909 171.194182-57.437091 39.796364-133.632 59.764364-228.584728 59.764364-96.116364 0-172.334545-22.272-227.421091-65.629091-63.301818-50.408727-98.443636-126.650182-105.495272-227.421091h70.330181c8.215273 78.498909 35.165091 137.146182 82.059637 175.825454 42.193455 34.001455 102.004364 51.595636 179.362909 51.595637 73.844364 0 133.632-15.290182 179.339636-43.426909 44.544-29.253818 68.002909-69.12 68.002909-118.365091 0-57.437091-29.323636-101.981091-85.597091-133.632-18.338909-10.705455-50.641455-23.901091-97.256727-38.958546H221.090909a34.909091 34.909091 0 0 1 0-69.818182h145.105455c-22.853818-8.448-39.959273-15.965091-51.2-22.528-64.512-36.328727-96.162909-89.088-96.162909-157.044363 0-72.680727 29.323636-127.790545 90.298181-166.469818C363.008 87.412364 433.338182 69.818182 517.748364 69.818182c91.461818 0 164.119273 22.272 218.018909 66.816 55.109818 44.544 86.760727 110.173091 93.789091 196.957091h-71.517091c-9.355636-65.629091-33.978182-114.874182-73.844364-148.875637-39.866182-34.001455-96.116364-50.408727-168.797091-50.408727-68.002909 0-120.738909 11.729455-159.418182 35.141818-44.544 25.832727-65.629091 65.675636-65.629091 118.411637 0 46.917818 25.762909 83.223273 78.49891 111.36 24.669091 11.729455 78.545455 30.510545 160.628363 53.922909 20.014545 5.725091 38.772364 11.264 56.32 16.663272H826.181818a34.909091 34.909091 0 0 1 0 69.818182h-70.144z" fill="#bba14c" p-id="17066"></path></svg>
                    <!-- 添加水平线 -->
                    <svg @click="changeStyle({command:'insertHorizontalRule'})" t="1648817104347" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24029" width="24" height="24"><path d="M62 462h900v100H62z" fill="#bba14c" p-id="24030"></path></svg>
                    <!-- 居中对齐 -->
                    <svg @click="changeStyle({command:'justifyCenter'})" t="1648720105434" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3802" width="24" height="24"><path d="M96 128h832v96H96zM96 576h832v96H96zM224 352h576v96H224zM224 800h576v96H224z" p-id="3803" fill="#bba14c"></path></svg>
                    <!-- 居中左对齐 -->
                    <svg @click="changeStyle({command:'justifyLeft'})" t="1648720238766" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3988" width="24" height="24"><path d="M96 128h832v96H96zM96 576h832v96H96zM96 352h576v96H96zM96 800h576v96H96z" p-id="3989" fill="#bba14c"></path></svg>
                    <!-- 居中右对齐 -->
                    <svg @click="changeStyle({command:'justifyRight'})" t="1648720321365" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4174" width="24" height="24"><path d="M96 128h832v96H96zM96 576h832v96H96zM352 352h576v96H352zM352 800h576v96H352z" p-id="4175" fill="#bba14c"></path></svg>
                    <!-- 快捷插入 表情 -->
                    <!-- <el-dropdown trigger="click"> -->
                        <el-tooltip placement="bottom">
                            <template #content>
                                <div class="notepad_header_text_emgs">
                                    <span v-for="item in fontEmgs" :key="item" @click="changeStyle({command:'insertHTML',value:item})" class="notepad_header_text_fontemg" v-html="item"></span>
                                </div>
                            </template>
                            <el-space>
                                <svg t="1648816974947" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22718" width="24" height="24"><path d="M512 464.455014m-448.014129 0a448.014129 448.014129 0 1 0 896.028258 0 448.014129 448.014129 0 1 0-896.028258 0Z" fill="#FFE585" p-id="22719"></path><path d="M412.803918 1024h197.290625a16.440885 16.440885 0 0 0 0-32.881771h-197.290625a16.440885 16.440885 0 0 0 0 32.881771z" fill="#6E6E96" opacity=".29" p-id="22720"></path><path d="M683.527758 1024h57.543099a16.440885 16.440885 0 0 0 0-32.881771h-57.543099a16.440885 16.440885 0 0 0 0 32.881771zM334.158942 991.118229h-45.212435a16.440885 16.440885 0 0 0 0 32.881771h45.212435a16.440885 16.440885 0 0 0 0-32.881771z" fill="#6E6E96" opacity=".17" p-id="22721"></path><path d="M522.555048 24.443486c-4.217087 0-8.421844 0.078094-12.614269 0.193181 223.698798 6.374953 403.085299 189.699047 403.085299 414.939177 0 229.268148-185.8601 415.132358-415.132358 415.132358s-415.132358-185.86421-415.132358-415.132358c0-36.104184 4.619889-71.143822 13.284236-104.5517a447.590776 447.590776 0 0 0-21.504678 137.433471c0 247.427106 200.582913 448.014129 448.014128 448.014129s448.014129-200.587023 448.014129-448.014129c0-247.431216-200.578803-448.014129-448.014129-448.014129z" fill="#FF9900" opacity=".24" p-id="22722"></path><path d="M100.977863 487.061232C100.977863 252.112758 291.437301 61.65332 526.385775 61.65332c229.851799 0 417.092934 182.300648 425.107865 410.187762 0.18085-5.182989 0.300046-10.378309 0.300046-15.60651C951.793686 208.807466 751.210773 8.220443 503.779557 8.220443S55.765428 208.807466 55.765428 456.234572c0 205.954972 138.999466 379.435085 328.308042 431.819856C219.117956 829.496105 100.977863 672.099288 100.977863 487.061232z" fill="#FFEFB5" p-id="22723"></path><path d="M652.105116 872.784956C607.135184 888.206507 559.995055 896.028258 512 896.028258 274.030514 896.028258 80.426757 702.424501 80.426757 464.455014S274.030514 32.881771 512 32.881771c237.965376 0 431.573243 193.603757 431.573243 431.573243 0 91.316788-28.163237 178.585008-81.439926 252.371702a16.440885 16.440885 0 0 0 26.654786 19.256388C946.138022 656.653076 976.455014 562.726297 976.455014 464.455014 976.455014 208.355341 768.103783 0 512 0S47.544986 208.355341 47.544986 464.455014s208.351231 464.455014 464.455014 464.455015c51.632601 0 102.352732-8.421844 150.779361-25.027138a16.432665 16.432665 0 0 0 10.209789-20.884035 16.432665 16.432665 0 0 0-20.884034-10.2139z" fill="#6E6E96" p-id="22724"></path><path d="M242.509226 467.463696c1.282389 1.533113 31.973412 37.550982 78.246284 39.585542 30.004616 1.323491 58.846039-11.640147 85.730997-38.520994a16.440885 16.440885 0 0 0-23.251522-23.251523c-20.004447 20.008558-40.452799 29.741562-60.773733 28.935959-31.706248-1.261838-54.563189-27.653569-54.789251-27.916624l0.045213 0.053433a16.440885 16.440885 0 0 0-25.207988 21.114207zM587.7596 467.463696c1.282389 1.533113 31.969302 37.550982 78.242174 39.585542 30.004616 1.323491 58.846039-11.640147 85.726887-38.520994a16.440885 16.440885 0 1 0-23.247412-23.251523c-20.004447 20.008558-40.456909 29.741562-60.773733 28.935959-31.710358-1.261838-54.563189-27.653569-54.789251-27.916624l0.049323 0.053433a16.449106 16.449106 0 0 0-23.169318-2.04278 16.436775 16.436775 0 0 0-2.03867 23.156987z" fill="#6E6E96" p-id="22725"></path><path d="M614.587015 756.408148c0-52.610833-51.028398-95.262601-113.972328-95.2626S386.638248 703.797315 386.638248 756.408148h227.948767z" fill="#C7A17B" p-id="22726"></path><path d="M631.027901 756.408148c0-30.399197-13.954202-58.809047-39.281386-79.972577-24.476368-20.464792-56.844361-31.730909-91.131828-31.730909-34.291577 0-66.65546 11.262007-91.135939 31.730909-25.331294 21.16353-39.281386 49.57338-39.281385 79.972577a16.440885 16.440885 0 0 0 16.440885 16.440886h227.948767a16.440885 16.440885 0 0 0 16.440886-16.440886z m-227.948767 0c0-43.461481 43.753306-78.821715 97.535553-78.821715 53.778136 0 97.531443 35.360234 97.531443 78.821715a16.440885 16.440885 0 0 1 16.440885-16.440885H386.638248a16.440885 16.440885 0 0 1 16.440886 16.440885z" fill="#6E6E96" p-id="22727"></path><path d="M681.369892 698.392374c-25.775198-74.756706-73.305798-117.239954-73.305798-117.239955s308.652963 151.067076 201.852971 257.858848c-83.606013 65.451165-98.23018-52.713589-128.547173-140.618893z" fill="#89E0F5" p-id="22728"></path><path d="M696.910639 693.032645c-26.860297-77.909246-75.821254-122.287306-77.888695-124.136906a16.440885 16.440885 0 1 1-18.18773 27.024706c55.590744 27.230217 202.494166 113.544865 214.364486 184.910639 2.844273 17.098521-2.679864 32.326891-16.905341 46.552367 0.464455-0.464455 0.961792-0.912469 1.48379-1.315271-16.173721 12.651261-29.092147 17.567086-38.410019 14.603616-21.833496-6.954495-36.807032-57.201951-50.021394-101.534798-4.550015-15.310575-9.272659-31.139037-14.435097-46.104353z m124.634242 157.602328c21.977354-21.973243 30.748566-47.275766 26.099906-75.217051-17.094411-102.599346-223.567271-204.738347-232.342593-209.033528a16.440885 16.440885 0 0 0-18.18773 27.024705c0.427463 0.37814 44.780862 40.896703 68.722901 110.343003 4.932266 14.307681 9.548044 29.799105 14.015855 44.780862 17.045088 57.206061 33.148935 111.234921 71.546623 123.46694 20.592209 6.568134 43.054569 0.012331 68.661248-20.037329 0.513778-0.415132 1.007004-0.854926 1.48379-1.327602z" fill="#6E6E96" p-id="22729"></path></svg>
                            </el-space>
                        </el-tooltip>
                    <!-- </el-dropdown> -->
                    <!-- 快捷插入 卡片 -->
                    <!-- <el-dropdown trigger="click"> -->
                        <el-tooltip placement="bottom">
                            <template #content>
                                <div class="notepad_header_text_cards">
                                    <div v-for="(item, key) in fontCards" :key="key" @click="changeStyle({command:'insertHTML',value:item.vm})" v-html="item.vm"></div>
                                </div>
                            </template>
                            <el-space>
                                <svg v-if="userInfo?.uid === '麻油百香果'" t="1648815460155" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11409" width="24" height="24"><path d="M1024 239.189333C1024 169.927111 965.034667 113.777778 892.330667 113.777778H131.697778C58.965333 113.777778 0 169.927111 0 239.189333V813.226667C0 882.517333 58.965333 938.666667 131.669333 938.666667H892.302222C965.034667 938.666667 1024 882.517333 1024 813.255111V239.217778zM131.669333 197.376H892.302222c24.149333 0 43.889778 18.830222 43.889778 41.813333v101.717334H87.779556V239.189333c0-22.983111 19.740444-41.813333 43.889777-41.813333zM892.302222 855.068444H131.697778c-24.149333 0-43.889778-18.830222-43.889778-41.813333V424.504889h848.440889v388.750222c0 22.983111-19.740444 41.813333-43.889778 41.813333z m-509.070222-189.496888H184.32c-24.291556 0-43.889778 18.659556-43.889778 41.813333 0 23.096889 19.626667 41.784889 43.889778 41.784889h198.940444c24.291556 0 43.889778-18.688 43.889778-41.813334s-19.598222-41.813333-43.889778-41.813333z" p-id="11410" fill="#bba14c"></path></svg>
                            </el-space>
                        </el-tooltip>
                    <!-- </el-dropdown> -->
                    <!-- 添加动画 xss -->
                    <!-- <el-dropdown trigger="click"> -->
                        <el-tooltip placement="bottom">
                            <template #content>
                                <div class="notepad_header_text_animis">
                                    <nav v-for="(item, key) in fontAnimis" :key="key" @click="changeAnimis(item)" :class="`${ showAnimis === '允许加载动画' ? 'nr' : ''} ${item}`">
                                        <div class="cover" />
                                    </nav>
                                </div>
                            </template>
                            <el-space>
                                <svg v-if="userInfo?.uid === '麻油百香果'" xmlns="http://www.w3.org/2000/svg" class="notepad_header_text_icon" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50" xml:space="preserve">
                                    <rect x="0" y="0" width="4" height="10" fill="#bba14c" transform="translate(0 9.4336)">
                                        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                                    </rect>
                                    <rect x="10" y="0" width="4" height="10" fill="#bba14c" transform="translate(0 17.2331)">
                                        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                                    </rect>
                                    <rect x="20" y="0" width="4" height="10" fill="#bba14c" transform="translate(0 3.89973)">
                                        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.9s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                                    </rect>
                                </svg>
                            </el-space>
                        </el-tooltip>
                    <!-- </el-dropdown> -->
                    <!-- 去除所有格式 -->
                    <svg @click="changeStyle({command:'removeFormat'})" t="1648797198252" class="notepad_header_text_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7991" width="24" height="24"><path d="M524.8 106.666667c-106.666667 0-209.066667 42.666667-285.866667 110.933333l-8.533333-68.266667c0-25.6-21.333333-42.666667-46.933333-38.4-25.6 0-42.666667 21.333333-38.4 46.933334l8.533333 115.2c4.266667 55.466667 51.2 98.133333 106.666667 98.133333h8.533333L384 362.666667c25.6 0 42.666667-21.333333 38.4-46.933334 0-25.6-21.333333-42.666667-46.933333-38.4l-85.333334 4.266667c64-55.466667 145.066667-89.6 230.4-89.6 187.733333 0 341.333333 153.6 341.333334 341.333333s-153.6 341.333333-341.333334 341.333334-341.333333-153.6-341.333333-341.333334c0-25.6-17.066667-42.666667-42.666667-42.666666s-42.666667 17.066667-42.666666 42.666666c0 234.666667 192 426.666667 426.666666 426.666667s426.666667-192 426.666667-426.666667c4.266667-234.666667-187.733333-426.666667-422.4-426.666666z" p-id="7992" fill="#bba14c"></path></svg>
                </el-dropdown-item>
                <el-dropdown-item style="margin: 6px 0">
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
            </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-color-picker :predefine="predefineColors" size="small" @active-change="colorChange" />
    </article>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from "vue";
import { fontNames, fontSizes, fontEmgs, fontAnimis, fontCards, predefineColors } from "../config"
import moon from '@renderer/store'
export default defineComponent({
  name: 'font-style',
  props: {
    userInfo: Object,
    changeStyle: Function
  },
  setup(props, context) {
    const state = reactive({
        showAnimis: moon.getState('showAnimis'),
        
    })
    // 修改颜色
    const colorChange = (value) => {
        if (moon.getState('colorM') === '修改背景颜色') {
            props.changeStyle({
                command: 'hiliteColor',
                value
            })
        } else {
            props.changeStyle({
                command: 'foreColor',
                value
            })
        }
    }
    const changeAnimis = async (value) => {
        const selectionObj = window.getSelection();
        const rangeObj = selectionObj.getRangeAt(0);
        const docFragment = rangeObj.cloneContents();
        const figure = document.createElement("figure");
        figure.appendChild(docFragment);
        // props.changeStyle({command: 'forwardDelete'})
        props.changeStyle({command:'insertHTML',value:`<figure class="nr ${value}">${figure.innerHTML}</figure>`})
    }
    onMounted(() => {
    })
    onUnmounted(() => { 
    })
    return { 
      ...toRefs(state),fontNames,fontSizes,predefineColors,fontEmgs,fontCards,fontAnimis,
      colorChange,changeAnimis
    };
  }
});
</script>

<style lang="scss">
@import '@renderer/styles/style.scss';
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
    float: left;
    height: 40px;
    line-height: 40px;
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
.notepad_header_text_emgs {
    display: grid;
    grid-template-columns: repeat(10, 40px);
    grid-template-rows: repeat(108, 40px);
    padding: 10px 3px;
    position: relative;
    max-height: 360px !important;
    overflow-y: auto;
    .notepad_header_text_fontemg {
        display: grid;
        place-content: center;
        width: 28px;
        height: 28px;
        background: $color-default-derived-02;
        @include BR(3px);
        transition: .35s;
        box-sizing: content-box;
        opacity: .8;
        // padding: 3px;
        margin:0 6px;
        &:hover {
            opacity: 1;
            transform: scale(1.36);
            background: $color-default-derived-06;
        }
    }
}
.notepad_header_text_animis {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(1, 80px);
    padding: 24px 0  24px 24px;
    position: relative;
    max-height: 360px !important;
    overflow-y: auto;
    nav {
        display: grid;
        place-content: center;
        width: 26px;
        height: 26px;
        background: $color-default-derived-02;
        @include BR(3px);
        transition: .35s;
        box-sizing: content-box;
        margin:6px;
        &:hover {
            opacity: 1;
            background: $color-default-derived-06;
        }
        .cover {
            position: relative;
            width: 20px;
            height: 20px;
        }
        .cover::after{
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            left: 0;
            top: 0;
            border: 5px solid #fff;
            border-bottom-color: transparent;
            border-right-color: transparent;
        }
    }
}
.notepad_header_text_cards {
    position: relative;
    max-height: 360px !important;
    overflow-y: auto;
}
</style>
