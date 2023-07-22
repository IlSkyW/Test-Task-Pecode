import home from "../../selectors/home.sel";

class mainPage {
  visit() {
    cy.visit("https://allo.ua/");
  }
  get siteUrl() {
    return cy.url();
  }
  get searchInput() {
    return cy.get(home.searchInput);
  }

  get searchButton() {
    return cy.get(home.searchButton);
  }

  search(text) {
    this.searchInput.type(text);
    this.searchButton.click();
  }

  get category() {
    return cy.get(home.menuCategories);
  }

  get subCategory() {
    return cy.get(home.subCategories);
  }

  openCategory(categoryName) {
    this.category.contains(categoryName).click({ force: true });
  }

  openSubCategory(subCategoryName) {
    this.subCategory.contains(subCategoryName).click();
  }

  clickMenuButton() {
    return cy.get(home.menuButton).click();
  }
}

export default new mainPage();
