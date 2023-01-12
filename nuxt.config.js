export default {
    ssr: true,

    target : 'static',
    static: {
        prefix: true
    },
    generate: {
        fallback: true
    },

    /*
    ** Headers of the page
    */
    head: {
        title: 'WALDOISCOMING 기술 블로그',
        titleTemplate: 'WALDOISCOMING 기술 블로그 || %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {
        base: '/nuxt_blog/',
        linkExactActiveClass: 'active-link',
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/vue-masonry-css.js',
        '~/plugins/Mixitup.client.js',
        '~/plugins/silentbox.js',
        { src: '~/plugins/vue-masonry', ssr: false }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },
    buildModules: [

       '@nuxt/postcss8',
    ],
    /*
    ** Build configuration
    */
    build: {
        publicPath: 'https://waldoiscoming.github.io/',
        extractCSS: true,
        transpile: [/^vue2-google-maps($|\/)/]
    },
}
