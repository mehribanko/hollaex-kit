'use strict';

const Promise = require('bluebird');
// const ses = require('../config/aws')('ses');
const { loggerEmail } = require('../config/logger');

// const sendAwsRawEmail = (params) =>
// 	new Promise((resolve, reject) => {
// 		ses.sendRawEmail(params, (err, data) => {
// 			if (err) {
// 				loggerEmail.error('mail/index/sendRawEmail', err);
// 				reject(err);
// 			}
// 			resolve(data);
// 		});
// 	});

// const sendAwsEmail = (params) =>
// 	new Promise((resolve, reject) => {
// 		ses.sendEmail(params, (err, data) => {
// 			if (err) {
// 				loggerEmail.error('mail/index/sendEmail', err);
// 				reject(err);
// 			}
// 			resolve(data);
// 		});
// 	});

const momentTz = require('moment-timezone');
const moment = require('moment');
const geoip = require('geoip-lite');
const { FORMATDATE } = require('./strings');

const DEFAULT_LANGUAGE = require('../init').getConfiguration().constants.defaults.language;
const SMTP_SERVER = require('../init').getConfiguration().constants.smtp.server;
const SMTP_PORT = require('../init').getConfiguration().constants.smtp.port;
const SMTP_USER = require('../init').getConfiguration().constants.smtp.user;
const SMTP_PASSWORD = require('../init').getSecrets().smtp.password;
const DEFAULT_TIMEZONE = require('../init').getConfiguration().constants.emails.timezone;

const formatTimezone = (date, timezone = DEFAULT_TIMEZONE) => {
	let tzTime;
	if (timezone) {
		tzTime = momentTz.tz(date, timezone).format(FORMATDATE);
	} else {
		tzTime = moment(date).format(FORMATDATE);
	}
	return tzTime;
};

const formatDate = (
	date,
	language = DEFAULT_LANGUAGE,
	timezone = DEFAULT_TIMEZONE
) => {
	const momentDate = moment(date);
	let formatedDate;
	if (timezone) {
		formatedDate = momentDate.tz(timezone).format(FORMATDATE);
	} else {
		formatedDate = momentDate.format(FORMATDATE);
	}
	return formatedDate;
};

const getCountryFromIp = (ip) => {
	const geo = geoip.lookup(ip);
	if (!geo) {
		return '';
	}
	return `${geo.city ? `${geo.city}, ` : ''}${
		geo.country ? `${geo.country}` : ''
	}`;
};

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
	host: SMTP_SERVER,
	port: SMTP_PORT,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASSWORD
	},
	logger: true,
});

const sendSMTPEmail = (params) => {
	return transport.sendMail(params);
};

module.exports = {
	// sendAwsEmail,
	// sendAwsRawEmail,
	formatDate,
	formatTimezone,
	getCountryFromIp,
	sendSMTPEmail
};
