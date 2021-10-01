class HomePage {

    getAddTask(){
        return cy.get('*[class^="form-control add-todo"]')
    }

    getCompletedTask(){
        return cy.get('*[class^="todo-item ui-state-default completed"]')
    }

    getSearchButton(){
        return cy.get('*[title^="Search"]')
    }

    getSearchFormField(){
        return cy.get('*[class^="form-control search"]')
    }

}
export default HomePage