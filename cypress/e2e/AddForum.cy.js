describe("Add New Forum",()=>{
  
    before("Forum",()=>{
            cy.visit("https://staging-app.eosaregion.com/")
            cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")


    })
    it("Add forum",()=>{

        cy.get(".icon-group.aside-nav-icon").click()
        cy.get(".btn-outline-secondary.fw-bold.btn.btn-link").click()
        cy.get(".eo-select__input-container.css-ackcql").eq(3).click().type('{enter}')
        cy.wait(4000)
        cy.get("#react-select-5-placeholder").click({force:true}).type('{enter}')
        // cy.contains("South Asia").click({force:true})


    })
})

