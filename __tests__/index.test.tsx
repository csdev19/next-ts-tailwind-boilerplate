import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading of component', () => {
    render(<Home />);

    const headingComponent = screen.getByRole('heading', {
      name: /Hello World component!/i,
    });

    expect(headingComponent).toBeInTheDocument();
  });
  it('renders a heading of module', () => {
    render(<Home />);

    const headingModule = screen.getByRole('heading', {
      name: /Hello World module!/i,
    });

    expect(headingModule).toBeInTheDocument();
  });
});
