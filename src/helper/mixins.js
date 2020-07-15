import config from "@/config.js";
import Vue from "vue";
import types from "./docTypes.json";

export default Vue.mixin({
  data() {
    return {
      apiURL: config.baseURL,
      Rules: {
        required: (v) => !!v || "پر کردن این مقدار الزامی است",
        email: (v) =>
          (v.length > 0
            ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                v
              )
            : true) || "ایمیل معتبر نیست",
        phone: (v) =>
          /(\+98|0)?9\d{9}/.test(v) || "شماره تلفن شما نامعتبر می باشد",
      },
    };
  },
  filters: {
    currency(v) {
      return new Intl.NumberFormat().format(v) + " تومان";
    },
    financialDocumentType(v) {
      return types[v];
    },
  },
});
