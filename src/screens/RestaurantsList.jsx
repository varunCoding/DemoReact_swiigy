import React, { Component, Fragment } from 'react';
import Header from '../common/Header.jsx';

class RestaurantsList extends Component {
    render() {
        return (
            <Fragment >
                {/* <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-3">
                                <a href="index.php" title="Logo" className="toplogo"><svg viewBox="0 0 200 60" height="49" width="170" fill="#fc8019"><path d="M19.9253444,58.766315 C19.8876048,58.7384908 19.8458927,58.7037105 19.8021942,58.6654521 C19.094081,57.7879944 14.7152991,52.3026415 10.2535896,45.2670801 C8.91532497,43.0252402 8.046322,41.2767839 8.21317057,40.8246398 C8.64965835,39.6490651 16.4279798,39.0056292 18.8234486,40.0713975 C19.5519214,40.3948545 19.5335482,40.8231492 19.5335482,41.0725738 C19.5335482,42.1487762 19.4804148,45.0365363 19.4804148,45.0365363 C19.4809114,45.6332671 19.9660634,46.1172104 20.5634408,46.1162167 C21.1618115,46.1162167 21.6449771,45.630286 21.6429908,45.0320645 L21.6305765,37.8365137 L21.6285902,37.8365137 C21.6285902,37.2119586 20.9467953,37.055944 20.8186794,37.0315978 C19.5683083,37.0256354 17.0293299,37.0171888 14.3031434,37.0171888 C8.28765654,37.0171888 6.94343308,37.264129 5.92148558,36.5958501 C3.707266,35.1479951 0.0867513255,25.3896318 0.0023338937,19.8993102 C-0.117836803,12.1537335 4.47149205,5.44808831 10.9338947,2.12557426 C13.6337628,0.766160708 16.6832184,0 19.9039917,0 C30.132405,0 38.555775,7.72023676 39.6765405,17.6529986 C39.6775337,17.6614452 39.6775337,17.6708856 39.67952,17.6793322 C39.8851013,20.0806647 26.6504342,20.5909417 24.0325007,19.8923542 C23.6312696,19.785032 23.528479,19.3741274 23.528479,19.1972447 C23.5254995,17.371278 23.5130852,12.2327345 23.5130852,12.2327345 C23.5110989,11.6355068 23.025947,11.1510667 22.4285695,11.1525572 L22.4275764,11.1525572 C21.831192,11.153551 21.3470332,11.6389848 21.3470332,12.2372063 L21.3683859,21.7029181 C21.3867591,22.2991521 21.8873048,22.4601353 22.024359,22.4869659 C23.5130852,22.4874627 26.9945594,22.4839847 30.2371819,22.4839847 C34.6199364,22.4839847 36.460733,22.9917773 37.6857789,23.9243867 C38.5001588,24.5454638 38.8154827,25.7344538 38.5398847,27.2796936 C36.0823442,41.0258688 20.5103075,58.0562997 19.9253444,58.766315 Z M62.158293,26.6840558 C66.0871796,28.3679201 68.5213811,30.23612 68.5213811,34.3367194 C68.5213811,38.5257602 65.3482788,41.2316689 60.4386603,41.2316689 C56.4601164,41.2316689 53.2666546,39.4295516 51.6761309,36.2864046 L51.418906,35.7796057 L56.0966249,33.0692253 L56.4030105,33.5700618 C57.4562421,35.2916875 58.633617,36.0255522 60.3418285,36.0255522 C61.8141679,36.0255522 62.8033415,35.3731729 62.8033415,34.4013114 C62.8033415,33.3246122 62.0872831,32.9211605 59.8740566,31.9522802 L58.7493185,31.4698275 C55.7475339,30.1904087 52.9667244,28.4126376 52.9667244,24.1068343 C52.9667244,20.2372755 55.9327557,17.5348449 60.1799457,17.5348449 C63.3977396,17.5348449 65.6030208,18.7804771 67.1210449,21.4535929 L67.4026018,21.9499577 L62.8703789,24.8625609 L62.5580344,24.3035915 C61.8002638,22.9481529 61.0866882,22.6763695 60.1799457,22.6763695 C59.2319876,22.6763695 58.6212026,23.199068 58.6212026,24.0099463 C58.6212026,24.9415619 59.0710979,25.3504791 61.0320652,26.2001125 L62.158293,26.6840558 Z M95.2686968,27.476898 L98.5709081,18.2690574 L104.238794,18.2690574 L95.8387627,41.611619 L94.5799498,41.611619 L89.484613,30.6796684 C89.2477476,30.1788318 89.0034336,29.556761 88.7928866,28.9868606 C88.5773739,29.5577547 88.327101,30.1813161 88.089739,30.6821527 L82.7952763,41.611619 L81.5449052,41.611619 L73.0103029,18.2690574 L79.065019,18.2690574 L82.4034802,27.476898 C82.61651,28.0641885 82.8350022,28.7801662 83.0261829,29.4444702 C83.2531168,28.7588011 83.5257354,28.0184772 83.8107684,27.4217464 L88.1955091,18.0767719 L89.4086373,18.0767719 L93.8614085,27.4227401 C94.1454483,28.0189741 94.4190601,28.7597949 94.6450009,29.445464 C94.8371747,28.7801662 95.0571566,28.0641885 95.2686968,27.476898 Z M110.84853,40.9414023 L110.84853,17.7921198 L116.569052,17.7921198 L116.569052,40.9414023 L110.84853,40.9414023 Z M135.325265,33.163629 L135.325265,27.9903052 L145.94746,27.9903052 L145.94746,38.3652739 L145.727975,38.5461315 C144.512861,39.5438298 141.291094,41.2316689 136.926713,41.2316689 C129.564023,41.2316689 124.423995,36.3529841 124.423995,29.3676057 C124.423995,22.5114114 129.383767,17.5348449 136.217607,17.5348449 C139.975672,17.5348449 142.730163,18.594154 144.637004,20.7738862 L145.009434,21.1996966 L141.110342,25.059815 L140.686765,24.6235704 C139.59778,23.500663 138.469566,22.8050567 136.217607,22.8050567 C132.717263,22.8050567 130.272137,25.5035125 130.272137,29.3676057 C130.272137,33.3926822 132.883118,35.99425 136.926713,35.99425 C138.267957,35.99425 139.664321,35.7632093 140.614762,35.394041 L140.614762,33.163629 L135.325265,33.163629 Z M164.314658,33.163629 L164.314658,27.9903052 L174.936853,27.9903052 L174.936853,38.3652739 L174.717368,38.5461315 C173.501261,39.5438298 170.280487,41.2316689 165.917099,41.2316689 C158.554409,41.2316689 153.413388,36.3529841 153.413388,29.3676057 C153.413388,22.5114114 158.374153,17.5348449 165.206006,17.5348449 C168.966058,17.5348449 171.720549,18.594154 173.626397,20.7738862 L173.99982,21.1996966 L170.101721,25.059815 L169.677151,24.6235704 C168.587669,23.500663 167.458959,22.8050567 165.206006,22.8050567 C161.706656,22.8050567 159.26153,25.5035125 159.26153,29.3676057 C159.26153,33.3926822 161.873504,35.99425 165.917099,35.99425 C167.258343,35.99425 168.653714,35.7632093 169.604155,35.394041 L169.604155,33.163629 L164.314658,33.163629 Z M195.897503,17.7922192 L201.87674,17.7922192 L193.669876,33.1964218 L193.669876,40.9415017 L187.918566,40.9415017 L187.918566,33.5253443 L179.1759,17.7922192 L185.555871,17.7922192 L189.596487,25.1730995 C190.030988,25.9760279 190.484856,27.0373245 190.827988,27.8988826 C191.155726,27.0442805 191.589235,25.9924244 192.020757,25.1800555 L195.897503,17.7922192 Z"></path></svg></a>
                            </div>
                            <div className="col-xs-12 col-lg-9 text-right">
                                <ul>
                                    <li><a href="search.php" title="Search"><i className="icon-magnifier"></i> Search</a></li>
                                    <li><a href="offers.php" title="Offers"><i className="icon-offers-coupon"></i> Offers <span className="new_offers">NEW</span></a></li>
                                    <li><a href="help.php" title=""><i className="icon-help"></i> Help</a></li>
                                    <li><a className="signinpop" title=""><i className="icon-user-checkout"></i> Sign In</a></li>
                                    <li><a href="" title=""><span><svg className="cart" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg><span class="count">0</span></span> Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header> */}
                <Header />

                {/* <!--============Offer Slider============--> */}
                <div className="offerslider">
                    <div className="row">
                        <div className="container">
                            <div className="col-sm-12">
                                <div className="owl-carousel offerlist">
                                    <a className="item" title="Offer" href="#">
                                        <i className="offerimage">
                                            <img src="images/o1.jpg" alt="offer" />
                                        </i>
                                    </a>
                                    <a className="item" title="Offer" href="#">
                                        <i className="offerimage">
                                            <img src="images/o2.jpg" alt="offer" />
                                        </i>
                                    </a>
                                    <a className="item" title="Offer" href="#">
                                        <i className="offerimage">
                                            <img src="images/o3.jpg" alt="offer" />
                                        </i>
                                    </a>
                                    <a className="item" title="Offer" href="#">
                                        <i className="offerimage">
                                            <img src="images/o4.jpg" alt="offer" />
                                        </i>
                                    </a>
                                    <a className="item" title="Offer" href="#">
                                        <i className="offerimage">
                                            <img src="images/o3.jpg" alt="offer" />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--============/Offer Slider============--> */}

                {/* <!--============Superpop============--> */}
                <section className="superpop">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <a className="box" href="" title="">
                                    <i><img src="images/s1.jpg" alt="" /></i>
                                    <h3>Introducing Swiggy Pop</h3>
                                    <p>Single Serve Meals, Free Delivery, No Extra Charges</p>
                                    <div className="button">Order Now</div>
                                </a>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <a className="box" href="" title="">
                                    <i><img src="images/supernewlogo.webp" alt="" /></i>
                                    <h3>Introducing Swiggy SUPER</h3>
                                    <p>The membership program you've been waiting for. Grab it at unbelievable introductory prices!</p>
                                    <div className="button">Get Super Now</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--============/Superpop============--> */}


