<template>
  <div class="containerRealisation">
    <div class="realisationsDiv">
      <div class="realisationList">
        <div
          class="projectLink"
          v-for="projet in projets"
          :key="projet.id"
          @click="
            selectedProject = projet;
            active = !active;
          "
          :aria-pressed="selectedProject.id == projet.id"
          :class="{ active: selectedProject.id == projet.id }"
        >
          <li>
            {{ projet.projet }}
          </li>
        </div>
      </div>

      <div
        v-if="selectedProject"
        class="realisationDivContent flex-wrap gap-5 opacity-0"
      >
        <div class="real center">
          <div class="leftRealContent">
            <h2 class="capitalize titleProject">
              {{ selectedProject.projet }}
            </h2>
            <h3>{{ selectedProject.date }}</h3>
          </div>
          <div class="rightRealContent">
            <img :src="selectedProject.img" alt="" />
          </div>
        </div>
        <div class="realDescription">
          <h3>Description :</h3>
          <p>{{ selectedProject.description }}</p>
          <div class="h-8 w-full"></div>
          <h3>Compétences et Techniques mises en avant :</h3>
          <div class="h-3 w-full"></div>
          <div class="liLangages technos">
            <li v-for="toto in selectedProject.technos">
              <span>&check;</span> {{ toto }}
            </li>
          </div>
          <a :href="selectedProject.link" target="blank">
            <MainButton button-text="Voir le projet"></MainButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projets: [
        {
          projet: "Dooplerr",
          description:
            "Dooplerr, projet d'école où je devais créer une PWA de podcasts, j'ai fait la conception et la création de la base de données, de l'API puis je l'ai intégré sur le front-end ",
          id: "projet 1",
          date: "Mai 2024",
          img: "/img/Dooplerr.png",
          link: "https://dooplerr-app.vercel.app/",
          technos: [
            "Nuxt",
            "Tailwind",
            "Express",
            "Sequelize",
            "API",
            "PWA",
            "Maquettage",
            "AWS S3",
          ],
        },
        {
          projet: "La Cour du Mail",
          description:
            "Création d'un site web sur mesure avec disponible en version anglaise.",
          id: "projet 7",
          date: "Septembre 2023",
          img: "/img/LCM.png",
          link: "https://www.lacourdumail.ch/",
          technos: [
            "WordPress",
            "Thème enfant",
            "JavaScript & JQuery",
            "PHP",
            "AOS",
            "GSAP",
          ],
        },
        {
          projet: "Promoholding",
          description:
            "Création d'un site web de promotion et d'estimation immobilière et amélioration du responsive avec administration et gestion de contenu via un CMS. Ainsi qu'une reproduction la plus fidèle possible à la maquette.",
          id: "projet 3",
          date: "Juillet 2022",
          img: "/img/Promoholding.png",
          link: "https://www.promoholding.ch",
          technos: ["HTML", "CSS", "JavaScript", "Maquettage"],
        },
        {
          projet: "Buuk",
          description:
            "Projet d'école pour apprendre le framework Vue.js et l'utilisation d'une API externe. Tout en reprenant les éléments de la maquette réalisée en amont par l'équipe de designers et en utilisant au maxmimum les fonctionalités de Vue.js",
          id: "projet 5",
          date: "Novembre 2022",
          img: "/img/Buuk.png",
          link: "https://buuk-charles.netlify.app/#/",
          technos: ["HTML", "CSS", "JavaScript", "Vue.js", "API", "Maquettage"],
        },
        {
          projet: "Help Teamo",
          description:
            "Projet d'école consitant à créer un jeu vidéo sur le thème de l'évolution en 4 jours. Le jeu de mon équipe et moi-même avons créé a remporté l’award « Coup de Coeur du Jury ».",
          id: "projet 4",
          date: "Janvier 2022",
          img: "/img/Teamo.png",
          link: "https://horns-studio.itch.io/teamo",
          technos: ["Stencyl", "JavaScript", "Gestion de projet"],
        },
        {
          projet: "PB&CO",
          description:
            "Création d'un site web sur mesure sur WordPress avec gestion de chalets et d'activités dans le back office, ainsi qu'une version en anglais.",
          id: "projet 6",
          date: "Juin 2023",
          img: "/img/PB&CO.png",
          link: "https://www.pb-and-co.com/",
          technos: ["WordPress", "Thème enfant", "JavaScript & JQuery", "PHP"],
        },
        {
          projet: "Handball Pays Rochois",
          id: "projet 2",
          description:
            "Etant membre de la communication du Handball Pays Rochois, j'ai décidé de mettre en application mes compétences acquises en cours en développent un site WordPress dans lequel les membres du comité et moi-même pouvons mettre les actualités, photos, équipes et résultats du week-end.",
          date: "Décembre 2021",
          img: "/img/HBPR.png",
          link: "https://www.handballpaysrochois.com",
          technos: ["WordPress", "Thème enfant", "Boutique e-commerce"],
        },
      ],
      selectedProject: {},
      active: false,
    };
  },

  mounted() {
    this.selectedProject = this.projets[0];
    console.log(this.selectedProject.technos);
  },
  watch: {
    selectedProject: function () {
      const el = document.querySelector(".realisationDivContent");
      el.classList.remove("opacity");

      setTimeout(() => {
        el.classList.add("opacity");
        el.classList.add("opacity-100");
      }, "");
    },
  },
};
</script>

<style>
.opacity {
  animation: opacity 0.5s linear;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

p {
  transition: all 0.5s ease-out;
}

.real {
  width: 100%;
}

.leftRealContent {
  width: 65%;
}

.rightRealContent {
  width: 35%;
}

.realisationDivContent img {
  height: 100%;
  width: auto;
}

.projectLink {
  width: 80%;
}

.realDescription {
  width: 100%;
}

.realisationDivContent h3 {
  font-size: 20px;
}

.technos {
  height: 100px;
  width: 60%;
}

.titleProject {
  font-size: 30px !important;
  font-weight: 700;
}
</style>
