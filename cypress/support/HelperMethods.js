import testData from "../fixtures/example.json";

class HelperMethods {

assertOnHovering () {
  cy.get('[data-test="hover-figure-1"]').trigger('mouseover');
  cy.get('[data-test="hover-caption-1"]').should('be.visible').and('contain', 'Figure 1');

  cy.get('[data-test="hover-figure-2"]').trigger('mouseover');
  cy.get('[data-test="hover-caption-2"]').should('be.visible').and('contain', 'Figure 2');
  
  cy.get('[data-test="hover-figure-3"]').trigger('mouseover');
  cy.get('[data-test="hover-caption-3"]').should('be.visible').and('contain', 'Figure 3');
}

fillFormData () {

    cy.get('#username').type(testData.formData.username)
    cy.get('#email').type(testData.formData.email)
    cy.get('#password').type(testData.formData.passowrd)
}

fileDownload (){

    cy.get('[data-test="download-button-0"]').click() // get first file and download it
    cy.wait(2000) // wait l7ad ma ynzl 
    cy.readFile('cypress/downloads/sample.txt').should('exist') // assert en el file nzl 

    cy.get('[data-test="download-button-1"]').click()
    cy.wait(2000)
    cy.readFile('cypress/downloads/sample.csv').should('exist')

    cy.get('[data-test="download-button-2"]').click()
    cy.wait(2000)
    cy.readFile('cypress/downloads/sample.csv').should('exist')
}

fileUpload(){

  var filepath = 'cypress/fixtures/example.json' // to verfiy vile
  cy.contains('h3', 'File Upload').click()
  cy.get('[data-test="file-input"]').selectFile(filepath, { force: true })
  cy.get('h3').contains('Uploaded Files').should('be.visible')

}

checkBoxes (){
  
  cy.get('[data-test="checkbox-checkbox1"]').check();
  cy.get('[data-test="checkbox-checkbox2"]').uncheck();
  cy.get('[data-test="checkbox-checkbox3"]').check();

  cy.get('[data-test="check-all-button"]').click();

  cy.get('[data-test="checkbox-checkbox1"]').should('be.checked');
  cy.get('[data-test="checkbox-checkbox2"]').should('be.checked');
  cy.get('[data-test="checkbox-checkbox3"]').should('be.checked');


  cy.get('[data-test="uncheck-all-button"]').click();

  cy.get('[data-test="checkbox-checkbox1"]').should('not.be.checked');
  cy.get('[data-test="checkbox-checkbox2"]').should('not.be.checked');
  cy.get('[data-test="checkbox-checkbox3"]').should('not.be.checked');

}

darkModeToggle(){

  cy.get('html').should('not.have.class', 'dark');
  cy.get('[data-test="theme-toggle"]').click();
  cy.get('html').should('have.class', 'dark');
  cy.get('[data-test="theme-toggle"]').click();
  cy.get('html').should('not.have.class', 'dark');
}

keyPress (){
  cy.contains('h3', 'Key Press').click();
  cy.get('[data-test="last-key-pressed"]').should('be.visible').and('contain', 'No key pressed');

  const keys = ['a', 'b', '1', '{enter}', '{leftArrow}'];

  keys.forEach((key) => {
    cy.get('body').type(key);
    const expected = key.startsWith('{') ? key.replace(/[{}]/g, '') : key;
    cy.get('[data-test="last-key-pressed"]')
      .should('be.visible')
  });
}

brokenImagesValidation(){
      cy.contains('h3', 'Broken Images').click();

    cy.get('img[data-test="image-0"]').should(($img) => {
      expect($img[0].naturalWidth, 'Valid image should load').to.be.greaterThan(0);
    });

    cy.get('img[data-test="image-1"]').should(($img) => {
      expect($img[0].naturalWidth, 'Broken image (non-existing URL)').to.equal(0);
    });

    cy.get('img[data-test="image-2"]').should(($img) => {
      expect($img[0].naturalWidth, 'Broken image (invalid URL)').to.equal(0);
    });
}

}

export default HelperMethods;