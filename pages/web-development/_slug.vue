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
                                        <div class="post-category">
                                            <n-link v-for="(category, i) in data.categories" :key="i" :to="`/blog/category/${slugify(category)}`" class="mr-2">{{ category }},</n-link>
                                        </div>
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
                                                    <n-link to="/blog/blog-creative">business</n-link>
                                                    <n-link to="/blog/blog-creative">format</n-link>
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
                            <!-- Start Post Nav Links -->
                            <div class="post-nav-lisnt mb--45 wow move-up">
                                <div class="nav-item previous">
                                    <n-link to="/blog/blog-creative">
                                        <div class="link-text">
                                            <span class="fa fa-arrow-left"></span>
                                            <p class="">Prev</p>
                                        </div>
                                        <span>US Ranks Near Bottom on Development Commitment</span>
                                    </n-link>
                                </div>
                                <div class="nav-item next mt_sm--30">
                                    <n-link to="/blog/blog-creative">
                                        <div class="link-text">
                                            <p class="">Next</p>
                                            <span class="fa fa-arrow-right"></span>
                                        </div>
                                        <span>Career Tips For Emerging Photographers</span>
                                    </n-link>
                                </div>
                            </div>
                            <!-- End Post Nav Links -->

                            <div class="comments-wrapper">
                                <div class="inner">
                                    <h4 class="heading heading-h4">3 Comments</h4>
                                    <div class="commnent-list-wrap mt--25">

                                        <!-- Start Single Comment -->
                                        <div class="comment wow move-up">
                                            <div class="thumb">
                                                <img src="/img/blog/client/client-1.jpg" alt="Multipurpose">
                                            </div>
                                            <div class="content">
                                                <h6 class="heading heading-h6">SCOTT JAMES</h6>
                                                <div class="text mt--10 pr--50 pr_sm--5">
                                                    <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                </div>
                                                <div class="comment-footer mt--10">
                                                    <span>May 17, 2018 at 1:59 am</span>
                                                    <span class="reply-btn">
                                                        <button>Reply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Comment -->

                                        <!-- Start Single Comment -->
                                        <div class="comment comment-reply wow move-up">
                                            <div class="thumb">
                                                <img src="/img/blog/client/client-2.jpg" alt="Multipurpose">
                                            </div>
                                            <div class="content">
                                                <h6 class="heading heading-h6">OWEN CHRIST</h6>
                                                <div class="text mt--10 pr--50 pr_sm--5">
                                                    <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                </div>
                                                <div class="comment-footer mt--10">
                                                    <span>May 17, 2018 at 1:59 am</span>
                                                    <span class="reply-btn">
                                                        <button>Reply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Comment -->

                                        <!-- Start Single Comment -->
                                        <div class="comment wow move-up">
                                            <div class="thumb">
                                                <img src="/img/blog/client/client-3.jpg" alt="Multipurpose">
                                            </div>
                                            <div class="content">
                                                <h6 class="heading heading-h6">EDNA WATSON</h6>
                                                <div class="text mt--10 pr--50 pr_sm--5">
                                                    <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                </div>
                                                <div class="comment-footer mt--10">
                                                    <span>May 17, 2018 at 1:59 am</span>
                                                    <span class="reply-btn">
                                                        <button>Reply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single Comment -->

                                    </div>
                                </div>
                            </div>

                            <!-- Start Comment Form -->
                            <div class="comment-form-wrapper">
                                <div class="header wow move-up">
                                    <h4 class="heading heading-h4">Leave A Comment</h4>
                                    <div class="coppent-note mt--20 mb--30">
                                        <p class="bk_pra">Your email address will not be published. Required fields are marked</p>
                                    </div>
                                </div>
                                <!-- Start Contact Area -->
                                <div class="contact-form wow move-up">
                                    <form>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <input type="text" placeholder="Name *">
                                            </div>

                                            <div class="col-lg-12 mt--30">
                                                <input type="text" placeholder="Email *">
                                            </div>

                                            <div class="col-lg-12 mt--30">
                                                <input type="text" placeholder="Website">
                                            </div>

                                            <div class="col-lg-12 mt--30">
                                                <textarea placeholder="Your Comment"></textarea>
                                            </div>

                                            <div class="col-lg-12 mt--30">
                                                <div class="blog-btn">
                                                    <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Post Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- End Contact Area -->

                            </div>
                            <!-- End Comment Form -->
                        </div>
                    </div>

                    <div class="col-lg-4 mt_md--40 mt_sm--40">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '~/data/web-development.json';
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
            }
        },

        mounted () {
            console.log(' this.$route.params.url',  this.$route.params.url)
            console.log(' this.$route.params.slug',  this.$route.params.slug)
            this.data = data.data.find(d => d.slug == this.$route.params.slug);
            console.log('data',this.data)
    //if (process.browser) {
      //const component = require(this.data.component);
      //Vue.use("my-component", component); // or just Vue.use(component);
    //}

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
                title: this.$route.params.slug
            }
        },
    };
</script>
