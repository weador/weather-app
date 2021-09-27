<template>
  <v-card class="result-weather">
    <v-card-title v-if="!weatherData">{{ $t('resultWeather.noResult') }}</v-card-title>
    <template v-else>
      <v-card-title>{{ $t('resultWeather.title') }} {{ weatherData.name }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            class="col-7 col-sm-5 col-lg-3"
          >
            <div class="text-h2">{{ Math.round(weatherData.main.temp) }}&deg;C</div>
            <div class="state">{{ weatherData.weather[0].description }}</div>
          </v-col>
          <v-col class="col-2 col-sm-4 col-lg-2">
            <img
              :src="`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weatherData.weather[0].icon}.png`"
              alt="weather-icon"
              class="result-weather_icon"
            >
          </v-col>
          <v-col class="col-12 col-sm-6 col-lg-3 d-flex flex-column">
            <div>{{ $t('resultWeather.feelsLike') }}: {{ Math.round(weatherData.main.feels_like) }}</div>
            <div>{{ $t('resultWeather.min') }}: {{ Math.round(weatherData.main.temp_min) }}</div>
            <div>{{ $t('resultWeather.max') }}: {{ Math.round(weatherData.main.temp_max) }}</div>
          </v-col>
          <v-col class="col-12 col-sm-6 col-lg-3 d-flex flex-column">
            <div>{{ $t('resultWeather.pressure') }}: {{ Math.round(weatherData.main.pressure) }} mb</div>
            <div>{{ $t('resultWeather.humidity') }}: {{ Math.round(weatherData.main.humidity) }} %</div>
            <div>
              {{ Math.round(weatherData.wind.speed) }} m/c
              <img
                src="../assets/wind-icon.svg"
                alt="wind-icon"
                :style="{transform: `rotate(${weatherData.wind.deg}deg)`}"
                class="result-weather_wind-icon"
              >
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>

export default {
  name: 'ResultWeather',
  props: {
    weatherData: {
      type: Object,
      default: null,
    },
  },
  data: () => {
    return {
      cityName: 'Moscow',
    }
  }
}
</script>

<style scoped lang="scss">
.result-weather_icon {
  width: 60px;
  height: 60px;
}
.result-weather_wind-icon {
  height: 16px;
  width: 16px;
  position: relative;
  top: 3px;
}
</style>