<template>

    <nav class="flex justify-center content-center items-center h-20 w-screen gap-32 font-medium nav">
        <input type="checkbox" id="toggle">
        <label for="toggle" class="label-hamburger">
            <div></div>
            <div></div>
            <div></div>
        </label>
        
        <div class="main_pages_mobiles flex justify-center content-center items-center gap-32">
            <!-- <NuxtLink to="/"><img src="~/assets/img/Charles.webp" class="w-32 h-32 rounded-full mx-auto hover:scale-105 ease-in-out duration-300 cursor-pointer"/></NuxtLink> -->
            <NuxtLink to="/"  class="navlink navlinkMobile">Accueil</NuxtLink>
            <NuxtLink to="#WhoAmI" class="navlink navlinkMobile">Qui suis-je ?</NuxtLink>
            <NuxtLink to="#Competences" class="navlink navlinkMobile">Mes Compétences</NuxtLink>
            <NuxtLink to="#Achievments" class="navlink navlinkMobile">Réalisations</NuxtLink>
            <NuxtLink to="#Contact" class="navlink navlinkMobile">Contact</NuxtLink>
        </div>

        <div class="main_pages flex justify-center content-center items-center gap-20">
            <!-- <NuxtLink to="/"><img src="~/assets/img/Charles.webp" class="w-32 h-32 rounded-full mx-auto hover:scale-105 ease-in-out duration-300 cursor-pointer"/></NuxtLink> -->
            <NuxtLink to="/" data-aos="fade-down" data-aos-offset="200" data-aos-delay="100" data-aos-duration="500" class="navlink">Accueil</NuxtLink>
            <NuxtLink to="#WhoAmI" data-aos="fade-down" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500" class="navlink">Qui suis-je ?</NuxtLink>
            <NuxtLink to="#Competences" data-aos="fade-down" data-aos-offset="200" data-aos-delay="400" data-aos-duration="500" class="navlink">Mes Compétences</NuxtLink>
            <NuxtLink to="#Achievments" data-aos="fade-down" data-aos-offset="200" data-aos-delay="600" data-aos-duration="500" class="navlink">Réalisations</NuxtLink>
            <NuxtLink to="#Contact" data-aos="fade-down" data-aos-offset="167" data-aos-delay="800" data-aos-duration="500" class="navlink">Contact</NuxtLink>
        </div>



        <!-- <MainButton :buttonText="`COIOUC`"></MainButton> -->
    </nav>
</template>

<script>
export default {
  mounted() {
  var checkBox = document.getElementById("toggle");
  var aAll = document.querySelectorAll(".navlinkMobile");
  aAll.forEach(function(a) {
  a.addEventListener("click", function() {
    checkBox.checked = false;
    console.log('Checkbox a false')
  });

})




}
}
</script>

<style lang="scss">
#menu_checkbox {
  display: none;
}

label {
  position: absolute;
  right: -75%;
  left: 0;
  display: block;
  width: 50px;
  height: fit-content !important;
  cursor: pointer;
}


label div {
  position: relative;
  top: 0;
  height: 3px;
  background-color: #fff;
  margin-bottom: 12px;
  transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
    0.3s ease right;
  border-radius: 2px;
}

label div:first-child {
  transform-origin: 0;
}

label div:last-child {
  margin-bottom: 0;
  transform-origin: 0px;
}

label div:nth-child(2) {
  right: 0;
  width: 50px;
}


#toggle:checked ~ .label-hamburger div:first-child {
  transform: rotateZ(45deg);
}

#toggle:checked ~ .label-hamburger div:last-child {
  top: 6px;
  transform: rotateZ(-45deg);
}

#toggle:checked ~ .label-hamburger div:nth-child(2) {
  opacity: 0;
}

</style>