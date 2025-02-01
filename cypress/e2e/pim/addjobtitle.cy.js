
import logindata from "../../fixtures/login.json"
import tds from "../../fixtures/admindata/jobtitle.json"
import db from "../../fixtures/pages/dashboard.po"

describe('Verify Job Title Functionality', () => {
//    const creds = ["Admin", "admin123"]
//    const jobtitledata = {
//        jobtitle: "SDET",
//        jobdescription: "Automation Testing"
//    }
    const menuitems = {

        menu1: "Admin",
        menu2: "PIM",
        menu3: "Leave",
        menu4: "Time",
        menu5: "Recruitment",
        menu6: "My Info"
    }

    const jtitle = ["SDET","F-E-D","SM", "PO", "BA"] 
    jtitle.forEach(jobtitle => {
        if (Cypress.browser.name === "chrome") {
            it(`Verify adding job title with mandatory fields - ${jobtitle}`, () => {
                cy.login(logindata.username, logindata.password)
               //cy.login(creds[0], creds[1])
                for (let modulename in menuitems) {
                    cy.contains(menuitems[modulename]).should("be.visible")
                }
                cy.get(db.pimMenu()).click()
                cy.addjobtitle(jobtitle,tds.jobdescription)
               //cy.addjobtitle(jobtitle, jobtitledata.jobdescription)
            })
        }
        
    });
})
    // cy.contains("Admin").should("be.visible")
    // cy.contains("PIM").should("be.visible")
    // cy.contains("Leave").should("be.visible")
    // cy.contains("Time").should("be.visible")
    // cy.contains("Recrutement").should("be.visible")
    // cy.contains("My Info").should("be.visible")

   // if (Cypress.browser.name === "chrome") {
     //   it('Verify adding job title with mandatory fields', () => {
         //   cy.login(logindata.username, logindata.password)
       //    cy.login(creds[0], creds[1])
         //   for (let modulename in menuitems) {
           //     cy.contains(menuitems[modulename]).should("be.visible")
            //}
           // cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
            //   cy.addjobtitle(tds.jobtitle,tds.jobdescription)
           //cy.addjobtitle(jobtitledata.jobtitle, jobtitledata.jobdescription)
             /*  cy.contains('Job').click()
                cy.contains('Job Titles').click()
                cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
                let r = (Math.random()+1).toString(36).substring(7);
                cy.get('input[class="oxd-input oxd-input--active"]').last().type(tds.jobtitle+r)
                cy.get('textarea[placeholder="Type description here"]').type(tds.jobdescription)
                cy.get('button[type="submit"]').click()
                cy.contains("Successfully Saved").should("be.visible")  */

      //  })
  //  }

//})
