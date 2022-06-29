import { mount } from 'cypress/vue'
import Button from '../../components/Button.vue'

describe('Button.cy.js', () => {
  it('playground', () => {
    mount(Button)
    cy.get("button").should(
      "have.class",
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    );
    cy.get('button').should('contain', 'Button')
  })
})