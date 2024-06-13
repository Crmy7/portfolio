<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    return {};
  },

  render: (h) => h(App),
  mounted() {
    AOS.init();
    function progressBarScroll() {
      let winScroll =
          document.body.scrollTop || document.documentElement.scrollTop,
        height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    }

    window.onscroll = function () {
      progressBarScroll();
    };

    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector(".nav");
      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
      } else {
        nav.classList.remove("add-shadow");
      }
    });

    // gsap.to(".sectionReal h2", {
    //   scrollTrigger: ".sectionReal",
    //   duration: 2,
    //   rotation: 360
    // });

    // gsap.fromTo('.title::after', {

    //  { width: 0,}
    //   {width: 300, duration: 2}
    //   scrollTrigger: "section",
    // });
  },
};
</script>

<!-- <script setup>
const title = ref("Charles Rémy, Développeur Web en recherche d'alternance.")
const description = ref("Je m'appelle Charles Rémy, j'ai 19 ans je suis en deuxième année de Bachelor Cycle Web et Multimédia à MyDigitalSchool à Annecy.")
  // This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script> -->

<template>
  <Head>
    <!-- <Title>Charles Rémy, Développeur Web</Title> -->
    <!-- <Description>Je m'appelle Charles Rémy, j'ai 19 ans je suis en deuxième année de Bachelor Cycle Web et Multimédia à MyDigitalSchool à Annecy.</Description> -->
  </Head>
  <NavBar />
  <div id="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>

  <div class="progress-container">
    <div class="progress-bar" id="progressBar"></div>
  </div>
  <NuxtLayout>
    <NuxtPage> </NuxtPage>
  </NuxtLayout>
</template>

<style>
#loader {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  opacity: 0;
}

#loader .dot {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
  border: 2px solid #4a4a4a;
}
</style>
