import {test, expect} from '@playwright/test'

test('test', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')
    await page.getByPlaceholder('What needs to be done?').click()
    await page.getByPlaceholder('What needs to be done?').fill('t') // I entered 'testing'
    await page.locator('html').click()
    await page.getByPlaceholder('What needs to be done?').click()
    await page.getByPlaceholder('What needs to be done?').fill('h') // I entered 'hello'
})
