<script>
import data from './data'
import MyProfile from "@/components/MyProfile.vue"
import WorkExperience from "@/components/WorkExperience.vue"
import ProjectsList from "@/components/ProjectsList.vue"
import SkillsList from "@/components/SkillsList.vue"

export default {
  components: {
    SkillsList,
    ProjectsList,
    MyProfile,
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
  <MyProfile :profile="data.profile" />
  <WorkExperience :work-experience="data.workExperience"/>
  <ProjectsList :projects="data.projects" />
  <SkillsList :skills="data.skills" />
</template>

<style scoped>

</style>
