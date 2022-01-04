<template>
  <div>
    <div class="container w-full max-w-7xl">
      <div
        x-data="{ open: false }"
        class="
          flex flex-col
          max-w-screen-xl
          p-5
          mx-auto
          md:items-center md:justify-between md:flex-row md:px-6
          lg:px-8
        "
      >
        <div
          class="flex flex-row items-center justify-between lg:justify-start"
        >
          <a
            href="/"
            class="
              text-dark-red text-lg
              font-bold
              tracking-tighter
              transition
              duration-500
              ease-in-out
              transform
              tracking-relaxed
              lg:pr-8
            "
          >
            PARENTING APP
          </a>
        </div>
        <nav>
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-dark-red
              focus:outline-none focus:shadow-outline
            "
            href="/"
            >HOME</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-dark-red
              focus:outline-none focus:shadow-outline
            "
            href="/profile"
            >MY PAGE</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-dark-red
              focus:outline-none focus:shadow-outline
            "
            href="/graph"
            >Graph</a
          >

          <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button
            v-if="!isLogin"
              class="
                items-center
                block
                px-10
                py-2.5
                text-base
                font-medium
                text-center text-dark-red
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "
            >
              <nuxt-link to="/login">Sign in</nuxt-link>
            </button>
            <button
            v-if="isLogin"
              class="
                items-center
                block
                px-10
                py-2.5
                text-base
                font-medium
                text-center text-dark-red
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "
            >
              <nuxt-link to="/login">Sign out</nuxt-link>
            </button>

            <button
              class="
                items-center
                block
                px-10
                py-3
                text-base
                font-medium
                text-center text-white
                transition
                duration-500
                ease-in-out
                transform
                bg-dark-red
                rounded-xl
                hover:bg-light-red
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-dark-red
              "
            >
              <nuxt-link to="/NewSignUp">Sign up</nuxt-link>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <div
        class="p-5 overflow-y-auto whitespace-nowrap scroll-hidden bg-gray-50"
      >
        <ul class="inline-flex items-center list-none">
          <li>
            <a
              href="/unchi"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Unchi</a
            >
          </li>
          <li>
            <a
              href="/urine"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Urine</a
            >
          </li>
          <li>
            <a
              href="/food"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Milk</a
            >
          </li>
          <li>
            <a
              href="/growth"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Height &amp; Wight</a
            >
          </li>
          <li>
            <a
              href="/allergy"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Allergy</a
            >
          </li>
           <li>
            <a
              href="/alert"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Timer &amp; Music</a
            >
          </li>
          <li>
            <a
              href="/diary"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-dark-red
              "
              >Diary</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      isLogin: true,
    }
  },
    computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }
}
</script>

<style lang="scss">
.sample {
  color: rgb(150, 50, 50);
  color: rgb(180, 98, 98);
}

.Nav-main {
  width: 100%;
  background-color: rgb(158, 116, 116);
  text-align: center;
  padding: 5%;
}

.dropdown {
  position: relative;
  width: 8%;
}

.menu {
  position: absolute;
  visibility: hidden;
}

.dropdown:hover .menu {
  visibility: visible;
}
</style>