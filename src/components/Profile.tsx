import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/56078026?s=460&u=5e6e3146d4813fcc0603c49dd5b3eacfbf0275f1&v=4" alt="Guilherme Lopes"/>
      <div>
        <strong>Guilherme Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}