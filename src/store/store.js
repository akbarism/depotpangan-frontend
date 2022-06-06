import { defineStore } from "pinia";
import axios from "axios";

export const mainStore = defineStore("main", {
  state: () => ({
    env: `${import.meta.env.VITE_APP_ENV}/api`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }),
  actions: {
    async getData(data) {
      try {
        const res = await axios.get(`${this.env}/${data.path}`, this.config);
        return res.data;
      } catch (err) {
        return err;
      }
    },

    async postData(data) {
      try {
        const res = await axios.post(
          `${this.env}/${data.path}`,
          data.body,
          this.config,
        );
        return res.data;
      } catch (err) {
        return err;
      }
    },
  },
});
