const ReviewSection = ({reviewData}) => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div>
                        <div>
                            <h2 className="display-3 pb-4">Guest Reviews</h2>
                        </div>
                        <div className="d-md-flex justify-content-between">
                            <div className="review-data">
                                <p>{reviewData[0].quote}</p>
                                <em>{reviewData[0].author}</em>
                            </div>
                            <div className="review-data">
                                <p>{reviewData[1].quote}</p>
                                <em>{reviewData[1].author}</em>
                            </div>
                            <div className="review-data">
                                <p>{reviewData[2].quote}</p>
                                <em>{reviewData[2].author}</em>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewSection;