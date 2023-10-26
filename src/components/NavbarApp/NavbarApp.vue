<script>
import { ref } from 'vue';
import ContainerLayout from '@/components/ContainerLayout.vue';
import { useRoute } from 'vue-router';

export default {
    components: {ContainerLayout},
    setup() {
        const section = ref('');
        const openHeader = ref(false);
        const location = useRoute();

        const toggleHeader = () => {
            if (openHeader.value) openHeader.value = false
            else if (!openHeader.value) openHeader.value = true
        }

        return {
            section,
            openHeader,
            toggleHeader,
            currentPath: location.path
        }
    }
}
</script>
<template>
    <nav class="navContainer">
        <ContainerLayout>
            <div class="contentContainer">
                <h2>Telma <span class="text-color-primary">Zelaya</span></h2>
                <ul class="links" :class="openHeader ? 'open' : undefined">
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/" class="link">
                            <div :class="section === '/' && 'active'">
                                home
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/biography" class="link">
                            <div :class="section === '/biography' && 'active'">
                                biography
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/hobbies" class="link">
                            <div :class="section === '/hobbies' && 'active'">
                                hobbies
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/projects" class="link">
                            <div :class="section === '/projects' && 'active'">
                                projects
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/photography" class="link">
                            <div :class="section === '/photography' && 'active'">
                                photography
                            </div>
                        </router-link>
                    </li>
                    <li class="linkWrapper">
                        <router-link @click="toggleHeader()" to="/contact" class="link">
                            <div :class="section === '/contact' && 'active'">
                                contact
                            </div>
                        </router-link>
                    </li>
                    <div @click="toggleHeader()" class="flex lg:hidden text-white absolute top-5 right-5 cursor pointer">
                        <IconX :size="30" />
                    </div>
                    <div @click="toggleHeader()" class="cancelIcon">
                        <img svg-inline src="../../assets/icons/crossIcon.svg" alt="Cancel" />
                    </div>
                </ul>
                <div @click="toggleHeader()" class="toggleIcon">
                    <img svg-inline src="../../assets/icons/toggleIcon.svg" alt="Toggle" />
                </div>
            </div>
        </ContainerLayout>
    </nav>
</template>
<style scoped src="./styles.css">
</style>
