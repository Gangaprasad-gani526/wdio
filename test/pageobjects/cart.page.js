class CartPage{

    get shoppingCartHeader(){
        return $("//h2[contains(.,'Shopping Cart')]")
      }
    
      get orderSummaryHeader(){
        return $("//h2[contains(.,'Order Summary')]")
      }
    
      get continueCheckOutButton(){
        return $("//a[text()='Continue Checkout']")
      }

}

module.exports=new CartPage()