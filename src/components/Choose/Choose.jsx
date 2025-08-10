const ChooseSection = ({chooseData}) => {
    return (
        <>
            <section className="choose-section pb-5">
                <div className="container ">
                    <div className="py-5 text-center">
                        <h2 className="display-3">Why Choose Us</h2>
                        <p>Advantages of L. O'Sullivan</p>
                    </div>
                    <div className="choose-section-data d-md-flex justify-content-center g-md-5 row gap-4 text-center">
                        <div className="col-md-3">
                            <img 
                                src={chooseData.tImage1} 
                                alt="Tailored Experiences" 
                                className="img-fluid mb-3"
                            />
                            <p>{chooseData.tExpe}</p>
                        </div>
                        <div className="col-md-3">
                            <img 
                                src={chooseData.tImage2} 
                                alt="Tailored Experiences" 
                                className="img-fluid mb-3"
                            />
                            <p>{chooseData.eGuest}</p>
                        </div>
                        <div className="col-md-3">
                            <img 
                                src={chooseData.tImage3} 
                                alt="Tailored Experiences" 
                                className="img-fluid mb-3"
                            />
                            <p>{chooseData.emmersive}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseSection;