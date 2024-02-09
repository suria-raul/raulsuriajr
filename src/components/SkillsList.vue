<script>
export default {
  props: {
    skills: Object
  }
}
</script>

<template>
  <section id="skills" class="w-full py-24 min-h-screen box-border">
    <h2 class="text-4xl text-center mb-8 font-space-mono text-black">{{ skills.title }}</h2>
    <div class="skills-container item-container text-black font-space-mono mx-auto">
      <div class="block mx-auto text-center" v-for="skill in skills.skills">
        <img :src="skill.icon"
             :alt="skill.name"
             class="w-24 block mx-auto mb-2"
        >
        <span class="capitalize">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>