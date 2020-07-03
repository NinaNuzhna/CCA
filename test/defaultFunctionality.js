const selectorCnt = require('../data/selectors.json').counter;
const expectedDCF = require('../data/expected.json').defaultCounterFunctionality;
const expectedCnt = require('./../data/expected.json').counter;
const inputNumber = require('./../helpers/inputNumber');

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

        it('TC-042 LLF accept 1', function () {
            inputNumber("left", expectedDCF.inputMin);
            const result = $(selectorCnt.error).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-043 ULF accept 9', () => {
            inputNumber("right", expectedDCF.inputMax);
            const result = $(selectorCnt.error).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons',() => {
            $(selectorCnt.upperInputField).click();
            browser.keys('Backspace');
            browser.keys(expectedDCF.inputMin);
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed());
            expect(actual.length).toEqual(expectedDCF.blackBtnTC44TC45);
        })

        it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons',() => {
            browser.refresh();
            inputNumber("right", expectedDCF.inputMax);
            inputNumber("left", expectedDCF.inputMax);
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed());
            expect(actual.length).toEqual(expectedDCF.blackBtnTC44TC45);
        })

        it('TC-046 Reset button works', () => {
            $$(selectorCnt.blackBtn)[1].click();
            $(selectorCnt.resetBtn).click();
            const countValue = $(expectedCnt.countValue).getText();
            expect(countValue).toEqual(expectedCnt.countValue);
        })



    });

});
