<template>
  <body>
    <section class="bg-gray-900">
      <div class=" grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-8">
        <div class="rounded-xl lg:col-span-12 relative bg-cover bg-center h-[calc(100vh/1.8)] bg-[url('public/contact.jpg')]">
          <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-start">
            <div class="mx-10 text-left">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white z-10">Jung. Schlau. Mitglied des Bundestags</h1>
              <p class="max-w-2xl font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl z-10">Unter diesem Motto starten wir mit FollowTheVote in ein neues Format. Wir finden für euch raus, wie die jungen Politiker:innen so ticken. Uns geht es darum, den Mensch hinter der/dem Politiker:in zu zeigen und herauszufinden, ob und wie junge Politiker:innen aller demokratischer Parteien die Interessen der Generation Y und Z vertreten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
        <h3 class="mb-8 text-2xl font-semibold text-left">All articles</h3>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </div>
    </section>
  </body>
</template>
