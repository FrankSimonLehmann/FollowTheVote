import { createClient, definePlugin, defaultPlugins } from 'villus'

const token = '8ab10f74db71cc2a3a53d5c433b56eebd42cce76020a08e76a0614f54363e60968d927a562569f0fb979c03c19a8747ff345161b63bcbcbe8715e152bbc7f9de325a561b5640244fb984d14cf49df05d194c95b1e2873df54b87e829d143cec8afc934fc4bfd46dc94d7d537017ef6afd708fb8fddc23dc92a0b2fe1c6deb0fc'

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
