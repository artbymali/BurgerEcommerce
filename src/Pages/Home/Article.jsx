import React from 'react'

function Article() {
  return (
    <>
        <section className='Article'>
            <div className="ArticleContainer">
                <div className="ArticleCutter">
                    <img src="/asset 14.png" alt="" />
                </div>

                <div className="ArticleHeading">
                    <h2>Read Latest Articles</h2>
                </div>
                <div className="ArticleContent">
                    <div className="ArticleBox">
                        <div className="ArticleImg">
                            <img src="/ArticleOne.jpg" alt="" />
                        </div>
                        <div className="ArticleText">
                            <h4>How to Peel Hard Boiled Eggs Perfectly, Every Single Time</h4>
                            <p>April 9,2022 .No Comments</p>
                        </div>
                    </div>

                    <div className="ArticleBox">
                        <div className="ArticleImg">
                            <img src="/ArticleTwo.jpg" alt="" />
                        </div>
                        <div className="ArticleText">
                            <h4>Of Course Ina Garten’s Ice Cream Hack Is Totally Brilliant</h4>
                            <p>April 9,2022 .No Comments</p>
                        </div>
                    </div>

                    <div className="ArticleBox">
                        <div className="ArticleImg">
                            <img src="/ArticleThree.jpg" alt="" />
                        </div>
                        <div className="ArticleText">
                            <h4>Passover Seder for $25? Totally Possible</h4>
                            <p>April 9,2022 .No Comments</p>
                        </div>
                    </div>

                    <div className="ArticleBox">
                        <div className="ArticleImg">
                            <img src="/ArticleFour.jpg" alt="" />
                        </div>
                        <div className="ArticleText">
                            <h4>Salad Freaks Unite—Our Cookbook Is Finally Here</h4>
                            <p>April 9,2022 .No Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Article
