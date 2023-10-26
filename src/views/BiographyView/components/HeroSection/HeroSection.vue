<script>
import ButtonLayout from '@/components/ButtonLayout.vue';
import SectionTitle from '@/components/SectionTitle.vue';

export default {
  components: { SectionTitle, ButtonLayout }
}
</script>

<template>
  <section>
    <div class="mainContainer">
      <div class="leftColumnContent">
        <SectionTitle>About Me</SectionTitle>
        <p class="personDescription">
          Hello, I'm Telma Zelaya, and I'm passionate about combining my love for frontend development with my deep appreciation for the beauty of nature.
          I thrive in the world of web development, where I bring digital visions to life. But when I'm not crafting code, you'll find me
          outdoors, exploring the wonders of the natural world. With a strong background in web development and a heart that beats for the
          great outdoors, I've found a unique balance that fuels my creativity.
          <br />As a frontend developer, I take pride in creating visually
          appealing and user-friendly web experiences, while my love for nature inspires fresh perspectives and innovative solutions.
          Through this website, I aim to share not only my technical skills but also my enthusiasm for the world around us. Feel free
          to connect, explore, and discover how we can bring the best of both worlds together.
        </p>
        <a href="https://drive.google.com/file/d/1hPQQvTdR5WO8QVSTZz6lwWBArSPC8dbP/view?usp=sharing" target="_blank">
          <ButtonLayout :class="'resumeButton'">
            <div class="resumeContent">
              <p class="resumeText">My Resume</p>
              <img svg-inline src="../../../../assets/icons/rightArrowFilled.svg" alt="Right Arrow" />
            </div>
          </ButtonLayout>
        </a>
      </div>
      <div class="rightColumnContent">
        <img src="@/assets/images/about-hero-image.webp" alt="Person Pic" />
      </div>
    </div>
  </section>
</template>
<style scoped src="./styles.css"></style>
