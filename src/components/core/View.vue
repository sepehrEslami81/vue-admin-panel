<template>
  <v-content>
    <v-progress-circular
      v-if="this.$store.state.loading"
      class="mx-auto d-flex"
      indeterminate
      size="50"
    />
    <router-view
      v-show="!this.$store.state.loading"
      :class="this.$route.path != '/login' ? 'mx-8' : ''"
    />

    <!-- <dashboard-core-footer /> -->
  </v-content>
</template>

<script>
  export default {
    name: "DashboardCoreView",

    components: {
      // DashboardCoreFooter: () => import('./Footer'),
    },
  };
</script>
