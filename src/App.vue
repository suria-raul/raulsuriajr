<script>
import data from './data'
import Profile from "@/components/Profile.vue"
import WorkExperience from "@/components/WorkExperience.vue"

export default {
  components: {
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
</template>

<style scoped>

</style>
