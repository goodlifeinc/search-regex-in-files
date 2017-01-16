"use strict";

var generate = require( './lib/util' );

var regex = /GetTranslation\(\s*['|\"](\S*)['|\"]\s*\)/g;
var filesPath = "D:\\Projects\\UTNet4_MC\\utNetPresentationLayer\\utNetAgentApplication\\pages\\client\\transfer\\a2c";
var translationFilePath = "D:\\Projects\\UTNet4_MC\\utNetDataLayer\\utNetData\\system\\MicroCredAgents\\utNetTranslations.json";

generate( regex, filesPath, translationFilePath );
