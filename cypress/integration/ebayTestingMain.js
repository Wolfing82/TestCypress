describe('Just Open ebay and perform a search', () => {
	const searchPilas =  'Pilas'
	const SearchIdInput = '#gh-ac'
	const searchIdButton = '#gh-btn'
	
	//load the main web site.
	it('Open the base project', () => {
	
		cy.visit('/')
		
		cy.on('uncaught:exception', (err, runnable) => {
			expect(err.message).to.include('This error is expected')
		})
		
	})
  
	//use the web site search engine.
	it('Perform a custom search', () => {
	  
		cy.get(SearchIdInput).type(searchPilas)
		cy.get(searchIdButton).click()
		//todo: futher investigation. Appears to be a unhandled exception when using the search on the site(maybe the cookies???)
		cy.on('uncaught:exception', (err, runnable) => {
			expect(err.message).to.include('This error is expected')
		})
	})
	
	//Log the expected result.
	it('check the results', () => {
		cy.get('.srp-controls__count-heading > :nth-child(1)').then(($span) => {
			const searchResults = $span.text();
			cy.log(searchResults);
		})
	})
  
})