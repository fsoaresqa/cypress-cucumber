/// <reference types="cypress" />
/*
import {
    Given,
    When,
    Then
} from "cypress-cucumber-preprocessor/steps"
*/
beforeEach(() => {
    Given('Eu abro a página', () => {
        cy.visit('https://www.wikipedia.org/')
    })
})

Then(`Eu vejo {string} no título`, title => {
    cy.title().should('include', title)
})

When(`Eu pesquiso por {string}`, text => {
   cy.get('#searchInput')
        .type(text + '{enter}')
})

Then(`Eu vejo o resultado {string}`, text => {
    cy.get('#firstHeading').then(el => {
        expect(el.text()).to.eq(text)
    })
})
