cy.get('input[name="username"]')
  .invoke("val")
  .then((value) => {
    console.log(value); // Logs the value of the input field
  });

/*What is the invoke Function?
In Cypress, the invoke function is used to call a method on a jQuery object and get the return value. It allows you to interact with the properties and methods of the elements in the DOM that are wrapped by jQuery objects. This is particularly useful for retrieving properties or calling methods that are not directly available through Cypress commands.*/

/*In Cypress, commands like cy.get() and cy.invoke() are asynchronous. 
This means that these commands do not return their results immediately; instead, 
they schedule the commands to be executed and continue. 
To work with the results of these commands, you need to use .then() to handle the resolved value 
once Cypress has completed the command.*/
