describe("Enroll For Fl", () => {

    beforeEach("Login", () => {
        cy.visit("https://staging-app.eosaregion.com/")
        cy.login("tejas.pavaskar@joshsoftware.com", "Tejas@123")

    })

    it(" Add Fl Member", () => {
        cy.get(".aside-nav-link-text.text-center.fw-bold").eq(0).click()
        cy.wait(3000)
        cy.get(".icon-profile ").click()
        cy.contains("Enroll for FL").click()
        cy.wait(2000)
        cy.get("[name=first_name]").type("Naziya")
        cy.get("[name=last_name]").type("Shiklgar")
        cy.get("[name=email]").type("naziya@gmail.com")
        cy.get("#contact_number").type("1122334455")
        cy.get(".icon.icon-tabler.icon-tabler-calendar-event").click()
        cy.wait(3000)
        cy.get(".rmdp-arrow-container.rmdp-left").click()
        cy.wait(1000)
        cy.get(".rmdp-header-values").eq(0).should("have.text", 'April,2023')

        cy.xpath("//div[@class='rmdp-calendar  ']/div[2]").within(() => {
            cy.contains('15').click({ force: true })
        })

        cy.get("[name='education']").type("MCA")
        cy.get("[name='company_name']").type("Josh")
        cy.get("[name='designation']").type("QA")
        cy.wait(2000)
     
        cy.get(".eo-select__placeholder.css-14el2xx-placeholder").eq(2).click({force:true})
        cy.get(".eo-select__placeholder.css-14el2xx-placeholder")
        cy.contains("Ajay Patil").click({force:true})
        cy.get(".eo-select__input-container.css-ackcql").eq(3).click()
        cy.contains("Apparel Manufacturing").click()
        cy.get(".eo-select__input-container.css-ackcql").eq(4).click()
        cy.contains("Banking").click()
        cy.get("[type=submit]").click()

        

    

        

    })





})