import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start app
const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};
// In dev env we call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
