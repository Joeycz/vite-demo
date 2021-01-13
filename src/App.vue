<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div ref="screenBox">
    <div class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div ref="box1" class="mt-4 max-w-md mx-auto rounded-xl bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <div class="h-48 w-full md:w-48 bg-test-cover bg-cover bg-center"></div>
          <!-- <img class="h-48 w-full object-cover md:w-48" src="./assets/vs-picgo-data.jpeg" alt="Man looking at item at a store"> -->
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
          <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
  </div>
  <div v-for="item in 10" :key="item" class="p-6 bg-green-500 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  <button @click="h2c" class="btn-indigo">
    Click me
  </button>
  <img class="border-red-500 border-4" :src="htmlUrl" v-if="!!htmlUrl" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script lang="ts">
import html2canvas from 'html2canvas'
import { defineComponent, onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

interface CanvasRenderingContext2D {
  mozImageSmoothingEnabled: boolean;
  webkitImageSmoothingEnabled: boolean;
  msImageSmoothingEnabled: boolean;
  imageSmoothingEnabled: boolean;
}

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const htmlUrl = ref('')
    const screenBox = ref(null)
    const box1 = ref(null)
    const h2c = () => {
      // window.pageYOffset = 0;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      const ele = (screenBox.value as unknown as HTMLElement)
      // const w = ele.offsetWidth * 3
      // const h = ele.offsetHeight * 3
      // console.log(w, h)
      html2canvas(ele, {
        // windowWidth: w / 3,
        // windowHeight: h / 3,
        // width: w,
        // height: h,
        scale: 4,
        backgroundColor: null
      }).then(_canvas => {
          let context = _canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
          context.mozImageSmoothingEnabled = false;
          context.webkitImageSmoothingEnabled = false;
          context.msImageSmoothingEnabled = false;
          context.imageSmoothingEnabled = false;
          const hdr = _canvas.toDataURL("image/png", 1.0);
          // console.log(hdr)
          if (hdr) {
            htmlUrl.value = hdr
            const eleA = document.createElement('a')
            eleA.href = hdr
            eleA.download = '今日运势' + new Date().getTime()
            eleA.click()
          }
        })
    }
    onMounted(() => {
      // h2c()
      console.log(screenBox.value)
    })
    return {
      screenBox,
      box1,
      htmlUrl,
      h2c
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-indigo {
  @apply mt-4 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}
</style>