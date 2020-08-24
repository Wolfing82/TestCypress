describe('Just Open ebay and perform a search', () => {
	const urlBase = 'http://www.ebay.com'
	const searchPilas =  'Pilas'
	const SearchIdInput = '#gh-ac'
	const searchIdButton = '#gh-btn'
	
	it('Open the base project', () => {
	

	cy.visit('/')
    expect(true).to.equal(true)
	
	//cy.get('#gh-ac').type(urlSearch01)

	
	
	cy.on('uncaught:exception', (err, runnable) => {
		expect(err.message).to.include('This error is expected')
	})
	
	//cy.get('.srp-controls__count-heading > :nth-child(1)')
	
	//cy.log('Number of search items found:', )
	
	})
  
	it('Perform a custom search', () => {
	  
		cy.get(SearchIdInput).type(searchPilas)
		cy.get(searchIdButton).click()
		cy.on('uncaught:exception', (err, runnable) => {
			expect(err.message).to.include('This error is expected')
		})
	})
	
	it('check the results', () => {
		cy.get('.srp-controls__count-heading > :nth-child(1)').then(($span) => {
			const searchResults = $span.text();
			cy.log(searchResults);
		})
	})
  
})