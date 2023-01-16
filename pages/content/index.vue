<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="WALDOISCOMING IT 기술 블로그" />

        <div class="bk-blog-grid-area pt--70 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 move-up wow mt--30" v-for="ddata in nowData" :key="ddata.id">
                        <div class="blog-grid">
                            <div class="post-thumb">
                                <n-link :to="`/content/${ddata.slug}`">
                                    <img :src="ddata.image" :alt="ddata.title">
                                </n-link>
                            </div>
                            <div class="post-content">
                                <div class="post-inner">
                                    <h5 class="heading heading-h5">
                                        <n-link :to="`/content/${ddata.slug}`">{{ ddata.title }}</n-link>
                                    </h5>
                                    <div class="post-meta">
                                        <div class="post-category">
                                            <n-link v-for="(tag, i) in ddata.tags.slice(0, 1)" :key="i" :to="`/content?tag=${slugify(tag)}`">{{ tag }}</n-link>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-pagination-wrapper text-center pt--80 pt_sm--50">
                        <paginate
                            v-model="page"
                            :page-count="pageCount"
                            :page-range="3"
                            :margin-pages="2"
                            :click-handler="onPage"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'brook-pagination'"
                            :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
            </div>
        </div>
        <FooterTwo />

    </div>
</template>

<script>
    import jsonData from '~/data/blog-content.json';
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
        beforeRouteEnter(to, from, next) {
            const { page = null } = to.query;
            let finalNext;
            if (!page) {
                finalNext = {
                    ...to,
                    query: {
                        ...to.query,
                        page: 1,
                    },
                };
            }
            if (finalNext) {
                next(finalNext);
            } else {
                next();
            }
        },
        data () {
            return {
                jsonData,
                parsedJsonData: [],
                nowData: [],
                tag: '',
                page : 0,
                pageCount : 0,
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
            // "tags": ["web-development", "web"]
            this.tag = this.$route.query.tag ?? '';
            if(this.tag === '') {
                this.parsedJsonData = this.jsonData;
            } else {
                this.parsedJsonData.data = [];
                for(let i=0;i<this.jsonData.data.length;i++) {
                    if(this.jsonData.data[i].tags.includes(this.tag))
                        this.parsedJsonData.data.push(this.jsonData.data[i])
                }
            }

            this.pageCount = Math.floor(this.parsedJsonData.data.length / 12) ;
            if(this.parsedJsonData.data.length%12 !== 0)
                this.pageCount++;
            this.page = parseInt(this.$route.query.page ?? 1);
            this.tag = this.$route.query.tag ?? '';
            this.page = this.page > this.pageCount ? 1 : this.page;
            this.nowData = this.parsedJsonData.data.slice((this.page-1) * 12 , (this.page-1) * 12 + 12)
        },
        methods: {
            onPage(index){
                this.page = index;
                this.page = this.page > this.pageCount ? 1 : this.page;
                this.nowData = this.parsedJsonData.data.slice((this.page-1) * 12 , (this.page-1) * 12 + 12)
                this.$router.push({path: this.$route.path, query: { page: this.page}})
            },
        },

        head() {
            return {
                title: ''
            }
        },
    };
</script>
