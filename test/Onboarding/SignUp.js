//testing the login function of Hollaex Kit
//Using Selenium webderiver and Mocha/Chai
//given, when and then

const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const { expect } = require('chai');
const { Console } = require('console');
const path = require('path')
const logPath = path.join(__dirname, './.log',path.basename(__filename,'.js'));
const reportPath = path.join(__dirname, './../Report',path.dirname(__filename).replace(path.dirname(__dirname),''),path.basename(__filename,'.js'));
const util = require ('./../Utils/Utils.js');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
util.makeReportDir(reportPath);
util.makeReportDir(logPath);
require('console-stamp')(console, { 
    format: ':date(yyyy/mm/dd HH:MM:ss.l)|' 
} );
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
let User = process.env.NEW_USER;
let passWord = process.env.PASSWORD;
let signUpPage = process.env.SIGN_UP_PAGE;
let emailAdmin =process.env.Email_ADMIN_USERNAME;

const newUser = util.defineNewUser(User,4) ;
console.log(newUser);

describe('NewUserRequest', function() {
	this.timeout(100000);
	let driver;
	let vars;
	function sleep(ms) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}
	beforeEach(async function() {
		driver = await new Builder().forBrowser('chrome').build();
		vars = {};
		driver.manage().window().maximize();
	});
	afterEach(async function() {
		await driver.quit();
   
	});

	it('FillUpNewUserRequest', async function() {
		console.log('Test name: NewUserRequest');
		console.log(' Step # | name | target | value');
		
		console.log('1 | open | ',signUpPage);
		await driver.get(signUpPage);
		{	const title = await driver.getTitle();
			console.log(title);
			expect(title).to.equal(title);
		}
     
		console.log('2 | type | name=email |',newUser);
		await driver.wait(until.elementLocated(By.name('email')), 5000);
		await driver.findElement(By.name('email')).clear();
		await driver.findElement(By.name('email')).sendKeys(newUser);
     
		console.log('3 | type | name=password | password!');
		await driver.findElement(By.name('password')).clear();
		await driver.findElement(By.name('password')).sendKeys(passWord);
      
      
		console.log('4 | type | name=password_repeat | your password again!');
		await driver.findElement(By.name('password_repeat')).clear();
		await driver.findElement(By.name('password_repeat')).sendKeys(passWord);
		await sleep(2000);
		
		console.log('5 | click | name=terms |'); 
		await driver.findElement(By.name('terms')).click();
		await sleep(10000);
		
		console.log('6 | click | css=.holla-button |'); 
		await driver.wait(until.elementIsEnabled(await driver.findElement(By.css('.holla-button'))), 50000);
		await driver.findElement(By.css('.holla-button')).click();
		await driver.executeScript('window.scrollTo(0,0)');

		console.log('This is the EndOfTest');
	});

	it('Email Confirmation', async function() {
		console.log('Test name: Confirmation');
		console.log('Step # | name | target | value');
		
		await util.emailLogIn(driver,emailAdmin,passWord);
		
		await driver.wait(until.elementIsEnabled(await driver.findElement(By.css('.x-grid3-row:nth-child(1) .subject:nth-child(1) > .grid_compact:nth-child(1)'))), 50000);
		
		await driver.findElement(By.css('.x-grid3-row:nth-child(1) .subject:nth-child(1) > .grid_compact:nth-child(1)')).click();
	
		console.log('9 | doubleClick | css=.x-grid3-row:nth-child(1) .subject:nth-child(1) > .grid_compact:nth-child(1) | ');
		{
			const element = await driver.findElement(By.css('.x-grid3-row:nth-child(1) .subject:nth-child(1) > .grid_compact:nth-child(1)'));
			await driver.actions({ bridge: true}).doubleClick(element).perform();
		}
		
		console.log('10 | selectFrame | index=1 | ');
		await driver.switchTo().frame(1);
		await sleep(10000);
		
		console.log('12 | storeText | xpath=/html/body/pre/a[22] | content');
		vars['content'] = await driver.findElement(By.xpath('/html/body/pre/a[22]')).getText();
		const emailCont = await driver.findElement(By.css('pre')).getText();
		
		console.log('13 | echo | ${content} | ');
		console.log(vars['content']);
		
		console.log('14 | assertText | xpath=/html/body/pre/a[22] | ${content}');
		expect(vars['content']).to.equal(newUser.toLowerCase());
     
		console.log('15 | storeAttribute | xpath=/html/body/pre/a[26]@href | mytextlink');
		{
			const attribute = await driver.findElement(By.xpath('/html/body/pre/a[26]')).getAttribute('href');
			vars['mytextlink'] = attribute;
		}
		
		console.log('16 | echo | ${mytextlink} | ');
		console.log(vars['mytextlink']);
		console.log('17 | echo | \'xpath=/html/body/pre/a[26]\' | ');
		console.log('\'xpath=/html/body/pre/a[26]\'');
		console.log('18 | open | ${mytextlink} | ');
		
		const completedLink = await util.addRest(emailCont,vars['mytextlink']);
		await console.log(completedLink);
		await driver.get(completedLink);
		await sleep(1000);
		
		console.log('19 | selectFrame | relative=parent | ');
		await driver.switchTo().defaultContent();
		
		console.log('20 | click | css=.icon_title-wrapper | ');
		await driver.findElement(By.css('.icon_title-wrapper')).click();
		
		console.log('21 | assertNotText | css=.icon_title-text | Error');
		{
			const text = await driver.findElement(By.css('.icon_title-text')).getText();
			assert(text !== 'Error');
		}

		console.log('This is the EndOfTest');
	});
});