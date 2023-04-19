<script setup>
import { ref } from "vue";
import devIconView from "./components/devIconView.vue";
import projectHolderView from "./components/projectHolderView.vue";
import projectCardView from "./components/projectCardView.vue";
// import anime from "animejs";
const showPage = ref("home");
const showProject = ref(0);
const bubbleShown = ref(false);
const MyBourse = "src/assets/Mybourse.png";
console.log();
const changeProject = (direction) => {
  console.log("working", direction);
  if (direction === -1) {
    if (showProject.value === 0) {
      showProject.value = 3;
    } else {
      showProject.value = showProject.value + direction;
    }
  } else if (direction === 1) {
    if (showProject.value === 3) {
      showProject.value = 0;
    } else {
      showProject.value = showProject.value + direction;
    }
  }
  // direction === -1
  //   ? (showProject.value = 0
  //       ? (showProject.value = 2)
  //       : (showProject.value = showProject.value + direction))
  //   : (showProject.value = 2
  //       ? (showProject.value = 0)
  //       : (showProject.value = showProject.value + direction));
};

// const test = () => {
//   const animation = anime.timeline({
//     easing: "easeOutExpo",
//     duration: 750,
//   });

//   // Add children
//   animation.add({
//     targets: ".move",
//     translateY: "-200%",
//   });
// };
</script>

