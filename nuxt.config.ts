// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "Charles Rémy | Étudiant Développement Web.",
      viewport:
        'name="viewport" content="width=device-width, height=device-height, initial-scale=1"',
      meta: [
        {
          name: "description",
          content:
            "Je m'appelle Charles Rémy, j'ai 20 ans je suis en troisième année en Bachelor Développement Web à MyDigitalSchool à Annecy.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
  ssr: true,
  css: [
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
