import "./style.scss";
import logo from "../../images/footer-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer__wrap">
          <div className="footer__top">
            <div className="footer__content">
              <div className="footer__socials">
                <div className="footer__logo">
                  <img src={logo} alt="footer-logo" />
                  <h3 className="footer__logo-title">Pearwood</h3>
                </div>
                <p className="footer__top-text">
                  Software innovation powerhouse born to take your business to
                  the top!
                </p>
                <div className="footer__socials-icons">
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.86 15.93C17.86 16.4419 17.6567 16.9328 17.2947 17.2947C16.9328 17.6567 16.4419 17.86 15.93 17.86C15.4181 17.86 14.9272 17.6567 14.5653 17.2947C14.2033 16.9328 14 16.4419 14 15.93C14 15.4181 14.2033 14.9272 14.5653 14.5653C14.9272 14.2033 15.4181 14 15.93 14C16.4419 14 16.9328 14.2033 17.2947 14.5653C17.6567 14.9272 17.86 15.4181 17.86 15.93ZM19.682 30.03V19.323H22.874V20.787H22.919C23.362 19.947 24.447 19.058 26.066 19.058C29.437 19.058 30.058 21.275 30.058 24.159V30.031H26.732V24.823C26.732 23.583 26.711 21.985 25.002 21.985C23.27 21.985 23.007 23.338 23.007 24.735V30.03H19.682ZM17.595 19.323H14.265V30.03H17.595V19.323Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M18.523 30.002H18.443C16.8313 29.9879 15.243 29.6155 13.793 28.912C13.5262 28.7867 13.3066 28.5793 13.1663 28.3202C13.0259 28.0611 12.9722 27.7638 13.013 27.472C13.0573 27.1781 13.1934 26.9058 13.4017 26.6939C13.61 26.482 13.8799 26.3413 14.173 26.292C15.0716 26.1721 15.9361 25.8692 16.713 25.402C15.3641 24.3474 14.3257 22.9475 13.7078 21.3508C13.0899 19.754 12.9154 18.0198 13.203 16.332C13.242 16.0646 13.3569 15.8141 13.5342 15.6102C13.7115 15.4064 13.9436 15.2577 14.203 15.182C14.4553 15.1027 14.7253 15.0993 14.9795 15.1722C15.2338 15.2451 15.461 15.3911 15.633 15.592C16.217 16.3578 16.9509 16.9965 17.7899 17.4693C18.6289 17.9421 19.5554 18.2391 20.513 18.342C20.5587 17.1638 21.065 16.0507 21.923 15.242C22.3514 14.8317 22.8571 14.5109 23.4108 14.2981C23.9644 14.0853 24.5549 13.9848 25.1478 14.0025C25.7406 14.0202 26.3241 14.1557 26.8641 14.4011C27.404 14.6465 27.8898 14.9969 28.293 15.432C28.398 15.5248 28.5285 15.584 28.6676 15.6019C28.8067 15.6197 28.9479 15.5953 29.073 15.532C29.3114 15.4195 29.5769 15.3772 29.8385 15.4099C30.1001 15.4426 30.3469 15.5491 30.5503 15.7168C30.7537 15.8846 30.9052 16.1067 30.9871 16.3572C31.069 16.6078 31.078 16.8765 31.013 17.132C30.7823 18.0821 30.3453 18.9697 29.733 19.732C29.598 22.5767 28.3438 25.2527 26.2439 27.1766C24.144 29.1004 21.3686 30.116 18.523 30.002ZM18.523 28.002H18.603C19.7656 28.042 20.9247 27.8508 22.0129 27.4394C23.1011 27.0281 24.0969 26.4049 24.9424 25.6059C25.7879 24.8068 26.4665 23.8479 26.9386 22.7847C27.4108 21.7214 27.6672 20.575 27.693 19.412C27.7095 19.0932 27.8409 18.7913 28.063 18.562C28.307 18.252 28.515 17.917 28.683 17.562C28.3227 17.5627 27.9664 17.4874 27.6372 17.3409C27.3081 17.1944 27.0136 16.9801 26.773 16.712C26.5416 16.4825 26.2667 16.3016 25.9645 16.1796C25.6623 16.0577 25.3388 15.9973 25.013 16.002C24.6839 15.9934 24.3563 16.0499 24.0491 16.1683C23.7419 16.2867 23.4611 16.4647 23.223 16.692C22.9016 16.997 22.6659 17.381 22.5395 17.8057C22.4132 18.2304 22.4006 18.6809 22.503 19.112L22.763 20.252L21.593 20.332C20.3941 20.4297 19.1883 20.2656 18.059 19.8512C16.9298 19.4368 15.9041 18.782 15.053 17.932C15.0165 19.2484 15.3458 20.5491 16.0043 21.6895C16.6628 22.83 17.6246 23.7655 18.783 24.392L19.733 24.932L19.103 25.832C18.4217 26.7255 17.4882 27.3943 16.423 27.752C17.1063 27.9233 17.8085 28.0073 18.513 28.002H18.523Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M30.66 16.98C29.7874 15.4677 28.5315 14.2122 27.019 13.34C25.486 12.447 23.813 12 22 12C20.187 12 18.514 12.447 16.98 13.34C15.4678 14.2122 14.2122 15.4678 13.34 16.98C12.447 18.513 12 20.187 12 22C12 23.813 12.446 25.487 13.34 27.02C14.2123 28.5325 15.4683 29.7881 16.981 30.66C18.514 31.553 20.187 32 22 32C23.813 32 25.486 31.553 27.02 30.66C28.5325 29.7878 29.7884 28.5323 30.661 27.02C31.554 25.487 32 23.813 32 22C32 20.187 31.554 18.513 30.66 16.98ZM22 13.66C24 13.66 25.772 14.3 27.32 15.579C26.4 16.753 25.034 17.719 23.22 18.479C22.218 16.666 21.132 15.152 19.959 13.939C20.6238 13.7552 21.3103 13.6613 22 13.66ZM15.51 16.8C16.2412 15.8714 17.1665 15.1138 18.221 14.58C19.433 15.781 20.546 17.28 21.561 19.08C19.561 19.68 17.447 19.98 15.22 19.98C14.647 19.98 14.214 19.967 13.92 19.94C14.2265 18.7944 14.768 17.7251 15.51 16.8ZM13.66 22C13.66 21.946 13.663 21.88 13.67 21.8C13.677 21.72 13.68 21.654 13.68 21.6C13.934 21.614 14.321 21.62 14.841 21.62C17.507 21.62 19.987 21.253 22.28 20.52C22.467 20.893 22.661 21.313 22.86 21.78C21.54 22.073 20.186 22.786 18.799 23.92C17.412 25.054 16.4 26.247 15.76 27.5C14.36 25.913 13.66 24.08 13.66 22ZM22 30.34C20.106 30.34 18.406 29.753 16.899 28.581C17.5 27.394 18.423 26.259 19.67 25.18C20.916 24.1 22.153 23.427 23.38 23.16C24.154 25.299 24.6775 27.5205 24.94 29.78C24.0029 30.1462 23.0061 30.336 22 30.34ZM29.08 26.38C28.4255 27.4346 27.5441 28.3299 26.5 29.001C26.26 26.921 25.8 24.894 25.121 22.92C26.053 22.854 26.886 22.82 27.621 22.82C28.42 22.82 29.307 22.854 30.28 22.92C30.1495 24.1498 29.739 25.3334 29.08 26.38ZM27.84 21.38C26.68 21.38 25.607 21.427 24.62 21.52C24.4109 20.9728 24.1841 20.4325 23.94 19.9C26.006 18.994 27.472 17.894 28.339 16.6C29.539 18.014 30.193 19.627 30.299 21.44C29.487 21.4 28.667 21.38 27.84 21.38Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M24.711 15.86H29.951V17.114H24.711V15.86ZM19.461 20.82C20.619 20.274 21.226 19.442 21.226 18.157C21.226 15.617 19.308 15 17.094 15H11V27.754H17.265C19.613 27.754 21.817 26.64 21.817 24.05C21.817 22.45 21.049 21.266 19.46 20.82H19.461ZM13.842 17.176H16.508C17.535 17.176 18.457 17.458 18.457 18.634C18.457 19.717 17.74 20.152 16.724 20.152H13.842V17.176ZM16.876 25.589H13.839V22.076H16.936C18.186 22.076 18.977 22.592 18.977 23.897C18.977 25.182 18.034 25.589 16.876 25.589ZM32 23.27C32 20.538 30.38 18.261 27.448 18.261C24.598 18.261 22.66 20.377 22.66 23.151C22.66 26.026 24.496 28 27.448 28C29.683 28 31.131 27.008 31.827 24.892H29.56C29.313 25.682 28.31 26.096 27.53 26.096C26.022 26.096 25.234 25.226 25.234 23.747H31.982C31.99 23.594 32 23.434 32 23.27ZM25.234 22.146C25.315 20.931 26.137 20.172 27.367 20.172C28.659 20.172 29.305 20.922 29.418 22.146H25.234Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M22.002 16.872C21.3284 16.8711 20.6613 17.0031 20.0388 17.2605C19.4163 17.5179 18.8508 17.8956 18.3746 18.372C17.8984 18.8484 17.5209 19.4141 17.2637 20.0367C17.0066 20.6592 16.8748 21.3264 16.876 22C16.8748 22.6736 17.0066 23.3408 17.2637 23.9633C17.5209 24.5859 17.8984 25.1516 18.3746 25.628C18.8508 26.1044 19.4163 26.4821 20.0388 26.7395C20.6613 26.9969 21.3284 27.1289 22.002 27.128C22.6757 27.1292 23.3431 26.9973 23.9658 26.7401C24.5885 26.4828 25.1543 26.1051 25.6307 25.6287C26.1071 25.1523 26.4848 24.5865 26.7421 23.9638C26.9993 23.3411 27.1312 22.6737 27.13 22C27.1312 21.3263 26.9994 20.659 26.7422 20.0364C26.4849 19.4138 26.1073 18.8481 25.631 18.3717C25.1547 17.8953 24.5891 17.5176 23.9665 17.2602C23.3439 17.0029 22.6757 16.8709 22.002 16.872ZM22.002 25.334C21.1186 25.3319 20.272 24.9799 19.6475 24.355C19.0231 23.7302 18.6716 22.8834 18.67 22C18.6705 21.1161 19.0218 20.2685 19.6467 19.6434C20.2716 19.0183 21.1191 18.6668 22.003 18.666C22.8866 18.6673 23.7337 19.0191 24.3583 19.6441C24.983 20.2691 25.3342 21.1164 25.335 22C25.3334 22.8836 24.9818 23.7305 24.3571 24.3554C23.7324 24.9803 22.8856 25.3321 22.002 25.334ZM28.534 16.663C28.534 17.328 27.999 17.858 27.339 17.858C27.1024 17.858 26.8712 17.7878 26.6745 17.6564C26.4779 17.525 26.3246 17.3382 26.234 17.1197C26.1435 16.9011 26.1198 16.6607 26.166 16.4287C26.2121 16.1967 26.326 15.9836 26.4933 15.8163C26.6606 15.649 26.8737 15.5351 27.1057 15.489C27.3377 15.4428 27.5781 15.4665 27.7967 15.557C28.0152 15.6476 28.202 15.8009 28.3334 15.9975C28.4648 16.1942 28.535 16.4254 28.535 16.662L28.534 16.663ZM31.93 17.876C31.854 16.274 31.488 14.856 30.315 13.686C29.145 12.516 27.727 12.151 26.125 12.07C24.475 11.977 19.525 11.977 17.875 12.07C16.278 12.146 14.859 12.512 13.685 13.681C12.512 14.851 12.151 16.27 12.07 17.871C11.977 19.523 11.977 24.472 12.07 26.124C12.146 27.726 12.512 29.144 13.685 30.314C14.859 31.484 16.273 31.849 17.875 31.93C19.525 32.023 24.475 32.023 26.125 31.93C27.727 31.854 29.145 31.488 30.315 30.314C31.483 29.144 31.849 27.726 31.93 26.124C32.023 24.472 32.023 19.528 31.93 17.876ZM29.797 27.896C29.6273 28.3259 29.3711 28.7164 29.0442 29.0432C28.7174 29.3701 28.3269 29.6263 27.897 29.796C26.58 30.319 23.457 30.198 22.002 30.198C20.548 30.198 17.42 30.314 16.108 29.797C15.6779 29.6271 15.2873 29.3705 14.9604 29.0433C14.6336 28.7162 14.3775 28.3253 14.208 27.895C13.685 26.579 13.806 23.455 13.806 22C13.806 20.545 13.69 17.417 14.208 16.105C14.3774 15.6747 14.6335 15.2838 14.9604 14.9566C15.2872 14.6294 15.6778 14.3729 16.108 14.203C17.424 13.681 20.548 13.802 22.002 13.802C23.457 13.802 26.584 13.686 27.896 14.204C28.3261 14.3736 28.7168 14.6298 29.0438 14.9566C29.3708 15.2834 29.6272 15.674 29.797 16.104C30.319 17.421 30.198 20.545 30.198 22C30.198 23.455 30.319 26.584 29.797 27.896Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a className="footer__socials-link" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                    >
                      <path
                        d="M24.989 21.282C23.063 20.236 21.219 19.274 19.335 18.27V24.278C21.318 23.182 23.408 22.178 24.997 21.282H24.989Z"
                        fill="white"
                      />
                      <path
                        d="M13.697 27.683L13.694 27.682C13.298 27.601 12.994 27.429 12.789 27.216L12.782 27.208C12.667 27.091 12.505 26.835 12.355 26.311L12.353 26.303C12.237 25.909 12.185 25.58 12.103 24.577C11.98 22.309 11.953 20.478 12.102 18.443L12.139 18.093C12.189 17.613 12.234 17.183 12.33 16.772C12.447 16.273 12.612 15.945 12.835 15.733C13.105 15.481 13.405 15.33 13.737 15.267H13.739C14.059 15.205 15.053 15.134 16.512 15.082C17.932 15.032 19.703 15 21.508 15C23.308 15 25.08 15.031 26.5 15.082C27.96 15.134 28.957 15.205 29.276 15.266H29.279C29.697 15.346 30.073 15.584 30.279 15.841C30.817 16.728 30.884 17.821 30.956 18.994L30.977 19.341C31.007 19.891 31.007 23.107 30.977 23.656C30.853 25.582 30.757 26.108 30.544 26.643L30.542 26.65C30.408 26.992 30.327 27.104 30.188 27.245C29.9458 27.4863 29.6381 27.6511 29.303 27.719C25.902 27.977 23.008 28.033 19.715 27.979C15.669 27.904 14.421 27.834 13.697 27.683Z"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer__location">
                <h4 className="footer__location-heading">Find us</h4>
                <div className="footer__wrap-address">
                  <div className="footer__address">
                    <h5 className="footer__address-heading">In USA</h5>
                    <ul className="footer__address-list">
                      <li className="footer__address-item">
                        44 Tehama St San Francisco 94105
                      </li>
                      <li className="footer__address-item">+1 (415) 470-2865</li>
                    </ul>
                  </div>
                  <div className="footer__address">
                    <h5 className="footer__address-heading">In Argentina</h5>
                    <ul className="footer__address-list">
                      <li className="footer__address-item">
                        Av. Corrientes 1312 C1043ABN
                      </li>
                      <li className="footer__address-item">Buenos Aires</li>
                    </ul>
                  </div>
                  <div className="footer__address">
                    <h5 className="footer__address-heading">In Poland</h5>
                    <ul className="footer__address-list">
                      <li className="footer__address-item">Warszawa 00-855</li>
                      <li className="footer__address-item">Grzybowska 62</li>
                    </ul>
                  </div>
                  <div className="footer__address">
                    <h5 className="footer__address-heading">In Cyprus</h5>
                    <ul className="footer__address-list">
                      <li className="footer__address-item">
                        Agias Faneromenis, 143, Flat 201
                      </li>
                      <li className="footer__address-item">Larnaca</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__development">
              <div className="footer__fintech">
                <h4 className="footer__heading">Fintech</h4>
                <ul className="footer__list">
                  <li className="footer__item">Fintech software development</li>
                  <li className="footer__item">Trading platform development</li>
                  <li className="footer__item">Lending software development</li>
                  <li className="footer__item">E-wallet app development</li>
                  <li className="footer__item">Banking software development</li>
                  <li className="footer__item">Crowdfunding platform</li>
                  <li className="footer__item">Billing software development</li>
                  <li className="footer__item">
                    Payment software gateway development
                  </li>
                </ul>
              </div>
              <div className="footer__company">
                <h4 className="footer__heading">Company</h4>
                <ul className="footer__list">
                  <li className="footer__item">
                    Yellow’s Delivery Quality Standards
                  </li>
                  <li className="footer__item">Works</li>
                  <li className="footer__item">Process</li>
                  <li className="footer__item">Insights</li>
                </ul>
              </div>
            </div>
            <div className="footer__development">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li className="footer__item">Web development</li>
                <li className="footer__item">Mobile development</li>
                <li className="footer__item">iOS app development</li>
                <li className="footer__item">Android app development</li>
                <li className="footer__item">Cross-platform development</li>
                <li className="footer__item">UX/UI design</li>
                <li className="footer__item">MVP development</li>
                <li className="footer__item">DevOps</li>
                <li className="footer__item">Quality assurance</li>
                <li className="footer__item">Penetration testing</li>
                <li className="footer__item">Cloud development</li>
                <li className="footer__item">PWA development</li>
                <li className="footer__item">Software prototyping</li>
              </ul>
            </div>
            <div className="footer__development">
              <h4 className="footer__heading">Expertise</h4>
              <ul className="footer__list">
                <li className="footer__item">Discovery phase</li>
                <li className="footer__item">Chat development</li>
                <li className="footer__item">ERP development</li>
                <li className="footer__item">Machine learning</li>
                <li className="footer__item">AI software development</li>
                <li className="footer__item">Data science development</li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-wrap">
              <p className="footer__bottom-text">
                © All right reserved. Pearwood 2023
              </p>
            </div>
            <div className="footer__bottom-rules">
              <a className="footer__bottom-privacy" href="#!">
                Privacy Policy
              </a>
              <a className="footer__bottom-privacy" href="#!">
                Terms & Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
