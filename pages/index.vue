<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';

const QUERY = `query {
  members {
    data {
      attributes {
        First_name
        Last_name
        Description
        LinkedIn_url
        Portrait {
          data {
            attributes {
              url
            }
          }
        }
        projects {
          data {
            attributes{
              Logo {
                data {
                  attributes {
                    url
                  }
                }
              }
                }
              }
            }
          }
        }
      }
    }
`;

const data = ref({}); // Make 'data' a reactive reference

async function fetchData() {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer d3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f` // Use your actual token
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {}
    })
  });

  data.value = await response.json();
}

onMounted(() => {
  fetchData();
});

const members = computed(() => data.value.data?.members?.data || []);

const randomMembers = computed(() => {
  const shuffled = members.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.slice(0, 3);
});

</script>


<template>
    <!-- Start block -->
    <section class= "bg-primary">
        <div class="main-grid">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4">We bring politics<br>to the 21st century.</h1>
                <p class="max-w-2xl mb-4">Instead of listening to politicians' promises, FollowTheVote keeps you up to date with what they're actually doing in Parliament. Through <a href="#" class="hover:underline">Mobile apps</a>  <a href="#" class="hover:underline">Social Media</a> and <a href="#" class="hover:underline">Podcast</a>, we keep you up to date.</p>
                <a href="#" class="btn bg-slate-300">See projects</a>
            </div>
            <div class="py-5 lg:mt-0 lg:col-span-5 lg:flex">
                <img src="../public/General.png" alt="hero image">
            </div>
        </div>
    </section>
    <!-- End block -->
    <!-- Problem/solution -->
    <section class="bg-secondary">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <!-- Row -->
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-8 ">Our democracy is in danger</h2>
                    <p class="mb-8">
                      We are deeply concerned about the state of our democracy, as evidenced by the alarming statistics revealing the prevalence of populist views, conspiracy theories, and fake news. We aim to combat misinformation, promote critical thinking, and foster informed civic engagement.</p>
                    <!-- List -->
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-700" data-aos="fade-up">
                        <li class="flex space-x-4 items-center">
                            <!-- Icon -->
                            <span class="btn-light">30%</span>
                            <span class="text-base font-medium leading-tight text-white"> of people in the German electorate have populist views and are interested in conspiracy theories.</span>
                        </li>
                        <li class="flex space-x-4 items-center">
                            <!-- Icon -->
                            <span class="btn-light">67%</span>
                            <span class="text-base font-medium leading-tight text-white"> of Europeans encountered fake news at least once a week.</span>
                        </li>
                        <li class="flex space-x-4 items-center">
                            <!-- Icon -->
                            <span class="btn-light">89%</span>
                            <span class="text-base font-medium leading-tight text-white"> of German citizens of generations Y and Z spend every day on social media and are exposed to unreliable and often extreme political information.</span>
                        </li>
                    </ul>
                    <p class="my-8"><i>“Democracy is never a final achievement. It is a call to an untiring effort.”</i> — John F. Kennedy</p>
                </div>
                <img class="hidden mb-4 rounded-lg lg:mb-0 lg:flex w-full h-full object-cover" src="../public/Demonstration.png" alt="dashboard feature image">
            </div>
            <!-- Row -->
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img class="hidden mb-4 rounded-lg lg:mb-0 lg:flex w-full h-full object-cover" src="../public/Solution.png" alt="feature image 2">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-8">That is why we build digital solutions.</h2>
                    <p class="mb-8"> In response, we are committed to leveraging technology and media platforms responsibly. Through our websites, apps, podcasts, and social media channels, we aim not only to inform but also to empower individuals to actively participate in the democratic process and uphold the values of truth, reason, and democracy that are essential for a thriving society.</p>
                    <!-- List -->
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex items-center space-x-3 ">
                            <!-- Icon -->
                            <img src="../public/FTV.png" alt="" class="logo">
                            <a href="#" class="btn-light">Bundestagswahl 2021</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <img src="../public/Bundestagreels.png" alt="" class="logo">
                            <a href="#" class="btn-light">BundestagReels</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <img src="../public/PLusme.png" alt="" class="logo">
                            <a href="#" class="btn-light">+Me</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <img src="../public/DigitalPolitics.png" alt="" class="logo">
                            <a href="#" class="btn-light">Digital politics</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <img src="../public/YoungActivists.png" alt="" class="logo">
                            <a href="#" class="btn-light">Young activists</a>
                        </li>
                        <li class="flex items-center space-x-3">
                            <!-- Icon -->
                            <img src="../public/SpillTheThesis.png" alt="" class="logo">
                            <a href="#" class="btn-light">SpillTheThesis</a>
                        </li>
                    </ul>
                    <div>
                      <a href="#" class="btn-page">
                        All projects
                        <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    <!-- Problem/solution -->

    <!-- Impact -->
    <section class="bg-primary">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div class="col-span-2">
                <h2 class="mb-8 ">We don't just talk, we make impact</h2>
                <p class="mb-8">Actions speak louder than words. At our organization, we prioritize doing over talking. Through our unwavering dedication, we've engaged with a multitude of users, rallied a team of passionate volunteers, and extended our reach across borders. We believe in the power of action to make a lasting difference, embodying our ethos of turning intentions into impactful results.</p>
                <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <a href="#" class="btn-page">
                        Explore projects
                        <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                    <div>
                      <a href="#" class="mb-8 btn-page">
                          Meet the team
                          <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                      </div>
                </div>
            </div>
            <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                    <h3>24.000+ users</h3>
                    <p>Informing, engaging and empowering the next generations. </p>
                </div>
                <div>
                  <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
                    <h3 class="mb-2 ">30+ voluenteers</h3>
                    <p class="">Enthusiastic team of 30+ volunteers dedicated to impactful initiatives.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                    <h3>2+ countries</h3>
                    <p>Addressing issues locally while expanding accros borders.</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"> <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                    <h3 >6 projects</h3>
                    <p >6 transformative projects, driving positive change with purposeful action.</p>
                </div>
            </div>
        </div>
      </section>
    <!-- Impact -->

    <!-- Sponsors -->
    <section class="bg-secondary">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg>
                <blockquote>
                    <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Sponsors play a pivotal role in our success! Their support provides the necessary resources and funding vital for the implementation of our projects and initiatives. Beyond financial contributions, sponsors also offer invaluable expertise, networks, and mentorship, enriching our endeavors with diverse perspectives and knowledge."</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="../public/Maren.png" alt="profile picture">
                    <div class="flex items-center divide-x-2 divide-gray-700">
                        <div class="pr-3 font-medium text-color-primary">Maren Heinz</div>
                        <div class="pl-3 text-sm font-light text-color-secondary ">CEO FollowTheVote</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>
      <Sponsors/>
    <!-- Sponsors -->
    <!-- Team members start -->
    <section class="bg-primary">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 class="mb-4 ">Together with a group of young voluenteers</h2>
          <p class="mb-6 ">Our projects would not be possible without our volunteers; they are the driving force behind every initiative. With a team constantly evolving, we foster a vibrant environment brimming with young talent. Ready to join us in making a difference?</p>
            <a href="#" class="btn m-4">
                Meet the team
            </a>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div v-for="member in randomMembers" :key="member.id">
            <Member
              :first_name="member.attributes.First_name"
              :last_name="member.attributes.Last_name"
              :description="member.attributes.Description"
              :profileImage="'http://localhost:1337' + member.attributes.Portrait.data.attributes.url"
              :linkedIn="member.attributes.LinkedIn_url"
              :projects="member.attributes.projects.data.map(project => 'http://localhost:1337' + project.attributes.Logo.data.attributes.url)"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Team members end -->
    <!-- Video section start -->
    <section class="bg-primary">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 class="mb-4 ">Together with a group of young volunteers</h2>
          <p class="mb-4 ">Our projects would not be possible without our volunteers; they are the driving force behind every initiative. With a team constantly evolving, we foster a vibrant environment brimming with young talent. Ready to join us in making a difference?</p>
        </div>
        <video class="w-full h-full object-cover rounded-lg" controls>
          <source src="https://www.youtube.com/watch?v=-IWTaXiXwKc" type="mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <!-- Video section end -->

</template>
