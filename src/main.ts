import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

if (!window.__VUE__) {
  import("./style.css");
  const app = createApp(App);
  app.mount("#app");
} else {
  // Экспортируем функцию для рендеринга
  window.microfrontend = {
    render(container: HTMLElement) {
      const app = createApp(App);
      app.mount(container);
    },
  };
}
