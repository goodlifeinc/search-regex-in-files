"use strict";

var generate = require( './lib/util' );

var regex = /GetTranslation\(\s*['|\"](\S*)['|\"]\s*\)/g;
var filesPath = "D:\\Projects\\sample\\pages\\client\\transfer\\a2c";
var translationFilePath = "D:\\Projectss\\sample\\utNetTranslations.json";

generate( regex, filesPath, translationFilePath );
