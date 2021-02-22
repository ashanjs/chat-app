import React from 'react'
import {render} from '@testing-library/react'
import Modal from '../Modal'

test('render modal', () => {
  const {debug} = render(<Modal />)
  debug()
})
