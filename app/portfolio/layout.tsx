import React, { ReactNode } from 'react'
import styles from './page.module.css'

type layoutProps = {
  children: ReactNode
}

const Layout = ({children}:layoutProps) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout