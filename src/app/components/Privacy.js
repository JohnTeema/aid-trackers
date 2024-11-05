import Image from "next/image";
import styles from "../styles/Privacy.module.css";

const PrivacySection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.headtext}>
          Privacy and dignity of beneficiaries are protected
        </h2>
        <p className={styles.minitext}>
        We prioritize the privacy and dignity of our beneficiaries. AidTrackers safeguards personal information while ensuring that aid distribution respects the dignity of all individuals, fostering a respectful and secure environment for those receiving assistance..
        </p>
        
        
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/privacy.png"
          alt="Privacy illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default PrivacySection;
