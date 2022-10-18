describe('POST /characters', () => {
    
    before(() => {
        cy.request({
            method: 'POST',
            url: '/sessions',
            body: {
                email: 'lucasl@qacademy.io',
                password: 'qa-cademy'
            } 
        }).then(function(response){
            expect(response.status).to.eq(200)
            cy.log(response.body.token)
            Cypress.env('token', response.body.token)
        })
    });

    it('deve cadastrar um personagem', () => {
        var character = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escarlate',
            team: ['Vingadores'],
            active: true
        }
        cy.request({
            method: 'POST',
            url: '/characters',
            body: character,
            headers: {
                Authorization: Cypress.env('token')
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    });
});