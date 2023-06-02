describe("Add Member in community", ()=>{


    it("Member in community",()=>{

        cy.visit("https://staging-app.eosaregion.com/")
      cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
      cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
      cy.get("[name='password']").type("Tejas@123")
      cy.get("[name='password']").should('have.value','Tejas@123') 
        //To verify passing parameter correct or not 
      cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
//cy.get('#react-select-20-placeholder').click();                 // select region 
//cy.get('.eo-select__menu-list.css-11unzgr').within(()=>{
//cy.contains('South Asia').click();

            ///#react-select-45-option-0                                   // region CSS
        })
       // cy.get("#react-select-5-placeholder").click()                   // select chapter
        //cy.get(".eo-select__control.eo-select__control--is-focused.eo-select__control--menu-is-open.css-1pahdxg-control")
      //  .within(()=>{
        //     cy.contains('Eo Assam').click()

             ///  #react-select-46-option-1                             css chapter 
        })

       // cy.get("#react-select-6-placeholder").click()                   // select name 
        //     cy.get(" #react-select-9-option-2").click()


        cy.get(".form-check-input[value='member']").click()            // select radiobutton 
            cy.get("[type='submit']").click()

      
  

  

