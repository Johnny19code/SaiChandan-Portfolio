import React from "react";

export default function Header() {
  return (
    <div>
      <section
        id="home"
        class="header"
        data-scroll-index="0"
        style={{ backgroundImage: 'url("img/bg.jpg")' }}
        data-stellar-background-ratio="0.8"
      >
        <div class="v-middle">
          <div class="container">
            <div class="row">
              <div class="caption">
                <h5>Hello</h5>
                <h1 class="cd-headline clip">
                  <span class="blc">I Am </span>
                  <span class="cd-words-wrapper">
                    <b class="is-visible"> Sai Chandan</b>
                    <b> Designer</b>
                  </span>
                </h1>

                <div class="social-icon">
                  <h4> Hire Me </h4>
                  <br></br>
                  <a href="https://www.linkedin.com/in/saichandanvanam/">
                    <span>
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
