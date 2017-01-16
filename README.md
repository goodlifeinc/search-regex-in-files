
## Description
Simple plugin to search for regex matches in files and folders.
Results are written in well formated XLSX file.

## Current Version
1.0.5

## Author
Evgeni Atanasov

## Usage
This is a simple example usage:
```javascript
"use strict";

var generate = require( 'search-regex-in-files' );

var regex = /GetTranslation\(\s*['|\"](\S*)['|\"]\s*\)/g;
var filesPath = "D:\\Projects\\sample\\pages\\a2c";
var translationFilePath = "D:\\Projects\\sample\\Translations.json";

generate( regex, filesPath, translationFilePath );
```