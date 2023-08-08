import React from "react";

export default function Contact() {
  return (
    <div>
      <section class="contact section-padding" data-scroll-index="6">
        <div class="container">
          <div class="row">
            <div class="section-head">
              <h2>Contact Us.</h2>
            </div>

            <div class="col-md-offset-1 col-md-10">
              <div class="info text-center mb-50">
                <div class="col-md-4">
                  <div class="item">
                    <span class="icon">
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </span>
                    <h6>Address</h6>
                    <p>Asif Nagar, Hyderabad</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="item">
                    <span class="icon">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <h6>Email</h6>
                    <p>saichandanvanam@gmail.com</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="item">
                    <span class="icon">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <h6>Phone</h6>
                    <p>+91 9502531670 </p>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>

              <form class="form" id="contact-form" method="post" action="">
                <div class="messages"></div>

                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>

                      <input
                        type="submit"
                        value="Submit"
                        class="buton buton-bg"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
