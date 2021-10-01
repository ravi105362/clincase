/// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage';

describe('first test' , ()=>
    {
      
        const homePage=new HomePage()
        const task="Complete Clicase assignment"
        beforeEach(() => {
            
            cy.visit('https://simplest-react-todo-app.herokuapp.com/')
            homePage.getAddTask().type(task).type('{enter}')

          })

          it('check if new task can be added to the todo List and is listed in the all filtration', () => {
            
            cy.contains(task).should('exist')
          })

          it('check if the task can be marked completed/deleted from the todo List', () => {
            
            cy.contains(task).should('exist')
            cy.contains(task).click()
            homePage.getCompletedTask().should('exist').contains(task)
        
          })

          it('check if the list has the active todos', () => {
            
            cy.contains(task).should('exist')
            cy.contains('Active').click();
            cy.contains(task).should('exist')
          })

          it('check if the list has completed todos', () => {
            
            cy.contains(task).should('exist')
            cy.contains(task).click()
            cy.contains('Completed').click();
            cy.contains(task).should('exist')
          })
        
          it('check if the filtering works', () => {
            
            cy.contains(task).should('exist')
            homePage.getSearchButton().click()
            homePage.getSearchFormField().type(task)
            cy.contains(task).should('exist')
          })
    })