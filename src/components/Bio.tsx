import { useEffect, useRef, useState } from 'react'

import { Text } from '@/components/Text'
import { socialLinks } from '@/data/links'
import { profile } from '@/data/profile'
import * as styles from './Bio.css'

export const Bio = () => {
  const [toast, setToast] = useState<{ message: string; success: boolean } | null>(
    null,
  )
  const timerRef = useRef<number>()

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const showToast = (message: string, success: boolean) => {
    setToast({ message, success })
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setToast(null), 1800)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast('Email copied', true)
    } catch {
      showToast('Copy failed — please copy manually', false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <Text variant='h1'>{profile.name}</Text>
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img
            className={styles.profileImage}
            src={profile.image}
            alt='profile'
          />
          <div className={styles.role}>
            <div className={styles.socialRow}>
              <span className={styles.roleText}>{profile.role}</span>
            </div>
            <div className={styles.socialRow}>
              <span className={styles.affiliationText}>
                {profile.affiliation}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.socialList}>
          {socialLinks.map(({ icon, alt, label, href, copyText }) => {
            const inner = (
              <>
                <img
                  className={styles.socialIcon}
                  src={icon}
                  alt={alt}
                  title={label}
                />
                <span className={styles.socialLabel}>{label}</span>
              </>
            )

            let control
            if (copyText) {
              control = (
                <button
                  type='button'
                  className={styles.socialLink}
                  onClick={() => handleCopy(copyText)}
                  title={`Copy ${label}`}
                >
                  {inner}
                </button>
              )
            } else if (href) {
              control = (
                <a
                  className={styles.socialLink}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {inner}
                </a>
              )
            } else {
              control = inner
            }

            return (
              <div key={label} className={styles.socialRow}>
                {control}
              </div>
            )
          })}
        </div>
      </div>
      {toast && (
        <div className={styles.toast} role='status' aria-live='polite'>
          {toast.success && (
            <span className={styles.toastIcon} aria-hidden>
              ✓
            </span>
          )}
          {toast.message}
        </div>
      )}
    </div>
  )
}
