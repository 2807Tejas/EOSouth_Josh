

describe("Create New Community",()=>{

 beforeEach("Community",()=>{

    cy.visit("https://staging-app.eosaregion.com/")
    cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")

})
    it.skip("New Community",()=>{
         cy.get(".icon-chat.aside-nav-icon").click()
         cy.wait(4000)
         cy.get(".icon-plus.text-success.fs-6").click()
         cy.get("[name='name']").type("Testing Community")
         cy.get("[placeholder='Enter Description']").type("For Testing")
         cy.get("[type='submit']").click()                                   // submit
         

    })
         it("Search Community",()=>{
         cy.get(".icon-chat.aside-nav-icon").click()   
         cy.wait(2000)   
         cy.get("[placeholder='Search']").eq(0).click().type('Testing Community')
         cy.wait(3000)
          .contains("Testing Community").click()
         .should("have.text","Testing Community")
         
    
})
         it.skip("Activate and deactivate community",()=>{
           cy.get(".icon-toggle.fs-2.text-dark").click()
           cy.wait(2000)
           cy.get(".popover-inner").click()

         })


         it("Add member in community",()=>{

            cy.get(".icon-plus").eq(1).click()
            cy.wait(3000)
            cy.get("#react-select-4-placeholder").click({force:true})      //region
            cy.get("#react-select-4-option-0").click({force:true})
            
            cy.get("#react-select-5-placeholder").click({force:true})       //chapter
            //cy.contains("Eo Noida").click({force:true})
            cy.get("#react-select-5-option-5").click({force:true})

        
            cy.get(".eo-select__value-container").eq(4).click({force:true})
            cy.get(".eo-select__option.eo-select__option--is-focused.css-1n7v3ny-option").click({force:true})
            cy.get("[type=submit]").click()

            })

               
         })
