import { Text } from '@/components/Text'
import { projects, projectCategories } from '@/data/projects'
import * as styles from './Projects.css'

const renderAuthors = (authorString: string) => {
  const authors = authorString.split(', ')
  return authors.map((author, index) => (
    <span key={index}>
      {author === 'Jaekwon Im' ? <strong>{author}</strong> : author}
      {index < authors.length - 1 ? ', ' : ''}
    </span>
  ))
}

export const Projects = () => {
  return (
    <div className={styles.container}>
      {projectCategories.map((category) => (
        <div key={category} className={styles.categoryGroup}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryLabel}>{category}</span>
          </div>
          {projects[category].map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div>
                <Text>{renderAuthors(project.author)}</Text>
              </div>
              <div>
                <Text variant='subDescription'>{project.note}</Text>
              </div>
              {project.link && (
                <div>
                  <Text variant='description' link={project.link}>
                    <strong>project page</strong>
                  </Text>
                </div>
              )}
              <ul className={styles.bulletList}>
                {project.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <Text variant='description'>{point}</Text>
                  </li>
                ))}
              </ul>
              {project.embLink && (
                <div className={styles.embedCard}>
                  <iframe
                    className={styles.embedFrame}
                    src={project.embLink}
                    title={project.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
