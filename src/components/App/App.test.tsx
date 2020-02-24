import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render headline', () => {
    // Arrange

    // Act
    const { getByText } = render(<App />);

    // Assert
    const linkElement = getByText(/egonoid React Template/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    // Arrange

    // Act
    const container = render(<App />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
