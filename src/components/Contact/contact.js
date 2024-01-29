import React from 'react';
import './contact.css'

const Contact = () => {

    return (

        <>
  {/* contact section */}
  <section id="contact" className="contact py-5">
    {/* title */}
    <div className="title">
      <h2 className="title-text">contact me </h2>
      <h3 className="title-subtext">I would love to hear from you</h3>
    </div>
    {/* end of title */}
    <div className="contact-wrapper container">
      {/* contact info */}
      <div className="contact-info">
        <div className="contact-info-item">
          <h4>0721383087</h4>
        </div>
        <div className="contact-info-item">
          <h4>emmanuelkigen029@gmail.com</h4>
        </div>
        <div className="contact-info-item">
          <h4>Nairobi, Kenya</h4>
        </div>
      </div>
      {/* end of contact info */}
      {/* contact form */}
      <form className="contact-form">
        <div className="contact-form-wrapper">
          <div>
            <input type="text" className="form-control" placeholder="Name" />
            <input type="email" className="form-control" placeholder="Email" />
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div>
            <textarea placeholder="Message" defaultValue={""} />
          </div>
        </div>
        <input
          type="submit"
          defaultValue="send email"
          className="submit-btn form-control"
        />
      </form>
      {/* end of contact form */}
    </div>
  </section>
  {/* end of contact section */}
</>


        )

    }
    
    export default Contact