import React from 'react'

function Reviews() {
  return (
    <>
        <section className="Reviews">
            <div className="ReviewsContainer">
                <div className="ReviewsContent">
                    <div className="ReviewsCutter">
                        <img src="/asset 15.png" alt="" />
                    </div>

                    <div className="ReviewsContentTop">
                        <h2><span>Reviews</span></h2>
                        <img src="/ReviewImg.png" alt="" />
                    </div>
                    <div className="ReviewsContentBottom">
                        <div className="ReviewsCapsules">
                            <div className="Capsule">
                                <div className="CapsuleLeft">
                                    <img src="/ReviewOne.png" alt="" />
                                </div>
                                <div className="CapsuleRight">
                                    <h3>"I don't remember a single mouthful I didn't enjoy!"</h3>
                                    <p>@casey</p>
                                </div>
                            </div>
                            <div className="Capsule CapsuleTwo">
                                <div className="CapsuleLeft">
                                    <img src="/ReviewTwo.png" alt="" />
                                </div>
                                <div className="CapsuleRight">
                                    <h3>"Pretty impressive! Legit taste of burgers!!!"</h3>
                                    <p>@mark_twin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews
