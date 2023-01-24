export default {
    ssr: true,

    target : 'static',
    static: {
        prefix: false
    },
    generate: {
        fallback: true
    },

    /*
    ** Headers of the page
    */
    head: {
        title: 'WALDOISCOMING IT 기술 블로그',
        titleTemplate: 'WALDOISCOMING IT 기술 블로그 %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'robots', content: 'index,follow' },
            { name: 'content-language', content: 'kr' },
            { hid: 'description', name: 'description', content: 'WALDOISCOMING의 IT 기술 블로그입니다' },
            { name: 'author', content: 'WALDOISCOMING', },
            { hid: 'og:title', property: 'og:title', content: 'WALDOISCOMING IT 기술 블로그' },
            { hid: 'og:description', property: 'og:description', content: 'WALDOISCOMING의 IT 기술 블로그입니다' },
            { hid: 'og:image', property: 'og:image', content: '/img/logo/brook.png' },            
            { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://waldoiscoming.github.io/img/logo/brook.png' },   
            { hid: 'og:image:width', property: 'og:image:width', content: '400' },           
            { hid: 'og:image:height', property: 'og:image:height', content: '300' },                    
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
        { src: '~/plugins/vue2-codemirror.js', ssr: false },
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
        extractCSS: true,
        transpile: [/^vue2-google-maps($|\/)/]
    },
}
