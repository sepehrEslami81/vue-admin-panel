<template>
  <v-card class="mx-auto pa-4 px-12 mt-12" elevation="0" max-width="800">
    <v-expand-transition>
      <v-alert v-if="message.show" :type="message.type" dense>
        {{ message.text }}
      </v-alert>
    </v-expand-transition>
    <v-form
      v-model="form1"
      :disabled="!editMode"
      @submit.prevent="doForm('edit')"
    >
      <v-row>
        <v-col cols="12">
          <span class="display-2">مشاهده اطلاعات کاربری:</span>
          <v-btn text fab small @click="editMode = !editMode">
            <v-icon color="grey">
              {{ editMode ? "mdi-pencil-off" : "mdi-pencil" }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.phone"
            label="تلفن همراه"
            :rules="[Rules.phone]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="formData.name"
            label="نام"
            :rules="[Rules.required]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="formData.lastName"
            label="نام خانوادگی"
            :rules="[Rules.required]"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.email"
            label="ایمیل"
            :rules="[Rules.required]"
          />
        </v-col>
        <v-expand-transition>
          <v-col v-if="editMode" cols="12">
            <v-btn
              :disabled="!form1 || loading1"
              :loading="loading1"
              block
              class="d-flex mx-auto"
              color="success"
              type="submit"
            >
              ویرایش کاربر
            </v-btn>
          </v-col>
        </v-expand-transition>
      </v-row>
    </v-form>
    <v-divider class="my-6 mb-8" />
    <p class="display-2">
      تغییر رمز عبور:
    </p>
    <v-form v-model="form2" class="mx-3" @submit.prevent="doForm('password')">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="pass.old"
            type="password"
            label="رمز عبور فعلی"
            :rules="[Rules.required]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="pass.password"
            type="password"
            label="رمز عبور جدید"
            :rules="[Rules.required]"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="rpass"
            type="password"
            label="تکرار رمز عبور جدید"
            :rules="[Rules.required, (v) => v === pass.password]"
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            :disabled="!form2 || loading2"
            :loading="loading1"
            block
            class="d-flex mx-auto"
            color="success"
            type="submit"
          >
            ویرایش رمز عبور
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import md5 from "md5";
export default {
  name: "Profile",
  data() {
    return {
      message: {
        show: false,
        type: "success",
        text: "عملیات با موفقیت انجام شد!",
      },
      editMode: false,
      form1: false,
      form2: false,
      loading1: false,
      loading2: false,
      formData: {
        phone: null,
        name: null,
        lastName: null,
        email: null,
      },
      rpass: null,
      pass: {
        old: null,
        password: null,
      },
    };
  },
  created() {
    this.formData.phone = this.$store.state.userData.phone;
    this.formData.name = this.$store.state.userData.name;
    this.formData.name = this.$store.state.userData.name;
    this.formData.lastName = this.$store.state.userData.lastName;
    this.formData.email = this.$store.state.userData.email;
  },
  methods: {
    doForm(mode) {
      this.loading = true;
      let url = "users/";
      let body = this.formData;
      if (mode === "password") {
        url = "/users/?password=change";
        body = {
          old: md5(this.pass.old),
          password: md5(this.pass.password),
        };
      }

      this.$http
        .put(url, body)
        .then((r) => {
          if (mode !== "password") {
            this.$store.dispatch("getUserData");
            this.editMode = false;
          }
          this.pass = {
            old: null,
            password: null,
          };
          this.rpass = null;
          this.loading = false;
          this.message.type = "success";
          this.message.text = "عملیات با موفقیت انجام شد!";
          this.message.show = true;
          setTimeout(() => {
            this.message.show = false;
          }, 1500);
        })
        .catch((e) => {
          this.loading = false;
          this.message.type = "error";
          this.message.text = e;
          this.message.show = true;
          setTimeout(() => {
            this.message.show = false;
          }, 1500);
        });
    },
  },
};
</script>

<style></style>
