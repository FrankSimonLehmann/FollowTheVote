<template>
  <header class="sticky top-0 z-50 w-full">
    <nav class="bg-primary py-2.5">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
        <nuxt-link to="/" class="flex items-center">
          <img src="/FTV.png" class="mr-3 h-6 sm:h-9" alt="FollowTheVote Logo" />
          <span class="hidden self-center whitespace-nowrap text-xl font-semibold md:inline-block dark:text-white"
            >FollowTheVote</span
          >
        </nuxt-link>
        <div class="flex items-center lg:order-2">
          <nuxt-link to="contact" class="btn-light">Get involved</nuxt-link>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg class="hidden h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
          <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                :class="{ 'text-white': isActive('/') }"
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="projects"
                class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                :class="{ 'text-white': isActive('/projects') }"
                >Projects</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="team"
                class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                :class="{ 'text-white': isActive('/team') }"
                >People</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="publications"
                class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                :class="{ 'text-white': isActive('/publications') }"
                >Publicatons</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="contact"
                class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                :class="{ 'text-white': isActive('/contact') }"
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    // This method checks if the provided path matches the current route
    isActive(path) {
      return this.$route.path === path
    },
  },
}
</script>
