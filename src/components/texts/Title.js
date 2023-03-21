import styles from './Title.module.css'

function Title({text, children}) {
  return (
    <h3 className={styles.title}>{text} {children}</h3>
  )
}

export default Title