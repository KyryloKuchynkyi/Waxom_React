import React from "react";
import { Route } from "react-router-dom";




import Section1 from "../Main/Section-1/Section1";
import Section2 from "../Main/Section-2/Section2";
import Section3 from "../Main/Section-3/Section3";
import Section4 from "../Main/Section-4/Section4";
import Section5 from "../Main/Section-5/Section5";
import Section6 from "../Main/Section-6/Section6";
import Section7 from "../Main/Section-7/Section7";

import Graphic from "../Main/Section-2/Section-2-pages/Graphic/Graphic";
import Nature from "../Main/Section-2/Section-2-pages/Nature/Nature";
import Photography from "../Main/Section-2/Section-2-pages/Photography/Photography";
import photoPage from "./photoPage/photoPage";








// CSS


const Main = () => {
    return (
        <>
            <main className='main'>
                <Route path="/" exact component={Section1} />
                <Route path="/" exact component={Section2} />
                <Route path="/Graphic" component={Graphic}/>
                <Route path="/Nature" component={Nature}/>
                <Route path="/Photography" component={Photography}/>
                <Route path="/about-photo/:id" component={photoPage}/>
                <Route path="/" exact component={Section3} />
                <Route path="/" exact component={Section4} />
                <Route path="/" exact component={Section5} />
                <Route path="/" exact component={Section6} />
                <Route path="/"  component={Section7} />
            </main>    
                
        </>
    )
}



export default Main