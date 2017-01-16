"use strict";

var util = require( './lib/util' );

var regexp = new RegExp( /GetTranslation\(\s*['|"](\S*)['|"]\s*\)/g );

var files = util.walk( "PATH_TO_FILE_OR_FOLDER" );

var matches = util.search( regexp, files );

var translationFile = require( "PATH_TO_JSON_TRANSLATIONS_FILE" );

util.createAndSaveExcel( matches, translationFile );
