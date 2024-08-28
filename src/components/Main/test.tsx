import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o componente
    render(<Main />)
    // Busca o elemento  e verifica a existencia dele
    expect(
      screen.getByRole('heading', { name: /react avançAdO/i })
    ).toBeInTheDocument()
  })
})
