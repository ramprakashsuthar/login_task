import React from 'react'
import ellipseImage from '../images/Ellipse 114.png';
import camImage from '../images/Group 1585.svg';
export default function Profile() {
  return (
    <div>
        <div className="container-fluid">
                <div className="container mx-auto">
                    <div className='profileLayout p-0 '>
                        <div className="accSetting">
                            <h2>Account Settings</h2>
                        </div>
                        <div className="layout" style={{padding:'31px 18px 31px 20px',height:'auto', }}>
                            <div className="userCard">
                                <div className="profileDetails d-flex align-content-start">
                                    <figure className='position-relative '>
                                        <img src={ellipseImage} alt="" className='mb-0 '/>
                                        <img src={camImage} alt="" className='position-absolute end-0 bottom-0 '/>
                                    </figure>
                                    <div className="userName">
                                        <h3>Marry Doe</h3>
                                        <h4>Marry@Gmail.Com</h4>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                                </div>
                            </div>
                        </div>
                        <hr className='' />
                    </div>
                </div>
            </div>
    </div>
  )
}
