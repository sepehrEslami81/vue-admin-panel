<template>
  <router-link :to="route">
    <v-card :color="color" min-height="150">
      <v-row justify="center">
        <v-col cols="12">
          <v-icon :color="iconColor" size="70" class="d-flex mx-auto">{{
            icon
          }}</v-icon>
        </v-col>
        <v-col>
          <h2 :class="['text-center', `${textColor}--text`]">
            {{ text }}
          </h2>
        </v-col>
      </v-row>
    </v-card>
  </router-link>
</template>

<script>
  export default {
    name: "tile-button",
    props: {
      color: {
        type: String,
        default: "primary",
      },
      "icon-color": {
        type: String,
        default: "white",
      },
      "text-color": {
        type: String,
        default: "white",
      },
      icon: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      route: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style></style>
