import { useLayoutEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

import * as styles from './CV.css'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const MAX_WIDTH = styles.MAX_WIDTH

const MIN_SCALE = 1
const MAX_SCALE = 3
const SCALE_STEP = 0.25

const CV_FILE = '/documents/JAEKWON_IM_CV.pdf'
const CV_DOWNLOAD_NAME = 'JAEKWON_IM_CV.pdf'

export const CV = () => {
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
    <div className={styles.container}>
      <div className={styles.controlBar}>
        <a
          className={styles.controlButton}
          href={CV_FILE}
          download={CV_DOWNLOAD_NAME}
        >
          Download CV (PDF)
        </a>
        <button
          className={styles.controlButton}
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          aria-label='Zoom out'
        >
          −
        </button>
        <span className={styles.zoomLabel}>{Math.round(scale * 100)}%</span>
        <button
          className={styles.controlButton}
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          aria-label='Zoom in'
        >
          +
        </button>
      </div>
      <div ref={scrollRef} className={styles.scrollArea}>
        <div className={styles.documentInner}>
          <Document
            file={CV_FILE}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div key={`page_${index + 1}`} className={styles.pageWrapper}>
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
