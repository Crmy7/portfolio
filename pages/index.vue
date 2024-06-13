<template>
  <!-- <main> -->
  <section class="bandeau flex flex-wrap content-center items-center h-screen">
    <div class="box flex content-center items-center h-56 flex-wrap">
      <div class="line flex justify-start content-center items-center">
        <p>01</p>
        <h1 class="font-cuprum font-bold fisth1 titleH">
          Salut je m'appelle <span>Charles</span> !
        </h1>
      </div>
      <div class="line flex justify-start content-center items-center">
        <p>02</p>
        <h2 class="font-cuprum font-bold fisth2 titleH">
          Je suis <span>Développeur Web</span> en troisième année de
        </h2>
      </div>
      <div class="line flex justify-start content-center items-center">
        <p>03</p>
        <h2 class="font-cuprum font-bold fisth3 titleH">
          bachelor à <span>MyDigitalSchool</span> Annecy !
        </h2>
      </div>
    </div>
  </section>
  <!-- <div class="h-36 w-full"></div> -->
  <section class="sectionAbout" id="WhoAmI">
    <div class="h-16 w-full"></div>
    <div class="titleContainer center" id="About">
      <h2 class="title">Qui suis-je ?</h2>
    </div>
    <div class="h-16 w-full"></div>
    <QuiSuisJe class="AnimComponent"></QuiSuisJe>
    <div class="h-28 w-full noneDesk"></div>
  </section>
  <section class="sectionCompétences" id="Competences">
    <div class="h-16 w-full"></div>
    <div class="titleContainer center">
      <h2 class="title">Mes compétences</h2>
    </div>
    <div class="h-16 w-full"></div>

    <div class="competencesDiv AnimComponent">
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.247 6.763c-1.215 2.033-2.405 4.002-3.056 5.023-.82 1.287-1.102 1.471-2.748 2.142l-.173-.145c.363-1.752.491-2.063 1.606-3.106.882-.823 2.598-2.351 4.371-3.914zm-10.269 11.254l.871.727c-.16 2.549-2.361 3.452-4.231 3.222 1.736-1.604 1.924-3.639 3.36-3.949zm14.746-17.831s-7.887 6.857-10.213 9.03c-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.671-1.099 3.44-1.248 4.793-3.373 1.713-2.687 7.016-11.698 7.016-11.698.422-.748-.516-1.528-1.171-.976zm-14.098 15.767c-5.093.053-3.121 5.901-8.626 5.445 3.252 4.523 11.38 3.041 10.832-3.604l-2.206-1.841z"
          />
        </svg>
        <h3>Développement front-end</h3>
        <p>
          J'ai des compétences en <span>développement front-end</span> et je
          suis capable de créer des <span>interfaces</span> web modernes et
          dynamiques.
        </p>
        <div class="liLangages">
          <li><span>&check;</span> HTML/SCSS</li>
          <li><span>&check;</span> Tailwind & Bootstrap</li>
          <li><span>&check;</span> JavaScript</li>
          <li><span>&check;</span> Nuxt & React</li>
        </div>
      </div>
      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 11q3.75 0 6.375-1.175T21 7t-2.625-2.825T12 3T5.625 4.175T3 7t2.625 2.825T12 11m0 2.5q1.025 0 2.563-.213t2.962-.687t2.45-1.237T21 9.5V12q0 1.1-1.025 1.863t-2.45 1.237t-2.962.688T12 16t-2.562-.213t-2.963-.687t-2.45-1.237T3 12V9.5q0 1.1 1.025 1.863t2.45 1.237t2.963.688T12 13.5m0 5q1.025 0 2.563-.213t2.962-.687t2.45-1.237T21 14.5V17q0 1.1-1.025 1.863t-2.45 1.237t-2.962.688T12 21t-2.562-.213t-2.963-.687t-2.45-1.237T3 17v-2.5q0 1.1 1.025 1.863t2.45 1.237t2.963.688T12 18.5"
          />
        </svg>
        <h3>Développement back-end</h3>
        <p>
          J'ai des compétences en <span>développement back-end</span> et je suis
          capable de créer des <span>API</span> et des
          <span>applications</span> web sécurisées.
        </p>
        <div class="liLangages">
          <li><span>&check;</span> Node.js</li>
          <li><span>&check;</span> Express</li>
          <li><span>&check;</span> PHP & Symfony</li>
          <li><span>&check;</span> MySQL</li>
        </div>
      </div>

      <div class="card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5v3h10v-3zm5 2.5q.425 0 .713-.288T13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287M7 16h10V6H7zM7 4h10V3H7zm0 14v3zM7 4V3z"
          />
        </svg>
        <h3>Développement Mobile</h3>
        <p>
          J'ai des compétences en <span>développement mobile</span> et je suis
          capable de créer des <span>applications</span> mobiles modernes et
          ergonomiques.
        </p>
        <div class="liLangages">
          <li><span>&check;</span> Flutter</li>
          <li><span>&check;</span> React Native</li>
        </div>
      </div>
    </div>
  </section>
  <section class="sectionReal" id="Achievments">
    <div class="h-16 w-full"></div>
    <div class="titleContainer center">
      <h2 class="title">Mes Réalisations</h2>
    </div>
    <div class="h-16 w-full"></div>
    <Realisations class="AnimComponent"></Realisations>
    <div class="h-28 w-full noneDesk"></div>
  </section>

  <section class="sectionContact" id="Contact">
    <div class="h-16 w-full"></div>
    <div class="titleContainer center">
      <h2 class="title">Contact</h2>
    </div>
    <div class="h-32 w-full"></div>
    <Contact class="AnimComponent"></Contact>
    <div class="h-32 w-full"></div>
  </section>
  <!-- <MainButton button-text="coucou"></MainButton> -->
  <!-- </main> -->
  <FooterCompo />
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const test = window.getComputedStyle(
      document.querySelector(".title"),
      ":after"
    );

    const title = document.querySelectorAll(".title");

    const Section = document.querySelectorAll("section");

    console.log(title);

    // console.log(test)
    // gsap.to(test,
    //     {
    //         scrollTrigger: '#Achievments',
    //         x: 100,
    //         duration: 3,
    //     }
    // );

    //   gsap.to(".title::after", {
    //     scrollTrigger: ".titleContainer",
    //     x: 360,
    //     duration: 2,
    //   });

    //   gsap.to(".title:after", {
    //     scrollTrigger: ".titleContainer",
    //     rotation: 30,
    //     x: 100,
    //     duration: 1,
    // });

    //   gsap.to(".sectionReal h2", {
    //     scrollTrigger: ".sectionReal",
    //     duration: 2,
    //     rotation: 360
    //   });

    //   gsap.from(".title", {
    //   scrollTrigger: {
    //     trigger: ".title",
    //     start: "top center",
    //     end: "bottom center",

    //   },
    //   x: -1500,
    //   opacity: 0,
    //   duration: 5,
    // });

    // gsap.from(title, {
    //   scrollTrigger: {
    //     trigger: ".titleContainer",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true,
    //   },
    //   x: -100,
    //   opacity: 0,
    //   duration: 25,
    // });
    // gsap.from(".QuiSuisJeAnim", {
    //   scrollTrigger: {
    //     trigger: ".titleContainer",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true,
    //   },
    //   opacity: 0,
    //   duration: 5,
    // });

    // gsap.fromTo(title,
    // ".titleContainer",
    //     {x: -100, opacity: 0},
    //     {x: 0, opacity: 1, duration: 5}

    // );

    // let fadeInTimeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sectionAbout",
    //         start: "center 80%",
    //         end: "center 50%",
    //         toggleActions: "play reverse restart reverse",
    //         scrub: 0.4,
    //         markers: true,
    //     },
    // });

    // fadeInTimeline
    //     .fromTo(
    //         ".sectionAbout",
    //         {autoAlpha: 0 },
    //         {autoAlpha: 1 }
    //     );

    gsap.utils.toArray(".title").forEach((Section) => {
      gsap.from(Section, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: Section,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none none reverse",
        },
      });
    });

    gsap.utils.toArray(".AnimComponent").forEach((Section) => {
      gsap.from(Section, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Section,
          start: "top center",
          end: "bottom center",
          toggleActions: "restart none none reverse",
        },
      });
    });

    var h1List = document.querySelectorAll(".titleH");

    h1List.forEach(function (h1) {
      h1.addEventListener("animationend", function () {
        if (event.animationName === "typing") {
          // Do something when the animation ends
          h1.style.border = "none";
        }
      });
    });
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
  .fisth1 {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    width: 0;
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
    animation-fill-mode: forwards;
  }

  .fisth2 {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    width: 0;
    animation: typing 3.5s steps(80, end), blink-caret 0.75s step-end infinite,
      opacity 0.25s;
    animation-fill-mode: forwards;
    animation-delay: 3s;
    opacity: 0;
  }

  .fisth3 {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    width: 0;
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite,
      opacity 0.25s linear;
    animation-fill-mode: forwards;
    animation-delay: 6.5s;
    opacity: 0;
  }

  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }

    50% {
      border-color: #0af4b5;
    }
  }
}

.competencesDiv {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  gap: 50px;
}

.competencesDiv .card {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  gap: 25px;
}

.card svg {
  fill: #0af4b5;
  color: #0af4b5;
  height: 70px;
  width: 70px;
}

.card p {
  text-align: center;
}

.card h3 {
  font-size: 25px;
  // color: #0af4b5;
}

.card .liLangages {
  height: 120px;
}

.card span {
  color: #0af4b5;
  font-weight: 500;
}
</style>
