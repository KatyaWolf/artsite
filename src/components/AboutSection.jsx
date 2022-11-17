import React from "react"

const AboutSection = () => {
    return (
        <div className="text-center grid grid-cols-2 gap-4">
            <img src={process.env.PUBLIC_URL+"/img/portrait7.jpeg"} alt="its a'me, mario" className="w-96 pt-8" />
            <div>
                <h3 className="text-4xl text-fuchsia-800 font-serif overline decoration-purple-400 pt-28">﹝ FEATHERHYTHM ﹞</h3>
            <p>Link is a 25 year old Russian artist living in Indiana with her three cats.
                She is a MarComm communications specialist by day and illustrator by night.
                She loves a good iced coffee, weighted blankets, and naps. </p>
            </div>
        </div>
    )
}
export default AboutSection