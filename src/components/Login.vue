<template>
  <div class="d-flex w-100">
    <!-- login page Component-->
    <v-container class="bg-white border">
      <v-row class="d-flex">
        <v-col cols="12" class="d-flex">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3335 14.3193C23.3335 14.7623 23.0043 15.1284 22.5772 15.1863L22.4585 15.1943L4.95849 15.1943C4.47525 15.1943 4.08349 14.8026 4.08349 14.3193C4.08349 13.8764 4.41267 13.5103 4.83976 13.4523L4.95849 13.4443L22.4585 13.4443C22.9417 13.4443 23.3335 13.8361 23.3335 14.3193Z"
              fill="#212121"
            />
            <path
              d="M12.634 20.7281C12.9764 21.0691 12.9776 21.6231 12.6367 21.9656C12.3267 22.2769 11.8406 22.3062 11.4975 22.0527L11.3992 21.9682L4.34088 14.9402C4.02864 14.6293 4.00024 14.1415 4.25568 13.7984L4.34083 13.7002L11.3992 6.67102C11.7416 6.33002 12.2956 6.33116 12.6366 6.67358C12.9466 6.98487 12.9738 7.47103 12.719 7.81305L12.634 7.91101L6.19867 14.3205L12.634 20.7281Z"
              fill="#212121"
            />
          </svg>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <img src="../assets/Frame.png" alt="" />
        </v-col>
        <v-col cols="12 d-flex justify-center">
          <h3 class="f18-700 headin-login">Login</h3>
        </v-col>
        <v-col cols="12 d-flex justify-center">
          <v-sheet width="300" class="mx-auto">
            <v-form
              class="d-flex form-login-app"
              style="gap: 15px"
              fast-fail
              @submit.prevent
            >
              <v-text-field
                label="Email"
                variant="plain"
                class="form-login-page"
              >
                <template v-slot:prepend>
                  <img width="18" height="18" src="../assets/Email.svg" />
                </template>
              </v-text-field>
              <v-text-field
                label="Password"
                :type="visible ? 'text' : 'password'"
                variant="plain"
                class="form-login-page"
              >
                <template v-slot:prepend>
                  <img width="22" height="22" src="../assets/Lock.svg" />
                </template>
                <template v-slot:append>
                  <button
                    class="showPass"
                    icon
                    @click.stop="visible = !visible"
                  >
                    <img src="../assets/Hide.svg" alt="" />
                    <!-- <img
                      :src="
                        visible ? '../assets/Hide.svg' : '../assets/Hide.svg'
                      "
                      width="22"
                      height="22"
                    /> -->
                  </button>
                </template>
              </v-text-field>
              <div class="d-flex flex-column" style="gap: 10px">
                <div class="d-flex" style="gap: 10px">
                  <input
                    class="checkBox"
                    id="checkBox"
                    v-model="rememberMe"
                    type="checkbox"
                  />
                  <label for="checkBox">Remember Me</label>
                </div>
                <v-btn type="submit" @click="SignIn" block class="mt-2"
                  >Sign In</v-btn
                >
              </div>
              <div
                class="d-flex flex-column"
                style="gap: 20px; padding-top: 20px"
              >
                <!-- forgot password -->
                <div class="d-flex w-100 justify-center">
                  <router-link class="link-forgot-password" to="/"
                    >Forgot the password?</router-link
                  >
                </div>
                <div class="d-flex w-100 justify-center">
                  <p class="text-login">Don’t have an account?</p>
                  <router-link class="link-forgot-password" to="/"
                    >Sign up</router-link
                  >
                </div>
              </div>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
let Email = ref("");
let rememberMe = ref(false);
let visible = ref(false);
let password = ref("");
const SignIn = async () => {
  const response = await axios.get("https://reqres.in/api/login", {
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: Email.value,
      password: password.value,
    },
  });
  console.log(response);
};
</script>
<style>
.headin-login {
  color: #212121;
  text-align: center;
  font-family: Urbanist;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}
.form-login-app {
  gap: 10px;
  flex-direction: column;
}
.form-login-page {
  color: #9e9e9e;
  background: #fafafa;
  font-size: 14px;
  border-radius: 16px;
  padding-left: 10px;
  padding-right: 10px;
  height: 58px;
}
.button.v-btn.v-btn--elevated.v-btn--icon.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.showPass {
  background: none !important;
  box-shadow: none !important;
  margin-top: -14px;
}
.button.v-btn.v-btn--elevated.v-btn--icon.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.showPass:hover {
  background: none !important;
}
.checkBox {
  border-radius: 8px;
  border: 3px solid #246bfd;
}
.link-forgot-password {
  color: #246bfd;
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.2px;
}
.text-login {
  color: #9e9e9e;
  text-align: right;
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
}
</style>
