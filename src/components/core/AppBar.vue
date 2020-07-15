<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="125">
    <v-btn large class="mr-3" elevation="1" fab small @click="setDrawer">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light mr-3"
      v-text="$route.meta.title"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-menu
      bottom
      left
      offset-y
      origin="top left"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon large color="blue">
            mdi-account
          </v-icon>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <v-list-item @click="logOut">
          <v-icon color="blue">
            mdi-account
          </v-icon>
          خروج از حساب کاربری
        </v-list-item>
        <v-list-item to="/profile">
          <v-icon color="blue">
            mdi-cog
          </v-icon>
          &nbsp;
          <span>
            تنظیمات پروفایل کاربری
          </span>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- <base-settings></base-settings> -->
  </v-app-bar>
</template>

<script>
  // Components

  // Utilities
  import { mapState } from "vuex";

  export default {
    name: "DashboardCoreAppBar",

    components: {},

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        "Mike John Responded to your email",
        "You have 5 new tasks",
        "You're now friends with Andrew",
        "Another Notification",
        "Another one",
      ],
    }),

    computed: {
      ...mapState(["drawer"]),
    },

    methods: {
      setDrawer() {
        this.$store.state.drawer = !this.$store.state.drawer;
      },
      logOut() {
        if (confirm("آیا با خروج از حساب کاربری موافق هستید؟")) {
          localStorage.clear();
          this.$store.state.userData = null;
          this.$router.push("/login");
        }
      },
    },
  };
</script>
