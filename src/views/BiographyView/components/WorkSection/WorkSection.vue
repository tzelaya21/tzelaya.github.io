<script>
import SectionTitle from '@/components/SectionTitle.vue';
import TimelineLayout from '@/components/TimelineLayout.vue';

const career = [
  {
      date: '2021-04-01',
      dateString: 'April 2021 - Present',
      work: 'Data Integration Engineer/Boston Public Schools',
      text: "Extensive Database, SQL, AND Spreadsheet competences. Designs, codes and supports functional intra-departmental procedures and process-flows within cloud infrastructure and application stacks with focus on database development/management and data integration procedures utilizing ETL processes and procedures across multiple platforms.",
  },
  {
      date: '2019-04-01',
      dateString: 'April 2019 - Present',
      work: 'Program Manager, AlphaBEST Education',
      text: "Develop age-appropriate curricula and activities for the Afterschool Program and STEM Summer Camp to introduce youth to technology concepts while creating a positive atmosphere to boost student confidence and engagement. Lead hands-on material engineering projects covering Minecraft Modeling, Lego Robotics, First Lego League, 3D Design and Printing, Drone Building, Coding and Programming, and General Engineering.",
  },
  {
      date: '2012-04-01',
      dateString: 'April 2012 - Present',
      work: 'Paraprofessional, Revere Public Schools',
      text: "Work one on one with individual students and in small groups of five K-5 students to reinforce learning, monitor progress, supervise curriculum-based testing, and improve overall academic outcomes with teachers and administrators.",
  },
]

const education = [
  {
      date: '2019-03-02',
      dateString: 'January 2019 - January 2022',
      work: 'Boston University',
      text: "Bachelor of Science in Computer Engineering",
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
        <h3 class="skillTitle">Engineering:</h3>
        <p>
            Software & Hardware Design, Mobile applications, Internet of Things, Backend
            Development & Infrastructure, FPGA Programming, Coding, Testing & Code Coverage, Quality,
            Scalability, Performance, Reliability, Documentation.
        </p>
        <h3 class="skillTitle">Leadership:</h3>
        <p>
          Strategic Planning & Execution, Project Management, Prioritization, Process Improvement, Collaboration.
        </p>
        <h3 class="skillTitle">Software/Languages</h3>
        <p>
          Java, C++, C#, Javascript, Python, SQL, Verilog/VHDL, Microsoft Office, Adobe Premiere,
          Windows 8.1/10, MacOS
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./styles.css"></style>