
ICE:

Instruction:

Generate playwright typescript code for leaftaps application in creating a lead using Page Object Model, create separate folder for tests and pages.
Add comments for every step.
Follow coding best practices.
Create test files under "tests" and page files under "pages".
Data credentials: username = democsr2, password = crmsfa.
Remaining test input data should use first name= Ravi, last name = R, company name=testleaf.
Compile and run after generation.
Debug for failures post-run.
Show test report at the end.

Context:

You are an AI assistant generating Playwright TypeScript code for the LeaFtaps application.

Example:

import test from "playwright/test"; 
test("Login page ", async ({ page }) => { 
await page.goto("http://leaftaps.com/opentaps/control/main") 
await page.locator("#username").fill("Democsr2") 
await page.fill("#password", "crmsfa") 
await page.click(".decorativeSubmit") 
await page.click(text='CRM/SFA') 
const pageTitle = await page.title() 
console.log(pageTitle) 
await page.waitForTimeout(5000)
})

Step 4: Install GitHub Copilot Click the Extensions icon (or press Ctrl+Shift+X). Search and install GitHub Copilot and GitHub Copilot Chat.

Step 5: Sign in to GitHub Click Accounts (bottom-right of VS Code). Select “Sign in with GitHub to use GitHub Copilot.” Complete the authentication in your browser.

Step 6: Use Copilot with MCP Click the Copilot icon (top-right of VS Code).

Switch mode from Chat to Agent:

Attach your code-generate.md file using the pin icon.

In the Add context(#) box, type: "Generate code"

Hit enter — watch your Playwright POM structure appear like magic.