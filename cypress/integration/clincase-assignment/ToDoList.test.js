/// <reference types="cypress" />

describe('first test' , ()=>
    {
        beforeEach(() => {
            cy.visit('https://simplest-react-todo-app.herokuapp.com/')
          })

          it('check if new task can be added to the todo List and is listed in the all filtration', () => {
            
            cy.get('*[class^="form-control add-todo"]').type('Feed the cat{enter}')
            cy.contains('Feed the cat').should('exist')
        
          })

          it('check if the task can be marked completed/deleted from the todo List', () => {
            
            cy.get('*[class^="form-control add-todo"]').type('Feed the cat{enter}')
            cy.contains('Feed the cat').should('exist')
            cy.contains('Feed the cat').click()
            cy.get('*[class^="todo-item ui-state-default completed"]').should('exist').contains('Feed the cat')
        
          })

          it('check if the list has the active todos', () => {
            
            cy.get('*[class^="form-control add-todo"]').type('Feed the cat{enter}')
            cy.contains('Feed the cat').should('exist')
            cy.contains('Active').click();
            cy.contains('Feed the cat').should('exist')
          })

          it('check if the list has completed todos', () => {
            
            cy.get('*[class^="form-control add-todo"]').type('Feed the cat{enter}')
            cy.contains('Feed the cat').should('exist')
            cy.contains('Feed the cat').click()
            cy.contains('Completed').click();
            cy.contains('Feed the cat').should('exist')
          })
        
          it.only('check if the filtering works', () => {
            
            cy.get('*[class^="form-control add-todo"]').type('Feed the cat{enter}')
            cy.contains('Feed the cat').should('exist')
            cy.get('*[title^="Search"]').click()
            cy.get('*[class^="form-control search"]').type('Feed the cat')
            cy.contains('Feed the cat').should('exist')
          })

          
    })