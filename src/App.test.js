import { render, screen } from '@testing-library/react'
import App from './App'

test('renders user link', () => {
  render(<App />)
  const linkElement = screen.getByText(/user/i)
  expect(linkElement).toBeInTheDocument()
})
