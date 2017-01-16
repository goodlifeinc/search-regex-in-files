
## Description
Simple plugin to search for regex matches in files and folders.

## Current Version
1.0.0

## Author
Evgeni Atanasov

## Usage
This is a simple example usage:
```javascript
"use strict";

var generate = require( './lib/util' );

var regex = /GetTranslation\(\s*['|\"](\S*)['|\"]\s*\)/g;
var filesPath = "D:\\Projects\\sample\\pages\\a2c";
var translationFilePath = "D:\\Projects\\sample\\utNetTranslations.json";

generate( regex, filesPath, translationFilePath );
```