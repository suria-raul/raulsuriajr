<script>
export default {
  props: {
    workExperience: Object
  }
}
</script>

<template>
  <section id="work-experience" class="w-full py-24 min-h-screen box-border">
    <div class="item-container min-h-screen box-border px-6 mx-auto text-black font-space-mono">
      <h2 class="text-4xl text-center mb-4">{{ workExperience.title }}</h2>
      <div class="py-4 mb-4" v-for="(experience, key) in workExperience.experiences" :key="key">
        <h4 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:3xl my-1">{{ experience.position }}</h4>
        <span class="text-xs mb-1.5 block uppercase">{{ experience.name }}, {{ experience.duration }}</span>
        <ul class="list-disc pl-10">
          <li v-for="(responsibility, key) in experience.responsibilities" class="text-base" :key="key">
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>