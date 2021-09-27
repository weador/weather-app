<template>
  <v-container>
    <SearchForm
      v-model="cityWeather"
      @new-weather-data="updateData($event)"
    />
    <v-row>
      <v-col class="col-12 col-md-8">
        <ResultWeather :weatherData="weatherData" />
      </v-col>
      <v-col class="col-12 col-md-4">
        <HistoryBlock
          @city-clicked="cityWeather = $event"
          :historyItems="historyData"
        />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import SearchForm from './SearchForm.vue';
import ResultWeather from './ResultWeather.vue';
import HistoryBlock from './HistoryBlock.vue';
import { getHistory } from '../api/localStorageHistory';

export default {
  name: 'MainContainer',
  components: {
    SearchForm,
    ResultWeather,
    HistoryBlock,
  },

  data: () => {
    return {
      cityWeather: '',
      weatherData: null,
      historyData: [],
    }
  },
  methods: {
    updateData(newData) {
      this.weatherData = newData;
      this.historyData = getHistory();
    },
  },
  mounted() {
    this.historyData = getHistory();
  }
}
</script>
