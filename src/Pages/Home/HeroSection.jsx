import Resume from "./Resume.pdf"
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mushahid Hussain</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          The MERN stack (MongoDB, Express.js, React, Node.js) is ideal for full-stack development, offering a flexible NoSQL database, robust backend framework, and dynamic frontend library. This combination enables efficient, high-performance web applications with scalable data management and real-time updates
          </p>
        </div>
        <a className="linkk" download={Resume} href={Resume} ><button className="btn btn-primary">Download Resume (CV)</button></a>
      </div>
      <div className="hero--section--img">
        <img className="img-logo" src="https://media.licdn.com/dms/image/D4E03AQFklP5A-4hqSg/profile-displayphoto-shrink_800_800/0/1671711662890?e=1727913600&v=beta&t=qYwvCb02BsBARPgvrOi6MhPBZ7TOzLsMpDLH_4tu144" alt="Hero Section" />
      </div>
    </section>
  );
}
