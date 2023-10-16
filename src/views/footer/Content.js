import React from 'react'

export const Content = () => {
    return (
        <section className='content'>
            <div className='personal'>
                <h1>Contact</h1>
                <p>arman.driik@gmail.com</p>
                <p>drik.netlify.app</p>
                <p>Tel : +98384851297</p>
                <p>Iran - Gilan - Rasht</p>
            </div>
            <div className='sub'>
                <h1>Subscribe for News and Updates</h1>
                <label>Enter your email here *</label>
                <input type='email'/>
                <button>Join</button>
            </div>
            <div className='sub-menu'>
                <h1>Menu</h1>
                <p>Games</p>
                <p>Careers</p>
                <p>About</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='social-menu'>
                <h1>Social</h1>
                <p>Discord</p>
                <p>Twitch</p>
                <p>Facebook</p>
                <p>Youtube</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
        </section>
    )
}
