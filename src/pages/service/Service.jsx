import React from 'react'
import './Service.scss'
import Slide from '../../components/slide/Slide'

function Service() {
  return (
    <div className='service'>
      <div className="container">
        <div className="leftright">

        <div className="left">
          <h1>I will generate images for your website </h1>
          <div className="user">
            <span>Anna Bell</span>
            <div className="stars">
              <img src="src\images\star.png" alt="star" />
              <img src="src\images\star.png" alt="star" />
              <img src="src\images\star.png" alt="star" />
              <img src="src\images\star.png" alt="star" />
              <img src="src\images\star.png" alt="star" />
              <span>5</span>
            </div>
          </div>

          <Slide slidesToShow={1} arrowScroll={1}>
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="error"
              />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="error"
              />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="error"
              />
          </Slide>
          <h2>Service Description</h2>
          <p>
          As a seasoned graphic designer with over 10 years of experience, I specialize in creating captivating, custom images that will elevate your website to new heights. With my service, you can stand out in today's crowded digital landscape and effectively communicate your brand's story to your audience.<br /><br />
          Service Features:<br />
          Custom Designed Images: Say goodbye to stock images that just don't capture the essence of your brand. With my service, you get 100% custom designed images that are specifically tailored to your brand's aesthetics, mission, and objectives. <br />
          High-Quality Graphics: All images will be delivered in high-resolution, ready for web or print use. They will look stunning on all screen sizes, from mobile devices to desktop monitors.<br />
          Quick Turnaround Time: In today's fast-paced world, speed matters. That's why I promise a quick turnaround time, without compromising on quality.<br />
          Unlimited Revisions: I want you to be completely satisfied with the final product. Therefore, I offer unlimited revisions until you are 100% happy with your images.<br />
          Friendly Communication: As a client, you are a part of the design process. I keep an open line of communication to understand your needs and feedback throughout the project.<br /><br />
          I work with businesses of all sizes, from startups to established companies, across a range of industries. Whether you need images for your homepage, product pages, blog posts, or social media, I've got you covered.<br />
          Let me help you create a visually compelling website that resonates with your audience and drives results. Place an order today, and let's bring your vision to life!<br />
          Please don't hesitate to message me if you have any questions. I'm always happy to discuss your project's needs and offer a bespoke solution that fits your budget and timeline.<br />
          Stand out from the crowd. Stand out with custom designed images. I look forward to working with you!
          </p>

         </div>
         <div className="right">

         
          <div className="seller">
            {/* <h2>About The Seller</h2> */}
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="src\images\star.png" alt="" />
                  <img src="src\images\star.png" alt="" />
                  <img src="src\images\star.png" alt="" />
                  <img src="src\images\star.png" alt="" />
                  <img src="src\images\star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
              Hello there! I'm Anna, a passionate graphic designer with over 10 years of experience. I've helped businesses worldwide to captivate their audience with unique and high-quality images. Let me transform your website into a visually stunning platform that resonates with your brand's story!
              </p>
            </div>
          </div>
          </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <span>John Doe</span>
              </div>
              <div className="stars">
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="heart" />
                <span>5</span>
              </div>
              <p>
              "Anna is a top-notch designer! She delivered high-quality images for our website, truly capturing the essence of our brand. Fast turnaround and excellent communication throughout the project. Highly recommend!"              </p>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <span>Jane Doe</span>
              </div>
              <div className="stars">
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="heart" />
                <span>5</span>
              </div>
              <p>
              "Absolutely thrilled with the images Anna created for our website. Her creative flair and attention to detail are exceptional. She was always ready to make revisions until we were completely satisfied. Fantastic work!"
              </p>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <span>Adam Smith</span>
              </div>
              <div className="stars">
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="star" />
                <img src="src\images\star.png" alt="heart" />
                <span>5</span>
              </div>
              <p>
              "Working with Anna was a game-changer for our website's visuals. Her designs are not only beautiful but they also align perfectly with our branding. Her professionalism and dedication are second to none. Can't wait to start our next project with her!"
              </p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Service