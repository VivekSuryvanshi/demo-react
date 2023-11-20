import React from 'react';
import './faq.css';

const Faq = () => {
  return (
   <>
    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
    <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-header position-relative text-center pb-5">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-10">
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      1. What is BVM Grand's role in global trade?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                    BVM Grand connects the world through commerce, facilitating trade in various crude products.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      2. How does BVM Grand ensure product quality?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                    We maintain strict quality control measures throughout sourcing and supply.

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      3. What types of crude products does BVM Grand trade in?

                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                    BVM Grand trades in a diverse portfolio of crude products.

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      4. Is Bhagirath BVM Grand transport service good?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon"></i>
                      Yes, the service that BVM provides is highly recommended in terms of transportation. Effortless doorstep delivery without any inconvenience. 
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      <i className="bi bi-question-circle question-icon"></i>
                      5. What is BVM Grand's vision for the future of global trade?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                    We envision a future where products are delivered worldwide, shaping it through trade connections and excellence.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Frequently Asked Questions Section --> */}
   </>
  )
}

export default Faq;