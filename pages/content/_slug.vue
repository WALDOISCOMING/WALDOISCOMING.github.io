<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="blog-creative-area pt--70 pb--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-details-wrapper">
                            <article class="blog-post standard-post">
                                <!-- Start Header -->
                                <div class="header mb--40 text-center">
                                    <h3 class="heading heading-h3 font-32">{{ data.title }}</h3>
                                    <div class="post-meta mt--20">
                                        <div class="post-date">{{ data.date }}</div>
                                        <!-- <div class="post-category">
                                            <n-link v-for="(category, i) in data.categories" :key="i" :to="`/blog/category/${slugify(category)}`" class="mr-2">{{ category }},</n-link>
                                        </div> -->
                                    </div>
                                </div>
                                <!-- Start Thumbnail -->
                                <div class="thumbnail mb--60">
                                    <img class="w-100" :src="data.image" alt="Blog Image 01">
                                </div>
                                <!-- Start Content -->
                                <component :is="componentInstance"></component>
                                <!-- Start Footer -->
                                <div class="blog-footer mb--85 wow move-up">
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-12">
                                            <div class="post-tag d-flex align-items-center">
                                                <h6 class="heading heading-h6">TAGS:</h6>
                                                <div class="blog-tag-list pl--5">
                                                    <n-link v-for="(tag, i) in data.tags" :key="i" :to="`/content?tag=${slugify(tag)}`" class="mr-2">{{ tag }}</n-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-12">
                                            <div class="post-share text-left text-sm-right">
                                                <h6 class="heading heading-h6">SHARE:</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div class="post-nav-lisnt mb--45 wow move-up">
                                <div class="nav-item previous"  v-if="preData">
                                    <n-link :to="`/content/${preData.slug}`">
                                        <div class="link-text">
                                            <span class="fa fa-arrow-left"></span>
                                            <p class="">Prev</p>
                                        </div>
                                        <span>{{preData.title}}</span>
                                    </n-link>
                                </div>
                                <div class="nav-item previous" v-else>
                                    <div class="link-text">
                                        <span class="fa fa-arrow-left"></span>
                                        <p class="">Prev</p>
                                    </div>
                                </div>
                                <div class="nav-item next mt_sm--30" v-if="nextData">
                                    <n-link :to="`/content/${nextData.slug}`">
                                        <div class="link-text">
                                            <p class="">Next</p>
                                            <span class="fa fa-arrow-right"></span>
                                        </div>
                                        <span>{{nextData.title}}</span>
                                    </n-link>
                                </div>
                                <div  class="nav-item next mt_sm--30" v-else>
                                    <div class="link-text">
                                        <p class="">Next</p>
                                        <span class="fa fa-arrow-right"></span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Post Nav Links -->
                        </div>
                    </div>
                    <div class="col-lg-4 mt_md--40 mt_sm--40">
                        <!-- <BlogSidebar /> -->
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '~/data/blog-content.json';
    import {slugify} from '~/mixins/slugify'

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        mixins: [slugify],
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                slug: this.$route.params.slug,
                componentInstance: '',
                preData: '',
                nextData: '',
            }
        },

        mounted () {
            this.data = data.data.find(d => d.slug == this.$route.params.slug);
            console.log('data',this.data)
            this.preData = data.data.find(d => d.id == (this.data.id -1));
            this.nextData = data.data.find(d => d.id == (this.data.id + 1));

            this.onLoadComponent();

            document.body.classList.add('template-color-1', 'template-font-1')
        },
        methods: {
            onLoadComponent(index){
                return new Promise((resolve, reject) => {
                    try {
                        this.componentInstance = () => import(`@/components/${this.data.component}`)
                    } catch (err) {
                        console.log(err);
                        reject("err");
                    }
                });
            },
        },
        head() {
            return {
                title: this.$route.params.slug,
            meta: [
                {
                hid: 'og:title',
                property: 'og:title',
                content: this.data.tags
                },
                {
                hid: 'og:description',
                property: 'og:description',
                content: this.data.description
                },
                {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://waldoiscoming.github.io/' + this.data.image
                },
                {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://waldoiscoming.github.io/' + this.data.image
                },
                {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '400'
                },
                {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '300'
                },
            ]
        }
    }

    };
</script>
