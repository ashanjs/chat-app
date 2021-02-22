import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'

function render(ui) {
  function Wrapper({children}) {
    return <Router>{children}</Router>
  }
  return rtlRender(ui, {wrapper: Wrapper})
}

export * from '@testing-library/react'
export {render}
