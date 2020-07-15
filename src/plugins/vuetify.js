import Vue from "vue";
import Vuetify from "vuetify/lib";
// import i18n from "@/i18n";
import "@/sass/overrides.sass";
import fa from "vuetify/es5/locale/fa";

Vue.use(Vuetify);

const theme = {
  primary: "#01A8DF",
  secondary: "#9C27b0",
  accent: "#9C27b0",
  info: "#00CAE3",
  blue: "#204384",
};

export default new Vuetify({
  rtl: true,
  lang: {
    current: "fa",
    locales: { fa },
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
