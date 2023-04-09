import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
    <section id="cardDeal" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Download our app, enter your financial information and preferences, and our advanced algorithm will recommend the best options for you. Manage your credit cards, make payments, and track your expenses from your phone. Download our application and take control of your finances from anywhere.
            </p>
            <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
    </section>
)

export default CardDeal