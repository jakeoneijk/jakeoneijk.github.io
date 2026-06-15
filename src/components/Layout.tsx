import { useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { Bio } from '@/components/Bio'
import { navItems } from '@/config/navigation'
import size from '@/theme'
import * as styles from './Layout.css'

export const Layout = () => {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const pageAreaRef = useRef<HTMLDivElement>(null)

  // Desktop: the shell is locked to the viewport and only `pageArea` scrolls, so
  // wheeling over the Bio sidebar or the outer gutters does nothing. Forward
  // those wheel events into the content pane so scrolling works anywhere. Mobile
  // uses normal document scroll, so we leave it untouched.
  useEffect(() => {
    const containerEl = containerRef.current
    const pageAreaEl = pageAreaRef.current
    if (!containerEl || !pageAreaEl) return

    const mobileQuery = window.matchMedia(size.media.mobile)

    const handleWheel = (event: WheelEvent) => {
      if (mobileQuery.matches) return
      // Let the pane handle wheels that already target it natively.
      if (pageAreaEl.contains(event.target as Node)) return

      const lineHeight = 16
      const multiplier =
        event.deltaMode === 1
          ? lineHeight
          : event.deltaMode === 2
            ? pageAreaEl.clientHeight
            : 1

      pageAreaEl.scrollTop += event.deltaY * multiplier
      event.preventDefault()
    }

    containerEl.addEventListener('wheel', handleWheel, { passive: false })
    return () => containerEl.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
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
          <div ref={pageAreaRef} className={styles.pageArea}>
            <div key={location.pathname} className={styles.pageTransition}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
