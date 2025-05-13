<template>
  <div
    class="relative w-screen min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6"
    @mousemove="handleMouseMove"
  >
    <!-- Gradient background that follows mouse -->
    <div
      class="absolute inset-0 opacity-0 pointer-events-none transition-transform duration-200 ease-out transition-opacity duration-1000"
      :class="{ 'opacity-20': isLoaded }"
      :style="{ transform: `translate(${mouseX / 20}px, ${mouseY / 20}px)` }"
    >
      <div class="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]">
        <div
          class="absolute top-0 left-[25%] w-[50%] h-[50%] rounded-full"
          :class="gradientColors.bg1"
          style="filter: blur(120px)"
        ></div>
        <div
          class="absolute top-[25%] left-0 w-[50%] h-[50%] rounded-full"
          :class="gradientColors.bg2"
          style="filter: blur(120px)"
        ></div>
      </div>
    </div>

    <!-- Cursor follower - more circular -->
    <div
      ref="cursor"
      class="pointer-events-none fixed w-[300px] h-[300px] -ml-[150px] -mt-[150px] z-50 rounded-full opacity-0 transition-opacity duration-1000"
      :class="{ 'opacity-100': isLoaded }"
      :style="{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
        backgroundColor: cursorColors[activeColorScheme],
        filter: `blur(60px)`,
      }"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-3xl mx-auto text-center opacity-0 transition-all duration-1000 transform translate-y-4"
      :class="{ 'opacity-100 translate-y-0': isLoaded }"
    >
      <!-- Logo -->
      <div class="mb-8 inline-flex items-center justify-center">
        <div
          class="relative w-fit px-5 h-12 bg-white bg-opacity-5 rounded-full flex items-center justify-center"
        >
          <span class="text-2xl font-bold text-white">Charles Rémy</span>
        </div>
      </div>

      <!-- Main heading -->
      <h1 class="text-6xl sm:text-8xl font-extrabold mb-6 tracking-tight">
        <span class="bg-clip-text text-transparent" :class="titleGradient">
          Portfolio
        </span>
      </h1>

      <!-- About me text -->
      <p class="text-lg sm:text-xl mb-8 text-gray-300 max-w-xl mx-auto leading-relaxed">
        Développeur full stack passionné, en quête constante d’apprentissage et d’innovation.
      </p>

      <!-- Subtitle -->
      <p class="text-base sm:text-lg mb-10 text-gray-400 max-w-md mx-auto">
        Bientôt disponible
      </p>

      <!-- Dual CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <a 
          href="https://www.linkedin.com/in/charles-rémy/" 
          target="_blank"
          class="w-full sm:w-auto px-8 py-3 rounded-full text-white text-sm font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
          :class="buttonGradient"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/Crmy7"
          target="_blank" 
          class="w-full sm:w-auto px-8 py-3 rounded-full bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium hover:bg-opacity-20 transition-all flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          <span>GitHub</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const cursorX = ref(0);
const cursorY = ref(0);
const activeColorScheme = ref(0);
const isLoaded = ref(false);

// Couleurs pour le cercle suiveur selon la section
const cursorColors = [
  "rgba(147, 51, 234, 0.3)", // Violet
  "rgba(59, 130, 246, 0.3)", // Bleu
  "rgba(34, 197, 94, 0.3)", // Vert
  "rgba(239, 68, 68, 0.3)", // Rouge
  "rgba(249, 115, 22, 0.3)", // Orange
  "rgba(6, 182, 212, 0.3)", // Cyan
];

// Définition des schémas de couleurs
const colorSchemes = [
  // Violet
  {
    bg1: "bg-purple-600",
    bg2: "bg-violet-800",
    titleGradient: "bg-gradient-to-r from-purple-400 to-fuchsia-600",
    buttonGradient: "bg-gradient-to-r from-purple-600 to-fuchsia-600",
  },
  // Bleu
  {
    bg1: "bg-blue-600",
    bg2: "bg-sky-700",
    titleGradient: "bg-gradient-to-r from-blue-400 to-sky-500",
    buttonGradient: "bg-gradient-to-r from-blue-600 to-sky-500",
  },
  // Vert
  {
    bg1: "bg-green-600",
    bg2: "bg-emerald-700",
    titleGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
    buttonGradient: "bg-gradient-to-r from-green-600 to-emerald-500",
  },
  // Rouge
  {
    bg1: "bg-red-600",
    bg2: "bg-rose-700",
    titleGradient: "bg-gradient-to-r from-red-400 to-rose-600",
    buttonGradient: "bg-gradient-to-r from-red-600 to-rose-500",
  },
  // Orange
  {
    bg1: "bg-orange-600",
    bg2: "bg-amber-700",
    titleGradient: "bg-gradient-to-r from-orange-400 to-amber-500",
    buttonGradient: "bg-gradient-to-r from-orange-600 to-amber-500",
  },
  // Cyan
  {
    bg1: "bg-cyan-600",
    bg2: "bg-teal-700",
    titleGradient: "bg-gradient-to-r from-cyan-400 to-teal-500",
    buttonGradient: "bg-gradient-to-r from-cyan-600 to-teal-500",
  },
];

// Computed properties pour les couleurs actives
const gradientColors = computed(() => colorSchemes[activeColorScheme.value]);
const titleGradient = computed(
  () => colorSchemes[activeColorScheme.value].titleGradient
);
const buttonGradient = computed(
  () => colorSchemes[activeColorScheme.value].buttonGradient
);

function handleMouseMove(event) {
  // Pour le gradient
  mouseX.value = event.clientX - window.innerWidth / 2;
  mouseY.value = event.clientY - window.innerHeight / 2;

  // Pour le cercle suiveur - positionnement exact
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
}

// Initialiser avec une couleur aléatoire au chargement
onMounted(() => {
  // Position initiale du curseur
  cursorX.value = window.innerWidth / 2;
  cursorY.value = window.innerHeight / 2;

  // Sélection aléatoire d'un schéma de couleurs
  activeColorScheme.value = Math.floor(Math.random() * colorSchemes.length);

  // Déclencher l'animation de fade-in après un court délai
  setTimeout(() => {
    isLoaded.value = true;
  }, 300);

  // Changer de couleur toutes les 10 secondes
  setInterval(() => {
    let newScheme;
    do {
      newScheme = Math.floor(Math.random() * colorSchemes.length);
    } while (newScheme === activeColorScheme.value);

    activeColorScheme.value = newScheme;
  }, 10000);
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: default;
}
</style>