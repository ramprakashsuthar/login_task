import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingScreen() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container mx-auto">
          <div className='layout d-flex flex-column  align-content-end justify-content-end'>
            <div className="landingContent">
              <h1>Welcome to PopX</h1>
              <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
            </div>
            <div className="landingBtn">
              <Link to={'/signup'} type="button" class="button btn btn-primary w-100 ">Create Account</Link>
              <Link to={'/loginscreen'} type="button " class="button btn w-100 ">Already Registered? Login</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
