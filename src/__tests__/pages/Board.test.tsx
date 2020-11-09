import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Board from '../../components/board'
import Dashboard from '../../pages/Dashboard'
import store from '../../store'

describe('<Board />', () => {
  test('Renders all the elements', async (done) => {
    const container = render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <Board />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    )
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
