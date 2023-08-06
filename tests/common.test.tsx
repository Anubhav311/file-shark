import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { InputFile } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    const handleUploadFile = () => {
      console.log('input received')
    }
    render(<InputFile maxSizeInMb={10} fileTypes='image/png' handleUpload={handleUploadFile} />)
  })
})
