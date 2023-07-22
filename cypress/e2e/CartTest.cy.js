import mainPage from "../support/pageObject/mainPage";
import productsListPage from "../support/pageObject/productsListPage";
import productPage from "../support/pageObject/productPage";
import cartPage from "../support/pageObject/cartPage";

describe("Cart Test", () => {
  it("Add items to the basket", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "allo.ua");

    // Open category and subcategory
    cy.wait(5000);
    mainPage.openCategory("Ноутбуки, ПК та планшети");
    mainPage.openSubCategory("Ноутбуки");

    // Add first item to the basket
    productsListPage.openFirstProduct();
    cy.wait(5000);
    productPage.verifyProductTitle();

    cartPage.clickContinueSelectItemsButton();
    cy.wait(5000);
    // //получаем элемент корзины с названием продукта
    mainPage.clickMenuButton();

    // Select another category and add an item from that category
    mainPage.openCategory("Смартфони та телефони");
    mainPage.openSubCategory("Смартфони та мобільні телефони");
    productsListPage.openFirstProduct();
    cy.wait(5000);
    productPage.clickBuyButton();
    cy.wait(5000);

    // Verify information of items inside the basket
    cartPage.verifyCountProductsInCart(2);

    // Verify that the price is calculated correctly
    cartPage.VerifyThatThePriceIsCalculatedCorrectly();

    // Verify that the delete item button is clickable
    cartPage.getProductAction().should("be.visible").should("have.length", 2);

    cartPage.getProductAction().eq(1).click();
    cartPage.verifyCountProductsInCart(1);
  });
});
