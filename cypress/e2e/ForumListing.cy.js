describe("Forum",()=>{

      beforeEach("Forum Listing",()=>{  
      cy.visit(" https://staging-app.eosaregion.com/")
      cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")

    })

    it("Forum LIsting",()=>{
        cy.wait(4000)
        cy.get(".icon-group.aside-nav-icon").click()
        
        cy.get(".icon-visibility-on.text-primary.fs-5").eq(1).click()
        cy.get(".icon-left-arrow.eo-back-button.fs-6").click()
        cy.get(".icon-edit.text-primary.fs-5").eq(1).click()
        cy.wait(4000)
        cy.xpath("//button[text()='Update'] ").click()


})

})

    