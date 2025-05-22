import HelperMethods from "../support/HelperMethods";

const helperMethods = new HelperMethods();

describe('moataz nabil Website', () => {

  beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit('https://moatazeldebsy.github.io/test-automation-practices/#/');
});

  afterEach(() => {
    cy.log('Closing the browser.');
  })

it('should click on form button and fill data', () => {
    cy.contains('h3' , 'Forms').click()
    helperMethods.fillFormData()
  }); // Work And Helpermethod work

it('should navigate to About Page', () => {
    cy.contains('h3' , 'About').click()
    cy.contains('h1' , 'About Test Automation Practice')
    cy.contains('h2' , 'Project Team')
  }); // Work but Helpermethod not urgent here
    
  it('should upload a file successfully', () => {
    helperMethods.fileUpload();
  });

  it('should navigate and change content on hover over figures', () => {
    cy.contains('h3', 'Hover States').click();
    helperMethods.assertOnHovering();
  });

  it('should download and verify the sample text file', () => {
    cy.contains('h3', 'File Download').click();
    helperMethods.fileDownload();
  });

  it('should interact with checkboxes correctly', () => {
    cy.contains('h3', 'Checkboxes').click();
    helperMethods.checkBoxes();
  });

  it('should toggle dark mode on and off', () => {
    helperMethods.darkModeToggle();
  });

 it('should navigate to Key Press page and detect key presses', () => {
    helperMethods.keyPress()
});

 it('should verify image loading status for all three images', () => {
    helperMethods.brokenImagesValidation()
  });

});
  

