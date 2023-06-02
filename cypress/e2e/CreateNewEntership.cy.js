 //import 'cypress-file-upload'
describe("New Internship77", () => {
  
    
    before("Internship", () => {

        cy.visit("https://staging-app.eosaregion.com/")
        cy.login("tejas.pavaskar@joshsoftware.com", "Tejas@123")

    })
    //  afterEach('logout',()=>{
        
    //      cy.logout()
    //  })


    it("New Entership", () => {
        cy.get(".aside-nav-link-text.text-center.fw-bold").eq("4").click()
        cy.get(".btn-outline-secondary.fw-bold.btn.btn-link").click()
        cy.get("#input-file-upload").selectFile("/home/lenovo/EO_SauthProject/cypress/fixtures/josh logo.jpg", "{ action:'drag-drop'}")
        cy.get("[name='company_name']").type("Autos")
        cy.get("[name='designation']").type("manager")
        cy.get("[name='company_contact_name']").type("Validus")
        cy.get("[name='company_contact_number']").type("1122334455")
        cy.get("[name='experience']").type("3.2")
        cy.get(".icon.icon-tabler.icon-tabler-calendar-event").click()
        cy.xpath("//div[@class='rmdp-day-picker '] ").within(() => {
            cy.wait(2000)
            cy.contains("20").click({ force: true })                          //calender
            cy.wait(2000)
            
          })
        cy.get(".eo-select__input-container.css-ackcql").eq(3).click({force:true})
        cy.wait(3000)
        cy.get("#react-select-5-option-0").click()
        cy.get(".eo-select__input-container.css-ackcql").eq(4).click({force:true})
        cy.wait(3000)
        cy.contains("BB").click({force:true})
        cy.get(".eo-select__indicators.css-1wy0on6").eq(5).click({force:true})
        cy.wait(3000)
       
       
        cy.get('#react-select-7-option-0').click({force:true})

        
        cy.get(".eo-select__input-container.css-ackcql").last().click({force:true})
        cy.wait(3000)
        cy.contains('Amit Rane').click({force:true})
        cy.get("[name='job_description']").type("For testing") 
        cy.get("[name='function']").type("For testing") 
        cy.get("[name='desired_candidate_profile']").type("For testing")
        cy.get("#skills").type("Testcase Execution")
        cy.get(".icon-plus").eq(1).click()
        cy.get(".btn.btn-primary ").click()
          
         cy.get(".icon-profile").click()                          //logout
         cy.wait(4000)
         cy.xpath("//ul[@class='user-link-list mb-0 flex-column nav']/li[4]").click()
         cy.get(".px-5.btn.btn-danger").click()
        
       
    })

    
    it("Login with Junior FL and approve",()=>{
        cy.visit("https://staging-app.eosaregion.com/")

        cy.login('demo.fl123@gmail.com','Tejas@123')
        cy.xpath("//span[text()='Internships']").click()
        cy.get(".text-uppercase.btn.btn-secondary").eq(2).click({force:true})
        cy.wait(5000)
        //cy.get("#input-file-upload").selectFile("./cypress/fixtures/testrail-report-1361.pdf")
        //cy.wait(3000)
        //cy.get(".px-5.btn.btn-secondary").click({force:true})
       // (select apply for internship enable mode)

        cy.get(".icon-profile ").click({force:true})                     //logout
        cy.get(".fs-sm.text-uppercase.text-white").eq(1).click({force:true})
        cy.get(".px-5.btn.btn-danger").click()

})
 

     it("Login with super admin and approve",()=>{

        cy.visit("https://staging-app.eosaregion.com/")
        cy.login("tejas.pavaskar@joshsoftware.com", "Tejas@123")
        cy.get(".aside-nav-link-text.text-center.fw-bold").eq("4").click()
        //cy.get(".btn.btn-outline-secondary").eq("0").click()
        cy.wait(3000)
        cy.get(".btn.btn-secondary.btn-sm").eq(0).click({force:true})

          })
})