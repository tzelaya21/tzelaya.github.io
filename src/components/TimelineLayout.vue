<script>
export default {
  props: {
    date: String,
    dateString: String,
    work: String,
    workDescription: String
  }
}
</script>

<template>
  <li class="item">
    <div class="dateString">
      <span class="circle"></span>
      <time class="dateStringTime" :datetime="date">
        {{ dateString }}
      </time>
    </div>
    <div class="work">
      <div class="line"></div>
      <h3>{{ work }}</h3>
      <p class="workDescription">{{ workDescription }}</p>
    </div>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
}

.dateString {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.circle {
  border: 1px solid white;
  border-radius: 100%;
  width: 18px;
  height: 18px;
}

.dateStringTime {
  font-size: 1.2rem;
  padding: 0 1rem;
  font-weight: 300;
}
.work {
  display: flex;
  flex-direction: column;
  padding-left: 2.2rem;
  color: #fff;
  position: relative;
}

.workDescription {
  color: var(--muted);
  padding-top: 0.6rem;
  max-width: 800px;
}

.line::before {
  content: '';
  background-color: #fff;
  height: 100%;
  width: 2px;
  position: absolute;
  left: 0.5rem;
}
</style>
