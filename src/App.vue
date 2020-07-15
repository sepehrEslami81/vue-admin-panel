<template>
  <v-app>
    <dashboard-core-app-bar v-if="showAll" />

    <dashboard-core-drawer v-if="showAll" />

    <dashboard-core-view />
  </v-app>
</template>

<script>
  export default {
    name: "App",
    components: {
      DashboardCoreAppBar: () => import("@/components/core/AppBar"),
      DashboardCoreDrawer: () => import("@/components/core/Drawer"),
      // DashboardCoreSettings: () => import("@/components/core/Settings"),
      DashboardCoreView: () => import("@/components/core/View"),
    },

    data: () => ({
      expandOnHover: false,
    }),

    computed: {
      showAll() {
        return this.$route.path !== "/login" && !this.$store.state.loading;
      },
    },
    created() {},
  };
</script>

<style>
  @import "./styles/font.css";
  @import "./styles/style.css";
</style>

<style lang="scss">
  @import "./styles/style.scss";
</style>
