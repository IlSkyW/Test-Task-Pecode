import mainPage from "../support/pageObject/mainPage";
import productsListPage from "../support/pageObject/productsListPage";
import productPage from "../support/pageObject/productPage";

describe("Main page", () => {
  it("Leaving feedback without text ", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "allo.ua");

    const itemName = "Iphone 12";

    mainPage.search(itemName);
    cy.wait(5000);

    productsListPage.openFirstProduct();

    productPage.clickProductOptionButton("Відгуки і питання");
    productPage.clickLeaveFeedbaackButton();
    productPage.selectStarRate(3);
    productPage.clickConfirmFeedbackButton();

    productPage.verifyFormIsNotExist();
  });
});
