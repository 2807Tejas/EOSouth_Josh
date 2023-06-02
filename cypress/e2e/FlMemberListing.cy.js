describe("FL Member Listing",()=>{

    it("FL Member",()=>{

        //  cy.visit("https://staging-app.eosaregion.com/")
        //  cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
        //  cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
        //  cy.get("[name='password']").type("Tejas@123")
        //  cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
         
         // Fl Icon 
         cy.xpath("//ul/li[@class='aside-nav-link d-flex position-relative px-1 py-2 nav-item'] [3]").click()
         
         // Eye Icon
         cy.xpath("//tbody/tr[1]/td[7]/div/button[1]/i").click()
         // back button 
         cy.wait(5000)
         cy.get(".text-uppercase.fs-6.mx-1.mb-2.mb-lg-0.mt-0.btn.btn-primary").click()

         // edit page
         cy.xpath("//tbody/tr[1]/td[7]/div/button[2]/i").click()
         cy.get("[type='submit']").click()
         
    })

})