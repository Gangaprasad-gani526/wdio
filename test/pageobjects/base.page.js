class BasePage{


  get basePageHeader(){
    return $("//body/header")
  }
  
  get signIn(){
    return $("span[class^='utility-nav__signin-text']");
  }

  get makeupLink()
  {
    return $("//div[contains(@class,'global-nav-header-navigation')]//a[text()='Makeup']");
  }

  get siteHeaderMenu(){
    return $("//div[contains(@class,'site-header-menu-formatter-v1')][@style='display: block;']")
  }

  get selectProductFromGrid(){
   return $$("//div[contains(@class,'elc-product-brief-view')]//div[contains(@class,'elc-grid-item-product')]")[0]
  }

  get getProductPriceFromGrid(element){
    return this.selectProductFromGrid.findElement("//h4[contains(@class,'elc-product-original-price')]")
  }

  get addToBagButton(){
    return $("//button[text()='Add To Bag']")
  }

  get cartButton(){
    return $('button[class*=utility-nav__cart-button]')
  }

  
  clikProductFromSiteHeaderMenu(product){
  return $("//div[contains(@class,'site-header-menu-formatter-v1')][@style='display: block;']//a[text()='${product}']")
  }

  
  async openBasePage(url){
    await browser.url("/")
    browser.maximizeWindow()
  
  }


 async  clickSignIn(){
  await this.signIn.click()
  }

}


module.exports=new BasePage()
