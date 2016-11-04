describe("Calculator tests", function(){
    describe("add", function(){
        
        it('1 + 1 should be equal 2', function() {
            expect(calculator.add(1, 2)).toBe(3);
        });
            
    });

    describe("sub", function(){
        it('1 - 1 should be equal 0', function() {
            expect(calculator.sub(1, 1)).toBe(0);
        });
    });

});