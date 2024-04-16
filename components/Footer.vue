<template>
  <footer class=" bg-secondary">
    <div class="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"></div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-color-primary" />
      <div class="text-center">
        <nuxt-link to="/" class="mb-4 flex items-center justify-center">
          <img src="/FTV.png" class="mr-3 h-6 sm:h-9" alt="FollowTheVote Logo" />
          <span class="flex text-2xl font-semibold  text-color-primary">FollowTheVote</span>
        </nuxt-link>
        <div class="my-3 flex items-center justify-center gap-2">
          <nuxt-link
            to="/articles/42"
            class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-color-primary"
            >Datenschutz</nuxt-link
          >
          <span class="text-gray-400">|</span>
          <nuxt-link
            to="/articles/43"
            class="block py-2 pl-3 pr-4 text-gray-400 hover:bg-gray-50 lg:p-0 lg:hover:bg-transparent lg:hover:text-color-primary"
            >Imprint</nuxt-link
          >
        </div>
        <span class="block text-center text-sm   text-color-tertiary"
          >© 2024 FollowTheVote. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
