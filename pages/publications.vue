<template>
  <body>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8 bg-gray-900">
      <div class="rounded-lg lg:col-span-12 relative bg-cover bg-center h-[calc(100vh/2)] bg-[url('public/writing.jpg')] ">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
          <div class="ml-5 text-left">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white z-10">We write about<br>politics.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl z-10">Our articles are written by our team of experts and cover a wide range of topics, from the latest political news to the most pressing issues of our time. We also publish articles from guest writers who are experts in their field.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 mx-auto lg:px-6">
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div class="col-span-3 space-y-5 border-t border-gray-200 dark:border-gray-700 "></div>
        <Categories/>
        <ArticleCard/>
        <ArticleCard/>
        <div class="col-span-3  space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 "></div>
        <Categories/>
        <ArticleCard/>
        <ArticleCard/>
        <div class="col-span-3  space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 "></div>
        <Categories/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </div>
  </section>
  </body>
</template>
