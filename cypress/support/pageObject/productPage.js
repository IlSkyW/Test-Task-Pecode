import product from "../../selectors/product.sel";
import cartPage from "./cartPage";

class productsPage {
  getProductTitle() {
    return cy.get(product.productTitle);
  }

  get confirmFeedbackButton() {
    return cy.get(product.confirmFeedbackButton);
  }

  get commentForm() {
    return cy.get(product.commentForm);
  }

  get starRate() {
    return cy.get(product.starRate);
  }

  get leaveFeedbackButton() {
    return cy.get(product.leaveFeedbackButton).eq(0);
  }

  get productOptions() {
    return cy.get(product.productOptions);
  }

  get buyButton() {
    return cy.get(product.buyButton);
  }

  selectStarRate(numberOfStars) {
    this.starRate.eq(numberOfStars - 1).click();
  }

  clickBuyButton() {
    this.buyButton.should("be.visible").click();
  }

  clickConfirmFeedbackButton() {
    this.confirmFeedbackButton.click();
  }

  clickProductOptionButton(option) {
    this.productOptions.contains(option).click({ force: true });
  }

  clickLeaveFeedbaackButton() {
    this.leaveFeedbackButton.click();
  }

  verifyProductTitle() {
    this.getProductTitle().then(($title) => {
      const itemName = $title.text();
      this.clickBuyButton();
      cy.wait(10000);
      cartPage.getProductInCartTitle().should("contain.text", itemName.trim());
    });
  }

  verifyFormIsNotExist() {
    cy.wait(5000);
    this.commentForm.should("not.exist");
  }
}

export default new productsPage();
