import Style from './Home.module.css';

export default function Home() {
  return (
    <div className={Style.homeWrapper}>
      <h1> Welcome to Pizza Maestro<br />Where Every Slice Tells a Story!</h1>
      <p>
        At Pizza Maestro, we believe in more than just serving pizza. <br />
        we believe in creating moments of joy, comfort, and connection.<br />
        Our mission is to craft every slice with passion, using only the finest ingredients,<br /> so you can taste the love in every bite.
      </p>
    </div>
  );
}
