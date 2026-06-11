import { NavLink, Outlet } from 'react-router-dom'

import { Bio } from '@/components/Bio'
import { navItems } from '@/config/navigation'
import * as styles from './Layout.css'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Bio />
      <div className={styles.main}>
        <nav className={styles.navBar}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navItem} ${styles.navItemActive}`
                  : styles.navItem
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.pageArea}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
