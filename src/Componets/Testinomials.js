import React from "react";

export default function Testinomials() {
  return (
    <div>
      <section class="clients section-padding bg-gray" data-scroll-index="4">
        <div class="container">
          <div class="row">
            <div class="section-head">
              <h2>Testimonials.</h2>
            </div>

            <div class="col-md-offset-1 col-md-10">
              <div class="owl-carousel owl-theme text-center">
                <div class="citem">
                  <div class="author-img">
                    <img src="img/clients/2.png" alt="client-1" />
                  </div>
                  <p>
                    "Sai Chandan's web designs are captivating, user-friendly,
                    and perfectly reflect our brand's essence. An exceptional
                    talent!"
                  </p>
                  <h6>Nithin Charry</h6>
                  <span>Customer</span>
                </div>

                <div class="citem">
                  <div class="author-img">
                    <img src="img/clients/3.png" alt="client-2" />
                  </div>
                  <p>
                    "Working with Sai Chandan was a delight! Professional,
                    responsive, and the website surpassed our expectations."
                  </p>
                  <h6>Karthik</h6>
                  <span>Customer</span>
                </div>

                <div class="citem">
                  <div class="author-img">
                    <img src="img/clients/1.jpg" alt="client-3" />
                  </div>
                  <p>
                    "Innovative, efficient, and a true problem solver. Sai
                    Chandan's designs brought life to our online presence!"
                  </p>
                  <h6>Vilas</h6>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
