import React from 'react'
import cssStyle from './programe.module.css'

export default function Programme(){
  return (
    <div style={{background:'#f9f9f9'}} className={cssStyle.title}>
    <p >OUR PROGRAMM</p>
    <h1>What We Offer</h1>
    <div className={cssStyle.Programms}>
        <div className={cssStyle.Programme}>
            <img src='https://img.freepik.com/free-photo/female-graduate-student-gown-with-college-certificate-standing-high-quality-photo_144627-72924.jpg' alt='' />
            <div className={cssStyle.caption}>
                <img src='https://as2.ftcdn.net/v2/jpg/04/83/74/01/1000_F_483740160_kVshMJ1LiHEjIor1EwDSSoIjzFcPalm5.jpg' alt=''/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className={cssStyle.Programme}>
            <img src='https://img.freepik.com/premium-photo/young-graduate-student-i-academic-gown-showing-degree_601128-4637.jpg' alt='' />
            <div className={cssStyle.caption}>
                <img src='https://cdn-icons-png.flaticon.com/512/1078/1078000.png' alt=''/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className={cssStyle.Programme}>
            <img src='https://t4.ftcdn.net/jpg/06/13/74/95/360_F_613749525_Y1yxH6Ip7e3oJaMvLRYeciBWuXHWMLMV.jpg' alt='' />
            <div className={cssStyle.caption}>
                <img src='https://t4.ftcdn.net/jpg/08/69/26/21/240_F_869262183_J2tUc5P0GZ3gsgoSl4GdeTvN6hDEA960.jpg' alt=''/>
                <p>Post Degree</p>
            </div>
        </div>
        </div>
        </div>

  )
}

