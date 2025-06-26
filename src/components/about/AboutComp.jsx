import React from 'react'
import styles from './about.module.css'
import useScrollReveal from '../scroll/useScrollReveal';

const AboutComp = () => {

  const [ref, visible] = useScrollReveal();

  return (
    <section className={`${styles.choose} ${visible ? styles.visible : styles.hidden}`} ref={ref}>
  <div className={styles.container}>
    <h2>Why Choose Our Wooden Furniture</h2>
    <p className={styles.subtext}>
      Premium wooden furniture designed to add warmth, strength, and timeless charm to your living space.
    </p>

    <div className={styles.features}>
      <div className={styles.featurebox}>
        <div className={styles.icon}>🪵</div>
        <h3>Premium Solid Wood</h3>
        <p>We use only hand-selected hardwoods—like teak, oak, and mahogany—renowned for natural durability and elegance.</p>
      </div>
      <div className={styles.featurebox}>
        <div className={styles.icon}>🎨</div>
        <h3>Artisanal Craftsmanship</h3>
        <p>Each piece is handmade by skilled artisans who bring decades of woodworking experience into detail.</p>
      </div>
      <div className={styles.featurebox}>
        <div className={styles.icon}>🏠</div>
        <h3>Built for Everyday Life</h3>
        <p>Strong, stable, and constructed to withstand daily use while elevating your space with style.</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutComp