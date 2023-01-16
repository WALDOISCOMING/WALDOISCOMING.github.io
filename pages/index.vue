<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="WALDOISCOMING IT 기술 블로그" />

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 move-up wow mt--30" v-for="indexData in data.data" :key="indexData.id">
                        <div class="blog-grid">
                            <div class="post-thumb">
                                <n-link :to="`${indexData.url}`">
                                    <img :src="indexData.image" :alt="indexData.title">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <h5 class="heading heading-h5">
                                        <n-link :to="`${indexData.url}`">{{ indexData.title }}</n-link>
                                    </h5>
                                    <div class="post-meta">
                                        <div class="post-category">
                                            <n-link v-for="(tag, i) in indexData.tags.slice(0, 1)" :key="i" :to="`/content?tag=${slugify(tag)}`">{{ tag }}</n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '~/data/index.json';
    import {slugify} from "~/mixins/slugify";

    export default {
        mixins: [slugify],
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: ''
            }
        },
    };
</script>
