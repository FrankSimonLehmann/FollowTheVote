<template>
    <header class="sticky top-0 w-full z-50">
        <nav class="bg-primary py-2.5">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
              <nuxt-link to="/" class="flex items-center" >
                    <img src="../public/FTV.png" class="h-6 mr-3 sm:h-9" alt="FollowTheVote Logo" />
                    <span class="hidden self-center text-xl font-semibold whitespace-nowrap dark:text-white md:inline-block">FollowTheVote</span>
                </nuxt-link>
                <div class="flex items-center lg:order-2">
                  <nuxt-link to="contact" class=" btn-light" >Get involved</nuxt-link>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                          <nuxt-link to="/" class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0" :class="{'text-white': isActive('/')}">Home</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="projects" class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0" :class="{'text-white': isActive('/projects')}">Projects</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="team" class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0" :class="{'text-white': isActive('/team')}">People</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="publications" class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0" :class="{'text-white': isActive('/publications')}">Publicatons</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="contact" class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-white lg:p-0" :class="{'text-white': isActive('/contact')}">Contact</nuxt-link>
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
      return this.$route.path === path;
    }
  }
}
</script>
