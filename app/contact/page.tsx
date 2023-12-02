import { FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp  } from 'react-icons/fa'
import Link from "next/link"
export default function Contact(){
    return(
    <main>
<section className="Sub-header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                <li><Link href="/">Home</Link></li>
                    <li><Link href="contact">CONTACT</Link></li>
                    <li><Link href="blog">Blog</Link></li>
                    <li><Link href="about">About</Link></li>
                    <li><Link href="course">Course</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>Contact Us</h1>
    </section>

    {/* <!-- Contact Us Section Start --> */}

    <section className="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13625.534611847355!2d73.0905913!3d31.3759833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392267c17f404e35%3A0x50fbee80f1accca4!2sShalimar%20Park!5e0!3m2!1sen!2s!4v1700473381817!5m2!1sen!2s"
            width="600" height="450"  loading="lazy"></iframe>
    </section>

    <section className="contact-us">
        <div className="row">
            <div className="content-col">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5><b>RIAZ SHAHID SIQQIQUI HOUSE</b></h5>
                        <p><b>Professor Block Shalimar Park Faisalabad</b></p>
                    </span>
                </div></div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5><b>0304-0268592</b></h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>
                        <h5><b>jawadsiddiqui753@gmail.com</b></h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>
            </section>
        
            <div className="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required/>
                    <input type="email" placeholder="Enter Email" required/>
                    <input type="text" placeholder="Enter Subject" required/>
                    <textarea  placeholder="Message" required></textarea>
                    <button type="submit" className="hero_btn btn">Send Message</button>
                </form>
            </div>
        


    // {/* <!-- Contact Us Section End --> */}

    {/* <!-- Footer Section Start --> */}
    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"><a href='https://www.facebook.com/profile.php?id=100028451017196&mibextid=ZbWKwL'><FaFacebook /></a></i>
            <i className="fab fa-instagram"><a href='https://instagram.com/j_a_w_a_d_a_l_i_?igshid=MzMyNGUyNmU2YQ=='><FaInstagram /></a></i>
            <i className="fab fa-twitter"><a href="https://wa.me/923040268592" target="_blank"><FaWhatsapp /></a></i>
            <i className="fab fa-linkedin"><a href='www.linkedin.com/in/jawad-ali-73b66228a'><FaLinkedin /></a></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="#">JAWAD ALI Developer</a></p>
        <p>Copyright © 2023 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    {/* <!-- Footer Section End --> */}
    <script src="script.js"></script>
    <section/>
    
    </main>
        
    )}