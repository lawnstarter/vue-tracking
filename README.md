# vue-tracking

npm install vue-tracking

```js
// main.js

import Vue from "vue";
import App from "./App.vue";
// import the `initialize` method
import { initialize } from "vue-tracking";

Vue.directive(
  "track",
  initialize(
    // drop in any method you want called here
    console.log
  )
);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

```html
// usage examples

<a
  href="#"
  v-track.click="{
        target: 'terms-of-service--link',
        anyOtherDataYouWant: 'whatever'
    }"
  >Terms of Service
</a>

<input
  v-track.blur="{
        target: 'first-name--input',
        exampleData: 'sure why not'
    }"
  v-track.focus="{
        target: 'first-name--input',
        canPassUpAnything: 'go for it'
    }"
  v-track.change="{
        target: 'first-name--input',
        anyExtraData: 'add it onto the directive'
    }"
/>
```
