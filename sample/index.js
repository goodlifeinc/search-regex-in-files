"use strict";

var generate = require( '../lib/' );

var regex = /GetTranslation\(\s*['|\"](\S*)['|\"]\s*\)/g;
var filesPath = "D:\\Projects\\sample\\pages\\client\\transfer\\a2c";
var translationFilePath = "D:\\Projects\\sample\\Translations.json";

generate( regex, filesPath, translationFilePath );
