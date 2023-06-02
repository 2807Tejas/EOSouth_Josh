describe('SA Listing Users',()=>{

    beforeEach("SA Listing",()=>{
        cy.visit("https://staging-app.eosaregion.com/")
        //cy.clicklink("loginapp")
        cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")
        
  
    })

    it('CSSselector',()=> {
  
     // cy.visit("https://staging-app.eosaregion.com/")
      // cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
    //   cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
    //   cy.get("[name='password']").type("Tejas@123")
    //   cy.get("[name='password']").should('have.value','Tejas@123')     //To verify passing parameter correct or not 
    //   cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
      
      cy.wait(4000)
       cy.get(".aside-nav-link-text.text-center.fw-bold").eq(5).click()
       cy.get(".eo-select__indicators.css-1wy0on6").eq(0).click()
       cy.get(".icon-edit.text-primary.fs-5").eq(0).click()
       cy.xpath("//button[text()='update']").click()
       cy.get(".icon-close.fs-6.text-black").click()
       cy.get(".icon-visibility-on.text-primary.fs-5").eq(0).click()
       cy.get(".details-back-btn.p-1.btn.btn-link").click()

      
    })

})