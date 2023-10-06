<script>
export default {
  props: {
    projects: Object
  }
}
</script>

<template>
  <section id="projects" class="w-full pt-24 bg-golden-yellow min-h-screen box-border">
    <div class="item-container min-h-screen box-border px-6 mx-auto text-black font-space-mono">
      <h2 class="text-4xl text-center mb-8">{{ projects.title }}</h2>
      <div class="projects-container">
        <a v-for="project in projects.projects" :href="project.link" target="_blank">
          <div class="image-container mb-3">
            <img :src="project.image"
                 :alt="project.name"
                 class="w-80 h-60 mx-auto">
          </div>
          <span class="block text-center">
            {{ project.name }}
          </span>
          <span class="block text-center">
            {{ project.technology }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>