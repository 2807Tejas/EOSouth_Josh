describe("FL Member Listing",()=>{

    it("FL Member",()=>{

         cy.visit("https://staging-app.eosaregion.com/")
         cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
         cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
         cy.get("[name='password']").type("Tejas@123")
         cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
         
         cy.wait(4000)
         cy.get(".icon-employee-search.aside-nav-icon").click()
         cy.xpath("//tbody/tr[1]/td[11]/div/button[1]").click()
         cy.get(".icon-left-arrow.eo-back-button.fs-6").click()
         cy.xpath("//tbody/tr[1]/td[11]/div/button[2]").click()
         cy.get(".text-uppercase.fs-5.mx-0.mb-2.mb-lg-0.mt-0.btn.btn-primary").click()

    })

})