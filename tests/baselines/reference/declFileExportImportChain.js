//// [tests/cases/compiler/declFileExportImportChain.ts] ////

//// [declFileExportImportChain_a.ts]

module m1 {
    export module m2 {
        export class c1 {
        }
    }
}
export = m1;

//// [declFileExportImportChain_b.ts]
export import a = require("declFileExportImportChain_a");

//// [declFileExportImportChain_b1.ts]
import b = require("declFileExportImportChain_b");
export = b;

//// [declFileExportImportChain_c.ts]
export import b1 = require("declFileExportImportChain_b1");

//// [declFileExportImportChain_d.ts]
import c = require("declFileExportImportChain_c");
export var x: c.b1.a.m2.c1;

//// [declFileExportImportChain_a.js]
define(["require", "exports"], function (require, exports) {
    var m1;
    (function (m1) {
        (function (m2) {
            var c1 = (function () {
                function c1() {
                }
                return c1;
            })();
            m2.c1 = c1;
        })(m1.m2 || (m1.m2 = {}));
        var m2 = m1.m2;
    })(m1 || (m1 = {}));
    return m1;
});
//// [declFileExportImportChain_b.js]
define(["require", "exports", "declFileExportImportChain_a"], function (require, exports, a) {
    exports.a = a;
});
//// [declFileExportImportChain_b1.js]
define(["require", "exports", "declFileExportImportChain_b"], function (require, exports, b) {
    return b;
});
//// [declFileExportImportChain_c.js]
define(["require", "exports", "declFileExportImportChain_b1"], function (require, exports, b1) {
    exports.b1 = b1;
});
//// [declFileExportImportChain_d.js]
define(["require", "exports"], function (require, exports) {
    exports.x;
});


//// [declFileExportImportChain_a.d.ts]
declare module m1 {
    module m2 {
        class c1 {
        }
    }
}
export = m1;
//// [declFileExportImportChain_b.d.ts]
export import a = require("declFileExportImportChain_a");
//// [declFileExportImportChain_b1.d.ts]
export = b;
//// [declFileExportImportChain_c.d.ts]
export import b1 = require("declFileExportImportChain_b1");
//// [declFileExportImportChain_d.d.ts]
export declare var x;
