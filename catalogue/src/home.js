import React from "react";
class Home extends React.Component{
    render() {
        return (
             <div>
                 <nav id="navbar">

<div id="logo">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSr1GktlGNED-lO63v29zS5bDp_1nkXbq840VXs5Z67NxxNObIpQ-P1xZMT9q8lWVqHRw&usqp=CAU' alt="moviescat.com"/>
</div>  

<ul>
    <li class="item"><a href="#home" >Home</a></li>
    <li class="item"><a href="#services-container" >Services</a></li>
    <li class="item"><a href="#client-section" >Our Clients</a></li>
    <li class="item"><a href="#contact" >Contact us</a></li>
    
</ul>
</nav>

<section id="home">
    <h1 class="h-primary">Welcome to MoviesCat</h1>
    <p>Lorem ipsum dolor sit elit. Explicabo tenetur soluta laudantium totam quasi. Eum, non blanditiis?</p>
    <p>Lorem ipsum dolor sit amet consectetur xplicabo tenetur soluta la blanditiis?</p>
    <button class="btn">Get Premium Subscription Now</button>
</section>


<section id="services-container">
    <h1 class="h-primary center">Our Services</h1>
    <div id="services">
        <div class="box">
            <img src="img1.jpg" alt=""/>
            <h2 class="h-secondary centre">TV Shows</h2>
            <p class="centre">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ut soluta eius. Assumenda, officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque optio deleniti corrupti, voluptatum quasi similique placeat necessitatibus ipsam, soluta, vel ipsa veniam! consequuntur cupiditate quas aut earum porro, maiores expedita provident laborum, deleniti optio qui minus repudiandae! Numquam, doloremque dolorum? Explicabo, voluptas.</p>
        </div>
        <div class="box">
            <img src="img1.jpg" alt=""/>
            <h2 class="h-secondary centre">Web-Series</h2>
            <p class="centre">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ut soluta eius. Assumenda, officia coLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque optio deleniti corrupti, voluptatum quasi similique placeat necessitatibus ipsam, soluta, vel ipsa veniam! nsequuntur cupiditate quas aut earum porro, maiores expedita provident laborum, deleniti optio qui minus repudiandae! Numquam, doloremque dolorum? Explicabo, voluptas.</p>
        </div>
        <div class="box">
            <img src="img1.jpg" alt=""/>
            <h2 class="h-secondary centre">Kids TV</h2>
            <p class="centre">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ut soluta eius. Assumenda, officia coLorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque optio deleniti corrupti, voluptatum quasi similique placeat necessitatibus ipsam, soluta, vel ipsa veniam! nsequuntur cupiditate quas aut earum porro, maiores expedita provident laborum, deleniti optio qui minus repudiandae! Numquam, doloremque dolorum? Explicabo, voluptas.</p>
        </div>

    </div>
</section>
<hr/>
<section id="client-section">
    <h1 class="h-primary center">Our Clients</h1>
    <div id="clients">
        <div class="client-item">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Yahoo-logo.png" alt="Our Client"/>
        </div>
        <div class="client-item">
            <img src="https://www.freepnglogos.com/uploads/microsoft-logo-small-29.png" alt="Our Client"/>
        </div>
        <div class="client-item">
            <img src="https://www.citypng.com/public/uploads/small/21635448459efkx3vpdvnqc8mkhoorjehofgkvrvhgtefq2nusseaydffoirfuneseqwglxncojdbkbdloikfbgo0xgkmhtp3bliiw1j0rm19jo.png"/>
        </div>
        <div class="client-item">
            <img src="https://spng.pngfind.com/pngs/s/31-317703_apple-logo-png-transparent-svg-vector-freebie-supply.png" alt="Our Client"/>
        </div>
    </div>
</section>

<section id="contact">
    <h1 class="h-primary center">Contact us</h1>
    <div id="contact-box">
        <form action="">
            <div class="form-group">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name " placeholder="Enter your name"/>
            </div>
            <div class="form-group">
                <label for="name">Email: </label>
                <input type="email" name="name" id="email " placeholder="Enter your name"/>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number: </label>
                <input type="phone" name="name" id="phone" placeholder="Enter your name"/>
            </div>
            <div class="form-group">
                <label for="message">Message: </label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
        </form>
    </div>
</section>

<footer>
    <div class="center">
        Copyright @copy; www.moviescat.com All rights reserved! 
    </div>
</footer>
             </div>
        );
    }
}
export default Home;