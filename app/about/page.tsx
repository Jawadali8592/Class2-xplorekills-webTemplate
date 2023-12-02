import { FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp  } from 'react-icons/fa'
import Link  from "next/link"
export default function About(){
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
        <h1>About Us</h1>
    </section>

     {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src="images/about.png" alt=""/>
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end --> */}

    {/* <!-- Footer Section start --> */}
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
    {/* <!-- Footer Section end --> */}

    <script src="script.js"></script>
    </main>

)}