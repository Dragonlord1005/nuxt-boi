import { strict } from "assert";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "@unlighthouse/nuxt", '@nuxt/content'],
  windicss: {
    analyze: true
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
  content: {
    documentDriven: false,
  },
});
