import styles, { layout } from "../styles";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, tittle, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex flex-1 flex-col ml-3">
            <h4 className="font-poppins text-[18px] text-white font-semibold leading-[23px] mb-1">
                <title></title>
            </h4>
            <p className="font-poppins text-[16px] text-dimWhite font-normal leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>You do the business,<br className="sm:block hidden" /> we'll handle the money.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>In our bank, we know that doing business can be exciting, but managing money can be a complicated process. That's why we make sure that you can focus on your business while we take care of your financial needs. Do the business and let us take care of the rest!</p>
            <Button styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} />
            ))}
        </div>
    </section>
)

export default Business