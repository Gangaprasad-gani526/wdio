class PageUtil{

    async  waitUntilElementDisplayed(element){
        await browser.waitUntil(async()=>
               await element.isDisplayed()!=false,
            {timeout:5000,
            timeoutMsg:"Element not displayed"})
    
        }

}

module.exports= new PageUtil()