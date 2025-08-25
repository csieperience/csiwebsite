<script setup></script>

<style>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  /* make sure video covers entire hero section */
  z-index: -1;        /* place it behind content */
}

</style>

<template>
    <main class="main">

        <!-- hero slider -->
<div class="hero-section" style="height: 100vh">
    <!-- background video -->
    <video autoplay muted loop playsinline class="hero-video">
        <source src="home-2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <div class="hero-slider" >
        <div class="hero-single">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="hero-content">
                            <p data-animation="fadeInLeft" data-delay=".75s">
                                The Experience Company
                            </p>
                            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                Where <span>Events</span> <span>Become</span> Memories
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- hero slider end -->



        <!-- about area -->
        <div class="about-area py-120">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-left wow fadeInRight" data-wow-delay=".25s">
                            <div class="about-img">
                                <img class="img-1" src="images/01_2.jpg" alt="">
                                <img class="img-2" src="images/02.jpg" alt="">
                                <img class="img-3" src="images/03.jpg" alt="">
                            </div>
                            <div class="about-experience">
                                <span>30</span>
                                <h5>Years Of <br> Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-right wow fadeInLeft" data-wow-delay=".25s">
                            <div class="site-heading mb-3">
                                <span class="site-title-tagline">About Us</span>
                                <h2 class="site-title">
                                    Learn And Connect <span>With New</span> People
                                </h2>
                                <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">About Us</div>
                            </div>
                            <p class="about-text">There are many variations of passages the majority have suffered
                                alteration
                                in some form slightly believable. If you are going to use a passage of need to be sure.
                                All the generators on the Internet tend to repeat predefined chunks.</p>
                            <div class="about-list-wrap">
                                <ul class="about-list list-unstyled">
                                    <li>
                                        <div class="about-item">
                                            <h4><span>01.</span> Best Event Experience.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>02.</span> Big Conference and workshop.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>03.</span> Our Experience Team.</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="about.html" class="theme-btn">Discover More<i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about area end -->


        <!-- video area -->
        <div class="video-area">
            <div class="container-fluid px-0">
                <div class="video-content pb-50" style="background-image: url(images/01.jpg);">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="video-info">
                                    <div class="site-heading mb-0">
                                        <span class="site-title-tagline text-white">Latest Video</span>
                                        <h2 class="site-title text-white">We organize conference for
                                            <span>creative</span> thinking.</h2>
                                    </div>
                                    <a href="#" class="theme-btn mt-30">Learn More <i
                                            class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="video-wrapper">
                                    <a class="play-btn popup-youtube"
                                        href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- video area end -->


        <!-- feature area -->
        <div class="feature-area fa-negative">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">01</span>
                                <div class="feature-icon">
                                    <img src="images/speaker.svg" alt="">
                                </div>
                                <h4 class="feature-title">Great Speakers</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">02</span>
                                <div class="feature-icon">
                                    <img src="images/learn.svg" alt="">
                                </div>
                                <h4 class="feature-title">Learn New Things</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">03</span>
                                <div class="feature-icon">
                                    <img src="images/meet.svg" alt="">
                                </div>
                                <h4 class="feature-title">Meet New People</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">04</span>
                                <div class="feature-icon">
                                    <img src="images/question.svg" alt="">
                                </div>
                                <h4 class="feature-title">Ask Questions</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- feature area end -->


        <!-- schedule area -->
        <div class="schedule-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Event Schedule</span>
                            <h2 class="site-title">Our Events <span>Schedule</span> Plan</h2>
                            <div class="site-shadow-text">Schedule</div>
                        </div>
                    </div>
                </div>
                <div class="schedule-nav wow fadeInUp" data-wow-delay=".25s">
                    <ul class="nav nav-pills" id="pills-tab-schedule" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-schedule-tab1" data-bs-toggle="pill"
                                data-bs-target="#pills-schedule1" type="button" role="tab"
                                aria-controls="pills-schedule1" aria-selected="true">
                                <span class="icon"><i class="fal fa-calendar-days"></i></span>
                                <span class="content">
                                    <span class="day">Day 01</span>
                                    <span class="date">May 25, 2024</span>
                                </span>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-schedule-tab2" data-bs-toggle="pill"
                                data-bs-target="#pills-schedule2" type="button" role="tab"
                                aria-controls="pills-schedule2" aria-selected="false">
                                <span class="icon"><i class="fal fa-calendar-days"></i></span>
                                <span class="content">
                                    <span class="day">Day 02</span>
                                    <span class="date">May 26, 2024</span>
                                </span>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-schedule-tab3" data-bs-toggle="pill"
                                data-bs-target="#pills-schedule3" type="button" role="tab"
                                aria-controls="pills-schedule3" aria-selected="false">
                                <span class="icon"><i class="fal fa-calendar-days"></i></span>
                                <span class="content">
                                    <span class="day">Day 03</span>
                                    <span class="date">May 27, 2024</span>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content wow fadeInUp" data-wow-delay=".25s" id="pills-tabContent-schedule">
                    <!-- tab 1 -->
                    <div class="tab-pane fade show active" id="pills-schedule1" role="tabpanel"
                        aria-labelledby="pills-schedule-tab1" tabindex="0">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">01</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/01_3.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Business World Event Introduction</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/01_4.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Frederick Taylor</h6>
                                                            <span>UX Designer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Tony Mendoza</h6>
                                                            <span>Developer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">02</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/02_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Introduction Digital Technology Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Bryan Credle</h6>
                                                            <span>Technology Officer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/04.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Helene Falcon</h6>
                                                            <span>Operations Officer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item last">
                                    <span class="schedule-count">03</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/03_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">International Technology Summit Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Karin Dnox</h6>
                                                            <span>Software Engineer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>David Russell</h6>
                                                            <span>Product Designer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- tab 2 -->
                    <div class="tab-pane fade" id="pills-schedule2" role="tabpanel"
                        aria-labelledby="pills-schedule-tab2" tabindex="0">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">01</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/01_3.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Business World Event Introduction</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/01_4.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Frederick Taylor</h6>
                                                            <span>UX Designer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Tony Mendoza</h6>
                                                            <span>Developer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">02</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/02_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Introduction Digital Technology Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Bryan Credle</h6>
                                                            <span>Technology Officer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/04.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Helene Falcon</h6>
                                                            <span>Operations Officer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item last">
                                    <span class="schedule-count">03</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/03_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">International Technology Summit Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Karin Dnox</h6>
                                                            <span>Software Engineer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>David Russell</h6>
                                                            <span>Product Designer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- tab 3 -->
                    <div class="tab-pane fade" id="pills-schedule3" role="tabpanel"
                        aria-labelledby="pills-schedule-tab3" tabindex="0">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">01</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/01_3.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Business World Event Introduction</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/01_4.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Frederick Taylor</h6>
                                                            <span>UX Designer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Tony Mendoza</h6>
                                                            <span>Developer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item">
                                    <span class="schedule-count">02</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/02_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">Introduction Digital Technology Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Bryan Credle</h6>
                                                            <span>Technology Officer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/04.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Helene Falcon</h6>
                                                            <span>Operations Officer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="schedule-item last">
                                    <span class="schedule-count">03</span>
                                    <div class="schedule-content-wrap">
                                        <div class="schedule-img">
                                            <img src="images/03_2.jpg" alt="">
                                        </div>
                                        <div class="schedule-content">
                                            <div class="schedule-info">
                                                <div class="schedule-meta">
                                                    <ul>
                                                        <li><i class="far fa-clock"></i> 10.00 AM - 12.00 PM</li>
                                                        <li><i class="far fa-location-dot"></i> 25/B Milford, New York
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4><a href="#">International Technology Summit Conference.</a></h4>
                                                <p>There are many variations of passages available but the majority have
                                                    suffered alteration in some form by injected humour, or randomised
                                                    words which don't look even slightly believable.</p>
                                            </div>
                                            <div class="schedule-bottom">
                                                <div class="schedule-speaker">
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/02_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Karin Dnox</h6>
                                                            <span>Software Engineer</span>
                                                        </div>
                                                    </div>
                                                    <div class="speaker-item">
                                                        <div class="speaker-img">
                                                            <img src="images/03_1.jpg" alt="">
                                                            <span class="speaker-img-icon"><i
                                                                    class="far fa-microphone-lines"></i></span>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>David Russell</h6>
                                                            <span>Product Designer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="theme-btn">Buy Tickets<i
                                                        class="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- schedule area end -->


        <!-- counter area -->
        <div class="counter-area pt-80 pb-80">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-5">
                        <div class="counter-info">
                            <div class="site-heading mb-3">
                                <span class="site-title-tagline text-white">Fun Fact</span>
                                <h2 class="site-title text-white">
                                    We inspire people to be creative enough.
                                </h2>
                            </div>
                            <p class="text-white">There are many variations of passages the majority have suffered
                                alteration
                                in some form slightly believable. If you are going to use a passage of need to be sure.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row g-4 justify-content-center">
                            <div class="col-md-6">
                                <div class="counter-box wow fadeInUp" data-wow-delay=".25s">
                                    <div class="icon">
                                        <img src="images/workshop.svg" alt="">
                                    </div>
                                    <div class="counter-content">
                                        <div class="counter-info">
                                            <span class="counter" data-count="+" data-to="150"
                                                data-speed="3000">150</span>
                                            <span class="counter-unit">+</span>
                                        </div>
                                        <h6 class="title">Unique Workshops</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="counter-box wow fadeInDown" data-wow-delay=".25s">
                                    <div class="icon">
                                        <img src="images/participant.svg" alt="">
                                    </div>
                                    <div class="counter-content">
                                        <div class="counter-info">
                                            <span class="counter" data-count="+" data-to="260"
                                                data-speed="3000">260</span>
                                            <span class="counter-unit">K</span>
                                        </div>
                                        <h6 class="title">Event Participants</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="counter-box wow fadeInUp" data-wow-delay=".25s">
                                    <div class="icon">
                                        <img src="images/speaker-2.svg" alt="">
                                    </div>
                                    <div class="counter-content">
                                        <div class="counter-info">
                                            <span class="counter" data-count="+" data-to="120"
                                                data-speed="3000">120</span>
                                            <span class="counter-unit">+</span>
                                        </div>
                                        <h6 class="title">Skilled Speakers</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="counter-box wow fadeInDown" data-wow-delay=".25s">
                                    <div class="icon">
                                        <img src="images/award.svg" alt="">
                                    </div>
                                    <div class="counter-content">
                                        <div class="counter-info">
                                            <span class="counter" data-count="+" data-to="50"
                                                data-speed="3000">50</span>
                                            <span class="counter-unit">+</span>
                                        </div>
                                        <h6 class="title">Win Awards</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- counter area end -->


        <!-- pricing area -->
        <div class="pricing-area bg pt-70 pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Tickets Price</span>
                            <h2 class="site-title">Choose Your Right <span>Tickets <br> Pricing </span> Plan</h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="pricing-item wow fadeInUp" data-wow-delay=".25s">
                            <div class="pricing-shape">
                                <img src="images/03.png" alt="">
                            </div>
                            <div class="pricing-header">
                                <h5>Basic</h5>
                            </div>
                            <div class="pricing-amount">
                                <strong>$80.00</strong>
                            </div>
                            <div class="pricing-feature">
                                <ul>
                                    <li><i class="fas fa-check-circle"></i>Full event access</li>
                                    <li><i class="fas fa-check-circle"></i>Exclusive Q & A sessions</li>
                                    <li><i class="fas fa-check-circle"></i>Reserved seating for your comfort</li>
                                    <li><i class="fas fa-check-circle"></i>Ask question privately</li>
                                    <li><i class="fas fa-check-circle"></i>Tea and Cofee Break</li>
                                </ul>
                            </div>
                            <div class="pricing-btn-wrap">
                                <a href="#" class="theme-btn">Purchase Now <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="pricing-item wow fadeInDown" data-wow-delay=".25s">
                            <div class="pricing-shape">
                                <img src="images/03.png" alt="">
                            </div>
                            <div class="pricing-header">
                                <h5>Standard</h5>
                            </div>
                            <div class="pricing-amount">
                                <strong>$120.00</strong>
                            </div>
                            <div class="pricing-feature">
                                <ul>
                                    <li><i class="fas fa-check-circle"></i>Full event access</li>
                                    <li><i class="fas fa-check-circle"></i>Exclusive Q & A sessions</li>
                                    <li><i class="fas fa-check-circle"></i>Reserved seating for your comfort</li>
                                    <li><i class="fas fa-check-circle"></i>Ask question privately</li>
                                    <li><i class="fas fa-check-circle"></i>Tea and Cofee Break</li>
                                </ul>
                            </div>
                            <div class="pricing-btn-wrap">
                                <a href="#" class="theme-btn">Purchase Now <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="pricing-item wow fadeInUp" data-wow-delay=".25s">
                            <div class="pricing-shape">
                                <img src="images/03.png" alt="">
                            </div>
                            <div class="pricing-header">
                                <h5>Premium</h5>
                            </div>
                            <div class="pricing-amount">
                                <strong>$150.00</strong>
                            </div>
                            <div class="pricing-feature">
                                <ul>
                                    <li><i class="fas fa-check-circle"></i>Full event access</li>
                                    <li><i class="fas fa-check-circle"></i>Exclusive Q & A sessions</li>
                                    <li><i class="fas fa-check-circle"></i>Reserved seating for your comfort</li>
                                    <li><i class="fas fa-check-circle"></i>Ask question privately</li>
                                    <li><i class="fas fa-check-circle"></i>Tea and Cofee Break</li>
                                </ul>
                            </div>
                            <div class="pricing-btn-wrap">
                                <a href="#" class="theme-btn">Purchase Now <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pricing area end -->


        <!-- speaker area -->
        <div class="team-area py-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Speakers</span>
                            <h2 class="site-title">Meet Creative <span>Speakers</span></h2>
                            <div class="site-shadow-text">Speakers</div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 wow fadeInUp" data-wow-delay=".25s">
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/01_4.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Ronel Smith</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/02_1.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Malissa Fie</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/03_1.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Bodney Rios</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/04.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Durton Mary</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/05.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Heidi Powers</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <div class="team-item">
                            <div class="team-img">
                                <img src="images/06.jpg" alt="">
                            </div>
                            <div class="team-content">
                                <div class="social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <div class="info">
                                    <h4><a href="#">Miller Carla</a></h4>
                                    <span>UX Deginer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- speaker area end -->


        <!-- cta area -->
        <div class="cta-area pt-60 pb-60" style="background-image: url(images/01_1.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="cta-content wow fadeInUp" data-wow-delay=".25s">
                            <h1>Are you want to join our events ?</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable <br>
                                content of a page when looking at its layout.</p>
                            <a href="#" class="theme-btn">Register Now<i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cta area end -->


        <!-- choose area -->
        <div class="choose-area py-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="choose-img wow fadeInLeft" data-wow-delay=".25s">
                            <img src="images/01_5.jpg" alt="">
                            <a href="#" class="theme-btn">Learn More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                            <div class="site-heading mb-0">
                                <span class="site-title-tagline">Why Join</span>
                                <h2 class="site-title mb-10">Why You Should Join Our Event ?</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.
                                </p>
                            </div>
                            <div class="choose-content-wrap">
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/event.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Interactive Sessions</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/location.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Massive Locations</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/idea.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Implement Your Idea</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- choose area end -->


        <!-- testimonial-area -->
        <div class="testimonial-area bg py-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Testimonials</span>
                            <h2 class="site-title">What Our <span>Guest Say's</span> <br> About Us</h2>
                            <div class="site-shadow-text">Testimonials</div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider owl-carousel owl-theme wow fadeInUp" data-wow-delay=".25s">
                    <div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/01_6.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Anderson Dele</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/02_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Gordon Novak</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/03_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Lucille Rucker</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/04_1.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Elizabeth Galvan</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- testimonial-area end -->


        <!-- gallery-area -->
        <div class="gallery-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Gallery</span>
                            <h2 class="site-title">Let's Check Our Photo <br> <span>Gallery</span></h2>
                            <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">Our Gallery</div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 popup-gallery">
                    <div class="col-md-7">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/02_4.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/02.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/03_4.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/03.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/04_2.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/04.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="gallery-item wow fadeInUp" data-wow-delay=".25s">
                            <div class="gallery-img">
                                <img src="images/01_7.jpg" alt="">
                                <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                        class="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- gallery-area end -->


        <!-- partner area -->
        <div class="partner-area partner-bg py-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Sponsors</span>
                            <h2 class="site-title">Let's Check Our <span>Sponsors</span></h2>
                        </div>
                    </div>
                </div>
                <div class="partner-wrapper wow fadeInUp" data-wow-delay=".25s">
                    <div class="row g-5 justify-content-center">
                        <div class="col-6 col-md-2">
                            <img src="images/01.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/02.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/03_1.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/04.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/05.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/06.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/07.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/08.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/09.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/10.png" alt="thumb">
                        </div>
                    </div>
                </div>
                <div class="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
                    <a href="#" class="theme-btn"><span class="fal fa-users"></span> Become Sponsors</a>
                </div>
            </div>
        </div>
        <!-- partner area end -->


        <!-- venue area -->
        <div class="venue-area py-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Venues</span>
                            <h2 class="site-title">Explore Our <span>Venues</span></h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5 wow fadeInUp" data-wow-delay=".25s">
                    <div class="col-md-6 col-lg-4">
                        <div class="venue-item">
                            <div class="venue-img">
                                <img src="images/01_8.jpg" alt="">
                            </div>
                            <div class="venue-content">
                                <span>Venue 01</span>
                                <h6>Marine City Michigan</h6>
                                <p>New York, USA</p>
                                <div class="venue-play">
                                    <a class="popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                        <span>Virtual Tour</span>
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="venue-item">
                            <div class="venue-img">
                                <img src="images/02_5.jpg" alt="">
                            </div>
                            <div class="venue-content">
                                <span>Venue 02</span>
                                <h6>Kansas City Omaha</h6>
                                <p>New York, USA</p>
                                <div class="venue-play">
                                    <a class="popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                        <span>Virtual Tour</span>
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="venue-item">
                            <div class="venue-img">
                                <img src="images/03_5.jpg" alt="">
                            </div>
                            <div class="venue-content">
                                <span>Venue 03</span>
                                <h6>New Hampshire City</h6>
                                <p>New York, USA</p>
                                <div class="venue-play">
                                    <a class="popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                        <span>Virtual Tour</span>
                                        <i class="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- venue area end -->


        <!-- register-area -->
        <div class="quote-area mt-80 pb-80">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-7 ms-auto">
                        <div class="quote-content wow fadeInUp" data-wow-delay=".25s">
                            <div class="quote-head">
                                <h3>Register Now</h3>
                                <p>It is a long established fact that a reader will be distracted by the
                                    readable content of majority have suffered alteration page when looking at its
                                    layout.</p>
                            </div>
                            <div class="quote-form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-user-tie"></i></span>
                                                <input type="text" class="form-control" placeholder="Your Name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                                <input type="email" class="form-control" placeholder="Your Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-phone"></i></span>
                                                <input type="text" class="form-control" placeholder="Your Phone">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-box"></i></span>
                                                <select class="select form-select form-control">
                                                    <option value="">Choose Plan</option>
                                                    <option value="1">Plan One</option>
                                                    <option value="2">Plan Two</option>
                                                    <option value="3">Plan Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-group textarea">
                                                <span class="input-group-text"><i
                                                        class="far fa-comment-lines"></i></span>
                                                <textarea class="form-control" cols="30" rows="4"
                                                    placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button type="submit" class="theme-btn">Register Now<i
                                                    class="fas fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- register-area end -->


        <!-- blog-area -->
        <div class="blog-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <span class="site-title-tagline">Our Blog</span>
                            <h2 class="site-title">Let's Check Our Latest <br> <span>News & Blog</span></h2>
                            <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">Our Blog</div>
                        </div>
                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                            <span class="blog-date">20 May</span>
                            <div class="blog-item-img">
                                <img src="images/01_9.jpg" alt="Thumb">
                            </div>
                            <div class="blog-item-info">
                                <div class="blog-item-meta">
                                    <ul>
                                        <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                        <li><a href="#"><i class="far fa-comments"></i> 1.50k Comments</a></li>
                                    </ul>
                                </div>
                                <h4 class="blog-title">
                                    <a href="#">There are many variations of passages orem available</a>
                                </h4>
                                <a class="theme-btn" href="#">Read More<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="blog-item wow fadeInDown" data-wow-delay=".25s">
                            <span class="blog-date">25 May</span>
                            <div class="blog-item-img">
                                <img src="images/02_6.jpg" alt="Thumb">
                            </div>
                            <div class="blog-item-info">
                                <div class="blog-item-meta">
                                    <ul>
                                        <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                        <li><a href="#"><i class="far fa-comments"></i> 1.25k Comments</a></li>
                                    </ul>
                                </div>
                                <h4 class="blog-title">
                                    <a href="#">All the generators on tend to repeat chunks</a>
                                </h4>
                                <a class="theme-btn" href="#">Read More<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="blog-item wow fadeInUp" data-wow-delay=".25s">
                            <span class="blog-date">30 May</span>
                            <div class="blog-item-img">
                                <img src="images/03_6.jpg" alt="Thumb">
                            </div>
                            <div class="blog-item-info">
                                <div class="blog-item-meta">
                                    <ul>
                                        <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                        <li><a href="#"><i class="far fa-comments"></i> 1.78k Comments</a></li>
                                    </ul>
                                </div>
                                <h4 class="blog-title">
                                    <a href="#">It long established fact read will readable content</a>
                                </h4>
                                <a class="theme-btn" href="#">Read More<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- blog-area end -->


        <!-- instagram -->
        <div class="instagram-area mb-120 wow fadeInUp" data-wow-delay=".25s">
            <div class="container">
                <a href="#" class="theme-btn mt-3"><span class="fab fa-instagram"></span> Follow Us</a>
                <div class="row g-4">
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/01_10.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/02_7.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/03_7.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/04_3.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/05_1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-6 col-lg-2">
                        <div class="instagram-img">
                            <img src="images/06_1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- instagram end -->

    </main>
</template>

