<script>
import SectionTitle from '@/components/SectionTitle.vue';
import TimelineLayout from '@/components/TimelineLayout.vue';

const career = [
  {
      date: '2022-04-01',
      dateString: 'April 2022 - Present',
      work: 'Some Company',
      text: "Working as a frontend developer at Some Company.",
  },
  {
      date: '2020-04-01',
      dateString: 'April 2020',
      work: 'Freelance',
      text: "Worked with different clients on React and Javascript based projects. Really helped me to learn new things, improve my skills and get a better understanding of the programming.",
  },
]

const education = [
  {
      date: '2016-03-02',
      dateString: 'April 2020 - January 2022',
      work: 'Massachusetts College of Art and Design, Boston.',
      text: "Art and Design",
  },
  {
      date: '2023-04-01',
      dateString: 'April 2023 - Present',
      work: 'Stanford University',
      text: "Bachelors In Computer Science",
  }
]

export default {
  components: { SectionTitle, TimelineLayout },
  data() {
    return { career, education }
  }
}
</script>

<template>
  <div class="mainContainer">
    <div class="gridColumnLeft">
      <div class="careerSection">
        <SectionTitle>My Career</SectionTitle>
        <div v-for="(item, index) in career" :key="index">
          <TimelineLayout
            :date="item.date"
            :dateString="item.dateString"
            :work="item.work"
            :workDescription="item.text"
          />
        </div>
      </div>
      <div class="educationSection">
        <SectionTitle>My Education</SectionTitle>
        <div v-for="(item, index) in education" :key="index">
          <TimelineLayout
            :date="item.date"
            :dateString="item.dateString"
            :work="item.work"
            :workDescription="item.text"
          />
        </div>
      </div>
    </div>
    <div class="skillsSection">
      <img src="@/assets/icons/dots.svg" alt="Dots" class="dots">
      <div class="skillsSectionContent">
        <SectionTitle>Skills</SectionTitle>
        <h3 class="skillTitle">Languages I've worked with:</h3>
        <ul>
          <li>C++</li>
          <li>Python</li>
          <li>Javascript</li>
        </ul>
        <h3 class="skillTitle">Libraries/Frameworks I've worked with:</h3>
        <ul>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Node.js</li>
        </ul>
        <h3 class="skillTitle">Tools I am comfortable with:</h3>
        <ul>
          <li>VsCode</li>
          <li>Sublime Text</li>
          <li>Android Studio</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped src="./styles.css"></style>