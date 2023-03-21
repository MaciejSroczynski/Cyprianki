import { url } from "../support/constants/basics";

describe('basic spec', () => {
  it('logs in', () => {
    cy.visit(url)
    cy.login()
  })
})