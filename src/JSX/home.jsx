import React,{useState} from "react";
import Navbar from './nav'
import Aos from "aos";
import ceoimg from '../assets/images/ceo.jpg'
import ServiceImg1 from '../assets/images/services/1.jpg'
import ServiceImg2 from '../assets/images/services/2.jpg'
import ServiceImg3 from '../assets/images/services/3.jpg'
import { FaArrowRightLong } from "react-icons/fa6"; 
import brandimg1 from '../assets/images/projects/1.jpg'
import brandimg2 from '../assets/images/projects/2.jpg'
import brandimg3 from '../assets/images/projects/3.jpg'
import brandimg4 from '../assets/images/projects/4.jpg'
import brandimg5 from '../assets/images/projects/5.jpg'
import Footer from "./footer";



export default function Home () {
    Aos.init()
    const [showScroller, setShowScroller] = useState(true)
    window.addEventListener('scroll', function() {
       
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setShowScroller(true)
        } else {
          setShowScroller(false)
        }
      })
    const [DispMessage,SetDispMessage] = useState(0)
    const Message = [
        {
            'img' : ServiceImg1,
            'title' : 'Introduction to Business Consulting',
            'text' : 'Feeling lost in the maze of business challenges? Our expert consulting empowers you to navigate complexity and achieve sustainable growth.'
        },
        {
            'img' : ServiceImg2,
            'title' : 'Strategy Planning',
            'text' : 'Chart your course to success. Our strategic planning helps businesses define goals, identify opportunities, and achieve lasting results.'
        },
        {
            'img' : ServiceImg3,
            'title' : 'Video Content',
            'text' : 'Engage your audience, boost conversions. Create powerful video content that tells your brand story and drives results.'
        }
    ]
    const Brands = [
        {
            'category' : 'BUSINNESS',
            'img' : brandimg1,
            'title' : 'MCL Groups',
        },
        {
            'category' : 'STRATEGY PLANNING',
            'img' : brandimg2,
            'title' : 'Fredi',
        },
        {
            'category' : 'VIDEO CONTENT',
            'img' : brandimg3,
            'title' : 'Banana',
        },
        {
            'category' : 'VIDEO CONTENT',
            'img' : brandimg4,
            'title' : 'Conference',
        },
        {
            'category' : 'BUSINNESS',
            'img' : brandimg5,
            'title' : 'Maldon',
        }
    ]

    const MapBrands = Brands.map((items) => {
        return (
            <div className="card group w-[90%] max-w-[400px]  cursor-pointer p-0 bg-slate-100 sm:w-[500px]  mx-auto  rounded-lg ">
            <figure className=" rounded-lg">
                <img src={items.img} alt="Shoes" className="sm:min-h-[400px] group-hover:p-0 p-4 sm:p-8 transition-all duration-500 rounded-lg" />
            </figure>
            <div className="card-body text-slate-50 absolute ml-0   text-left bg-transparent font-semibold"> 
            <p className=" text-sm sm:text-base" id="sentense" >{items.category}</p>
            <p className=" text-sm sm:text-base" id="sentense" >{items.title}</p>
            </div>
        </div>
        )
    })

    return (
        <>
        <div className=" w-full overflow-hidden">
            <div id="navSect" className=" w-full h-fit">
                <Navbar/>
            </div>
            {/* home */}
            <div id="home" className=" flex justify-center min-h-[400px] sm:min-h-[600px] bg-cover bg-center"  >
                <div className=" flex flex-col gap-2 w-fit text-slate-100 m-auto ">
                    <span className=" sm:text-lg" id="sentense">INTRODUCING Stragegyplus</span>
                    <big className=" sm:text-4xl text-2xl text-left" id="big">Explore new ideas for</big>
                    <big className=" sm:text-4xl text-2xl text-left" id="big">your next project</big>
                    <div className=" flex flex-row w-fit justify-start gap-3">
                        <p className=" rounded-xl font-semibold px-2 py-1 bg-red-600 w-fit hover:bg-amber-500 transition-all duration-300">Get Started</p>
                    </div>
                </div>
            </div>
            {/*about  */}
            <div id="about" className=" w-full py-4 flex gap-3 md:gap-1 flex-col md:flex-row justify-around h-fit" >
                <div className="card w-[95%] max-w-[600px] mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src={ceoimg} alt="CEO" /></figure>
                    <div className="card-body mt-auto">
                        <big id="big" className="card-title">William Smith, CEO</big>
                        <p>We don't settle for the status quo. At Stragegyplus, we're constantly pushing boundaries and reimagining what's possible.</p>
                        
                    </div>
                </div>
                <div className=" flex flex-col md:my-auto">
                    <div className="card w-[90%] md:min-h-[350px] max-w-[700px] mx-auto bg-slate-100 shadow-xl">
                        <div className="card-body">
                        <span className=" sm:text-base text-sm" id="sentense">ABOUT Stragegyplus</span>
                        <big className=" sm:text-2xl text-xl text-left" id="big">Consulting Agency</big>
                        <big className=" sm:text-xl text-lg text-left" id="big">Helping small businesses since 2001</big>
                        <p>We don't believe in one-size-fits-all solutions. We tailor our approach to deliver the results you need.</p>
                        </div>
                    </div>
                    <div className=" flex flex-col  sm:flex-row my-2 gap-2 w-full">
                        <div className="card w-[90%] sm:w-[40%] mx-auto bg-red-500 text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">We're growing</h2>
                                <h2 className="card-title">business dolor</h2>
                                <div className="card-actions justify-start">
                                <button className="btn">Join us</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="card w-[90%] sm:w-[40%] mx-auto bg-yellow-500 text-slate-100">
                            <div className="card-body">
                                <h2 className="card-title">How did you hear about</h2>
                                <h2 className="card-title">us?</h2>
                                <p>Any answer is appriciated</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            {/* help | Service */}
            <div id="service" className=" bg-slate-100 w-full flex flex-col justify-around gap-2" >
                    <div className=" flex flex-col w-full justify-around gap-3">
                        <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 ">How can we help you?</big>
                    </div> 
                    <div className=" my-3 flex flex-col md:flex-row gap-2 md:gap-0 w-full">
                            <div className=" flex flex-col gap-3 w-full md:w-[50%] justify-around">
                                <div onClick={() => SetDispMessage(0)} className={`  cursor-pointer hover:bg-red-400 w-[98%] sm:w-[70%] ml-1 sm:ml-10 ${DispMessage == 0 ? ' bg-amber-300' : ' bg-gray-400'} `}>
                                    <div className={`shadow-lg shadow-slate-600 w-[98%] max-h-[200px] mb-auto px-3 pb-3 h-fit ml-auto card-body ${DispMessage == 0 ? ' bg-slate-300' : ' bg-slate-100'} `}>
                                        <div className="card-body w-full items-center text-center">
                                        <big className=" sm:text-4xl text-2xl text-left w-full" id="big">Business Consulting</big>
                                        <p>We are using cookies for no reason.</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => SetDispMessage(1)} className={`  cursor-pointer hover:bg-red-400 w-[98%] sm:w-[70%] ml-1 sm:ml-10  ${DispMessage == 1 ? ' bg-amber-300' : ' bg-gray-400'} `}>
                                    <div className={`  shadow-lg shadow-slate-600 w-[98%] max-h-[200px] mb-auto px-3 pb-3 h-fit ml-auto card-body ${DispMessage == 1 ? ' bg-slate-300' : '  bg-slate-100'} `}>
                                        <div className="card-body w-full items-center text-center">
                                        <big className=" sm:text-4xl text-2xl text-left w-full" id="big">Strategy Planning</big>
                                        <p>We are using cookies for no reason.</p>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => SetDispMessage(2)} className={`  cursor-pointer hover:bg-red-400 w-[98%] sm:w-[70%] ml-1 sm:ml-10  ${DispMessage == 2 ? ' bg-amber-300' : ' bg-gray-400'} `}>
                                    <div className={`shadow-lg shadow-slate-600 w-[98%] max-h-[200px] mb-auto px-3 pb-3 h-fit ml-auto card-body ${DispMessage == 2 ? ' bg-slate-300' : '  bg-slate-100'} `}>
                                        <div className="card-body w-full items-center text-center">
                                        <big className=" sm:text-4xl text-2xl text-left w-full" id="big">Video Content</big>
                                        <p>We are using cookies for no reason.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[50%] sm:ml-4 " >
                                <div className="card w-[90%] bg-transparent sm:w-[500px] lg:w-[700px] max-w-[600px] ml-6 md:mx-auto bg-base-100 rounded-sm ">
                                    <figure className="">
                                        <img src={Message[DispMessage].img} alt="Shoes" className=" transition-all duration-500 rounded-sm" />
                                    </figure>
                                    <div className="card-body bg-slate-100 text-left">
                                    <big className=" sm:text-2xl text-xl text-left" id="big">{Message[DispMessage].title}</big>
                                    <p className=" text-sm sm:text-base" id="sentense" >{Message[DispMessage].text}</p>
                                    </div>
                                </div>
                            </div>                            
                    </div>
                    
            </div>
            {/* brands */}
            <div id="brands" className=" w-full py-4 bg-slate-100 ">
                <div className=" flex flex-col w-full justify-around gap-3">
                        <big id="big" className=" text-3xl md:text-5xl h-fit w-fit md:w-full justify-center  mx-auto text-center mt-4 ">Brands we've crafted so far</big>
                </div> 
                <div className=" bg-slate-100 flex flex-col sm:flex-row sm:flex-wrap gap-4 w-[90%] mx-auto" >
                    {MapBrands}
                </div>

            </div>
            {/* footer */}
            <div id="details" className=" bottom-0 w-full">
                    <Footer />
            </div>

            <div className=" ml-0 left-[90%] lg:left-[95%] fixed bottom-10 z-[100%]">
                <button className={` z-40 float-right right-2 ${showScroller ? ' sticky' : 'hidden'} absolute  bg-blue-600 text-slate-100 p-1 md:text-base text-sm `} ><a href="#navSect"><FaArrowRightLong className=' p-1 text-xl md:text-2xl xl:text-4xl rotate-[270deg]' /></a></button>

            </div>

        </div>
        </>
    )
}


