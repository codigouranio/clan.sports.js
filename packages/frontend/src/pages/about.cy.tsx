/* eslint-disable */
import About from './about';

// Cypress Component Test
describe('<AboutPage />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<About />);

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
