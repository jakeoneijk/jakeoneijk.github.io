import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { Bio } from '@/components/Bio'
import { navItems } from '@/config/navigation'
import * as styles from './Layout.css'

export const Layout = () => {
  const location = useLocation()

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
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
            <div key={location.pathname} className={styles.pageTransition}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
