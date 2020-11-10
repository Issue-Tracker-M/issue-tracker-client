import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Board from '../../components/board'
import store from '../../store'
import { render } from '../test-utils'

describe('<Board />', () => {
  test('Renders all the elements', async (done) => {
    const container = render(<Board />)
    // ???
    const { findByText, findByTestId } = container
    expect(await findByText('List')).toBeVisible()
    expect(await findByText('Board')).toBeVisible()
    expect(await findByTestId('trello_view')).toBeVisible()
    expect(await findByText('Activity')).toBeVisible()
    expect(await findByText('Archived Tasks')).toBeVisible()
    done()
  })
})
