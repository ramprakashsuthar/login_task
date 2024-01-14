import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpScreen() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mx-auto">
                    <div className='layout d-flex flex-column justify-content-between '>
                        <div className="loginContent">
                            <div>
                                <h1>Create your <br /> PopX account</h1>
                            </div>
                            <form action="">
                                <div class="outlined-input">
                                    <input type="text" class="w-100" placeholder="Enter name" />
                                    <label>Full Name<span className='text-danger '>*</span></label>
                                </div>

                                <div class="outlined-input">
                                    <input type="text" class="w-100" placeholder="Enter phone number" />
                                    <label>Phone number<span className='text-danger '>*</span></label>
                                </div>

                                <div class="outlined-input">
                                    <input type="text" class="w-100" placeholder="Enter email address" />
                                    <label>Email address<span className='text-danger '>*</span></label>
                                </div>

                                <div class="outlined-input">
                                    <input type="text" class="w-100" placeholder="Enter password" />
                                    <label>Password<span className='text-danger '>*</span></label>
                                </div>

                                <div class="outlined-input">
                                    <input type="text" class="w-100" placeholder="Enter company name" />
                                    <label>Company name</label>
                                </div>
                                <div class="outlineRadio">
                                    <label class="question">Are you an agency?<span className='text-danger '>*</span></label>
                                    <div class="radio-buttons d-flex ">
                                        <input type="radio" id="yes" name="agency" value="yes" />
                                        <label for="yes">Yes</label>

                                        <input type="radio" id="no" name="agency" value="no"/>
                                            <label for="no">No</label>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="createBtn">
                            <Link to={'/profile'} type="button" class="button btn w-100 ">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
