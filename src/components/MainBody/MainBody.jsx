import './MainBody.css'
import second_photo from '../../assets/images/second_photo.png'
import third_photo from '../../assets/images/third_photo.png'
import hotel_photo from '../../assets/images/hotel_photo.png'
import company1 from '../../assets/images/company1.png'
import company2 from '../../assets/images/company2.png'
import company3 from '../../assets/images/company3.png'
import company4 from '../../assets/images/company4.png'
import company5 from '../../assets/images/company5.png'
import picture_ from '../../assets/images/picture_.png'
import hotel1 from '../../assets/images/hotel1.png'
import hotel2 from '../../assets/images/hotel2.png'
import man from '../../assets/images/man.png'
import { FiSearch } from "react-icons/fi"
import  { FaBus } from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
const MainBody = () => {
    return(

    <div className="hero_part"> 
    <div className="container">
    <div className="main_text">
        <h1>Find Your Best Hotel for Deals</h1>
        <p className="hero_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="hero_schedule">
        <div className="hero_btns">
        <button className="hero_btn_one"><i><FaBus/></i> Jun 10 - 14</button>
        <button className="hero_btn_two"><i><AiOutlineUser/></i> 2 Guests</button>
        </div>
        <div className="main_input">
        <input list='inpt' className="hero_input" type="text" /> <button className='btn-search'><FiSearch/></button>
        <datalist id='inpt'>
            <option value="United States"></option>
            <option value="United Kingdom"></option>
            <option value="Canada"></option>
        </datalist>
</div>
    </div>
</div>
<div className="hero_photos">
    <div className="main_photo">
<p className="main_photo_text">Wagstaffe NSW, Australia</p>
    </div>
    <div className="main_small_photos">
        <img className="main_second_photo" src={second_photo} alt="" />
        <img className="main_third_photo" src={third_photo} alt="" />
    </div>
</div>
<div className="">
<h2 className="topic_one">Facilities & Service</h2>
<p className="explaining">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
</div>
<div className="box">
<div className="box-option">
<p>Private Workspace</p>
<p className='text-explaination'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
</div>
<div className="box-option">
<p>Parking Area</p>
<p className='text-explaination'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
</div>
<div className="box-option">
<p>Free Wifi</p>
<p className='text-explaination'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
</div>
<div className="box-option">
    <p>Breakfast</p>
    <p className='text-explaination'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
</div>
</div>
<div className="box_advert">
    <div className="advert_photo">
        <img src={hotel_photo} alt="" />
    </div>
    <div className="advert_box_text">
        <h2 className="advert_topic">Finest Luxury Hotels 
            & Resort</h2>
            <p className="advert_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           <div className="box_number">
            <div className="first_number">
                <h3 className="number">120K+</h3>
                <p className="users">Website User</p>
            </div>
            <div className="first_number">
                <h3 className="number">110K+</h3>
                <p className="users">Happy Clients</p>
            </div>
            <div className="first_number">
                <h3 className="number">20K+</h3>
                <p className="users">Active Hotels</p>
            </div>
            <div className="first_number">
                <h3 className="number">8Y+</h3>
                <p className="users">company Year</p>
            </div>
           </div>
           <button className="more_data">Explore More</button>
        </div>
</div>
<div className="box_companies">
    <div className="logo_companies">
    <img src={company1} alt="" />
    </div>
    <div className="logo_companies">
    <img src={company2} alt="" />
    </div>
    <div className="logo_companies">
    <img src={company3} alt="" />
    </div>
    <div className="logo_companies">
    <img src={company4} alt="" />
    </div>
    <div className="logo_companies">
    <img src={company5} alt="" />
    </div>
</div>
<div className="commnet_part">
<div className="main_picture">
    <img className='picture' src={picture_} alt="" />
    <div className="text-container">
        <h4>Nazmul Nabeel</h4>
        <p className='text-explaination-user'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ”</p></div>
</div>

<h2 className="topic_one">Best Quality Hotels</h2>
<div className="stars">
    <div className="steps">
    <a className="mark" href="">1 Star</a>
    <a className="mark" href="">2 Star</a>
    <a className="mark" href="">3 Star</a>
    <a className="mark" href="">4 Star</a>
    <a className="mark" href="">5 Star</a>
</div>
<div>
    <a className="more_info" href="">View All</a>
</div>
</div>
<div className="varieties_hotel">
<div className="first_option">
    <img src={hotel1} alt="" />
    <div className="facility_text">
    <h2 className="facility_hotel">Swimming pool and beach of luxury...</h2>
    <p className="decription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
<div className="conditions">
    <p className="price">$250 <span class="day"> /NIGHT</span></p> <button className="details">Details</button>
</div>
</div>
<div className="first_option">
    <img src={hotel2} alt="" />
    <div className="facility_text">
    <h2 className="facility_hotel">InterContinental Fujairah Resort Clu...</h2>
    <p className="decription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
<div className="conditions">
    <p className="price">$250 <span class="day"> /NIGHT</span></p> <button className="details">Details</button>
</div>
</div>
<div className="first_option">
    <img src={hotel2} alt="" />
    <div className="facility_text">
    <h2 className="facility_hotel">Burj Al Arab - Jumeirah Street - Dub...</h2>
    <p className="decription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
<div className="conditions">
    <p className="price">$250 <span class="day"> /NIGHT</span></p> <button class="details">Details</button>
</div>
</div>
</div>
<div className="subcribe_part">
    <div className="subcribe">
        <h2 className="preference">Subscribe for our mailing list to get latest updates and offers</h2>
    <p className="explaining">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
<div className="email_part">
    <form action="">
<input type='email' required className='email-input' placeholder='enter email' />  <button className="btn_subcribe">Subscribe</button>
</form>    
</div>
</div>
<div className="subscribe_photo">
    <img src={man} alt="" />
</div>
</div>
 </div>
 </div>
    )
}
export default MainBody