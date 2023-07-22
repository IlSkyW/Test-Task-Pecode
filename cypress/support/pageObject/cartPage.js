import cart from "..//..//selectors/cart.sel";

class cartPage {
  getProductInCartTitle() {
    return cy.get(cart.productsTitle);
  }

  clickContinueSelectItemsButton() {
    return cy.contains("Продовжити вибір товарів").click();
  }

  get CartProducts() {
    return cy.get(cart.products);
  }

  verifyCountProductsInCart(count) {
    this.CartProducts.should("have.length", count);
  }

  getProductPrices() {
    return cy.get(cart.productPrice);
  }

  getGeneralPrice() {
    return cy.get(cart.generalPrice);
  }

  getProductAction() {
    return cy.get(cart.productAction);
  }

  VerifyThatThePriceIsCalculatedCorrectly() {
    this.getProductPrices().then(($prices) => {
      const pricesArr = $prices.toArray().map((priceEl) => {
        const priceStr = priceEl.innerText.replace(/\s+/g, "");
        return parseInt(priceStr, 10);
      });

      const totalPrice = pricesArr.reduce((acc, curr) => acc + curr, 0);

      this.getGeneralPrice()
        .invoke("text")
        .then((sumStr) => {
          const sum = parseInt(sumStr.replace(/\s+/g, ""), 10);
          expect(totalPrice).to.equal(sum);
        });
    });
  }
}

export default new cartPage();
