class Navbar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
      
          <style>
    
          html,
          body,
          header,
          .view {
            height: 100%;
          }
          
          @media (max-width: 740px) {
            html,
            body,
            header,
            .view {
              height: 100vh;
            }
          }
          
          .top-nav-collapse {
            background-color: #78909c !important;
          }
          
          .navbar:not(.top-nav-collapse) {
            background: transparent !important;
          }
          
          @media (max-width: 991px) {
            .navbar:not(.top-nav-collapse) {
              background: #78909c !important;
            }
          }
          
          h1 {
            letter-spacing: 8px;
            color:#fff;
          }
          
          h5 {
            letter-spacing: 3px;
            color:#fff;
          }
          
          .hr-light {
            border-top: 3px solid #fff;
            width: 80px;
          }
        
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="../public/img/myAvatar (1).png" width="50" height="50">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link waves-effect waves-light" href="cv.html">CV </a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light " href="#">Projects <span class="sr-only">(current)</span></a></a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light " href="skills.html">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="contact.html">Contact</a>
              </li>
            </ul>
            <form class="form-inline">
              <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              </div>
            </form>
          </div>
        </div>
      </nav>
      `;
    }
}

customElements.define('navbar-component', Navbar);


