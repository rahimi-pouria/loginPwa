<template>
  <div class="d-flex w-100">
    <!-- login page -->
    <v-container class="bg-white">
      <v-row>
        <v-col cols="12" class="d-flex"> هدر </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <img src="../assets/Frame.png" alt="" />
        </v-col>
        <v-col cols="12 d-flex justify-center">
          <p class="f18-700">Login</p>
        </v-col>
        <v-col cols="12 d-flex justify-center">
          <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="Email"
                label="Email"
                :rules="EmailRules"
              ></v-text-field>

              <v-text-field
                label="Password"
                persistent-hint
                v-model="password"
                type="password"
              ></v-text-field>

              <v-btn type="submit" @click="SignIn" block class="mt-2"
                >Sign In</v-btn
              >
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
<style></style>
