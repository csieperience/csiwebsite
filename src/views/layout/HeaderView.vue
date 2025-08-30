<script setup></script>

<template>
    <!-- header area -->
    <header class="header">
        <!-- header top -->
        <div class="header-top d-none">
            <div class="container">
                <div class="header-top-wrap">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="header-top-left">
                                <div class="header-top-contact">
                                    <ul>
                                        <!-- <li><a href="#"><i class="far fa-location-dot"></i>
                                                25/B Milford Road, New York</a></li> -->
                                        <li><a href="/cdn-cgi/l/email-protection#3b52555d547b5e435a564b575e15585456"><i
                                                    class="far fa-envelopes"></i>
                                                <span class="__cf_email__"
                                                    data-cfemail="5c35323a331c39243d312c3039723f3331"> csieventsmedia@gmail.com</span></a>
                                        </li>
                                        <li><a href="tel:+21236547898"><i class="far fa-phone-volume"></i> +2 123 654
                                                7898</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="header-top-right">
                                <div class="header-top-lang">
                                    <div class="dropdown">
                                        <!-- <a href="#" class="top-lang dropdown-toggle" data-bs-toggle="dropdown"><i
                                                class="fal fa-globe"></i> Language</a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="#">English</a></li>
                                            <li><a class="dropdown-item" href="#">German</a></li>
                                            <li><a class="dropdown-item" href="#">Russian</a></li>
                                            <li><a class="dropdown-item" href="#">Spanish</a></li>
                                        </ul> -->
                                    </div>
                                </div>
                                <div class="header-top-social">
                                    <span>Follow Us:</span>
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-navigation">
            <nav class="navbar navbar-expand-lg">
                <div class="container position-relative">
                    <a href="/" class="navbar-brand">
                        <img src="csilogo.png" alt="logo">
                    </a>
                    <div class="mobile-menu-right">
                        <!-- <div class="search-btn">
                            <button type="button" class="nav-right-link search-box-outer"><i
                                    class="far fa-search"></i></button>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-mobile-icon"><i class="far fa-bars"></i></span>
                        </button> -->
                    </div>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav">
                            <!-- <router-link to="/privacy-policy" :style="'margin-right: 30px'">Privacy Policy</router-link> -->
                            <li class="nav-item"><router-link to="/#home" class="nav-link">Home</router-link></li>
                            <li class="nav-item"><router-link to="/#about" class="nav-link">About</router-link></li>
                            <li class="nav-item"><router-link to="/#why-csi" class="nav-link">Why CSI</router-link></li>
                            <li class="nav-item"><router-link to="/#testimonials" class="nav-link">Testimonials</router-link></li>
                            <li class="nav-item"><router-link to="/#experiences" class="nav-link">Experiences</router-link></li>
                            <li class="nav-item"><router-link to="/#contact" class="nav-link">Contact Us</router-link></li>
                            
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                                <ul class="dropdown-menu fade-down">
                                    <li><a class="dropdown-item" href="index.html">Lighting & Special FX</a></li>
                                    <li><a class="dropdown-item" href="index-2.html">Home Page 02</a></li>
                                    <li><a class="dropdown-item" href="index-3.html">Home Page 03</a></li>
                                </ul>
                            </li> -->
                            <!-- <li class="nav-item"><router-link to="/" class="nav-link">Our Work</router-link></li>
                            
                            <li class="nav-item"><router-link to="/contact" class="nav-link">Contact Us</router-link></li> -->

                        </ul>
                        <!-- <div class="nav-right">
                            <div class="search-btn">
                                <button type="button" class="nav-right-link search-box-outer"><i
                                        class="far fa-search"></i></button>
                            </div>
                            <div class="sidebar-btn">
                                <button type="button" class="nav-right-link"><i class="far fa-bars-sort"></i></button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- header area end -->
</template>

<style></style>