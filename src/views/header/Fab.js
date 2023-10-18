import React from 'react'

export const Fab = () => {

    const backToTop = () => {
        const element = document.getElementById("home")
        element.scrollIntoView({behavior : 'smooth'})
    }

    return (
        <section className='fab' onClick={backToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="#01204b" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
        </section>
    )
}
