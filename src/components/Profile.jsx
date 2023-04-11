import React from 'react';
import { GiTemplarShield } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
    <div className="row">

        <ul className="nav-bor" >
            <li><Link style={{ color: 'white', textDecorationLine: "none" }}  >

                <img src="./aa.jpg" className="img2" />
                SignUp</Link></li>
            <li><Link style={{ color: 'white', textDecorationLine: "none", paddingLeft: "350px" }} ><GoVerified /> &nbsp;OVERVIEW</Link></li>
            <li><Link style={{ color: 'white', textDecorationLine: "none" }} ><GiTemplarShield /> &nbsp;TEAMS</Link></li>
            <li><Link style={{ color: 'white', textDecorationLine: "none" }} ><MdOutlineProductionQuantityLimits /> &nbsp; PRODUCTS</Link></li>
        </ul>
        <br />
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-9">
                <div className="row ">
                    <div className="col-sm-3 m ">
                        <h3 className="text-white">Welcome back !</h3>
                        <p>Nice to see you. Mark Johnson!</p>
                        <p style={{ transform: "translateY(280px)" }}>Top to record!</p>

                    </div>
                    <div className="col-sm-6 m1 ">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="text-white">Car Informations !</h3>
                                <p>Hello mark Johnson! Your Car is ready</p>
                            </div>
                            <br /><br /><br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src="./abcd.jpg" className='img-thumbnail' style={{ height: "300px", width: "430px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 m2 ">
                        <b className="fs-5 text-light">Profile Information</b>

                        <p className="mt-4 " style={{ color: "#616178" }}>At face value, grocery stores don’t
                            feel overwhelmingly competitive.
                            After all, they sell products that are essential to everyone.
                            With price and quality serving as the
                        </p>
                        <p>Full Name: <nbsp style={{ color: "#616178" }}>Dilip Kumar</nbsp></p>
                        <p>Mobile:<nbsp style={{ color: "#616178" }}> +91879572084</nbsp></p>
                        <p>Email:<nbsp style={{ color: "#616178" }}>dilip.879572@gmail.com</nbsp></p>
                        <p>Location:<nbsp style={{ color: "#616178" }}>Lucknow</nbsp></p>
                        <p>Social:<nbsp style={{ color: "#616178" }}></nbsp>&nbsp;
                            <nbsp><AiFillFacebook /></nbsp>&nbsp;&nbsp;&nbsp;&nbsp;
                            <nbsp><AiFillTwitterCircle /></nbsp>&nbsp;&nbsp;&nbsp;&nbsp;
                            <nbsp><AiFillInstagram /></nbsp>&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-sm-1"></div>


        </div>

    </div>
</div>
  )
}

