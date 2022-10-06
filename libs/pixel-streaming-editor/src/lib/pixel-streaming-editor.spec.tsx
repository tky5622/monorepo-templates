import { render } from '@testing-library/react'

import PixelStreamingEditor from './pixel-streaming-editor'

describe('PixelStreamingEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PixelStreamingEditor />)
    expect(baseElement).toBeTruthy()
  })
})
