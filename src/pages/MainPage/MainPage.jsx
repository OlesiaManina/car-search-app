import Ukraine from '../../images/ukraine-min.jpg'
import styles from './mainPage.module.css';


export default function MainPage() {
    return (
        <div className={styles.container}>
        <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to Ukraine</h1>
            <h2>
            Our company appreciates your bravery and support for our country. <br />
            We hope your stay in our beautiful country will be safe and comfortable.
            </h2>
            <h3>
            This application was created to help our dear guests find a rental car{" "}
            <br />
            according to their needs. <br />
            Try searching for cars by model, price, or mileage. It's really useful! <br />
            You can also mark some adverts as favorites and choose between them on the
            individual Favorites page.
            </h3>
            <h2 className={styles.text}>Good luck in finding your best car!</h2>
        </div>
        <img src={Ukraine} alt="Ukraine" className={styles.img} />
        </div>
    );
}