import styles from './Subtitle.module.css'

function Subtitle({text}) {
  return (
    <p className={styles.Subtitle}>{text}</p>
  )
}

export default Subtitle