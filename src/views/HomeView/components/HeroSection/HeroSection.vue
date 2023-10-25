<script>
import ButtonLayout from '@/components/ButtonLayout.vue';

export default {
  components: { ButtonLayout }
}
</script>

<template>
  <section class="heroContainer">
    <div class="leftColumnContent">
      <h1 class="personName">Hey there, I'm Olivia-<br/>Frontend Developer & Nature Lover</h1>
      <p class="personDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id inventore
        tenetur blanditiis praesentium, laborum distinctio modi hic odit nemo,
        optio facilis nihil cumque sapiente dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, necessitatibus?
      </p>
      <router-link to="/contact">
        <ButtonLayout :class="'letsTalkButton'">
          <div class="letsTalkContent">
            <p class="letsTalkText">Let's Talk</p>
            <img svg-inline src="../../../../assets/icons/rightArrowFilled.svg" alt="Right Arrow" />
          </div>
        </ButtonLayout>
      </router-link>
    </div>
    <div class="rightColumnContent">
      <img
        class="personImage"
        src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"
        alt="Person Pic"
      />
    </div>
  </section>
</template>
<style scoped src="./styles.css"></style>
