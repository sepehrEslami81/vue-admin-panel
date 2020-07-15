<template>
  <v-row justify="center">
    <v-col cols="9">
      <section :style="{ postion: relative }" :class="['mx-auto']">
        <base-material-card color="primary" :class="[]">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">احراز هویت</div>

            <div class="subtitle-1 font-weight-light">
              ورود به سامانه مدیریتی وبسایت sitename
            </div>
          </template>
          <v-card-text class="px-12">
            <v-form v-model="form.formValid" @submit.prevent="logIn">
              <v-row dense justify="end">
                <v-col cols="12">
                  <v-expand-transition>
                    <v-alert v-if="message.show" dense :type="message.type">{{
                      message.text
                    }}</v-alert>
                  </v-expand-transition>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="login.phone"
                    :disabled="form.loading"
                    :rules="[Rules.required, Rules.phone]"
                    label="شماره تلفن همراه"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="login.password"
                    :disabled="form.loading"
                    type="password"
                    :rules="[Rules.required]"
                    label="گذرواژه"
                  />
                </v-col>

                <v-col xl="2" cols="3">
                  <v-btn
                    type="submit"
                    color="success"
                    class="d-flex mx-auto"
                    :loading="form.loading"
                    :disabled="!form.formValid || form.loading"
                  >
                    <v-icon>mdi-lock</v-icon>&nbsp;ورود به اتوماسیون
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </base-material-card>
      </section>
    </v-col>
  </v-row>
</template>

<script>
  import md5 from "md5";

  export default {
    name: "Login",
    data() {
      return {
        form: {
          formValid: false,
          loading: false,
        },
        login: {
          phone: null,
          password: null,
        },
        message: {
          show: false,
          type: "success",
          text: "خوش آمدید؛ در حال ورود به سامانه...",
        },
      };
    },
    beforeCreate() {
      if (localStorage.auth) this.$router.push("/");
    },
    methods: {
      logIn() {
        this.form.loading = true;
        this.$http
          .get(`users/login/${this.login.phone}/${md5(this.login.password)}`, {
            params: { type: "admin" },
          })
          .then((r) => {
            this.form.loading = false;
            if (r.data.login !== true) {
              this.login.password = null;
              this.message.type = "error";
              this.message.text = "نام کاربری یا گذرواژه صحیح نیست!";
            } else {
              setTimeout(() => {
                localStorage.auth = r.data.token;
                // this.$store.dispatch("getUserData");
                window.location = "/";
              }, 500);
            }
            this.message.show = true;
          })
          .catch(() => {
            this.form.loading = false;
            this.login.password = null;
            this.message.type = "warning";
            this.message.text = "خطای سیستمی: با پشتیبانی تماس حاصل کنید!";
            this.message.show = true;
            setTimeout(() => {
              this.message.show = true;
            }, 3000);
          });
      },
    },
  };
</script>

<style></style>
