import { style } from '@macaron-css/core'
import size from '../../Property/Size'
import Text from '../Common/Text'
import projects from './Projects.json'

const IFRAME_HEIGHT = 500
const IFRAME_SCALE = 0.7

type ProjectType = 'Research' | 'Industry'

const container = style({
  width: size.section.bodyWidth,
  height: '100%',
  overflow: 'hidden',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const projectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  width: '100%',
})

const iframeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: IFRAME_HEIGHT,
  marginBottom: (-1 * (IFRAME_HEIGHT * (1 - IFRAME_SCALE))) / 2,
})

const iframeClass = style({
  width: '130%',
  height: '100%',
  transform: `scale(${IFRAME_SCALE})`,
  transformOrigin: 'top',
  borderRadius: '16px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
  backgroundColor: '#fafafa',
})

function Projects() {
  const authors = (authorString: string) => {
    const authors = authorString.split(', ')
    return authors.map((author, index) => (
      <span key={index}>
        {author === 'Jaekwon Im' ? <strong>{author}</strong> : author}
        {index < authors.length - 1 ? ', ' : ''}
      </span>
    ))
  }

  return (
    <div className={container}>
      {['Research', 'Industry'].map((category) => (
        <div key={category} className={projectContainer}>
          <Text variant='description' style={{ background: '#F2F0EF' }}>
            {category}
          </Text>
          {projects[category as ProjectType].map((project, index) => (
            <div key={index} className={projectContainer}>
              <Text variant='h2'>{project.title}</Text>
              <div>
                <Text>{authors(project.author)}</Text>
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
              <ul>
                {project.bulletPoints.map((point, index) => (
                  <li key={index}>
                    <Text key={index} variant='description'>
                      {point}
                    </Text>
                  </li>
                ))}
              </ul>
              <div className={iframeContainer}>
                <iframe className={iframeClass} src={project.embLink} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Projects
