import data from "./data.json" assert {type: 'json'};
import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sub1: 'index_Materialize.html',
        sub2: 'index_MaterializeCopy.html'
      }
    }
  },
  base : '/responsive_webpages/',
  plugins: [handlebars({
    context: {
      data
    }
  })],
})