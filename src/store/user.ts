import { defineStore } from "pinia";
import { ref } from "vue";

export const userInfo = defineStore("user", () => {
  const name = ref("张三");
  const getname = () => {
    name.value = "李四";
  };
  return {name,getname}
});
