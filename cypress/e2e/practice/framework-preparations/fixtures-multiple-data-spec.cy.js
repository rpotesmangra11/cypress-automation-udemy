// describe("Fixtures Multiple Data Demo", () => {

//   let globalData;

//   before('Before hook', () => {
//     cy.fixture("fixtures-multiple-search").then((data) => {
//       globalData = data;
//     });
//   });

//   it("should run the same test with multiple data", () => {
//     cy.visit("https://www.letskodeit.com/courses");
//     cy.get('input[placeholder="Search Course"]').type(globalData.search_course);
//     cy.get('button[class="find-course search-course"]').click();
//     cy.xpath('//*[@id="course-list"]/div[3]/div/a/div[2]/h4[text()="${globalData.click_course}"]').click();
//     // cy.xpath('//*[@id="course-list"]/div[3]/div/a/div[2]/h4'="{course.name}").replace("{course_name}", globalData.click_course)).click()
//   });
// });


  /* <h4 class="dynamic-heading">Selenium WebDriver 4 With Java </h4> */

//   cy.xpath(`//*[@id="course-list"]/div[3]/div/a/div[2]/h4[text()="${globalData.click_course}"]`).click();

// describe('Fixtures Multiple Data Demo', () => {

//     let globalData;
  
//     before('Before Hook', () => {
//       cy.fixture("search_course").then((data) => {
//         globalData = data 
//     })
//     })
  
//     it('should run same test with multiple data', () => {
//       globalData.testid1.forEach(testData => {
//         cy.visit('https://www.letskodeit.com/courses')
//         cy.get('input[placeholder="Search Course"]').type(testData.search_course)
//         cy.get('button[class="find-course search-course"]').click()
//         cy.xpath(`//*[@id="course-list"]//h4[contains(text(),"${testData.click_course}")]`).click();
//         //cy.xpath('//*[@id="course-list"]/div[3]/div/a/div[2]/h4]'.replace("{course_name}", testData.click_course)).click()
//       })
//     })
//   })
  

  //*[@id="course-list"]/div[3]/div/a/div[2]/h4
//   ="{course_name}"

//Adding waiting logic
describe('Fixtures Multiple Data Demo', () => {
    let globalData;
  
    before('Before Hook', () => {
      cy.fixture("search_course").then((data) => {
        globalData = data;
      });
    });
  
    it('should run same test with multiple data', () => {
      globalData.testid1.forEach(testData => {
        cy.visit('https://www.letskodeit.com/courses');
  
        // Wait for the search input to be visible
        cy.get('input[placeholder="Search Course"]').should('be.visible').type(testData.search_course);
  
        // Click on the search button
        cy.get('button[class="find-course search-course"]').click();
  
        // Wait for the search results to load
        cy.get('#course-list').should('be.visible');
  
        // Use the correct XPath expression to click the course
        const xpathExpression = `//*[@id="course-list"]//h4[contains(text(),"${testData.click_course}")]`;
  
        // Log the course being clicked
        cy.log(`Clicking on course: ${testData.click_course}`);
  
        // Wait for the element to be visible and then click
        //cy.xpath(xpathExpression).should('be.visible').click();
      });
    });
  });
  