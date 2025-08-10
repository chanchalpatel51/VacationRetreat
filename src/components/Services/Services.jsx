const ServiceSection = ({ serviceData }) => {
    return (
        <>
            <section className="service-section py-5" id="services">
                <div className="container">
                    <div>
                        <h2 className="display-3">Tailored Rental Experiences</h2>
                        <p>Bespoke Stays for Every Traveler</p>


                        <div className="row justify-content-between g-4">
                            {
                                serviceData.map((ele) => {
                                    return (
                                        <>
                                            <div className="p-2 col-12 col-md-6 col-lg-5">
                                                <div className=" card custom-service-card overflow-hidden p-4">
                                                    <h3 className="text-center">{ele.title}</h3>
                                                    <p className="text-center">{ele.description}</p>
                                                    <div className=" overflow-hidden">
                                                        <img src={ele.img} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ServiceSection;