function About() {

    return (
      <section className="my-5" >
        <h2 id="about">Minha Kim</h2>
        <div className="my-2">
        <img src={require(`../../assets/img/profile.jpg`)} alt="Profile picture" className="img-thumbnail" />
          <p>I am a creative front-end developer and designer based in NY. </p>
          <p>Contact me at <a href="mailto:minha619@gmail.com">minha619@gmail.com</a></p>
          <p>Visit Github reposiotry<a href="https://github.com/minha619" target="_blank">https://github.com/minha619</a></p>
        </div>
      </section>
    )
  }
export default About;

