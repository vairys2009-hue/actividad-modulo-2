describe('Actividad Módulo 2', () => {

  it('debe mostrar la pantalla de inicio', () => {
    cy.visit('/inicio');

    cy.contains('Bienvenido').should('be.visible');
  });


  it('debe mostrar el formulario de contacto', () => {
    cy.visit('/formulario');

    cy.contains('Formulario de contacto').should('be.visible');
  });


  it('debe permitir votar y registrar el clic', () => {
    cy.visit('/votos');

    cy.contains('Angular').should('be.visible');

    cy.get('[data-tracking-tag="voto-positivo"]')
      .first()
      .click();

    cy.get('[data-tracking-tag="voto-positivo"]')
      .first()
      .should('contain', '1');

    cy.contains('Votos positivos:')
      .should('contain', '1');
  });

});