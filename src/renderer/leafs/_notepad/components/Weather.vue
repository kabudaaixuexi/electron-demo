<script setup lang="ts">
import { ref, reactive, Ref } from "vue";
import Api from '@renderer/api'
// defineProps<{ mode: Mode }>();

const ModeEnum = new Map([
	['晴', 'sunny'],
	['多云', 'cloudy'],
	['闪电', 'thunder'],
	['阵雨', 'sun'],
	['小雪', 'flurries'],
	['中雪', 'flurries'],
	['大雪', 'flurries'],
	['暴雪', 'flurries'],
	['小雨', 'rainy'],
	['中雨', 'rainy'],
	['大雨', 'rainy'],
	['暴雨', 'rainy'],
])

const getWeather = async (callback: Function) => {
	const { data } = await Api.getWeather({
		cityName: '杭州'
	})
	callback(data)
}
let weather: any = ref({})
getWeather((ev: any) => {
	weather.value = ev.forecast[0] || {}
	weather.value.mode = ModeEnum.get(weather.value.type)
})
</script>

<template>
  <article class="weather">
  <div class="weather-title" v-if="weather.date">
	  <span>{{weather.date}}</span>
	  <span>{{weather.high + '--' + weather.low}}</span>
  </div>
  <div v-if="weather.mode === 'sun'" class="icon2033 sun-shower">
    <div class="cloud"></div>
    <div class="sun">
      <div class="rays"></div>
    </div>
    <div class="rain"></div>
  </div>

  <div v-if="weather.mode === 'thunder'" class="icon2033 thunder-storm">
    <div class="cloud"></div>
    <div class="lightning">
      <div class="bolt"></div>
      <div class="bolt"></div>
    </div>
  </div>

  <div v-if="weather.mode === 'cloudy'" class="icon2033 cloudy">
    <div class="cloud"></div>
    <div class="cloud"></div>
  </div>

  <div v-if="weather.mode === 'flurries'" class="icon2033 flurries">
    <div class="cloud"></div>
    <div class="snow">
      <div class="flake"></div>
      <div class="flake"></div>
    </div>
  </div>

  <div v-if="weather.mode === 'sunny'" class="icon2033 sunny">
    <div class="sun">
      <div class="rays"></div>
    </div>
  </div>

  <div v-if="weather.mode === 'rainy'" class="icon2033 rainy">
    <div class="cloud"></div>
    <div class="rain"></div>
  </div>
  </article>
</template>

<style scoped>
.weather {
    font-size: 5.6px;
    margin-left: 30px;
	display: flex;
    /* background-color:saddlebrown ; */
}
.weather-title {
	height: 52px;
	margin-top: 34px;
  font-size: 9px;
	margin-right: -10px;
	line-height: 170%;
	white-space: nowrap;
	display: flex;
	flex-direction: column;
	color: aliceblue;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.icon2033 {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 100px;
}
</style>
