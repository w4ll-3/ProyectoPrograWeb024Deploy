import angular from "../public/svg/skills/angular.svg";
import aws from "../public/svg/skills/aws.svg";
import azure from "../public/svg/skills/azure.svg";
import bootstrap from "../public/svg/skills/bootstrap.svg";
import css from "../public/svg/skills/css.svg";
import figma from "../public/svg/skills/figma.svg";
import firebase from "../public/svg/skills/firebase.svg";
import gcp from "../public/svg/skills/gcp.svg";
import git from "../public/svg/skills/git.svg";
import graphql from "../public/svg/skills/graphql.svg";
import html from "../public/svg/skills/html.svg";
import ionic from "../public/svg/skills/ionic.svg";
import javascript from "../public/svg/skills/javascript.svg";
import markdown from "../public/svg/skills/markdown.svg";
import materialui from "../public/svg/skills/materialui.svg";
import microsoftoffice from "../public/svg/skills/microsoftoffice.svg";
import mongoDB from "../public/svg/skills/mongoDB.svg";
import mysql from "../public/svg/skills/mysql.svg";
import nextJS from "../public/svg/skills/nextJS.svg";
import postgresql from "../public/svg/skills/postgresql.svg";
import python from "../public/svg/skills/python.svg";
import react from "../public/svg/skills/react.svg";
import sass from "../public/svg/skills/sass.svg";
import selenium from "../public/svg/skills/selenium.svg";
import tailwind from "../public/svg/skills/tailwind.svg";
import typescript from "../public/svg/skills/typescript.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  const skillMap = {
    angular: angular,
    aws: aws,
    azure: azure,
    bootstrap: bootstrap,
    css: css,
    figma: figma,
    firebase: firebase,
    gcp: gcp,
    git: git,
    graphql: graphql,
    html: html,
    ionic: ionic,
    javascript: javascript,
    markdown: markdown,
    materialui: materialui,
    "ms office": microsoftoffice,
    mongodb: mongoDB,
    mysql: mysql,
    nextjs: nextJS,
    postgresql: postgresql,
    python: python,
    react: react,
    sass: sass,
    selenium: selenium,
    tailwind: tailwind,
    typescript: typescript,
  };

  return skillMap[skillID];
};
