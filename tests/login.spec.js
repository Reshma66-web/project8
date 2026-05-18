import {test} from "@playwright/test"

test("fill and type",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    // ! fill
    await page.getByTestId("username").fill("standard_user")
    // ! type
    await page.getByTestId("password").type("secret_sauce")
    // ! click()
    await page.getByTestId("login-button").click()
})