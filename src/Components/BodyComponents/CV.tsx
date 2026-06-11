import { style } from '@macaron-css/core'
import { useLayoutEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import size from '../../Property/Size'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const MAX_WIDTH = 850

const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
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
      <div ref={wrapperRef} className={documentWrapper}>
        <Document
          file='/JAEKWON_IM_CV.pdf'
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
