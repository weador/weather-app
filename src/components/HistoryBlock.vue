<template>
  <div class="history-block">
    <v-card>
      <v-card-title>{{ $t('historyBlock.title') }}</v-card-title>
      <v-list>
        <div :key="city" v-for="(city, index) in historyItems">
          <v-list-item @click="$emit('city-clicked', city)" class="history-block_item">{{ city }}</v-list-item>
          <v-divider
            v-if="index < historyItems.length - 1"
          ></v-divider>
        </div>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'HistoryBlock',
  props: {
    historyItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped lang="scss">
.history-block_item {
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
}
</style>