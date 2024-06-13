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
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path
                        d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
                </svg>
                <h3>Développement Web</h3>
                <p>Dans ma <span>formation</span> actuelle, j'ai la chance d'apprendre à la fois le développement
                    <span>font</span> et <span>back</span> ainsi que du <span>WordPress</span>.</p>
                <div class="liLangages">
                    <li><span>&check;</span> HTML/CSS</li>
                    <li><span>&check;</span> JavaScript & Vue.js</li>
                    <li><span>&check;</span> PHP & Symfony</li>
                    <li><span>&check;</span> MySQL</li>
                    <li><span>&check;</span> Thème enfant</li>
                    <li><span>&check;</span> WooCommerce</li>
                </div>
            </div>
            <div class="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path
                        d="M18.247 6.763c-1.215 2.033-2.405 4.002-3.056 5.023-.82 1.287-1.102 1.471-2.748 2.142l-.173-.145c.363-1.752.491-2.063 1.606-3.106.882-.823 2.598-2.351 4.371-3.914zm-10.269 11.254l.871.727c-.16 2.549-2.361 3.452-4.231 3.222 1.736-1.604 1.924-3.639 3.36-3.949zm14.746-17.831s-7.887 6.857-10.213 9.03c-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.671-1.099 3.44-1.248 4.793-3.373 1.713-2.687 7.016-11.698 7.016-11.698.422-.748-.516-1.528-1.171-.976zm-14.098 15.767c-5.093.053-3.121 5.901-8.626 5.445 3.252 4.523 11.38 3.041 10.832-3.604l-2.206-1.841z" />
                </svg>
                <h3>Web Design</h3>
                <p>Au cours de ma formation, j'ai pu voir une autre facette du digital comme le <span>web design</span> et
                    ainsi maîtriser des <span>outils</span>.</p>
                <div class="liLangages">
                    <li><span>&check;</span> Suite Adobe</li>
                    <li><span>&check;</span> Design UX/UI</li>
                    <li><span>&check;</span> Maquettage</li>
                    <li><span>&check;</span> Production print</li>
                </div>
            </div>

            <div class="card">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path
                        d="M16 18c0 1.104-.896 2-2 2h-12c-1.105 0-2-.896-2-2v-12c0-1.104.895-2 2-2h12c1.104 0 2 .896 2 2v12zm8-14l-6 6.223v3.554l6 6.223v-16z" />
                </svg>
                <h3>Vidéo</h3>
                <p>Je sais faire du <span>montage</span> vidéo pour créer des vidéos professionnelles et attrayantes en
                    utilisant différents <span>logiciels</span> de montage vidéo.</p>
                <div class="liLangages">
                    <li><span>&check;</span> Premiere Pro</li>
                    <li><span>&check;</span> After Effect</li>
                    <li><span>&check;</span> Motion design</li>
                    <li><span>&check;</span> Prise de vue</li>
                </div>
            </div>
        </div>

        <!-- <font-awesome-icon icon="fa-brands fa-wordpress" /> -->
        <!-- <font-awesome-icon icon="fa-solid fa-paintbrush" /> -->
        <!-- <font-awesome-icon icon="fa-solid fa-video" /> -->
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
            document.querySelector('.title'), ':after'
        );

        const title = document.querySelectorAll('.title');

        const Section = document.querySelectorAll('section');

        console.log(title)


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



        gsap.utils.toArray(".title").forEach(Section => {
            gsap.from(Section, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: Section,
                    start: 'top center',
                    end: "bottom center",
                    toggleActions: 'restart none none reverse',
                }
            });
        });


        gsap.utils.toArray(".AnimComponent").forEach(Section => {
            gsap.from(Section, {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: Section,
                    start: 'top center',
                    end: "bottom center",
                    toggleActions: 'restart none none reverse',
                }
            });
        });

        var h1List = document.querySelectorAll('.titleH');

        h1List.forEach(function (h1) {
            h1.addEventListener('animationend', function () {

                if (event.animationName === "typing") {
                    // Do something when the animation ends
                    h1.style.border = "none";
                }
            });
        });



    }
}
</script>

<style lang="scss">
@media screen and (min-width: 600px) {
    .fisth1 {
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid;
        width: 0;
        animation:
            typing 2.5s steps(40, end),
            blink-caret .75s step-end infinite;
        animation-fill-mode: forwards;
    }

    .fisth2 {
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid;
        width: 0;
        animation:
            typing 3.5s steps(80, end),
            blink-caret .75s step-end infinite,
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
        animation:
            typing 2.5s steps(40, end),
            blink-caret .75s step-end infinite,
            opacity 0.25s linear;
        animation-fill-mode: forwards;
        animation-delay: 6.5s;
        opacity: 0;
    }

    @keyframes typing {
        from {
            width: 0
        }

        to {
            width: 100%,
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
            border-color: transparent
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
}</style>
