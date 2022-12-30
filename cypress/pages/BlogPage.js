class BlogPage {
    elements = {
        blogInput: () => cy.get('#search'),
        NegativeResultSearch: ()=> cy.get('#articles > div'),
        PositiveResultSearch:()=> cy.get('#articles > div:first-child')
    }
    typeInput(text) {
        this.elements.blogInput().type(text);
      }

}

export const blogPage = new BlogPage();
