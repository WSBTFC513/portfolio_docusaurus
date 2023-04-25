import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IT導入・DX化',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Raspberry Piを用いたITシステムの製作が可能です。</>,
  },
  {
    title: 'Webサイト・Webシステム',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>通常のWebサイト構築からプラットフォームとして扱えるWebシステムまでの製作が可能です。</>,
  },
  {
    title: 'スマートフォンアプリ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>Androidスマートフォンでのアプリ製作が可能です。</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
