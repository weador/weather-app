<template>
  <div class="search-form">
    <v-form
      v-model="valid"
      @submit.prevent="searchWeather"
    >
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              :label="$t('searchForm.label')"
              :value="value"
              @input="$emit('input', $event)"
              :error-messages="translatedError"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              type="submit"
              :disabled="!valid"
            >{{ $t('searchForm.buttonName') }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { getWeatherByCityName }  from '../api/openweathermap';
import { saveHistory } from '../api/localStorageHistory';

export default {
  name: 'SearchForm',
  props: {
    value: String,
  },
  data: () => {
    return {
      valid: false,
      error: '',
    };
  },
  computed: {
    translatedError() {
      return this.error ? this.$t(`searchForm.${this.error}`) : this.error;
    },
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    async searchWeather() {
      try {
        const newWeatherData = await getWeatherByCityName(this.value, this.currentLocale);
        saveHistory(this.value);
        this.$emit('new-weather-data', newWeatherData);
      } catch (_error) {
        this.error = 'wrongNameError';
      }
    },
  },
  watch: {
    value(newValue) {
      if (newValue === '') {
        this.error = 'emptyError';
      } else {
        this.error = '';
      }
    },
    currentLocale() {
      this.searchWeather();
    },
  }
}
</script>