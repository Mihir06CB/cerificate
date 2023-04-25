import React from "react";
import classes from "./styles.module.scss";
import Format from "./certificate.png";

const Certificate = () => {

    const userDetail = "detail";
    const dateStandard = () => {
    }
    const certificateDate = "certificate"
    

    return(
        <div className={classes.certificate_container}>
            <img src={Format} />
            <div className={classes.text_container}>
                <div className={classes.text_content}>

                    <p className={classes.first_line}>
                        नाम श्री / श्रीमती {userDetail?.name}, अनुक्रमांक

                        {userDetail?.aadhar}, पदनाम {userDetail?.designation},

                        {userDetail?.district}, पदस्थापित कार्यालय का नाम

                        {userDetail?.office_name ? userDetail?.office_name : "N/a"},

                        सेवा सवर्ग का नाम {userDetail?.service_cadre}, राजस्वा पार्षद

                        बिहार पटना द्वारा आयोजित विभागीय परीक्षा के लिए निर्धारित सभी विषयो में उत्तीर्ण घोषित किये जाते है |
                    </p>

                    <p className={classes.second_line}>यह विषय निम्न्लिखित है :-</p>

                    <div className={classes.marks}>

                        <p className={classes.marks_heading}>
                            <span>क्रमांक विषय</span>
                            <span>परीक्षाफल</span> 
                        </p>

                        <div className={classes.marks_list}>
                            <div className={classes.li}> 
                                <p> <b>1</b> Hindi Written (Code-01)</p>  
                                <p>PASS</p> 
                            </div>
                            <div className={classes.li}> 
                                <p> <b>2</b> Functional Knowledge of Computers (Code-02)</p>  
                                <p>PASS</p> 
                            </div>
                            <div className={classes.li}> 
                                <p> <b>3</b> General Govt. Rule & Regulation (Code-07)</p>  
                                <p>PASS</p> 
                            </div>
                        </div>
                    </div>

                                        

                    <p className={classes.line_four}>
                        विभागीय परीक्षा की उत्तीर्णता तिथि{" "} {dateStandard(certificateDate[0]?.generated_at)} मानी जाएगी{" "} |
                    </p>

                    <div className={classes.signature_section}>

                        <div className={classes.stamp}>
                            <p>क्रमांक: 88283492647120480</p>
                        </div>

                        <div className={classes.state_official}>
                            <div className={classes.official_name}>
                                <p>
                                    संजीव कुमार
                                    <br />
                                    विशेष कार्य पदाधिकारी
                                    <br />
                                    राजस्व पार्षद , पटना
                                </p>
                            </div>
                            <p className={classes.signature_date}>दिनांक: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate;