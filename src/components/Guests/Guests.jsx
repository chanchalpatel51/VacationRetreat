const GuestSection = ({ guestData }) => {

    return (
        <>
            <section className="py-5 guest-section" id="services">
                <div className="container">
                    <div>
                        <h2 className="display-3 text-center">Our Services</h2>
                        <p className="text-center">Recommended by Travelers</p>
                        <div className="d-flex flex-wrap justify-content-around mt-5">
                            {
                                guestData.map((image) => {
                                    return (
                                        <>
                                            <div className="brand-img-wrapper ">
                                                <img src={image.logoURL} alt="" className="img-fluid w-100 h-100 object-fit-contain" />
                                            </div>
                                        </>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GuestSection;