<template>
  <Transition name="home" mode="out-in">
    <div
      class="h-screen flex flex-col md:(overflow-hidden) <md:(overflow-y-scroll overflow-x-hidden) shadow-lg select-none"
      v-if="showPage == 'home'"
    >
      <div class="h-1/2 relative">
        <img
          class="w-full <md:(h-full) absolute"
          src="./assets/55b14394371d2223518b88e9.webp"
          alt=""
        />
        <div
          class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black"
        >
          <div
            class="flex flex-col h-full justify-center items-center"
            v-motion
            :initial="{ y: -200, opacity: 0 }"
            :enter="{
              y: 0,
              opacity: 1,
              transition: { delay: 200, duration: 500 },
            }"
          >
            <h1 class="text-gray-200 font-extrabold text-5xl">Hi! I'm Shun!</h1>
            <h3 class="text-gray-200 mt-8 text-xl font-light">
              I love web & game development!
            </h3>
            <h5 class="text-gray-200 mt-4 font-light text-xl">
              From Marseille ! 🇫🇷
            </h5>
          </div>
        </div>
      </div>
      <div class="h-1/2 bg-black z-1">
        <div class="grid <lg:(grid-cols-1) lg:(grid-cols-3) gap-2 h-full">
          <!-- <button
            class="py-4 px-8 rounded border bg-black text-gray-200 font-bold hover:(bg-dark-500)"
            @click="showPage = true"
          >
            PLAY
          </button> -->
          <div
            class="flex flex-col justify-start items-center <lg:(hidden) group select-none"
            v-motion
            :initial="{ x: -400, opacity: 0 }"
            :enter="{
              x: 0,
              opacity: 1,
              transition: { delay: 400, duration: 500 },
            }"
          >
            <h4
              class="mt-8 text-dark-400 font-bold text-2xl tracking-25px transition-all duration-500 hover:(text-gray-200 tracking-wide) group-hover:(text-gray-200 tracking-wide)"
            >
              Projects
            </h4>
            <span
              class="tracking-widest text-dark-300 text-lg mt-16 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="(showPage = 'projects'), (showProject = 0)"
              >MyBourse</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="(showPage = 'projects'), (showProject = 1)"
              >LO Classic</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="(showPage = 'projects'), (showProject = 2)"
              >13th Games.io</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="(showPage = 'projects'), (showProject = 3)"
              >Godot Virtual Joystick</span
            >
          </div>
          <div
            class="flex flex-col justify-center items-center"
            v-motion
            :initial="{ y: 200, opacity: 0 }"
            :enter="{
              y: 0,
              opacity: 1,
              transition: { delay: 400, duration: 500 },
            }"
          >
            <button
              class="py-4 px-8 rounded border bg-black text-gray-200 font-bold hover:(bg-dark-500)"
              @click="showPage = 'projects'"
            >
              Projects
            </button>
          </div>
          <div
            class="flex flex-col justify-start items-center <lg:(hidden) group select-none"
            v-motion
            :initial="{ x: 400, opacity: 0 }"
            :enter="{
              x: 0,
              opacity: 1,
              transition: { delay: 600, duration: 500 },
            }"
          >
            <h4
              class="mt-8 text-dark-400 font-bold text-2xl tracking-25px transition-all duration-500 group-hover:(text-gray-200 tracking-wide) hover:(text-gray-200 tracking-wide)"
            >
              Contact
            </h4>
            <span
              class="tracking-widest text-dark-300 text-lg mt-16 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="showPage = 'contact'"
              >Malt</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="showPage = 'contact'"
              >Github</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) cursor-pointer"
              @click="showPage = 'contact'"
              >LinkedIn</span
            >
            <span
              class="tracking-widest text-dark-300 text-lg mt-8 transition-all duration-500 hover:(text-gray-200) children:(text-dark-300 transition-all duration-500) children:hover:(text-purple-600) cursor-pointer"
              @click="showPage = 'contact'"
              >13<span class="">DEV</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="projects" mode="in-out">
    <div
      class="absolute top-0 bottom-0 left-0 right-0 -z-1 h-screen flex flex-col justify-between items-center bg-black select-none overflow-y-scroll"
      v-if="showPage == 'projects'"
      v-auto-animate
    >
      <button
        class="py-4 mt-8 <md:(mt-2) px-8 rounded border bg-black text-gray-200 font-bold hover:(bg-dark-500)"
        @click="showPage = 'home'"
      >
        Home
      </button>

      <div class="flex container my-2" v-auto-animate>
        <projectHolderView
          @nextProject="changeProject($event)"
          @previousProject="changeProject($event)"
        >
          <div class="bg-black" v-auto-animate>
            <projectCardView
              v-if="showProject === 0"
              imageUrl="/MyBourse.png"
              ProjectTitle="MyBourse"
              ProjectDesc="MyBourse is an app that allows you to create or join the wallet of your friends, you can visualise and manage your budget with customisables icons and colors!"
            >
              <devIconView name="Javascript" imageUrl="/javascript.png" />
              <devIconView name="Vite" imageUrl="/vitejs.png" />
              <devIconView name="VueJS" imageUrl="/vuejs.png" />
              <devIconView name="WindiCSS" imageUrl="/windicss.png" />
              <devIconView
                name="Pinia"
                imageUrl="/pinia.svg"
                :scaleIcon="true"
              />
              <devIconView name="Strapi" imageUrl="/strapi.png" />
            </projectCardView>

            <projectCardView
              v-if="showProject === 1"
              imageUrl="/LOClassic.png"
              ProjectTitle="LO Classic"
              ProjectDesc="Landing page of a Last Oasis server I used to play on, it was supposed to be a whole website but it didn't concretised into a big project!"
            >
              <devIconView name="Javascript" imageUrl="/javascript.png" />
              <devIconView name="Vite" imageUrl="/vitejs.png" />
              <devIconView name="VueJS" imageUrl="/vuejs.png" />
              <devIconView name="WindiCSS" imageUrl="/windicss.png" />
            </projectCardView>

            <projectCardView
              v-if="showProject === 2"
              imageUrl="/13thGames.png"
              ProjectTitle="13th Games.io"
              ProjectDesc="Ones of my first projects using APIs, 13thGames.io is a website that fetches all the games from Rawg.io database, you can search games by titles, genres and platforms !"
            >
              <devIconView name="Javascript" imageUrl="/javascript.png" />
              <devIconView name="Vite" imageUrl="/vitejs.png" />
              <devIconView name="VueJS" imageUrl="/vuejs.png" />
              <devIconView name="WindiCSS" imageUrl="/windicss.png" />
              <devIconView
                name="Pinia"
                imageUrl="/pinia.svg"
                :scaleIcon="true"
              />
            </projectCardView>
            <projectCardView
              v-if="showProject === 3"
              imageUrl="/joystick.png"
              ProjectTitle="Godot Virtual Joystick"
              ProjectDesc="Simple Virtual Joystick I made, that I will use for my futures mobile godot projects! You can download it on my github for free!"
            >
              <devIconView name="Godot" imageUrl="/godot.svg" />
            </projectCardView>
          </div>
        </projectHolderView>
      </div>

      <button
        class="py-4 mb-8 <md:(mb-2) px-8 rounded border bg-black text-gray-200 font-bold hover:(bg-dark-500)"
        @click="showPage = 'contact'"
      >
        About Me
      </button>
    </div>
  </Transition>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 -z-2 h-screen flex flex-col justify-start items-center overflow-y-scroll bg-black select-none"
  >
    <button
      class="py-4 mt-8 mb-4 px-8 rounded bg-black border font-bold text-gray-200 hover:(bg-dark-500)"
      @click="showPage = 'projects'"
    >
      Projects
    </button>
    <div class="w-full h-full flex <lg:(flex-col) justify-center items-center">
      <div
        class="lg:(h-96) <lg:(hidden justify-center) w-lg relative flex flex-col items-start overflow-hidden"
      >
        <img
          class="h-full w-full absolute rounded-tr-3xl rounded-br-3xl border border-dark-50"
          src="./assets/photo2.jpeg"
          alt=""
        />
        <img
          class="h-full absolute rounded-tr-3xl rounded-br-3xl border-dark-50 right-5 top-30 hover:(transform-gpu -translate-y-20) duration-500"
          src="./assets/sujet.png"
          alt=""
          @click="bubbleShown ? (bubbleShown = false) : (bubbleShown = true)"
        />
        <div
          class="h-full w-full rounded-tr-3xl rounded-br-3xl bg-gradient-to-r from-black to-transparent absolute opacity-100 pointer-events-none"
        ></div>
        <div
          class="absolute top-0 right-0 left-0 bottom-0 pointer-events-none"
          v-auto-animate
        >
          <span
            v-if="bubbleShown === true"
            class="absolute font-semibold right-50 top-30 p-5 w-70 rounded-10xl bg-white bg-opacity-50 duration-500 cursor-pointer"
            >Hmm... Are they gonna call me for a job ?</span
          >
        </div>
      </div>
      <div
        class="h-full w-50 flex flex-col justify-center items-center lg:(ml-9) <lg:(ml-0 mb-4)"
      >
        <div class="h-full flex flex-col justify-evenly items-center">
          <a
            href="https://github.com/Shun-Lassal/"
            target="_blank"
            class="group flex flex-col justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              class="fill-dark-300 group-hover:(fill-gray-200) duration-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
              />
            </svg>
            <span
              class="text-black font-bold group-hover:(text-gray-400) duration-500"
              >Github</span
            >
          </a>
          <a
            href="https://www.linkedin.com/in/shun-lassal-56a402217/"
            target="_blank"
            class="group flex flex-col justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              class="fill-dark-300 group-hover:(fill-blue-700) duration-500 group"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
              />
            </svg>
            <span
              class="group text-black font-bold group-hover:(text-blue-600) duration-500 children:(text-black )"
              >Linked<span class="group-hover:(text-gray-200) duration-500"
                >In</span
              ></span
            >
          </a>
          <a
            href="https://www.malt.fr/profile/shunlassal"
            target="_blank"
            class="group flex flex-col justify-center items-center cursor-pointer"
          >
            <div
              class="group w-12 h-12 flex flex-col justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Malt"
                role="img"
                viewBox="0 0 512 512"
                width="40px"
                height="40px"
                class="group"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    width="512"
                    height="512"
                    rx="15%"
                    fill="#ffffff"
                    class="fill-dark-300 group-hover:(fill-gray-200) transition-all duration-500"
                  ></rect>
                  <path
                    fill="#000000"
                    class="fill-black group-hover:(fill-red-500) transition-all duration-500"
                    d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
                  ></path>
                </g>
              </svg>
            </div>
            <span
              class="text-black font-bold group-hover:(text-gray-400) duration-500"
              >Malt</span
            >
          </a>
          <span
            class="select-none text-dark-300 text-2xl transition-all duration-500 hover:(text-gray-200) children:(text-dark-300 transition-all duration-500) children:hover:(text-purple-600) cursor-pointer"
            >13<span class="font-semibold tracking-tighter">DEV</span></span
          >
        </div>
      </div>
      <div
        class="w-lg flex flex-col items-center <lg:(items-center w-0) container"
      >
        <div class="flex flex-col justify-center items-center">
          <span class="font-bold text-xl text-gray-200 mb-10"
            >Send me a mail!</span
          >
          <span class="text-dark-100 select-text mb-10"
            >lassal.shun@gmail.com</span
          >
        </div>
      </div>
    </div>
    <div
      class="mt-4 pt-4 border-t border-t-gray-600 mb-4 w-full flex justify-center items-center space-x-0"
    >
      <div
        class="text-dark-300 select-none flex flex-col justify-center items-center"
      >
        <span>Made with love, and by myself.</span>
        <span class="text-black hover:(text-dark-300) duration-500"
          >(almost)</span
        >
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: black;
  overflow: hidden;
}

.home-enter-active,
.home-leave-active {
  transition: all 0.5s ease-in-out;
}

.home-enter-from,
.home-leave-to {
  transform: translateY(-100%);
}

.projects-enter-active,
.projects-leave-active {
  transition: all 0.5s ease-in-out;
}

.projects-enter-from,
.projects-leave-to {
  transform: translateY(100%);
}
</style>
