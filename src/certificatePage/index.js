import React, {useRef} from "react";
import classes from "./styles.module.scss";
import Certificate from "./cerificate";
import { useReactToPrint } from "react-to-print";

const CertificatePage = () => {

    // const contentPdf = useRef();

    // const print = useReactToPrint({
    //     content: () => contentPdf.current,
    //     documentTitle: "Certificate",
    //     onAfterPrint: () => alert("printed")
    // });

     const print = () => {
        let printDoc = document.getElementById('certificate').innerHTML;
        let originalDoc = document.body.innerHTML;
        document.body.innerHTML = printDoc;
        window.print();
        document.body.innerHTML = originalDoc;
    }

    return(
        <div className={classes.certificate_page}>
            <div className={classes.button}>
                <button type="button" onClick={print} >Print Certificate</button>
            </div>
            <div className={classes.print_section} id="certificate">
                <Certificate />
            </div>
        </div>
    )
}

export default CertificatePage;