import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFNyl3S15sM_w/profile-displayphoto-shrink_800_800/0/1590371771977?e=1619654400&v=beta&t=khAtghDC-aeAJWPLb5pQge-GThGtgg3CgFdG_YmG7gQ" alt="Guilherme Lopes"/>
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