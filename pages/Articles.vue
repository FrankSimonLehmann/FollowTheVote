<template>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Digital Politics<br></h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">One year after the federal election, we are asking newly elected representatives what experiences they have had so far, how they feel about topics such as open data and “public money - public good” and, above all, how they assess the progress of the government's digital policy projects.</p>

            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:py-0">
                <img src="../public/Writing.jpg" alt="hero image" class="rounded-lg object-cover">
            </div>
        </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <div class="col-span-3  space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 "></div>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <div class="col-span-3  space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 "></div>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </div>
  </section>
</template>
