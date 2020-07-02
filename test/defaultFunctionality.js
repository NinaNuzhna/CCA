const selectorCnt = require('../data/selectors.json').counter;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;

describe('Default counter functionality', function () {

    describe('Calculation works', function () {

        it('TC-040 Calculation: Sub 1 works',  () => {
            browser.url('');
            const blackBtn = $$(selectorCnt.blackBtn)[0];
            blackBtn.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC040);
        })

        it('TC-041 Calculation: Add 3 works', () => {
            const blackBtn = $$(selectorCnt.blackBtn)[5];
            blackBtn.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC041);
        })

        it('TC-042 LLF accept 1', () => {

            const btn = $(selectorCnt.lowerLimitField);
            btn.click();
            const input = $(selectorCnt.lowerInputField);
            input.click();
            browser.keys('Backspace');
            browser.keys(expectedDCF.inputMin);
            const result = $(selectorCnt.errorMsg).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-043 ULF accept 9', () => {
            const btn = $(selectorCnt.upperLimitField);
            btn.click();
            const input = $(selectorCnt.upperInputField);
            input.click();
            browser.keys('Backspace');
            browser.keys(expectedDCF.inputMax);
            const result = $(selectorCnt.blackBtnTC42).getText();
            expect(result).toEqual(expectedDCF.blackBtnTC42);
        })

        // it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons',() => {
        //     const btn = $(selectorCnt.lowerLimitField);
        //     btn.click();
        //     const input = $(selectorCnt.lowerInputField);
        //     input.click();
        //     browser.keys('Backspace');
        //     browser.keys(expectedDCF.inputMin);
        //     const button = $(selectorCnt.upperLimitField);
        //     button.click();
        //     const input = $(selectorCnt.upperInputField);
        //     input.click();
        //     browser.keys('Backspace');
        //     browser.keys(expectedDCF.inputMin);
        //
        // })



    });

});
