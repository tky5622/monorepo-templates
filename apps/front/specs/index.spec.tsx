import { render } from '@testing-library/react'

import Index from '../src/app/home/page'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />)
    expect(baseElement).toBeTruthy()
  })
})
