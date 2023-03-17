import { Typography } from '@mui/material'
import styles from './Subtitle.module.css'

function Subtitle({text}) {
  return (
    <Typography sx={{paddingBottom: 2}} className={styles.Subtitle}>{text}</Typography>
  )
}

export default Subtitle