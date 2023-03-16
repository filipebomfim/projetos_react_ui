import styles from './GreatWord.module.css'

function GreatWord({word}) {
  return (
    <span className={styles.GreatWord}>{word}</span>
  )
}

export default GreatWord