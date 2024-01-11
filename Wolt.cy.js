describe('Wolt.com Order Test', () => {
  it('Order Burger Test', () => {
    cy.visit('https://wolt.com');
    // Assert that the correct website is loaded
    cy.url().should('include', 'wolt.com');
    // Accept Cookies
    cy.get('.hyVQid > .sc-62ed5c8d-3').click();
    // Verify that "Accept cookies" banner is no longer visible
    cy.get('.hyVQid > .sc-62ed5c8d-3').should('not.exist');

    //Typing Kauno dokas in delivery address box
    cy.get('#front-page-input').clear('k');
    cy.get('#front-page-input').type('kauno dokas');
    cy.get('#ChIJ38lOZggi50YRWpU8_5-uibQ > .sc-d0a31faf-0 > .sc-d0a31faf-5').click();

    //Selecting "Restaurants"
    cy.get(':nth-child(2) > .sc-147d0703-0 > .sc-147d0703-1').click();
    //Selecting "Burgers"
    cy.get('div.sc-be33da98-3:nth-child(1)').click();
    // Assert that the burgers page is loaded
    cy.url().should('include', 'burgers');

    //Selecting restaurant "Šventas dūmas"
    cy.get('[data-test-id="venueCard.sventas-dumas"] > .sc-d23e97a9-43 > [aria-hidden="true"] > .sc-d23e97a9-0 > .sc-d23e97a9-2 > .sc-c436b24b-0 > .sc-c436b24b-1').click();
    // Assert that the Šventas dūmas page is loaded
    cy.url().should('include', 'sventas-dumas');

    //Selecting "Sūrio vegetariškas burgeris"
    // 
    cy.get('#app > div.sc-be9f6979-0.jozJEO.rtl > div.sc-be9f6979-1.hNwbQA > div.sc-be9f6979-8.kHIpxq > main > div.sc-a4f89014-0.iXOlvW > div.sc-a4f89014-2.ihwcOG > div.sc-453e7ad9-0.KVgBJ > div:nth-child(4) > div > div.sc-ff3a5ea4-5.IZPUj > div:nth-child(4) > button').click({ force: true });
    //Verify that the correct burger is selected
    cy.url().should('include', 'surio-vegetariskas-burgeris');

    // Add burger to order
    cy.get('.sc-2d01a0b8-2 > .sc-62ed5c8d-2 > .sc-62ed5c8d-4').click({ force: true });
    // View order
    cy.get('.sc-c1361b55-1 > :nth-child(1) > .sc-62ed5c8d-2 > .sc-62ed5c8d-4').click({ force: true });
    // Order contains the selected burger
    cy.get('body').should('contain', 'Sūrio vegetariškas burgeris');
    
    // Go to checkout
    cy.get('.sc-5df7b44c-0 > .sc-62ed5c8d-2 > .sc-62ed5c8d-4').click({ force: true });
  })});


