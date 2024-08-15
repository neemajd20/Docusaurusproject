 import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
 return ( 
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <h1 className="hero__title">Afya Msafiri User Guide</h1>
        <p className="hero__subtitle">Electronic Screening of Travelers and Public Health Events at Points of Entry</p>
      </div>
      </header>
 );
  }

  export default function Home(): JSX.Element {
    return   (
    <Layout
    title="Afya Msafiri User Guide"
    description="User Guide for Electronic Screening of Travelers and Public Health Events at Points of Entry">
    <HomepageHeader />
    <main>
        <div className="container">
            <p>
            Welcome to the Afya Msafiri User Guide! This documentation provides guidance on the electronic screening system for travelers and public health events at points of entry in Tanzania.
          </p>  
          </div>
    </main>
    </Layout>
    );
    
     }
 
 