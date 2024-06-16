import React,{memo, useEffect, useLayoutEffect, useState} from "react";
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
import '../App.css'
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
    const [shownav,setshownav] = useState(false)

    useLayoutEffect(() => {
        if(window.innerWidth >= '768'){
            setshownav(true)
        }else{
            setshownav(false)
        }
    },[])
    window.addEventListener('resize', function() {
        if(window.innerWidth >= '768'){
            setshownav(true)
        }else{
            setshownav(false)
        }
    })

    return (
        <>
            <div className=" w-full relative ">
                {/* top nav */}
                <div className="  pb-2 gap-2 border-b-[1px] border-b-slate-500 flex flex-col md:flex-row justify-center w-full">
                   
                    <div className=" py-2 z-50 flex flex-row w-full justify-around text-xs font-semibold text-slate-700 md:text-sm align-middle  md:w-[50%]">
                        <span className="hover:text-amber-500 cursor-pointer m-auto" title="call us">+2540000000000</span>
                        <span className="hover:text-amber-500 cursor-pointer m-auto">LOG-IN</span>
                        <span className="hover:text-amber-500 cursor-pointer m-auto">SIGN-UP</span>
                    </div>
                </div>
                {/* bottom nav */}
                <div className=" lg:py-3 md:sticky md:mt-0 px-2 py-1 flex flex-col md:flex-row justify-around w-full">
                        <blockquote className=" flex flex-row w-full md:w-fit justify-around px-1 gap-3 ">
                            <span className=" -p-1 my-auto z-50 w-fit ">
                            <label className="btn   m-auto lg:hidden btn-circle swap swap-rotate">
  
                                {/* this hidden checkbox controls the state */}
                                <input className=" p-1 m-auto hidden" type="checkbox" />                  
                                {/* hamburger icon */}
                                <GiHamburgerMenu onClick={() =>{setshownav((e) => !e)}}  className= {`swap-on fill-current mx-auto  text-sky-600 font-semibold cursor-pointer text-2xl `} />
                                
                                {/* close icon */}
                                <IoCloseSharp  onClick={() =>{setshownav((e) => !e)}}  className= {` swap-off  fill-current  text-sky-600 font-semibold cursor-pointer text-2xl `} />
                                
                                </label>
                            </span>
                            
                            <span id="big" className=" flex text-2xl md:text-4xl flex-row gap-0 my-auto"><p className=" text-sky-600">Strategy</p>plus</span>                        </blockquote>
                        <ul className={` pl-3 my-auto font-semibold mt-4 md:mt-0 text-sm md:text-base justify-around text-slate-700 transition-all duration-500 md:translate-x-0 md:translate-y-0 ${shownav ? " translate-y-0  translate-x-0" :" z-0 opacity-0 -translate-y-20 -translate-x-6 " } transition-[height,h,all] duration-500 flex flex-col text-left  md:flex-row gap-3  justify-around w-full md:w-[50%] flex-wrap`}>
                            <li className=" cursor-pointer w-fit overflow-hidden p-2 transition-all duration-300 hover:bg-amber-500 hover:text-slate-100 "><a href="#home">HOME</a></li>
                            <li className=" cursor-pointer w-fit overflow-hidden p-2 transition-all duration-300 hover:bg-amber-500 hover:text-slate-100"><a href="#about">ABOUT</a></li>
                            <li className=" cursor-pointer w-fit overflow-hidden p-2 transition-all duration-300 hover:bg-amber-500 hover:text-slate-100"><a href="#service">SERVICE</a></li>
                            <li className=" cursor-pointer w-fit overflow-hidden p-2 transition-all duration-300 hover:bg-amber-500 hover:text-slate-100"><a href="#brands">BRANDS</a></li>
                        </ul>
                        
                    </div>
                    <div className={` transition-all duration-1000 flex md:hidden w-full ${!shownav ? ' -mt-44 sm:-mt-44 ' : ''} p-0 bg-transparent `}></div>
            </div>
        </>
    )
}


export default memo(Navbar)