import React from 'react';
import { render } from '@testing-library/react';

import Splash from '.';

const data = {
  title: 'Splash Component',
  claim: 'Just a simple example',
  website: 'https://www.example.com',
};

describe('Splash', () => {
  it('should match snapshot', () => {
    // Arrange

    // Act
    const container = render(<Splash {...data} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  describe('for properties', () => {
    it('should render title', () => {
      // Arrange

      // Act
      const { getByText } = render(<Splash title={data.title} />);

      // Assert
      const element = getByText(/Splash Component/i);
      expect(element).toBeInTheDocument();
    });

    it('should render claim', () => {
      // Arrange

      // Act
      const { getByText } = render(<Splash title={data.title} claim={data.claim} />);

      // Assert
      const element = getByText(/Just a simple example/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe('for displayed website', () => {
    it('should render without https://', () => {
      // Arrange

      // Act
      const { getByText } = render(
        <Splash title={data.title} website={'https://www.example.com'} />
      );

      // Assert
      const element = getByText(/^www.example.com$/);
      expect(element).toBeInTheDocument();
    });

    it('should render without http://', () => {
      // Arrange

      // Act
      const { getByText } = render(
        <Splash title={data.title} website={'http://www.example.com'} />
      );

      // Assert
      const element = getByText(/^www.example.com$/);
      expect(element).toBeInTheDocument();
    });
  });
});
