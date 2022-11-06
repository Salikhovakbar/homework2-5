import './Header.css'
import header_logo from '../../assets/images/logo.png'
const Header = () => {

    return(
        <header>
            <div className="header_logo">
                <img src={header_logo} alt="" />
            </div>
            <nav className="header_nav">
                <ul className="header_collection">
                <li className="header_items"><a className="header_links" href=''>Booking</a></li>
                    <li className="header_items"><a className="header_links" href=''>Facilities</a></li>
                    <li className="header_items"><a className="header_links" href=''>About Us</a></li>
                    <li className="header_items"><a className="header_links" href=''>Location</a></li>
                    <li className="header_items"><a className="header_links" href=''>Contact</a></li>
                </ul>
                <button className="header_btn">Sign in</button>
            </nav>
        </header>
        
            )
}


export default Header 
