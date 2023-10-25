<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import CtaSection from '@/components/CtaSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const hobbies = [
    {
        name: "Photography",
        icon: require('../../assets/images/photography.webp'),
        description: "Capturing moments and scenes that inspire me. Check out my photography portfolio [link]."
    },
    {
        name: "Hiking and Nature Exploration",
        icon: require('../../assets/images/hiking.webp'),
        description: "Exploring the great outdoors, finding serenity in nature's wonders."
    },
    {
        name: "Reading",
        icon: require('../../assets/images/reading.webp'),
        description: "Immersing myself in the world of books, constantly seeking new knowledge and perspectives."
    },
    {
        name: "Cooking",
        icon: require('../../assets/images/cooking.webp'),
        description: "A culinary enthusiast creating delectable dishes from around the world."
    },
    {
        name: "Gardening",
        icon: require('../../assets/images/gardening.webp'),
        description: "Nurturing green spaces, one plant at a time."
    },
    {
        name: "Music",
        icon: require('../../assets/images/music.webp'),
        description: "Expressing myself through melodies and rhythms."
    },
    {
        name: "Sports",
        icon: require('../../assets/images/sports.webp'),
        description: "Staying active and competitive on the field."
    },
    {
        name: "Art and Creativity",
        icon: require('../../assets/images/art.webp'),
        description: "Unleashing creativity through various art forms."
    }
];

export default {
    components: { ContainerLayout, CtaSection, SectionTitle },
    data() {
      return { hobbies }
    }
}
</script>

<template>
    <ContainerLayout>
      <section class="mainContainer">
        <SectionTitle>My Hobbies and Interests &#128526;</SectionTitle>
        <p style="margin-bottom: 1rem; margin-top: -0.5rem;">You can talk to me on these topics all day.</p>
        <div class="hobbiesGrid">
          <div v-for="hobbie in hobbies" :key="hobbie.name" class="hobbie">
            <div class="hobbieImage">
              <img :src="hobbie.icon" alt="Hobbie" loading="lazy" />
            </div>
            <div class="hobbieDetails">
              <h3 class="hobbieTitle">{{ hobbie.name }}</h3>
              <p class="hobbieDesc">{{ hobbie.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </ContainerLayout>
    <CtaSection />
</template>

<style scoped src="./styles.css"></style>
