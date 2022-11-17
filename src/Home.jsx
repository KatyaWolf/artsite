import React from "react"
import Header from "./Header"
import AboutSection from "./components/AboutSection"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="w-4/5 m-auto">
                <AboutSection />
            </div>
            
        </div>
    )
}

export default Home