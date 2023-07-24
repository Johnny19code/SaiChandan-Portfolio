import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#nav-icon-collapse"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a class="logo" href="#">
              Sai Chandan
            </a>
          </div>

          <div class="collapse navbar-collapse" id="nav-icon-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#" data-scroll-nav="0" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="2">
                  Services
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="3">
                  Works
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="4">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" data-scroll-nav="6">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
