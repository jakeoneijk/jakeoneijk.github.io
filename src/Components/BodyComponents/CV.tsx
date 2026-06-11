import { style } from '@macaron-css/core'
import { useLayoutEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import size from '../../Property/Size'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const MAX_WIDTH = 850

const CV_FILE = '/JAEKWON_IM_CV.pdf'
const CV_DOWNLOAD_NAME = 'JAEKWON_IM_CV.pdf'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
})

const downloadButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: size.spacing.m,
  marginBottom: size.spacing.l,
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
})

const documentWrapper = style({
  width: `${MAX_WIDTH}px`,
  maxWidth: '100%',
  '@media': {
    [size.media.mobile]: {
      width: '100%',
    },
  },
})

const pageWrapper = style({
  marginBottom: size.spacing.l,
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
})

function CV() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [pageWidth, setPageWidth] = useState<number>(MAX_WIDTH)

  useLayoutEffect(() => {
    const element = wrapperRef.current
    if (!element) return

    const updateWidth = () => {
      setPageWidth(Math.min(element.clientWidth, MAX_WIDTH))
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${container} CV`}>
      <a className={downloadButton} href={CV_FILE} download={CV_DOWNLOAD_NAME}>
        Download CV (PDF)
      </a>
      <div ref={wrapperRef} className={documentWrapper}>
        <Document
          file={CV_FILE}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div key={`page_${index + 1}`} className={pageWrapper}>
              <Page
                pageNumber={index + 1}
                width={pageWidth}
                renderAnnotationLayer={true}
                renderTextLayer={true}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  )
}

export default CV
