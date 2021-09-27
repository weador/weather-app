<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span class="app-title text-h6 text-lg-h4">{{ $t('appTitle') }}</span>

      <v-spacer></v-spacer>

      <div class="locale-changer">
        <v-select
          v-model="$i18n.locale"
          :items="$i18n.availableLocales"
        >
        </v-select>
      </div>
    </v-app-bar>

    <v-main>
      <MainContainer/>
    </v-main>
  </v-app>
</template>

<script>
import MainContainer from './components/MainContainer';

export default {
  name: 'App',

  components: {
    MainContainer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped lang="scss">
.app-title {
  line-height: 0.8;
}
</style>