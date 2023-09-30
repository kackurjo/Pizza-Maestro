import Style from './About.module.css';

export default function About() {
  return (
    <div className={Style.wrapper}>
      <div className={Style.topDiv}>
        <h3 style={{ margin: '1vh 0' }}> About Us </h3>
        <p style={{ margin: '0.5vh 0', fontSize: '0.8rem' }}>
          Our team is a family, dedicated to bringing you the best pizza experience in Helsinki. <br />
          From our skilled chefs who craft each pizza with precision, to our friendly servers who make you feel at home, every member of our staff is passionate about what they do.
        </p>
        <h3 style={{ margin: '1vh 0' }}> Contact Us </h3>
        <p style={{ margin: '0.5vh 0', fontSize: '0.8rem' }}>We'd love to hear from you! Feel free to reach out using any of the methods below.</p>
        <p style={{ margin: '0.5vh 0', fontSize: '0.8rem' }}>
          Address:
          123 Main Street
          00010, Helsinki
          Finland
          <br />
          Phone: (+358) 50 555-5555
          <br />
          Email:
          info@pizzamaestro.fi
        </p>
        <p style={{ margin: '0.5vh 0', fontSize: '0.8rem' }}>
          Opening Hours:
          Monday - Friday: 11:00 AM - 14:00 PM
        </p>
      </div>
      <div className={Style.topDiv}>
        <iframe style={{ height: '90%', width: '90%', border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=Helsinki,+Finland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
      </div>
    </div>
  );
}
