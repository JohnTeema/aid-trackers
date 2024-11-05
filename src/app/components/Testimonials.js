import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>What Our Beneficiaries Think</h2>
      <p className={styles.testimonialText}>
        AidTrackers respects the privacy of those in need. It’s reassuring to
        know that while I receive support, My dignity is maintained throughout
        the process.
      </p>
      <div className={styles.carousel}>
        <button className={styles.arrowButton}>{"<"}</button>

        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <Image
              src="/romeo.jpg"
              alt="Romeo Stephen"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <p className={styles.name}>Romeo Stephen</p>
            <p className={styles.position}>Janel Cosmetics</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <Image
              src="/millie.jpg"
              alt="Millie Austin"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <p className={styles.name}>Millie Austin</p>
            <p className={styles.position}>Student</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={`${styles.testimonial} ${styles.activeTestimonial}`}>
            <Image
              src="/elizabeth.jpg"
              alt="Elizabeth Steve"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <p className={`${styles.name} ${styles.activeName}`}>
              Elizabeth Steve
            </p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <Image
              src="/gabriel.jpg"
              alt="Gabriel Audu"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <p className={styles.name}>Gabriel Audu</p>
            <p className={styles.position}>Student</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>

          <div className={styles.testimonial}>
            <Image
              src="/christian.jpg"
              alt="Christian Omsle"
              width={50}
              height={50}
              className={styles.avatar}
            />
            <p className={styles.name}>Christian Omsle</p>
            <p className={styles.position}>Janel Cosmetics</p>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        <button className={styles.arrowButton}>{">"}</button>
      </div>
    </div>
  );
}
