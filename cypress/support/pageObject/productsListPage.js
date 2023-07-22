import productList from "../../selectors/productList.sel";
import filter from "../../selectors/filter.sel";

class productListPage {
  get productTitles() {
    return cy.get(productList.productTitle);
  }

  get minPriceFilter() {
    return cy.get(filter.PriceInput).first();
  }

  get maxPriceFilter() {
    return cy.get(filter.PriceInput).eq(1);
  }

  get showButton() {
    return cy.get(filter.showButton);
  }

  filterPrice(min, max) {
    this.minPriceFilter.click({ force: true }).clear().type(min);
    this.maxPriceFilter.click().clear().type(max);
    cy.wait(5000);
    this.showButton.click({ force: true });
  }

  get brandAsus() {
    return cy.get(filter.brandCheckBox);
  }

  selectBrand() {
    this.brandAsus.click();
    this.showButton.click({ force: true });
  }

  get productsPrice() {
    return cy.get(productList.productPrice);
  }

  verifyProductPriceInRange(minPrice, maxPrice) {
    this.productsPrice.each(($el) => {
      const price = $el.text().replace(/\s/g, "");
      expect(parseInt(price)).to.be.within(minPrice, maxPrice);
    });
  }

  verifyProductsTitleContainBrand(brand) {
    this.productTitles.each(($el) => {
      const title = $el.text().toLowerCase();
      expect(title.includes(brand)).to.eq(true);
    });
  }

  get Products() {
    return cy.get(productList.productPicture);
  }

  openFirstProduct() {
    this.Products.first().click();
  }

  verifyProductTitles(itemName) {
    this.productTitles.each(($title) => {
      expect($title.text().toLowerCase()).to.contain(itemName.toLowerCase());
    });
  }
}

export default new productListPage();
