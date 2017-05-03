var assert = require("assert");

describe("Batería de pruebas", function() {
    describe("#indexOf()", function() {
        it("Debe devolver -1 cuando el valor no esté", function() {
            assert.equal(-1, [1, 2, 3, ].indexOf(4));
        });
    });
});