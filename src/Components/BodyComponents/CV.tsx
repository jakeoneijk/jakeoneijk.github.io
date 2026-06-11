import { style } from '@macaron-css/core'
import { useLayoutEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import size from '../../Property/Size'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const MAX_WIDTH = 850
const MIN_SCALE = 1
const MAX_SCALE = 3
const SCALE_STEP = 0.25

const CV_FILE = '/JAEKWON_IM_CV.pdf'
const CV_DOWNLOAD_NAME = 'JAEKWON_IM_CV.pdf'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
})

const controlBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: size.spacing.m,
  marginBottom: size.spacing.l,
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const controlButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.spacing.m,
  minWidth: '40px',
  padding: `${size.spacing.m} ${size.spacing.l}`,
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.15)',
  backgroundColor: 'transparent',
  color: '#272727',
  fontFamily: 'Trebuchet MS',
  fontSize: '16px',
  fontWeight: 600,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.2s',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  ':disabled': {
    opacity: 0.4,
    cursor: 'default',
  },
})

const zoomLabel = style({
  fontFamily: 'Trebuchet MS',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(0, 0, 0, 0.5)',
  minWidth: '48px',
  textAlign: 'center',
})

const scrollArea = style({
  width: `${MAX_WIDTH}px`,
  maxWidth: '100%',
  overflowX: 'auto',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const documentInner = style({
  margin: '0 auto',
  width: 'fit-content',
})

const pageWrapper = style({
  marginBottom: size.spacing.l,
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
})

function CV() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [baseWidth, setBaseWidth] = useState<number>(MAX_WIDTH)
  const [scale, setScale] = useState<number>(1)

  useLayoutEffect(() => {
    const element = scrollRef.current
    if (!element) return

    const updateWidth = () => {
      setBaseWidth(Math.min(element.clientWidth, MAX_WIDTH))
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const zoomOut = () =>
    setScale((value) => Math.max(MIN_SCALE, +(value - SCALE_STEP).toFixed(2)))
  const zoomIn = () =>
    setScale((value) => Math.min(MAX_SCALE, +(value + SCALE_STEP).toFixed(2)))

  return (
    <div className={`${container} CV`}>
      <div className={controlBar}>
        <a className={controlButton} href={CV_FILE} download={CV_DOWNLOAD_NAME}>
          Download CV (PDF)
        </a>
        <button
          className={controlButton}
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          aria-label='Zoom out'
        >
          −
        </button>
        <span className={zoomLabel}>{Math.round(scale * 100)}%</span>
        <button
          className={controlButton}
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          aria-label='Zoom in'
        >
          +
        </button>
      </div>
      <div ref={scrollRef} className={scrollArea}>
        <div className={documentInner}>
          <Document
            file={CV_FILE}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div key={`page_${index + 1}`} className={pageWrapper}>
                <Page
                  pageNumber={index + 1}
                  width={baseWidth * scale}
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

export default CV
