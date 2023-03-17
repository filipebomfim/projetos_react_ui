import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'

function AlertMessage({msg,type}) {

  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if(!msg) {
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = setTimeout(()=>{
      setVisible(false)
    },3000)

    return ()=>clearTimeout(timer)
  },[msg])

  return (
    <React.Fragment>
      {visible && (
        <Alert sx={{ p:2,m:2}} variant="filled" severity={type}>
          {msg}
        </Alert>
      )}
    </React.Fragment>
  )
}

export default AlertMessage