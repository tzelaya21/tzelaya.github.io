<script>
import ContainerLayout from '@/components/ContainerLayout.vue';
import CtaSection from '@/components/CtaSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

export default {
    components: { ContainerLayout, CtaSection, SectionTitle },
    data() {
      return {
        name: "",
        message: ""
      };
    },
    methods: {
      sendEmail() {
        const subject = "Quote Request - " + this.name;
        const body = "Hello, I'm interested in getting a quote for your services.\n\n" + this.message;
        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }
    }
}
</script>

<template>
    <ContainerLayout>
      <section class="mainContainer">
        <div>
          <SectionTitle>Get a quote</SectionTitle>
          <p class="subtitle">
            Fill up the form and I will surely get back to you within 24 hours.
          </p>
          <p class="otherAccountsText">My other social accounts:</p>
          <div class="icons">
            <a href="https://facebook.com" target="_blank" class="icon">
              <img src="@/assets/icons/facebookIcon.svg" alt="Facebook">
            </a>
            <a href="https://x.com" target="_blank" class="icon">
              <img src="@/assets/icons/twitterIcon.svg" alt="Twitter">
            </a>
            <a href="https://linkedin.com" target="_blank" class="icon">
              <img src="@/assets/icons/linkedinIcon.svg" alt="Linkedin">
            </a>
            <a href="https://instagram.com" target="_blank" class="icon">
              <img src="@/assets/icons/instagramIcon.svg" alt="Instagram">
            </a>
          </div>
        </div>
        <form class="formContainer" @submit="sendEmail">
          <input type="text" placeholder="Your Name" class="inputField" v-model="name">
          <textarea
            type="text"
            placeholder="Your Message"
            class="inputField"
            rows="10"
            v-model="message"
          />
          <button type="submit" class="sendMailButton">
            Send Mail
          </button>
        </form>
      </section>
    </ContainerLayout>
    <CtaSection />
</template>

<style scoped src="./styles.css"></style>
