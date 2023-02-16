import React from 'react'

function Footer() {
   return (
      <div>
         <section id="footer" className="sec blbg sce">

            <div className="clearfix"></div>
            <div className="">
               <div className="cont">
                  <div className="col-md-4 col-xs-6 col-sm-6">
                     <div className="list-inline secb gem-fot">
                        <h6>WEB INFO</h6>
                        <p>
                           <a className="internalLink" href="https://gem.gov.in/termsCondition" title="Terms of Use">Terms of Use</a>
                        </p>
                        <p>
                           <a href="https://gem.gov.in/websitePolicies" title="Website Policies">Website Policies </a>
                        </p>
                        <p>
                           <a href="https://gem.gov.in/help" title="Document Help">Document Help</a>
                        </p>
                        <p><a href="https://gem.gov.in/sitemap" title="Site Map">Site Map</a></p>
                        <p>
                           <a href="https://gem.gov.in/web-information-manager" title="Web Information Manager">Web Information Manager</a>
                        </p>
                     </div>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6">
                     <div className="list-inline secb gem-fot">
                        <h6>ABOUT <span style={{ textTransform: "none" }}> GeM</span></h6>
                        <p>
                           <a href="https://gem.gov.in/aboutus" title="Introduction to GeM">Introduction to GeM</a>
                        </p>
                        <p>
                           <a href="https://gem.gov.in/statistics" title="Statistics">Statistics</a>
                        </p>
                        <p>
                           <a href="https://gem.gov.in/RTI" title="Right to Information">Right to Information</a>
                        </p>
                        <p>
                           <a href="https://sso.gem.gov.in/ARXSSO/oauth/login" title="Analytics"> Analytics</a>
                        </p>
                        <p>
                           <a href="https://gem.gov.in/new-categories" title="New on GeM"> New on GeM</a>
                        </p>


                     </div>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6">
                     <div className=" list-inline secb gem-fot">
                        <h6>NEWS &amp; EVENTS</h6>
                        <p><a href="https://gem.gov.in/media" title="Newsroom">Newsroom</a></p>
                        <p><a href="https://gem.gov.in/gallery" title="Gallery">Gallery</a></p>
                        <p><a href="https://gem.gov.in/landing/index/allnews" title="Notifications">Notifications</a></p>
                        <p><a href="https://gem.gov.in/ccm_data" title="Consultative Committee Meeting">CCM Schedule </a></p>
                        <p><a href="https://gem.gov.in/forum" title="Forums">Forums </a></p>

                     </div>
                  </div>
                 
               </div>
               <div className="clearfix"></div>
            </div>

            <div className="footer-logo-bot sce">
               <div className="cont footer_ip_1">

                  <div className="col-sm-2 vis col-xs-6 ">
                     <p className="cpy ">© 2023 GeM All rights reserved </p>

                  </div>
                  <div className="col-sm-6 vis col-xs-6 vis text-center">
                     <div className="stqc-gem">
                        {/* <!--<p style="margin: 0;">Last Updated: <strong>04-Jan-2019</strong></p>--> */}
                        <p className="cpy cpy_1">Site operated and maintained by Managed Service Provider</p>
                     </div>
                  </div>
                  <div className="col-sm-4 col-xs-12 text-center txt_ip_1">
                     <ul className=" list-inline fsco ffot">
                        <li>
                           <a href="https://twitter.com/GeM_India" target="_blank" rel="noopener noreferrer" className="externalLink"><img src="https://gem.gov.in/resources/images/twitters.svg " className="svg" alt="twitter" /></a>
                           <a href="https://www.facebook.com/govGeM/" target="_blank" rel="noopener noreferrer" className="externalLink"><img src="https://gem.gov.in/resources/images/facebook-icons.svg" alt="fb" className="svg" /></a>
                           <a href="https://www.youtube.com/channel/UC1LaBWVVZv3k23BZApfDlsQ" target="_blank" rel="noopener noreferrer" className="externalLink"><img src="https://gem.gov.in/resources/images/youtube_new-gem.svg" alt="youtube" className="svg" /></a>
                           <a href="https://www.linkedin.com/company/government--e--marketplace-gem-?trk=biz-companies-cym" target="_blank" rel="noopener noreferrer" className="externalLink"><img src="https://gem.gov.in/resources/images/inc-v1.svg " alt="linkedin" className="svg" /></a>
                           <a href="https://www.slideshare.net/GeMProcurementReimag" target="_blank" rel="noopener noreferrer" className="externalLink"><img src="https://gem.gov.in/resources/images/slideshare.svg " alt="slide share" className="svg" /></a>
                        </li>
                     </ul>
                  </div>


               </div>
               <div className="clearfix"></div>
            </div>
         </section>
      </div>
   )
}

export default Footer
