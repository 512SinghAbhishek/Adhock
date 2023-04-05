import Apply from "./Apply";
import { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Link from 'next/link';


// export async function getServerSideProps() {
//     const response = await fetch('http://127.0.0.1:8000/naukari/');
//     const data = await response.json();
//     // const Alldata = {JSON.stringify(data)}
//     console.log("llll=>", data)
//     return {
//         props: { data },
//     }
// }

// const getApiData = async () => {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   };



function index() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await getApiData();
    //     setData(result);
    //   };
  
    //   fetchData();
    // }, []);
    return (
        <div>
            <Header />
            <div className="container main_ip_1">
                <div className="row">
              
                    <div className="alert alert-info custom-alert-css" role="alert">
                        It may take up to 15 mins to reflect newly published bids or modified bids to show up in search results.    </div>
                    <div className="card_table">
                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"></a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>

                        <div className="card">
                            <div className="block_header">
                                <p className="bid_no pull-left">
                                    <span className="bid_title">Bid No.:&nbsp;</span>
                                    <a className="bid_no_hover" href="showbidDocument/3925786" target="_blank"> GEM/2022/B/2664820</a>
                                </p>
                                <p style={{ float: "left", display: "iniline-block", margin: "5px 12px" }}>
                                    <i className="fa fa-arrow-right fa-1x"></i>
                                </p>
                                <p className="bid_no pull-left">
                                    <span className="bid_title">RA NO:&nbsp;</span>
                                    <a className="bid_no_hover" href="/showradocumentPdf/4364434" target="_blank">GEM/2023/R/168452</a>
                                </p><p className="pull-right otherDetails" id="other-details-4364434" data-bid="4364434"
                                ></p></div><div className="clearfix"></div><div className="card-body"><div className="row"><div className="col-md-4"><div className="row"><strong>Items:</strong>&nbsp;<a data-toggle="popover" title="" data-trigger="hover" data-content="Hiring Of Agency For ISO Certification Service - ISO 14001 - Environmental Management System (EMS);" data-original-title="">Hiring Of Agency For ISO Certi...</a></div><div className="row"><strong>Quantity:</strong>&nbsp;6</div></div><div className="col-md-4"><div className="row"><strong>Department Name And Address:</strong>&nbsp;</div><div className="row">Ministry of Defence<br />Department of Defence Production</div></div><div className="col-md-3"><div className="row"><strong>Start Date:</strong>&nbsp;<span className="start_date">03-02-2023 11:14 AM</span></div><div className="row"><strong>End Date:</strong>&nbsp;&nbsp;&nbsp;<span className="end_date">07-02-2023 12:07 PM</span></div></div><div className="col-md-2"><div className="row"><strong><button typeof="button" className="btn-success apply_btn"><Link className="apply_btn_1" href="/Apply">Apply</Link></button></strong>&nbsp;</div></div><div className="clearfix"></div></div></div></div>
                    </div>
                    <div id="light-pagination" className="pagination2 light-theme"><span className="current prev">Prev</span><span className="current">1</span><a href="#page-2" className="page-link">2</a><a href="#page-3" className="page-link">3</a><a href="#page-4" className="page-link">4</a><a href="#page-5" className="page-link">5</a><span className="ellipse">…</span><a href="#page-4277" className="page-link">4277</a><a href="#page-4278" className="page-link">4278</a><a href="#page-2" className="page-link next">Next</a></div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default index;
