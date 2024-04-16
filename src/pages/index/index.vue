<template>
  <view>
    <CustomNavbar />
    <MySwiper/>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar.vue";
import { ref } from "vue";
import { getuser } from "../../api/user.js";

const title = ref("Hello");

const testbtn = async () => {
  const res = await getuser();
  console.log(res, "0000000000000000");
};
</script>

<style lang="scss" scoped></style>
