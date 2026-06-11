import { render, screen } from '@testing-library/react'

import { Text } from '@/components/Text'

describe('Text', () => {
  it('renders a span by default', () => {
    render(<Text>hello</Text>)
    expect(screen.getByText('hello').tagName).toBe('SPAN')
  })

  it('renders a safe external anchor when a link is provided', () => {
    render(<Text link='https://example.com'>visit</Text>)
    const anchor = screen.getByRole('link', { name: 'visit' })
    expect(anchor).toHaveAttribute('href', 'https://example.com')
    expect(anchor).toHaveAttribute('target', '_blank')
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
