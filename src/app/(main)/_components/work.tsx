'use client';

import styles from '@/styles/work.module.css';

const workItems = [
  { title: 'Maroquinerie', image: '/images/maroquinerie2.png' },
  { title: 'Création Unique', image: '/images/Creation-Unique.png' },
  { title: 'Tissu sur mesure', image: '/images/tissu-mrama.png' },
  { title: 'Tapisserie', image: '/images/Tapisserie2.png' },
];

export default function WorkSection() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.workContainer}>
        <div className={styles.workHeader}>
          <span className={styles.workEyebrow}>L’Excellence Artisanale</span>
          <h2 className={styles.workTitle}>Nos Créations</h2>
          <p className={styles.workSubtitle}>Chaque pièce raconte une histoire, celle d&apos;un savoir-faire transmis de génération en génération.</p>
        </div>
        
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...workItems, ...workItems].map((item, index) => (
              <div key={index} className={styles.carouselItem} style={{ backgroundImage: `url(${item.image})` }}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}