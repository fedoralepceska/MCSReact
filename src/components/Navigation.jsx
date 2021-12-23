import React from "react";
import "../App.css";
import { Link } from "react-scroll";
import '../bootstrap.css';

function Navigation(props) {
    let content = {
        English: {
            home: "Home",
            reserve: "Reserve",
            FAQs: "FAQs",
            Analytics: "Analytics",
            AboutUs: "About us",
            MyProfile: "My Profile",
            Help: "Help"
        },
        Macedonian: {
            home: "Почетна",
            reserve: "Резервирај",
            FAQs: "FAQs",
            Analytics: "Аналитика",
            AboutUs: "За нас",
            MyProfile: "Мој профил",
            Help: "Помош"
        },
        Albanian: {
            home: "Shtëpi",
            reserve: "Rezervë",
            FAQs: "FAQs",
            Analytics: "Analitikë",
            AboutUs: "Rreth nesh",
            MyProfile: "Profili im",
            Help: ""
        }
    };

    if(props.language === "Macedonian") {
        content = content.Macedonian;
    }
    else if(props.language === "English"){
        content = content.English
    }else {
        content = content.Albanian
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                    <a className="navbar-brand logo-image" href="./Header.jsx"><img src={require('../images/krajno.png')} alt="alternative"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"/>
                        <span className="navbar-toggler-awesome fas fa-times"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll first-item" href="./Header">{content.home}<span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <Link to="reserve" className="nav-link page-scroll" href="./reserve">{content.reserve}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="faqs" spy={true} smooth={true} offset={50} duration={500} className="nav-link dropdown-toggle page-scroll" href="/faqs" id="navbarDropdown2"
                                      role="button" aria-haspopup="true" aria-expanded="false">{content.FAQs}</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/analytics"><span
                                        className="item-text">{content.Analytics}</span></a>
                                    <Link to="help" className="dropdown-item" href="/help"><span
                                        className="item-text">{content.Help}</span></Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="aboutUs" spy={true} smooth={true} offset={50} duration={500} className="nav-link page-scroll" href="/about">{content.AboutUs}</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/my-profile">{content.MyProfile}</a>
                            </li>
                            <li>
                                <div className="language-select">
                                    <select
                                        className="custom-select"
                                        value={props.language}
                                        onChange={e => props.handleSetLanguage(e.target.value)}
                                    >
                                        <option value="English">English</option>
                                        <option value="Macedonian">Macedonian</option>
                                        <option value="Albanian">Albanian</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}

export default Navigation;