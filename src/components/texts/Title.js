import styles from './Title.module.css'

function Title({text, children}) {
  return (
    <h1 className={styles.title}>{text} {children}</h1>
  )
}

export default Title