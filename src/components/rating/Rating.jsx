import React from 'react'
import styles from './rating.module.css'

const Rating = () => {
  return (
    <section className={styles.section}>
        <div className={styles.sectionHeader}>
        <h2 className={styles.ratingsheading}>What Our Customers Are Saying</h2>
    </div>
  <div className={styles.container}>
    
    <div className={styles.ratingbox}>
      <p className={styles.ratinglabel}>Rating based on 389,048 reviews</p>
      <h1 className={styles.ratingscore}>4.8</h1>
      <button className={styles.feedbackbtn}>Feedback makes us better</button>
    </div>

    
    <div className={styles.reviewsbox}>
      <h3>Here's what our customers are saying:</h3>

      <div className={styles.review}>
        <p className={styles.stars}>★★★★★</p>
        <p className={styles.reviewtext}>"The craftsmanship is phenomenal. I love the organic feel of the wood and how it complements my space..."</p>
        <p className={styles.author}>Kevin H. — <span className={styles.date}>22/11/24</span></p>
      </div>

      <div className={styles.review}>
        <p className={styles.stars}>★★★★★</p>
        <p className={styles.reviewtext}>"I'm amazed by the quality and finish of the table I purchased. It's a conversation starter!"</p>
        <p className={styles.author}>Steve J. — <span className={styles.date}>20/11/24</span></p>
      </div>

      <div className={styles.review}>
        <p className={styles.stars}>★★★★★</p>
        <p className={styles.reviewtext}>"Wow. This is not just furniture—it's a masterpiece. The care and precision is visible in every detail."</p>
        <p className={styles.author}>Aulia Y. — <span className={styles.date}>18/11/24</span></p>
      </div>

      <div className={styles.review}>
        <p className={styles.stars}>★★★★★</p>
        <p className={styles.reviewtext}>"I purchased the Verto Table and it's honestly one of the best decisions I’ve made."</p>
        <p className={styles.author}>Braga Q. — <span className={styles.date}>11/11/24</span></p>
      </div>

      <button className={styles.viewmore}>View more</button>
    </div>
  </div>
</section>

  )
}

export default Rating