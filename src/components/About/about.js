import React from 'react';
import './about.css'
import progress from '../../assets/progress-17252916.webp';

const About = () => {

    return (

        <>
  {/* about section */}
  <section id="about" className="about container py-5">
    {/* title */}
    <div className="title">
      <h2 className="title-text">about me</h2>
    </div>
    {/* end of title */}
    <div className="about-wrapper-1">
      {/* single item */}
      <div className="about-item">
        <h2 className="about-title">Expertise</h2>
        <p className="text-light">
          Skilled in web design and development, I bring a creative touch to
          crafting engaging online experiences. Proficient in coding languages
          and committed to staying current with industry trends, I focus on
          building user-friendly interfaces that make a lasting impact. Let's
          collaborate to bring your digital vision to life.
        </p>
      </div>
      {/* end of single item */}
      {/* single item */}
      <div className="about-item">
        <h2 className="about-title">Responsive Designs</h2>
        <p className="text-light">
          Specializing in responsive web design, I create dynamic and
          user-friendly interfaces that seamlessly adapt to various devices. My
          skills include crafting designs that prioritize accessibility and
          optimal user experience across desktops, tablets, and mobile devices.
          Let's collaborate to ensure your online presence is not only visually
          appealing but also responsive and accessible to a diverse audience.
        </p>
      </div>
      {/* end of single item */}
      {/* single item */}
      <div className="about-item">
        <h2 className="about-title">Interests</h2>
        <p className="text-light">
          I really enjoy making websites and learning new stuff. Right now, I'm
          excited about figuring out how to use machine learning in web design.
          Join me on my journey to create cool things on the internet and
          explore the latest tech together!{" "}
        </p>
      </div>
      {/* end of single item */}
    </div>
    <div className="about-sec-underline" />
    <div className="about-wrapper-2">
      <div className="about-wrapper-2-left">
        {/* image here */}
        <img src={progress} alt="" />
      </div>
      <div className="about-wrapper-2-right">
        <h2>My Progress</h2>
        <p className="text-light">
          Embark on a visual journey of my professional evolution—a testament to
          relentless growth, innovation, and milestones achieved. From inception
          to present, witness the transformative progress, fueled by dedication,
          adaptability, and a passion for exceeding expectations. Join me on
          this dynamic expedition of continuous improvement and accomplishment.
        </p>
        <div className="progress-group">
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">Frontend Design</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-75" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">Backend Design</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-80" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">Machine Learning</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-60" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">HTML,CSS</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-90" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">Javascript</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-20" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">PHP</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-50" />
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="progress-text">
            <span className="text-light">MYSQL</span>
          </div>
          <div className="progress">
            <div className="progress-bar w-65" />
          </div>
          {/* end of single item */}
        </div>
      </div>
    </div>
  </section>
  {/* end of about section */}
</>

    )

}

export default About