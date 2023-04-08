import { apple, google, bill } from '../assets';
import styles, { layout } from '../styles';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative" />
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
                Easily manage your billing and invoicing with our simple and efficient platform. Generate invoices, track payments, and manage your finances without stress. Sign up now and take control of your finances quickly and easily.
            </p>
            <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
                <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
            </div>
        </div>
    </section>
)

export default Billing