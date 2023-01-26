import React from "react";
// import {Link} from 'react-router-dom'
import mainlogo from './../images/MainLogo.png';
import profilePic from './../images/profile-pic.jpg';
import backgroundimg from './../images/Feature4.png';
import backgroundimg1 from './../images/Feature5.png';
import featuretitle from './../images/featuretitle.png';
import blackadam from './../images/black_adam.jpg';
import cuttputli from './../images/cuttputli.jfif';
import moonfall from './../images/moonfall.jpg';
import topgun from './../images/Top_gun_maverick.jpg';
import mili from './../images/Mili.jpg';
import paleblueeyes from './../images/The_Pale_Blue_Eyes.jpg';
import prey from './../images/prey.jpg';
import avatar from './../images/avatar.jpg';
import batman from './../images/batman.jpg';
import aot from './../images/aot.jpg';
import rrr from './../images/rrr.jpg';
import kantara from './../images/kantara.jpg';
import spiderman from './../images/spiderman.jpg';
import loki from './../images/loki.jpg';
//Series
import familyman from './../images/familyman.jpg';
import hotd from './../images/hotd.jpg';
import lastofus from './../images/lastofus.jpg';
import moonnight from './../images/moonknight.jpg';
import peacemaker from './../images/peacemaker.jpg';
import peaky from './../images/peaky.jpg';
import strangerthings from './../images/strangerthings.jpg';
import theboys from './../images/theboys.jpg';
//Anime
import demonslayer from './../images/DemonSlayer.jpg';
import mha from './../images/mha.jpg';
import chainsawman from './../images/chainsawman.jpg';
import er from './../images/er.jpg';
import red from './../images/red.jpg';
import tr from './../images/tr.jpg';
class Home extends React.Component {
    render() {
        // let box = document.querySelector('.movie-list-container')
        // const btnpressprev = () => {
        //     let width = box.clientWidth;
        //     box.scrollLeft = box.scrollLeft - width;
        //     console.log(width)
        // }
        // const btnpressnext = () => {
        //     let width = box.clientWidth;
        //     box.scrollLeft = box.scrollLeft + width;
        //     console.log(width)
        // }
        return (
            <div>

                <>
                    <div className="navbar">
                        <div className="navbar-container">
                            <div className="logo-container">
                                <img src={mainlogo} alt="" className="logo" />
                                {/* <h1 class="logo">MovieCat</h1> */}
                            </div>
                            <div className="menu-container">
                                <ul className="menulist">
                                    {/* <li className="menulist-item active"><Link to={"/"}>Home</Link></li>
                                    <li className="menulist-item"><Link to={"/about"}>About</Link></li> */}
                                    <li className="menulist-item active">Home</li>
                                    <li className="menulist-item">About</li>
                                    <li className="menulist-item">Series</li>
                                    <li className="menulist-item">Popular</li>
                                    <li className="menulist-item">Trending</li>
                                </ul>
                            </div>
                            <div className="profile-container">
                                <img
                                    src={profilePic}
                                    alt=""
                                    className="profile-picture"
                                />
                                <div className="profile-text-container">
                                    <span className="profile-text">Profile</span>
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </div>
                                <div className="toggle">
                                    <i className="fas fa-moon toggle-icon" />
                                    <i className="fas fa-sun toggle-icon" />
                                    <div className="toggle-ball" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <i className="left-menu-icon fas fa-search" />
                        <i className="left-menu-icon fas fa-home" />
                        <i className="left-menu-icon fas fa-users" />
                        <i className="left-menu-icon fas fa-bookmark" />
                        <i className="left-menu-icon fas fa-tv" />
                        <i className="left-menu-icon fas fa-hourglass-start" />
                        <i className="left-menu-icon fas fa-shopping-cart" />
                    </div>
                    <div className="container">
                        <div className="content-container">
                            <div
                                className="featured-content"
                                style={{
                                    backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${backgroundimg})`
                                }}
                            >
                                <img className="featured-title" src={featuretitle} alt="" />
                                <p className="featured-desc">
                                MoviesCat is a free entertainment service that allows members to know everything about their favourite TV shows and movies on an internet-connected device. ipsum id fugiat quo
                                    enim impedit, laboriosam omnis minima voluptatibus incidunt.
                                    
                                </p>
                                <button className="featured-button">Explore</button>
                            </div>
                            <div className="movie-list-container">
                                <h1 className="movie-list-title">NEW RELEASES</h1>
                                <div className="movie-list-wrapper">
                                    <div className="movie-list">
                                        <div className="movie-list-item">
                                            <img
                                                src={blackadam}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Black Adam</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={cuttputli}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={moonfall}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={topgun}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={mili}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={paleblueeyes}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={prey}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                    </div>
                                    <i className="fas fa-chevron-right arrow" />
                                    {/* <div className="product-carousel">
                                        <button className="pre-btn"onClick={btnpressprev}><p>&lt;</p></button>
                                        <button className="next-btn"onClick={btnpressnext}><p>&gt;</p></button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="movie-list-container">
                                <h1 className="movie-list-title">POPULAR</h1>
                                <div className="movie-list-wrapper">
                                    <div className="movie-list">
                                        <div className="movie-list-item">
                                            <img
                                                src={avatar}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={rrr}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={batman}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={kantara}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={loki}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={aot}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        
                                        <div className="movie-list-item">
                                            <img
                                                src={spiderman}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                    </div>
                                    <i className="fas fa-chevron-right arrow" />
                                </div>
                            </div>
                            <div
                                className="featured-content"
                                style={{
                                    backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${backgroundimg1})`
                                }}
                            >
                                
                                <p className="featured-desc1">
                                    Fact of the day - The TITANIC Movie was 17.7 reels long when released.
                                </p>
                            </div>
                            <div className="movie-list-container">
                                <h1 className="movie-list-title">WEB-SERIES</h1>
                                <div className="movie-list-wrapper">
                                    <div className="movie-list">
                                        <div className="movie-list-item">
                                            <img
                                                src={familyman}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={hotd}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={lastofus}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={moonnight}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={peacemaker}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={peaky}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={strangerthings}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={theboys}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                    </div>
                                    <i className="fas fa-chevron-right arrow" />
                                </div>
                            </div>
                            <div className="movie-list-container">
                                <h1 className="movie-list-title">ANIME</h1>
                                <div className="movie-list-wrapper">
                                    <div className="movie-list">
                                        
                                        <div className="movie-list-item">
                                            <img
                                                src={demonslayer}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={mha}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={chainsawman}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={er}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>

                                        <div className="movie-list-item">
                                            <img
                                                src={red}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                        <div className="movie-list-item">
                                            <img
                                                src={tr}
                                                alt="img"
                                                className="movie-list-item-img"
                                            />
                                            <span className="movie-list-item-title">Avnegers</span>
                                            <p className="movie-list-item-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Perspiciatis, reiciendis?
                                            </p>
                                            <button className="movie-list-item-button">WATCH</button>
                                        </div>
                                    </div>
                                    <i className="fas fa-chevron-right arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>

        );

    }
}
export default Home;