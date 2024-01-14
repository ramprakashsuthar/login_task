import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginScreen() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mx-auto">
                    <div className='layout d-flex flex-column '>
                        <div className="loginContent">
                            <h1>Signin to your <br /> PopX account</h1>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
                        </div>
                        
                        <form action="">
                            <div class="outlined-input">
                                <input type="text" class="w-100" placeholder="Enter email address" />
                                <label>Email Address</label>
                            </div>

                            <div class="outlined-input">
                                <input type="text" class="w-100" placeholder="Enter password" />
                                <label>Password</label>
                            </div>
                            <div className="loginBtn">
                                <Link to={'/profile'} type="button" class="button btn w-100 ">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
