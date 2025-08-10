const ContactSection = () => {
    return (
        <>
            <section className="contact-section py-5 my-5" id="contact">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-3">Contact Us</h2>
                        <p>Get in touch with us for your perfect vacation retreat</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form className="contact-form">
                                <div className="mb-4">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="mb-4">
                                    <input type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary px-4 py-2">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
