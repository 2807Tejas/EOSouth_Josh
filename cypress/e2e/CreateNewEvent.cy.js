/// <reference types = "Cypress" /> 
import 'cypress-file-upload'

describe("Create New Event", () => {
   beforeEach("Add New event", () => {

      cy.visit("https://staging-app.eosaregion.com/")
      cy.login("tejas.pavaskar@joshsoftware.com", "Tejas@123")
   })

   it("Create New Event", () => {



      cy.get(".icon-event.aside-nav-icon").click()
      cy.get(".text-uppercase.btn.btn-outline-primary").click()
      cy.wait(2000)
      cy.get("#label-file-upload").selectFile("./cypress/fixtures/testrail-report-1361.pdf",{ action:'drag-drop'})

      cy.get("[placeholder='Enter Event Name']").eq(0).type("SBI")
      cy.get("[name='max_registration']").clear().type("10")
      cy.wait(3000)
      cy.get(".eo-select__value-container.css-1d8n9bt").eq("2").click()
      cy.contains("SLP Event").click({ force: true })

      cy.get(".eo-select__input-container.css-ackcql").eq(3).click()
      cy.contains("Workshops").click()
      cy.get("[name='learning_chair']").type("Satbeer")
      cy.get("[name='learning_chair_contact_number']").type("11223334455")
      cy.get("[name='learning_chair_contact_email']").type("Satbeer@gmail.com")

      cy.get(".eo-select__input-container.css-ackcql").eq(4).click()
      cy.contains("Online").click()

      cy.get(".eo-date-picker-input.w-100.bg-white.border-0.shadow ").eq(0).click()
      cy.xpath("//div[@class='rmdp-day-picker ']").within(() => {
         cy.wait(3000)
         cy.contains("11").click({ force: true })

      })

      cy.get(".eo-date-picker-input.w-100.bg-white.border-0.shadow ").eq(1).click()
      cy.xpath("//div[@class='rmdp-day-picker ']").within(() => {
         cy.wait(3000)
         cy.contains("13").click({ force: true })

      })

      cy.get(".eo-date-picker-input.w-100.bg-white.border-0.shadow ").eq(2).click()
      cy.xpath("//div[@class='rmdp-day-picker ']").within(() => {
         cy.wait(3000)
         cy.contains("17").click({ force: true })

      })

      cy.get(".eo-date-picker-input.w-100.bg-white.border-0.shadow ").eq(3).click()
      cy.xpath("//div[@class='rmdp-day-picker ']").within(() => {
         cy.wait(3000)
         cy.contains("20").click({ force: true })

      })

      cy.get(".eo-select__input-container.css-ackcql").eq("5").click()
      cy.wait(3000)
      cy.contains("EO Assam").click({force:true})

      cy.get("[name='speakers_attributes[0].name']").type("Rohit")
      cy.get("[name='speakers_attributes[0].designation']").type("BA")
      cy.get("[name='speakers_attributes[0].email']").type("rohit@gmail.com")
      cy.get("[name='speakers_attributes[0].contact_number']").type("1122334455")
      cy.get("[name='speakers_attributes[0].contact_name']").type("Tejas")
      cy.get("[name='speakers_attributes[0].fees']").type("100")
      cy.get("[name='speakers_attributes[0].description']").type("For Testing")
      cy.get("[name='speakers_attributes[0].event_format']").type("For testing")
      cy.get("[name='speakers_attributes[0].event_duration']").type("5")
      cy.get("[name='speakers_attributes[0].rating']").type("9")
      cy.get("[name='speakers_attributes[0].testimonial']").type("For Testing")
      cy.get("[name='speakers_attributes[0].description_of_talk']").type("For Testing")
      

      cy.get("#input-file-upload").selectFile("./cypress/fixtures/josh logo.jpg",{force:true})
      cy.get("[placeholder='Fees']").type("100")
      cy.get("[placeholder='Enter Details']").type("For Testing")
      cy.get("[name='additional_details']").type("For Testing")
      cy.xpath("//button[text()='Submit']").click()
      


   })


})



