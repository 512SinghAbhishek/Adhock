import Link from 'next/link';

function Header() {
    return (
        // <div>
            <header>
                <section className="deskhead">
                    {/* <!--NAVIGATION--> */}
                    <section id="indexHeader sce ">
                        <div className="top-logo-black new-hearder sticky">
                            <div className="container" id="content-fix">
                                <div className="row logwrp">
                                    <div className="col-sm-3 col-md-2 clearfix logo_ip">
                                        <a className="navbar-brand" title="GeM Logo, Government of India" href="https://gem.gov.in/"><img src="https://bidplus.gem.gov.in/resources/images/gem-new-logo-v4.svg" alt="GeM Logo, Government of India" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--MAIN HEADER--> */}
                    </section>
                    <section className="new-nov black-top" style={{ padding: "0px" }}>
                        <div className="container" id="content-fix">
                            <div className="row">
                                <div className="col-md-8">

                                    <div id="navbar" className="navbar-collapse collapse sce">
                                        <ul className="nav navbar-nav bid-nov-set" data-smartmenus-id="1675751858322413">

                                            <li>
                                                <Link href="/" title="Home" id="nov-color">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/Apply" title="Apply" id="nov-color">Apply</Link>
                                            </li>
                                            <li>
                                                <Link href="#" title="" id="nov-color">Download</Link>
                                            </li>
                                            {/* <li>
                                                <Link href="https://gem.gov.in/contactUs" title="" id="nov-color">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link href="https://gem.gov.in/user_feedback" title="" id="nov-color">Rate a Seller</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>

                                </div>
                               
                            </div>
                        </div>
                    </section>
                </section>
            </header>
        // </div>
    )
}

export default Header;
