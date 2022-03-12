import nodemailer from 'nodemailer';
import fs from 'fs';
import ejs from 'ejs';
import juice from 'juice';
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const userSignUp = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = `mailing/templates/${templateName}.html`;
  const options = {
    ...restOfOptions,
  };

  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, templateVars);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
  }
  return transporter.sendMail(options);
};

const userUpdate = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = `mailing/templates/${templateName}.html`;
  const options = {
    ...restOfOptions,
  };

  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, templateVars);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
  }
  return transporter.sendMail(options);
};


const otpSend= async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = `mailing/templates/${templateName}.html`;
  const options = {
    ...restOfOptions,
  };

  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, templateVars);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
  }
  return transporter.sendMail(options);
};


const loginOtpSend = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = `mailing/templates/${templateName}.html`;
  const options = {
    ...restOfOptions,
  };

  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, templateVars);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
  }
  return transporter.sendMail(options);
};

export { userSignUp, userUpdate, otpSend,loginOtpSend };
