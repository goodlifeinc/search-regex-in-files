"use strict";

var fs = require( 'fs' );
var ex = require( 'msexcel-builder' );


var walk = function( dir ) {
    var results = []
    var list = fs.readdirSync( dir )
    list.forEach( function( file ) {
        file = dir + '/' + file
        var stat = fs.statSync( file )
        if ( stat && stat.isDirectory() ) {results = results.concat( walk( file ) )}
        else {results.push( file )}
    } )
    return results
}

var search = function( regexp, files ) {
    var results = [];
    files.forEach( function( file ) {
        var fileContets = fs.readFileSync( file ).toString();

        var matches;

        while ( matches = regexp.exec( fileContets ) ) {
            results = results.concat( matches[1] );
        }
    } );

    return results;
}

var createAndSaveExcel = function( matches, translationFile ) {
    var dir = './output';
    if ( !fs.existsSync( dir ) ) {
        fs.mkdirSync( dir );
    }
    var workbook = ex.createWorkbook( dir, 'extract-' + Date.now() + '.xlsx' );

    var sheet1 = workbook.createSheet( 'Sheet1', 10, matches.length );

    var index = 0;

    matches.forEach( function( item ) {
        index++;
        sheet1.set( 1, index, item );
        sheet1.set( 2, index, translationFile[item]["EN"] );
        sheet1.set( 3, index, translationFile[item]["FR"] );
    } )

    workbook.save( function( ok ) {
        if ( ok != null ) {
            workbook.cancel();
        }
        else {
            console.log( 'congratulations, your workbook created' );
        }
    } );

}

module.exports = function( regexpString, filesPath, translationFilePath ) {
    var files = walk( filesPath );

    var matches = search( regexpString, files );

    var translationFile = require( translationFilePath );

    createAndSaveExcel( matches, translationFile );
};
