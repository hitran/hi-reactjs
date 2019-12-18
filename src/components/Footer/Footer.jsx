import React, { useState, useEffect } from 'react';

function Footer() {
    const [time, setTime] = useState("");

    const getTime = () => {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const day = today.getDay();
        const year = today.getFullYear();
        const month = today.getMonth();
        const date = today.getDate();
        const time = `${getWeekDay(day)} ${date} ${getMonthName(month)}, ${year} ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${getSuffix(hours)}`;
        setTime(time);
    }

    const getWeekDay = (number) => {
        let weekDay = "";
        switch (number) {
            case 0:
                weekDay = "Sun";
            case 1:
                weekDay = "Mon";
            case 2:
                weekDay = "Tue";
            case 3:
                weekDay = "Wed";
            case 4:
                weekDay = "Thu";
            case 5:
                weekDay = "Fri";
            case 6:
                weekDay = "Sat";
        }
        return weekDay;
    }

    const getMonthName = (number) => {
        let month = "";
        switch (number) {
            case 0:
                month = "Jan";
            case 1:
                month = "Feb";
            case 2:
                month = "Mar";
            case 3:
                month = "Apr";
            case 4:
                month = "May";
            case 5:
                month = "June";
            case 6:
                month = "Jul";
            case 7:
                month = "Aug";
            case 8:
                month = "Sep";
            case 9:
                month = "Oct";
            case 10:
                month = "Nov";
            case 11:
                month = "Dec";
        }
        return month;
    }
    const getSuffix = (hour) => {
        if (hour < 12) {
            return `AM`
        } else {
            return `PM`
        }
    }

    const formatTime = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else {
            return `${time}`
        }
    };

    useEffect(() => {
        setInterval(getTime, 1000);
    }, [time])
    return (
        <footer className="footer-area pl-100 pr-100">
            <div className="footer-area box-90 pt-100 pb-60" data-background="img/bg/footer.jpg" style={{ "background-image": "url(&quot;img/bg/footer.jpg&quot)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-6 ">
                            <div className="footer-widget mb-40 pr-70">
                                <div className="footer-logo">
                                    <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
                                </div>
                                <h3>{time}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore mag na
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>

                                <div className="footer-time d-flex mt-30">
                                    <div className="time-icon">
                                        <img src="./assets/time.png" alt="" />
                                    </div>
                                    <div className="time-text">
                                        <span>Got Questions ? Call us 24/7!</span>
                                        <h2>(0600) 874 548</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3>Social Media</h3>
                                <ul className="footer-link">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Behance</a></li>
                                    <li><a href="#"> Dribbble</a></li>
                                    <li><a href="#">Linkedin</a></li>
                                    <li><a href="#">Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
                            <div className="footer-widget pl-50 mb-40">
                                <h3>Location</h3>
                                <ul className="footer-link">
                                    <li><a href="#">New York</a></li>
                                    <li><a href="#">Tokyo</a></li>
                                    <li><a href="#">Dhaka</a></li>
                                    <li><a href="#">Chittagong</a></li>
                                    <li><a href="#">China</a></li>
                                    <li><a href="#">Japan</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3>About</h3>
                                <ul className="footer-link">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#"> Privacy Policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Wholesale</a></li>
                                    <li><a href="#">Direction</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;