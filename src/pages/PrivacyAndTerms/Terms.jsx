import React from "react";
import { Link } from "react-router-dom";


const Terms = () => {
  return (
    <>
      {/* hero section starts */}
      <div className="hero_bg bg_img2" id="TermsAndConditions">
        <div
          className="breadcrums container aos-init aos-animate"
          data-aos="fade"
        >
          <h2 className="breadcrums_title">Terms And Conditions</h2>
          <ol className="breadcrums_subtitle">
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li style={{ color: "#5ca595" }} className="breadcrums_items">
              / Terms And Conditions
            </li>
          </ol>
        </div>
      </div>
      {/* hero section ends */}

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <h1 className="text-center">Terms of Services</h1>
          <p className="fs-3">Visitors to this web site are bound by the following terms and conditions ("terms"). So, please read the terms carefully before continuing to use this site. If you do not agree with any of these terms, please do not use this site.</p>
          <ul>
            <li className="fs-3 pt-4">
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li className="fs-3 pt-4">
            This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.
            </li>
            <li className="fs-3 pt-4">
            Neither Bhagirath Group nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li className="fs-3 pt-4">
            Your use of any information or materials on this website is entirely at your own risk, for which Bhagirath Group shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
            </li>
            <li className="fs-3 pt-4">
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.

            </li>
            <li className="fs-3 pt-4">
            The BHAGIRATH and all products and logos denoted with “TM” or “®”are trademarks or registered trademarks of BHAGIRATH GROUP or its affiliates. BHAGIRATH GROUP trademarks may not be used in connection with any product or service that is not a BHAGIRATH GROUP product, functions or service.

            </li>
            <li className="fs-3 pt-4">
            Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.

            </li>
            <li className="fs-3 pt-4">
            From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that Bhagirath Group endorses  the website(s). Bhagirath Group has no responsibility for the content of the linked website(s).

            </li>
            <li className="fs-3 pt-4">
            Applicable Law and Jurisdiction of this Website are governed by and to be interpreted in accordance with laws of India, without regard to the choice or conflicts of law provisions of any jurisdiction. The user/site visitor agrees that in the event of any dispute arising in relation to this Disclaimer or any dispute arising in relation to the web site whether in contract or tort or otherwise, to submit to the jurisdiction of the courts located at Ahmedabad only for the resolution of all such disputes.

            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Terms;
