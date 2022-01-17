import React from "react"
import HomePage from "../Home/homePage"
import Vision from "../Vision/vision"
import Tools from "../Tools/tools"
import News from "../News/news"
import Form from "../Form/form"
// import Footer from "../Footer/footer"
import Header from "../Header/header"
import "./allComponents.css"
// import CoverPage from "../CoverPage/coverPage"


const AllComponents=()=>{
    return(
        <>
        <div className="allComponents_background__color">
            <Header/>
            {/* <CoverPage/> */}
        {/* <HomePage/>
        <Vision/>
        <Tools/>
        <News/>
        <Form/> */}
        {/* <Footer/> */}
        </div>
        </>

    );
}
export default AllComponents;