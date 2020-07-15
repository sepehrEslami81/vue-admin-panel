<template>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      :cols="Number(12 / items.length)"
    >
      <base-tile-button
        :text="item.text"
        :icon="item.icon"
        :route="item.route"
        :color="item.color"
        :text-color="item.textColor"
        :icon-color="item.iconColor"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "tile-menu",
    props: {
      items: Array,
    },
  };
</script>

<style></style>
