
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer with the correct copyright year', () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/Agentsicify. Empowering businesses with AI automation./i);
    expect(copyrightElement).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    const copyrightYearElement = screen.getByText(`© ${currentYear} Agentsicify. Empowering businesses with AI automation.`);
    expect(copyrightYearElement).toBeInTheDocument();
  });
});
