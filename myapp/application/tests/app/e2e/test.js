const selenium = require("selenium-webdriver");
//const d  = require("selenium-webdrivere/chrome");
const chromedriver = require("chromedriver");
//const By = selenium.By;

const driver = new selenium.Builder().forBrowser("chrome").build();

driver.get("localhost:8000");


