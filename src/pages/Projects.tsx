import { Text } from '@/components/Text'
import projects from './Projects.json'
import * as styles from './Projects.css'

type ProjectType = 'Research' | 'Industry'

const categories: ProjectType[] = ['Research', 'Industry']

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
      {categories.map((category) => (
        <div key={category} className={styles.projectContainer}>
          <div className={styles.categoryContainer}>
            <Text variant='description'>
              <strong>{category}</strong>
            </Text>
          </div>
          {projects[category].map((project, index) => (
            <div key={index} className={styles.projectContainer}>
              <Text variant='h2'>{project.title}</Text>
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
              <ul style={!project.embLink ? { marginBottom: '0px' } : {}}>
                {project.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <Text variant='description'>{point}</Text>
                  </li>
                ))}
              </ul>
              {project.embLink && (
                <div className={styles.iframeContainer}>
                  <iframe
                    className={styles.iframeClass}
                    src={project.embLink}
                    title={project.title}
                  />
                </div>
              )}
              <div className={styles.spacingDiv} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
