<script>
import NavbarApp from '@/components/NavbarApp/NavbarApp.vue';
import { useRouter } from 'vue-router';
import FooterApp from './components/FooterApp.vue';

export default {
  components: { NavbarApp, FooterApp },
  setup() {
    const router = useRouter()

    return { router }
  }
}
</script>
<template>
  <main>
    <NavbarApp />
    <div class="routesContainer">
      <router-view />
    </div>
    <FooterApp />
  </main>
</template>

<style>
  .routesContainer {
    padding-top: 16vh;
  }
</style>

