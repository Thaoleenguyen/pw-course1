import { test, expect } from "@playwright/test";
test ("demo expect", async () => {
    expect (1 +2).toEqual (3);
    //expect array length
    const arr =[1, 2, 3];
    expect(arr).toHaveLength(3);
    //expect string
    const str ="Hello world";
    expect(str).toContain("world");
});
test ("Material page", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/");
    const title = await page.title();
    expect(title).toContain("Playwright Việt Nam");
});
test ("Try assertion web first", async ({page}) => {
    await page.goto ("https://material.playwrightvn.com/019-enable-form.html");
    const button = page.locator("//button[@id='submitButton']");
        await expect(button).toBeEnabled({ timeout: 20_000 });

});
test ("demo have class", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    const containerLocator = page.locator("//div[@id='ancestor']");
    await expect(containerLocator).toHaveClass("container", { timeout: 2_000 });//có thể bỏ timeout 

})