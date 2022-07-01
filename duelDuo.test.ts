
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test('Draw buttion display id', async () => {
//     await driver.findElement(By.id("choices"))
//     await driver.sleep(3000)
// }) 


// test('Add to Duo', async () => {
//     await driver.findElement(By.id("player-duo"))
//     await driver.sleep(3000)
// }) 