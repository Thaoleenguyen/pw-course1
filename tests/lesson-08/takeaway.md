**1.Test describe**
Test suite : tập hợp các test case
Ví dụ : test suite cho tính năng Login sẽ bao gồm các testcase log in successfully or login failed....
_test.describe('<tên suite>', async () => {

    test('test1', async ({ page }) => {

        // code ...

    });

});_
ví dụ :
test.describe('Login', async () =>
test('login successfully' , async ({page}) => {
//
});
**2.Hook**
Các thời điểm chạy test
Các hook :
**beforeAll**
**beforeEach**
***afterAll**
**afterEach**
Ví dụ 
import { test, expect } from '@playwright/test';

test.describe('Login feature', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });
  test.afterAll(async ({page]) => {
    await page.goto(....);
    });

  test('Login success', async ({ page }) => {
    await page.fill('#username', 'admin');
    await page.fill('#password', '123456');
    await page.click('button[type=submit]');

    await expect(page).toHaveURL('/dashboard');
  });
  **3.Assertion**
  là câu lệnh kiểm tra xem có đang làm đúng không, thông qua hàm expect
  test ("Try assertion web first", async ({page}) => {
    await page.goto ("https://material.playwrightvn.com/019-enable-form.html");
    const button = page.locator("//button[@id='submitButton']");
        await **expect**(button).toBeEnabled({ timeout: 20_000 });

});
test ("demo have class", async ({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    const containerLocator = page.locator("//div[@id='ancestor']");
    await **expect**(containerLocator).toHaveClass("container", { timeout: 2_000 });//có thể bỏ timeout 

**Webfirst assertion phổ biến**
1.Text & content 
  // Có chứa text
await expect(locator).toContainText('Hello');

// Text chính xác
await expect(locator).toHaveText('Welcome');

// Text khớp regex
await expect(locator).toHaveText(/welcome/i);

// Kiểm tra nhiều elements
await expect(locator).toHaveText(['Item 1', 'Item 2']);

2. Element state
   // Kiểm tra visibility
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();

// Kiểm tra enabled/disabled
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();

// Kiểm tra checked (checkbox/radio)
await expect(locator).toBeChecked();

// Kiểm tra focus
await expect(locator).toBeFocused();
3. Attributes & Properties

// Kiểm tra attribute
await expect(locator).toHaveAttribute('href', '/about');

// Kiểm tra class
await expect(locator).toHaveClass('active');
await expect(locator).toHaveClass(/btn-primary/);

// Kiểm tra value (input fields)
await expect(locator).toHaveValue('john@example.com');

// Kiểm tra count
await expect(locator).toHaveCount(5);

4. Page assertion
   // URL
await expect(page).toHaveURL('https://example.com/');
await expect(page).toHaveURL(/.*checkout/);

// Title
await expect(page).toHaveTitle('My App');
  
