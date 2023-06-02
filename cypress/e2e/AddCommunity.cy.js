

describe('CSSselector',()=>{
  it('CSSselector',()=> {

    cy.visit("https://staging-app.eosaregion.com/")
    cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
    cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
    cy.get("[name='password']").type("Tejas@123")
    cy.get("[name='password']").should('have.value','Tejas@123')     //To verify passing parameter correct or not 
    cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()

    cy.get(".bg-white.text-uppercase.fw-bold.p-2.text-split-button.btn.btn-link").click()
    cy.get(".shadow.form-control[placeholder='Enter Community Name']").type('Joshcommunity')
    cy.get("[placeholder='Enter Description']").type('for testing ')
    cy.get(".border-0.justify-content-start.shadow.app-modal-footer.modal-footer").click()

    })




})