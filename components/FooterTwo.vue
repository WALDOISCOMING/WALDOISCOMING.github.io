<template>
    <footer class="page-footer bg_color--3 pl--150 pr--150 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--5 pr_sm--5">
        <!-- Start Footer Top Area -->
        <div class="bk-footer-inner pt--150 pb--30 pt_sm--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget text-var--2">
                            <div class="logo">
                                <n-link to="">
                                    <img src="/img/logo/brook-white2.png" alt="brand logo">
                                </n-link>
                            </div>
                            <div class="footer-inner">
                                <p>IT 기술 블로그 입니다.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-6 mt_mobile--40">
                        <div class="footer-widget text-var--2 menu--about">
                            <h2 class="widgettitle">About</h2>
                            <div class="footer-menu">
                                <ul class="ft-menu-list bk-hover">
                                    <li>
                                        <n-link to="/about-us-01">About Me</n-link>
                                    </li>
                                    <li>
                                        <n-link to="/career">Career</n-link>
                                    </li>
                                    <li>
                                        <n-link to="/contact-us-modern">Contact</n-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 mt_md--40 mt_sm--40">
                        <div class="footer-widget text-var--2 menu--contact">
                            <h2 class="widgettitle">Contact</h2>
                            <div class="footer-address">
                                <div class="bk-hover">
                                    <p>
                                        <a href="mailto:forallabouttest@gmail.com">forallabouttest@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Footer Top Area -->

        <!-- Start Copyright Area -->
        <div class="copyright ptb--50 text-var-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="copyright-right text-md-right text-right">
                            <p>&copy; 2022 <b>waldoiscoming</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->
    </footer>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    };
</script>
