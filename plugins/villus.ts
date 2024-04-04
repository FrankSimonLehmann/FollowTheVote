import { createClient, definePlugin, defaultPlugins } from 'villus'

const token = 'd3b730221110fa33635326a0c7b3436ef63754f4356db9517c8fdbdf58632505910d2103802dcdb810813b26b444f29df73ecd986ffc89f469aba099bed1bb7903d4efacb321922fd22e5b4ce33de3819a4c544499c2e7824e01fb551a3d9ea0d44181c0602ec215f262b221b22bbdf7286d79e0e403626e0abd36ef58e9ff4f'

export default defineNuxtPlugin((nuxtApp) => {
  const headersPlugin = definePlugin(({ opContext, afterQuery }) => {
    opContext.headers.Accept = 'application/json'
    opContext.headers['Authorization'] = `Bearer ${token}`
  })

  // Creates a villus client instance
  const client = createClient({
    url: 'http://localhost:1337/graphql', // your endpoint.
    use: [headersPlugin, ...defaultPlugins()],
  })

  nuxtApp.vueApp.use(client)
})
