import mainPage from "../support/pageObject/mainPage";
import productList from "../support/pageObject/productsListPage";

describe("Search Item Test", () => {
  it("should open the marketplace url and verify search on it", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "allo.ua");

    const itemName = "Навушники JBL";

    mainPage.search(itemName);
    cy.wait(5000);
    productList.verifyProductTitles(itemName);
  });
});
