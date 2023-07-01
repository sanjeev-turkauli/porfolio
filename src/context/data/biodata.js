import React from "react";
import BioDataContext from '../data/myState';

const SetBioData = (props) =>{

    let dataObject = {
        name:"Sanjeev Kumar",
        dob:"07 Aug 1994",
        webSite:"https://codinghub.online/",
        phone:"+91813038****",
        city:"Jaunput , Utter Pardesh",
        age:"28",
        degree:"Full Stack Developer",
        email:"radhe13***@gmail.com",
        freelance:"Available",
    }

    return(
        <>
            <BioDataContext.Provider value={dataObject}>
                {props.children}
            </BioDataContext.Provider>
        </>
    )
}

export default SetBioData;