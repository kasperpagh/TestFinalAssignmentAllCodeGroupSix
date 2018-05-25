const {Builder, By, Key, until} = require('selenium-webdriver');
junit = require("junit")

var it = junit({
  filter: (msg) => msg.indexOf("test")
});
let driver =new Builder().forBrowser('firefox').build();
driver.get('http://167.99.237.199/');
async function mongoQ1() {
  try {
    await driver.findElement(By.id('mongo')).click()
    await driver.findElement(By.id("1")).findElement(By.tagName("input")).click()
    await driver.findElement(By.id("city")).sendKeys("Copenhagen");
    await driver.findElement(By.id("run")).click()
    let table = await driver.findElement(By.tagName("tbody"));
    let res = await driver.wait(function() {
      return driver.findElement(By.tagName("tbody")).getText().then(function(title) {
        if(title != ''){
          it("mongoQ1", () => it.eq(title.split("\n").length, 528));
          return title.split("\n").length
        }else{
        return title != '';
        }
      });
    }, 10000) 
  }catch(e)
  {
    console.log(e)
  } finally {
    //await driver.quit();
  }
};

async function psqlQ4() {
  try {
    await driver.findElement(By.id('psql')).click()
    await driver.findElement(By.id("4")).findElement(By.tagName("input")).click()
    await driver.findElement(By.id("lat")).sendKeys("53.3439");
    await driver.findElement(By.id("lng")).sendKeys("23.0622");
    await driver.findElement(By.id("run")).click()
    let table = await driver.findElement(By.tagName("tbody"));
    let res = await driver.wait(function() {
      return driver.findElement(By.tagName("tbody")).getText().then(function(title) {
        if(title != ''){
          it("psqlQ4", () => it.eq(title.split("\n").length, 56));
          return title.split("\n").length
        }else{
        return title != '';
        }
      });
    }, 10000) 
  }catch(e)
  {
    console.log(e)
  } finally {
    //await driver.quit();
  }
};
async function Neo4jQ4() {
  try {
    let psql = await driver.findElement(By.id('neo4j'))
    psql.click()
    await driver.findElement(By.id("4")).findElement(By.tagName("input")).click()
    await driver.findElement(By.id("lat")).sendKeys("53.3439");
    await driver.findElement(By.id("lng")).sendKeys("23.0622");
    await driver.findElement(By.id("run")).click()
    let table = await driver.findElement(By.tagName("tbody"));
    let res = await driver.wait(function() {
      return driver.findElement(By.tagName("tbody")).getText().then(function(title) {
        if(title != ''){
          it("psqlQ4", () => it.eq(title.split("\n").length, 56));
          return title.split("\n").length
        }else{
        return title != '';
        }
      });
    }, 10000) 
  }catch(e)
  {
    console.log(e)
  } finally {
    //await driver.quit();
  }
};


psqlQ4().then(()=>{
  mongoQ1().then(()=>{
    Neo4jQ4().then(()=>{
      driver.close()
    });
  });
});
