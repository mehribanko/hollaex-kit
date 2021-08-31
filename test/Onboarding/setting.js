
// Generated by Selenium IDE
//testing the login function of Hollaex Kit
//Using Selenium webderiver and Mocha/Chai
//given, when and then
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { expect } = require('chai');
const { Console } = require('console');
const path = require('path');
const logPath = path.join(__dirname, './.log',path.basename(__filename,'.js'));
const reportPath = path.join(__dirname, './../Report',path.dirname(__filename).replace(path.dirname(__dirname),''),path.basename(__filename,'.js'));
const util = require ('./../Utils/Utils.js');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
util.makeReportDir(reportPath);
util.makeReportDir(logPath);
require('console-stamp')(console, { 
	format: ':date(yyyy/mm/dd HH:MM:ss.l)|' 
} );
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
let userName = process.env.ADMIN_USER;
let passWord = process.env.ADMIN_PASS;
let logInPage = process.env.LOGIN_PAGE;
let Website = process.env.WEBSITE;
describe('Setting', function() {
	this.timeout(300000);
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
		await driver.manage().window().maximize();
	});
	afterEach(async function() {
	//	await driver.quit();
	});
	it('Setting', async function() {
	   console.log(' Test name: Setting');
		console.log(' Step # | name | target | value');
		
		console.log(' 1 | open | /account | ');
		await driver.get(logInPage);
		await sleep(10000);
		
		console.log(' 2 | type | name=email | USER@bitholla.com');
		await driver.findElement(By.name('email')).sendKeys(userName);
		await sleep(3000);

		console.log(' 3 | type | name=password | bitholla@bitholla.com');
		await driver.findElement(By.name('password')).sendKeys(passWord);
		await sleep(4000);

		console.log(' 4 | click | name=email | ');
		await driver.findElement(By.name('email')).click();
		
		console.log(' 5 | click | css=.holla-button | ');
		await driver.wait(until.elementIsEnabled(await driver.findElement(By.css('.holla-button'))), 50000);
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(4000);

		console.log(' 6 | click | css=.d-flex:nth-child(6) > .side-bar-txt > .edit-wrapper__container | ');
		await driver.findElement(By.css('.d-flex:nth-child(6) > .side-bar-txt > .edit-wrapper__container')).click();
		await sleep(3000);

		console.log(' 7 | click | css=.tab_item:nth-child(3) > div | ');
		await driver.findElement(By.css('.tab_item:nth-child(3) > div')).click();
		await sleep(3000);

		console.log(' 8 | click | id=language-en-undefined | ');
		await driver.findElement(By.id('language-en-undefined')).click();
		await sleep(3000);

		console.log(' 9 | click | id=language-es-1 | ');
		await driver.findElement(By.id('language-es-1')).click();
		await sleep(3000);

		console.log(' 10 | click | css=.holla-button | ');
		{
			const element = await driver.findElement(By.css('.holla-button'));
			await driver.executeScript('arguments[0].scrollIntoView(true);', element);
		}
		await sleep(3000);
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);
		
		console.log(' 11 | click | css=.d-flex > .field-label | ');
		await driver.findElement(By.css('.d-flex > .field-label')).click();
		await sleep(3000);

		console.log(' 12 | assertText | css=.d-flex > .field-label | Preferencia de Idioma (Incluye correos electrònicos)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'Preferencia de Idioma (Incluye correos electrònicos)');
		await sleep(3000);

		console.log(' 13 | click | id=language-es-undefined | ');
		await driver.findElement(By.id('language-es-undefined')).click();
		await sleep(3000);

		console.log(' 14 | click | id=language-pt-2 | ');
		await driver.findElement(By.id('language-pt-2')).click();
		await sleep(3000);

		console.log(' 15 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 16 | click | css=.settings-form | ');
		await driver.findElement(By.css('.settings-form')).click();
		await sleep(3000);

		console.log(' 17 | assertText | css=.d-flex > .field-label | Preferências de idioma (inclui e-mails)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'Preferências de idioma (inclui e-mails)');
		await sleep(3000);

		console.log(' 18 | click | id=language-pt-undefined | ');
		await driver.findElement(By.id('language-pt-undefined')).click();
		await sleep(3000);

		console.log(' 19 | click | id=language-ru-3 | ');
		await driver.findElement(By.id('language-ru-3')).click();
		await sleep(3000);

		console.log(' 20 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 21 | click | css=.settings-form | ');
		await driver.findElement(By.css('.settings-form')).click();
		await sleep(3000);

		console.log(' 22 | assertText | css=.d-flex > .field-label | Language preferences (Includes Emails)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'Language preferences (Includes Emails)');
		await sleep(3000);

		console.log(' 23 | click | id=language-ru-undefined | ');
		await driver.findElement(By.id('language-ru-undefined')).click();
		await sleep(3000);

		console.log(' 24 | click | id=language-ko-4 | ');
		await driver.findElement(By.id('language-ko-4')).click();
		await sleep(3000);

		console.log(' 25 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 26 | click | css=.field-label-wrapper > .d-flex | ');
		await driver.findElement(By.css('.field-label-wrapper > .d-flex')).click();
		await sleep(3000);

		console.log(' 27 | assertText | css=.d-flex > .field-label | 언어설정 (이메일수신포함)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == '언어설정 (이메일수신포함)');
		await sleep(3000);
		
		console.log(' 28 | click | id=language-ko-undefined | ')
		await driver.findElement(By.id('language-ko-undefined')).click();
		await sleep(3000);

		console.log(' 29 | click | id=language-ja-5 | ');
		await driver.findElement(By.id('language-ja-5')).click();
		await sleep(3000);

		console.log(' 30 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 31 | click | css=.field-label-wrapper > .d-flex | ');
		await driver.findElement(By.css('.field-label-wrapper > .d-flex')).click();
		await sleep(3000);

		console.log(' 32 | assertText | css=.d-flex > .field-label | 言語設定 (メールを含む)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == '言語設定 (メールを含む)');
		await sleep(3000);

		console.log(' 33 | click | css=.field-children | ');
		await driver.findElement(By.css('.field-children')).click();
		// 30 | click | id=language-ja-undefined | 
		// await sleep(3000);
		// await driver.findElement(By.id('language-ja-undefined')).click();
		// // 31 | click | id=language-zh-6 | 
		await sleep(3000);

		console.log(' 34 | click | id=language-zh-6 | ');
		await driver.findElement(By.id('language-zh-6')).click();
		await sleep(3000);

		console.log(' 35 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 36 | click | css=.field-label-wrapper:nth-child(1) | ');
		await driver.findElement(By.css('.field-label-wrapper:nth-child(1)')).click();
		await sleep(3000);

		console.log(' 37 | assertText | css=.d-flex > .field-label | 语言设置（包括邮件）');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == '语言设置（包括邮件）');
		await sleep(3000);

		console.log(' 38 | click | id=language-zh-undefined | ');
		await driver.findElement(By.id('language-zh-undefined')).click();
		await sleep(3000);

		console.log(' 39 | click | id=language-vi-7 | ');
		await driver.findElement(By.id('language-vi-7')).click();
		await sleep(3000);

		console.log(' 40 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 41 | click | css=.field-label-wrapper > .d-flex | ');
		await driver.findElement(By.css('.field-label-wrapper > .d-flex')).click();
		await sleep(3000);

		console.log(' 42 | assertText | css=.d-flex > .field-label | Cài đặt ngôn ngữ (Bao gồm email)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'Cài đặt ngôn ngữ (Bao gồm email)');
		await sleep(3000);

		console.log(' 43 | click | id=language-vi-undefined | ');
		await driver.findElement(By.id('language-vi-undefined')).click();
		await sleep(3000);

		console.log(' 44 | click | id=language-fa-8 | ');
		await driver.findElement(By.id('language-fa-8')).click();
		await sleep(3000);

		console.log(' 45 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 46 | click | css=.pr-4 | ');
		await driver.findElement(By.css('.pr-4')).click();
		await sleep(3000);

		console.log(' 47 | assertText | css=.d-flex > .field-label | انتخاب زبان (این گزینه شامل ایمیل های ارسالی از طرف HollaEx نیز می شود)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'انتخاب زبان (این گزینه شامل ایمیل های ارسالی از طرف HollaEx نیز می شود)');
		await sleep(3000);

		console.log(' 48 | click | id=language-fa-undefined | ');
		await driver.findElement(By.id('language-fa-undefined')).click();
		await sleep(3000);

		console.log(' 49 | click | id=language-ar-9 | ');
		await driver.findElement(By.id('language-ar-9')).click();
		await sleep(3000);

		console.log(' 50 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 51 | click | css=.pr-4 | ');
		await driver.findElement(By.css('.pr-4')).click();
		await sleep(3000);

		console.log(' 49 | assertText | css=.d-flex > .field-label | تفضيلات اللغة (تشمل رسائل البريد الإلكتروني)');
		assert(await driver.findElement(By.css('.d-flex > .field-label')).getText() == 'تفضيلات اللغة (تشمل رسائل البريد الإلكتروني)');
		await sleep(3000);
		
		console.log(' 50 | click | id=language-ar-undefined | ');
		await driver.findElement(By.id('language-ar-undefined')).click();
		await sleep(3000);

		console.log(' 51 | click | id=language-en-0 | ');
		await driver.findElement(By.id('language-en-0')).click();
		await sleep(3000);

		console.log(' 52 | click | css=.holla-button | ');
		await driver.findElement(By.css('.holla-button')).click();
		await sleep(3000);

		console.log(' 53 | click | css=.settings-form | ');
		await driver.findElement(By.css('.settings-form')).click();
		await sleep(3000);

		console.log('should be fixed')
		console.log(' 54 | assertText | css=.settings-form | Language\nLanguage preferences (Includes Emails)\nEnglish');
		assert(await driver.findElement(By.css('.settings-form')).getText() == 'Language preferences (Includes Emails)');
		await sleep(3000);
		
		console.log('This is the EndOfTest');
	});
});
