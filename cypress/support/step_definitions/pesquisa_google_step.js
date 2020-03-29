/// <reference types="cypress" />
/*
import {
    Given,
    When,
    Then
} from "cypress-cucumber-preprocessor/steps"
*/
beforeEach(() => {
    Given(`I open page`, () => {
        cy.visit('https://www.google.com')
    })
})

Then(`I see {string} in the title`, title => {
    cy.title().should('include', title)
})

When(`I search for {string}`, text => {
    cy.get('input[name= q]')
        .type(text + '{enter}')
})

Then(`I see the text in results page {string}`, text => {
    cy.get('#rhs > .vnLNtd > .UDZeY > .NFQFxe > .EzQcEe > :nth-child(2)').then(el => {
        expect(el.text()).to.contain(text)
    })
})
