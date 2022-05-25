import './sidebar.css';
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const navigateToProfile = (event) => {
        event.preventDefault();
        navigate('/profile');
    }
    return (
        <>
            <div className="sticky sticky-margin">
                <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                <div className="app-sidebar ps">
                    <div className="side-header">
                        <a className="header-brand1" href="#">
                            <img src="assets/images/brand/logo.png" className="header-brand-img desktop-logo"
                                 alt="logo"/>
                            <img src="assets/images/brand/logo-1.png" className="header-brand-img toggle-logo"
                                 alt="logo"/>
                            <img src="assets/images/brand/logo-2.png" className="header-brand-img light-logo"
                                 alt="logo"/>
                            <img src="assets/images/brand/logo-3.png" className="header-brand-img light-logo1"
                                 alt="logo"/>
                        </a>
                    </div>
                    <div className="main-sidemenu">
                        <div className="slide-left disabled" id="slide-left">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </div>
                        <ul className="side-menu side-menu-margin">
                            <li className="sub-category">
                                <h3>Main</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/dashboard');
                                }}>
                                    <i className="side-menu__icon fe fe-home"></i>
                                    <span className="side-menu__label">Employer Dashboard</span>
                                </a>
                            </li>

                            {/*<li className="sub-category">
                            <h3>Profilet</h3>
    </li>*/}

                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="#" onClick={(event) => {
                                    event.preventDefault();
                                    navigate('/locations');
                                }}
                                   ><i
                                    className="side-menu__icon fe fe-layers"></i><span className="side-menu__label">Locations</span></a>

                            </li>

                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="#"
                                   ><i
                                    className="side-menu__icon fe fe-layers"></i><span className="side-menu__label">Menu 2</span></a>

                            </li>
                            {/*<li className="slide">
                            <a className="side-menu__item" data-bs-toggle="slide" href="ProfileEdit.html"><i
                                className="side-menu__icon fe fe-users"></i><span className="side-menu__label">My Account</span><i
                                className="angle fe fe-chevron-right"></i></a>

                            <ul className="slide-menu open">
                                <li className="is-expanded"><a href="ProfileEdit.html" className="sub-slide-item">My
                                    Account</a></li>
                                <li className="is-expanded"><a href="BankAccount.html" className="sub-slide-item">Bank
                                    Account</a></li>

                            </ul>
    </li>*/}

                        </ul>
                        <div className="slide-right" id="slide-right">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="ps__rail-x rail">
                        <div className="ps__thumb-x railthumb" tabIndex="0"></div>
                    </div>
                    <div className="ps__rail-y railright">
                        <div className="ps__thumb-y railrightthumb" tabIndex="0"></div>
                    </div>
                </div>
            </div>
            <div className="jumps-prevent jump-padding"></div>
        </>
    )
}
