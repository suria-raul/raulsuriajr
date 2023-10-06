<script>
import data from './data'
import Profile from "@/components/Profile.vue"
import WorkExperience from "@/components/WorkExperience.vue"
import Projects from "@/components/Projects.vue"

export default {
  components: {
    Projects,
    Profile,
    WorkExperience
  },
  data() {
    return {
      data: data
    }
  }
}
</script>

<template>
  <Profile />
  <WorkExperience :work-experience="data.workExperience"/>
  <Projects :projects="data.projects" />
</template>

<style scoped>

</style>
