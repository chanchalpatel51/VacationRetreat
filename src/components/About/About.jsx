const AboutSection = ({ aboutData }) => {
    return (
        <>
            <section className="about-section py-5 my-5" id="about">
                <div className="container">
                    <div>
                        <h2 className="display-3">About L. O'Sullivan</h2>
                    </div>
                    <div className="about-section-holder">
                        <p>{aboutData.bio}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;