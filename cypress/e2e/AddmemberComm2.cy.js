describe("Add Member in community", ()=>{


    it("Member in community",()=>{

        cy.visit("https://staging-app.eosaregion.com/")
        cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
        cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
        cy.get("[name='password']").type("Tejas@123")
        cy.get("[name='password']").should('have.value','Tejas@123') 
        cy.get("[type='submit']").click()
        cy.wait(4000)
        cy.get("[type='button']>.icon-plus").click()
        cy.wait(10000)
        cy.get('.modal-content').should('be.visible')
        cy.get("form > div > div > div:nth-child(1)",{ timeout: 10000 }).click()
        cy.contains('South Asia').click()


    })



})   

