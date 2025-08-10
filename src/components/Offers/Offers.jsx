const OfferingSection = ({ offerData }) => {
    return (
        <>
            <section className="offer-section py-5">
                <div className="container">
                        <div className="text-center text-light">
                            <h2 className="display-3">Our Offerings</h2>
                            <p>Experience the Difference</p>
                        </div>
                        <div className="offers d-md-flex justify-content-between">
                            <div className="bg-light my-5 text-center">
                                <h2 className="display-2 pt-3">{offerData.uProperties}</h2>
                                <p className="pb-3">{offerData.uP}</p>
                            </div>
                            <div className="bg-light my-5 text-center">
                                <h2 className="display-2 pt-3">{offerData.sClients}</h2>
                                <p className="pb-3">{offerData.sP}</p>
                            </div>
                            <div className="bg-light my-5 text-center">
                                <h2 className="display-2 pt-3">{offerData.rGuest}</h2>
                                <p className="pb-3">{offerData.rP}</p>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default OfferingSection;