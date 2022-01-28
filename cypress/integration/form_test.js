describe('Spa sprint challenge', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })
    const orderPizza = () => cy.get('button[id=form-button]')
    const nameInput = () => cy.get('input[name=name]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const orderBtn = () => cy.get('button[id=order-button]')

    it('sanity check', () => {
        expect(1+2).to.equal(3);
    })

    describe('fill out the  inputs', () => {
        it('can type in the name input', () => {
            orderPizza().click()
            nameInput()
              .should('have.value', '')
              .type('Peter Parker')
              .should('have.value','Peter Parker');  

            pepperoni()
            .check()
            .should('be.checked')
            .uncheck()
            
            sausage()
            .check()
            .should('be.checked')
            .uncheck()

            orderBtn().click()
        })
    })
})