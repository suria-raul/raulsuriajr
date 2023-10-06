<script>
export default {}
</script>

<template>
  <section id="introduction" class="w-full bg-golden-yellow min-h-screen box-border">
    <div class="item-container box-border h-screen p-6 mx-auto  flex justify-center items-center flex-col text-black">
      <img src="images/profile.jpg" alt="Profile" class="h-48 w-48 mx-auto rounded-full my-4">
      <h1 class="name text-3xl sm:text-3xl md:text-4xl lg:text-5xl my-4 relative font-kaushan -rotate-5">
        Raul Suria Jr
      </h1>
      <p class="title text-base font-medium font-space-mono">
        PHP Developer
      </p>
      <a href="pdf/Raul_Suria_Jr.pdf" download="" class="resume font-space-mono">
        Download Resume
      </a>
      <!--		we must include social icons here -->
      <!--		such as linkedin, facebook, instagram-->
    </div>
  </section>
</template>

<style scoped>
#introduction .item-container .name:before,
#introduction .item-container .name:after {
  top: 50%;
  width: 30px;
  height: 4px;
  content: '';
  background: #000;
  position: absolute;
  font-family: "Kaushan Script", cursive;
}

#introduction .item-container .name:before {
  left: 0;
  margin-left: -40px;
}

#introduction .item-container .name:after {
  right: 0;
  margin-right: -40px;
}

#introduction .item-container .resume {
  border-bottom: 1px solid black;
}

.item-container {
  max-width: 1280px;
}
</style>