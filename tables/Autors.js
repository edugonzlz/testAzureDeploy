/**
 * Created by Edu on 17/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName": "string"
};


table.dynamicSchema = true;

/*
 *   Trigger para insert
 *
 * */

// table.insert(function (context) {
//
//     context.item.usuario = context.user.id;
//     return context.execute();
// });
//
//
// table.read(function (context) {
//     context.query.where({usuario : context.user.id});
//     return context.execute();
// });

/*
 * Permisos de acceso a la tabla
 *
 * */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'anonymous';


module.exports = table;