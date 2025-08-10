import React from 'react'

const HeroSection = ({heroData}) => {

    return (
        <>
            <section className='hero-section py-5 z-3' id='home'>
                <div className="container">
                    <div>
                        <h1 className='display-1 fw-medium text-center mb-4'>{heroData.title}</h1>
                        <div className='hero-img'>
                            <img src={heroData.bgImg} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                        </div>
                        <div className="hero-details row mt-5 ">
                            <div className='col-12 col-lg-6'>
                                <h2>{heroData.heroTitle}</h2>
                                <p>{heroData.description}</p>
                            </div>
                            <div className='col-12 col-lg-6 d-lg-flex justify-content-end align-items-end'>
                                <button className='btn btn-dark'>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection