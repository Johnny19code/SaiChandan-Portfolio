import React from "react";

export default function HeaderBottom() {
  return (
    <div>
      <section class="hero section-padding pb-70" data-scroll-index="1">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="hero-img mb-30">
                <img src="img/hero1.png" alt="sai chandan vanam" />
              </div>
            </div>

            <div class="col-md-7">
              <div class="content mb-30">
                <h1>About Me.</h1>
                <span class="sub-title">UI / UX Designer & Web Designer</span>
                <p>
                  I am <b>Sai Chandan</b> Vanam, and I'm a web designer with one
                  year of experience. I previously worked at Askmeguru
                  Technologies, where I had the opportunity to work on several
                  exciting projects. My main expertise lies in HTML, CSS,
                  JavaScript, Bootstrap, and Photoshop, among other
                  technologies.
                </p>
                <br />
                <p>
                  During my time at Askmeguru Technologies, I was involved in
                  various web design projects, where I focused on creating
                  visually appealing and user-friendly interfaces. I believe in
                  the power of a well-designed website to enhance the user
                  experience and leave a lasting impression on visitors.
                </p>
                <br />
                <p>
                  I'm particularly passionate about combining creativity with
                  technical skills to develop responsive and mobile-friendly
                  websites. My experience in working with different technologies
                  has given me a well-rounded understanding of the web design
                  process, from conceptualization to implementation.
                </p>

                <div class="skills">
                  <div class="item">
                    <div class="skills-progress">
                      <h6>Html</h6>
                      <span data-value="90%"></span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="skills-progress">
                      <h6>CSS</h6>
                      <span data-value="85%"></span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="skills-progress">
                      <h6>JavaScript</h6>
                      <span data-value="70%"></span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="skills-progress">
                      <h6>React Js</h6>
                      <span data-value="65%"></span>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>

                <a href="https://www.linkedin.com/in/saichandanvanam/" download>
                  <span class="buton buton-bg">Download C.V</span>
                </a>
                <a href="https://wa.me/919502531670">
                  <span class="buton">Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
