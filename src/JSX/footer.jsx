import React from "react";
import medicatorsIcon from '../assets/images/logo.jpeg'
import { TbNetwork } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Footer () {
    var date = new Date()
    var year  = date.getFullYear()


    return (

        <footer className=" flex flex-col pt-3 gap-0 w-full">
            <div  className=" min-h-[400px] py-4 justify-around flex flex-col md:flex-row md:flex-wrap gap-3 px-4">
                <div className=" h-fit mb-auto text-center flex flex-col gap-4">
                    <div className=" w-fit mx-auto md:mx-0 flex flex-row gap-2" >
                        <img className=" w-16" src={medicatorsIcon} alt="" />
                        <span id="big" className=" flex text-2xl md:text-4xl flex-row gap-0 my-auto"><p className=" text-sky-600">Strategy</p>plus</span>
                        </div>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><TbNetwork className=" my-auto text-xl font-semibold" />strategyplus.netlify.app</span>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><FaPhoneVolume  className=" my-auto text-xl font-semibold" />2543434242420034</span>
                    <span className="mx-auto md:mx-0 hover:text-amber-600 cursor-pointer flex flex-row gap-1 align-middle my-auto"><MdOutlineMailOutline className=" my-auto text-xl font-semibold" />intiriorplus@gmail.com</span>
                </div>
                <div className=" mb-auto flex flex-col text-center md:text-center gap-2">
                    <span className=" text-2xl md:text-4xl font-bold" id="big" >Mission</span>
                    <blockquote className=" w-fit mx-auto max-w-[400px] " id="sentense">Our mission is to transform workplaces into thriving environments, crafting spaces that are as unique and functional as the businesses that operate within them. We believe in the power of design to elevate everyday work experiences, and we strive to create inspiring, efficient, and sustainable environments that reflect our clients' goals and aspirations</blockquote>

                </div>
                <div className=" justify-center max-w-[300px] rounded-lg flex mx-auto mb-auto flex-col my-auto h-fit gap-2">
                    <span id="big" className=" flex text-2xl md:text-4xl flex-row gap-0 my-auto text-center w-fit mx-auto">Reach Us</span>
                    <iframe className="google-map rounded-lg mx-auto mt-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4063.103580426464!2d-83.0264337484065!3d42.33402597908653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cce05ddf4f1%3A0xcc0559eb3fda00c9!2sDetroit%20Riverwalk%2C%20Detroit%2C%20MI!5e1!3m2!1sen!2sus!4v1657814406289!5m2!1sen!2sus" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>
            <div className=" min-h-[100px] font-semibold text-center align-middle  bg-slate-200 text-slate-900 flex flex-col gap-3">
                <div className=" flex flex-row gap-3 flex-wrap w-full max-w-[500px] justify-around">

                </div>
                <span className=" flex sm:text-lg  flex-row gap-2 justify-center  flex-wrap my-auto w-full h-fit text-center ">All Rights Reserved | Copyright &#169; {year}. Art by <a className=" underline-offset-4 underline hover:text-amber-500 text-slate-800 align-middle" href="https://briannjuguna.netlify.app/">Brian Njuguna</a> </span>
            </div>
        </footer>
    )
}




