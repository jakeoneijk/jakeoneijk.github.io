import { Text } from '@/components/Text'
import { socialLinks } from '@/data/links'
import { profile } from '@/data/profile'
import * as styles from './Bio.css'

export const Bio = () => {
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
          {socialLinks.map(({ icon, alt, label, href }) => {
            const inner = (
              <>
                <img className={styles.socialIcon} src={icon} alt={alt} />
                <span className={styles.socialLabel}>{label}</span>
              </>
            )
            return (
              <div key={label} className={styles.socialRow}>
                {href ? (
                  <a
                    className={styles.socialLink}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
