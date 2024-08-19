import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './intro.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="USER GUIDE FOR ELECTRONIC SCREENING"
      description="User Guide for Electronic Screening of Travelers and Public Health Events at Points of Entry - AFYAMSAFIRI"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">THE UNITED REPUBLIC OF TANZANIA</h1>
          <p className="hero__subtitle">MINISTRY OF HEALTH</p>
          <p className={styles.guideTitle}>
            USER GUIDE FOR ELECTRONIC SCREENING OF TRAVELERS AND PUBLIC HEALTH EVENTS AT POINTS OF ENTRY
          </p>
          <p className={styles.guideSubtitle}>AFYAMSAFIRI</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
          <p className={styles.preparedBy}>
            Prepared by:<br />
            Department of Preventive Services<br />
            Environmental Health and Sanitation
          </p>
        </div>
      </header>
      <main>
        {/* Additional content sections can go here */}
      </main>
    </Layout>
  );
}

export default HomepageHeader;