                {/* <!--============Resturant Listing============--> */}
                <section className="rlisting">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="resturant-sticky">
                                    <li><a>17 restaurants</a></li>
                                    <li><a href="" title="Search" className="rsearch"><i className="icon-magnifier"></i> Search</a></li>
                                    <li><a href="#" title="Relevance">Relevance</a></li>
                                    <li><a href="#" title="Cost For Two">Cost For Two</a></li>
                                    <li><a href="#" title="Delivery Time">Delivery Time</a></li>
                                    <li><a href="#" title="Rating">Rating</a></li>
                                    <li><a href="#" title="Filters" className="filtertab">Filters <i className="icon-filter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!--=========Listing in Loop============--> */}
                            <div className="d-flex justify-content-between">
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating green"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>5% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating brown"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>20% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating green"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>15% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating brown"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-multi-offer"></i>
                                            <p>Free delight on orders above ₹289</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating green"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>5% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating brown"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>20% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating green"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-offer-filled"></i>
                                            <p>15% off on all orders</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                                <a href="" className="returant-name">
                                    <div className="data">
                                        <i className="qimage"><img src="images/1.jpg" alt="Poha" className="w-100" /></i>
                                        <h3>Kanha Bhog Poha & Lassi</h3>
                                        <p className="tagline">Snacks, Beverages, Desserts</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="rating brown"><i className="icon-star"></i> 4.4</span>
                                            <span className="qtext">49 MINS</span>
                                            <span className="qtext">₹100 FOR TWO</span>
                                        </div>
                                        <div className="roffer">
                                            <i className="icon-multi-offer"></i>
                                            <p>Free delight on orders above ₹289</p>
                                        </div>
                                        <div className="qview">Quick View</div>
                                    </div>
                                </a>
                            </div>
                            {/* <!--=========/Listing in Loop============--> */}
                            {/* <!--=============Qucik View List============--> */}
                            <div className="quickviewlist d-flex justify-content-between">
                                <ul>
                                    <li><h4>Menu</h4></li>
                                    <li><p>Chandpole Bazar,<br />Sindhi Camp</p></li>
                                    <li><a href="" title="Item Name">Item Name</a></li>
                                    <li><a href="" title="Item Name">Item Name</a></li>
                                    <li><a href="" title="Item Name">Item Name</a></li>
                                    <li><a href="" title="Item Name">Item Name</a></li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title=""><i className=""><img src="images/q1.jpg" alt="" /></i>
                                            <p>Roasted Chicken</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--=============Qucik View List============--> */}
                        </div>
                    </div>
                </section>
                {/* <!--============/Resturant Listing============--> */}

                {/* <!--============Filter Popup============--> */}
                <div className="filterpopup">
                    <div className="popheader">
                        <span className="close icon-close-thin"></span>
                        <h2>Filters</h2>
                    </div>
                    <form className="popmiddle">
                        <p className="filtertagline">Cuisines</p>
                        <div className="d-flex justify-content-between">
                            <div className="checkbox">
                                <input type="checkbox" name="american" id="american" value="" />
                                <label for="american" className="labeltext">American</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="beverages" id="beverages" value="" />
                                <label for="beverages" className="labeltext">Beverages</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="checkbox">
                                <input type="checkbox" name="cafe" id="cafe" value="" />
                                <label for="cafe" className="labeltext">Cafe</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="chinese" id="chinese" value="" />
                                <label for="chinese" className="labeltext">Chinese</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="checkbox">
                                <input type="checkbox" name="combo" id="combo" value="" />
                                <label for="combo" className="labeltext">Combo</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="continental" id="continental" value="" />
                                <label for="continental" className="labeltext">Continental</label>
                            </div>
                        </div>
                        <p className="filtertagline">Show Restaurants With</p>
                        <div className="d-flex justify-content-between">
                            <div className="checkbox">
                                <input type="checkbox" name="offers" id="offers" value="" />
                                <label for="offers" className="labeltext">Offers</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="pureveg" id="pureveg" value="" />
                                <label for="pureveg" className="labeltext">Pure Veg</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <input type="button" className="clear button" value="clear" />
                            <input type="submit" className="button" value="SHOW RESTAURANTS" />
                        </div>
                    </form>
                </div>
                {/* <!--============/Filter Popup============--> */}



                {/* <!--=============Footer============--> */}
                <footer>
                    <div className="container">
                        {/* <!--==========Footer Menu==========--> */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <h5>Company</h5>
                                <ul>
                                    <li><a href="" title="About us">About us</a></li>
                                    <li><a href="" title="Team">Team</a></li>
                                    <li><a href="" title="Careers">Careers</a></li>
                                    <li><a href="" title="Swiggy Blog">Swiggy Blog</a></li>
                                    <li><a href="" title="Bug Bounty">Bug Bounty</a></li>
                                    <li><a href="" title="Swiggy Pop">Swiggy Pop</a></li>
                                    <li><a href="" title="Swiggy Super">Swiggy Super</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <h5>Contact</h5>
                                <ul>
                                    <li><a href="" title="Help & Support">Help & Support</a></li>
                                    <li><a href="" title="Partner with us">Partner with us</a></li>
                                    <li><a href="" title="Ride with us">Ride with us</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <h5>Legal</h5>
                                <ul>
                                    <li><a href="" title="Terms & Conditions">Terms & Conditions</a></li>
                                    <li><a href="" title="Refund & Cancellation">Refund & Cancellation</a></li>
                                    <li><a href="" title="Privacy Policy">Privacy Policy</a></li>
                                    <li><a href="" title="Cookie Policy">Cookie Policy</a></li>
                                    <li><a href="" title="Offer Terms">Offer Terms</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <ul className="appbutton">
                                    <li><a href="" title="Google Play Store" target="_blank"><img src="images/play-store.webp" alt="Google Play Store" /></a></li>
                                    <li><a href="" title="itunes" target="_blank"><img src="images/app-store.webp" alt="itunes" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--==========/Footer Menu==========--> */}
                        <hr />
                        {/* <!--==========State Or City==========--> */}
                        <div className="row">
                            <div className="col">
                                <h5>We Deliver To</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <ul>
                                    <li><a href="" title="City Name">City Name</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <ul>
                                    <li><a href="" title="City Name">City Name</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <ul>
                                    <li><a href="" title="City Name">City Name</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <ul>
                                    <li><a href="" title="City Name">City Name</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--==========/State Or City==========--> */}
                        {/* <!--==========Copyright==========--> */}
                        <hr />
                        <div className="d-flex justify-content-between">
                            <a href="" title="Logo" className="flogo"><img src="images/logo.webp" alt="Logo" /></a>
                            <p className="copyright">© 2019 Resturant</p>
                            <ul className="social">
                                <li><a href="" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="" title="Instagram" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        {/* <!--==========/Copyright==========--> */}
                    </div>
                </footer>
                {/* <!--============+/Footer============--> */}


                {/* <!--===============Popup=============--> */}
                <div className="loginbox">
                    {/* <!--==========LoginForm=============--> */}
                    <div className="loginform">
                        <div className="popheader">
                            <span className="close icon-close-thin"></span>
                            <h2>Login</h2>
                            <p className="caccount">or <a title="create an account">create an account</a></p>
                            <i className="icon"><img src="images/panner-wrap.webp" alt="" /></i>
                        </div>
                        <form className="popmiddle">
                            <div className="textbox">
                                <input type="tel" name="mobile" id="mobile" className="gtext" autocomplete="off" value="" />
                                <label for="mobile" className="labeltext">Phone number</label>
                            </div>
                            <input type="submit" className="button" value="login" />
                        </form>
                    </div>
                    {/* <!--==========/LoginForm=============--> */}
                    {/* <!--==========Sign up Form=============--> */}
                    <div className="signpform">
                        <div className="popheader">
                            <span className="close icon-close-thin"></span>
                            <h2>Sign up</h2>
                            <p className="laccount">or <a title="create an account">login to your account</a></p>
                            <i className="icon"><img src="images/panner-wrap.webp" alt="" /></i>
                        </div>
                        <form className="popmiddle">
                            <div className="textbox bdrbtm">
                                <input type="tel" name="smobile" id="smobile" className="gtext" autocomplete="off" value="" />
                                <label for="smobile" className="labeltext">Phone number</label>
                            </div>
                            <div className="textbox bdrbtm">
                                <input type="text" name="name" id="name" className="gtext" autocomplete="off" value="" />
                                <label for="name" className="labeltext">Name</label>
                            </div>
                            <div className="textbox bdrbtm">
                                <input type="email" name="email" id="email" className="gtext" autocomplete="off" value="" />
                                <label for="email" className="labeltext">Eamil</label>
                            </div>
                            <div className="textbox">
                                <input type="password" name="password" id="password" className="gtext" value="" />
                                <label for="password" className="labeltext">Password</label>
                                <div className="passwordshow">Show</div>
                            </div>
                            <div className="textbox ghide">
                                <input type="text" name="refercode" id="refercode" className="gtext" autocomplete="off" value="" />
                                <label for="refercode" className="labeltext">Referral code</label>
                            </div>
                            <p className="refer"><a title="Have a referral code?">Have a referral code?</a></p>
                            <input type="submit" className="button" value="continue" />
                            <p className="para">By creating an account, I accept the <a href="" title="Terms & Conditions">Terms & Conditions</a></p>
                        </form>
                    </div>
                    {/* <!--==========/Sign up Form=============--> */}
                </div>

                <div className="overlay"></div>
                {/* <!--===============/Popup=============--> */}
            </Fragment>
        )
    }
}

export default RestaurantsList;