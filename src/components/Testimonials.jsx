import React,{useState,useEffect} from 'react'
import topleft from '../assets/topleftblob.png'
import triangle from '../assets/Polygon 1.png'
import '../static/testimonials.css'

const Testimonials = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);
  
    const plusSlides = (n) => {
      if (slideIndex<=2)
        setSlideIndex(slideIndex + n);
      else
        setSlideIndex(1)
    };
    const minusSlide = (n) => {
      if (slideIndex>1)
        setSlideIndex(slideIndex +n );
      else
        setSlideIndex(3)
    };
  
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
    const showSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      if (n > slides.length) setSlideIndex(1);
      if (n < 1) setSlideIndex(slides.length);
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      const screenWidth = window.screen.width;
      if(screenWidth>600)
        slides[slideIndex - 1].style.display = "flex";
      else{
        slides[slideIndex - 1].style.display = "block";
      }
      dots[slideIndex - 1].className += " active";
    };
  
    return (
  
      <div className="testimonial-container bg-black relative p-10 mb-20 sm:mb-0">
        <img src={topleft} alt="" className='absolute left-0 top-0 z-1'/>
        <div className="flex gap-6 z-50 relative items-center">
            <span className='font-bold text-3xl sm:text-6xl font-Sg text-white relative'>Testimonials</span>
            <img src={triangle} alt="" /> <img src={triangle} alt="" /> 
        </div>
  
        <div className="outer-container h-[45vh]">
          
          <div className="slideshow-container">
  
            <div className="mySlides fade">
              <div className="content">
                <p>"Working with the AI Consulting team has been a game-changer for us. Their expertise in machine learning and data science has significantly improved our decision-making process. I highly recommend their services!"</p>
                <div className="credentials">
                  <div>Andreq Jackson</div>
                  <p >CEO Tech Innovations Ltd</p>
                </div>
                <div className="dot-div">
                  <span className="dot" onClick={() => currentSlide(1)}></span>
                  <span className="dot" onClick={() => currentSlide(2)}></span>
                  <span className="dot" onClick={() => currentSlide(3)}></span>
                </div>
              </div>
            </div>
            <div className="mySlides fade">
              <div className="content">
                <p>"The AI Implementation & Integration services provided by this team exceeded our expectations. They seamlessly integrated AI solutions into our existing infrastructure, leading to a remarkable increase in efficiency. Truly impressive!"</p>
                <div className="credentials">
                  <div>Jane Smith</div>
                  <p > CTO Data Solutions Inc</p>
                </div>
                <div className="dot-div">
                  <span className="dot" onClick={() => currentSlide(1)}></span>
                  <span className="dot" onClick={() => currentSlide(2)}></span>
                  <span className="dot" onClick={() => currentSlide(3)}></span>
                </div>
              </div>
            </div>
            <div className="mySlides fade">
              <div className="content">
                <p>"The dedication and hard work of the AI Consulting team are commendable. Their tailor-made solutions have propelled our business into the future. I appreciate their commitment to understanding our unique challenges."</p>
                <div className="credentials">
                  <div>Michael Johnson</div>
                  <p >VP of Operations AI Innovators</p>
                </div>
                <div className="dot-div">
                  <span className="dot" onClick={() => currentSlide(1)}></span>
                  <span className="dot" onClick={() => currentSlide(2)}></span>
                  <span className="dot" onClick={() => currentSlide(3)}></span>
                </div>
              </div>
            </div>
  
            <a className="prev" onClick={() => minusSlide(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </a>
            
            
          </div>
        </div>
      </div>
    );
}

export default Testimonials