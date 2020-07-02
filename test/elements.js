const selectorGnrl = require('../data/selectors.json').general;
const expectedGnrl = require('./../data/expected.json').general;
const selectorCnt = require('../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;

describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', () => {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });
    describe('Elements exist', function () {
        it('TC-002 Header', () => {
            const actual = $(selectorGnrl.header).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', () => {
            const actual = $(selectorGnrl.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', () => {
            const actual = $(selectorGnrl.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-005 Label for Add Name Field', () => {
            const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })
        it('TC-006 Default Value Field', () => {
            const actual = $(selectorGnrl.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Name Field', () => {
            const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.defaultValueFieldLabel).length - 1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', () => {
            const actual = $(selectorGnrl.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('Elements value', function () {
        it('TC-009 Header = Counter', () => {
            const actual = $(selectorGnrl.header).getText();
            expect(actual).toEqual(expectedGnrl.header);
        })

        it('TC-010 Total Result = Total: 0', () => {
            const actual = $(selectorGnrl.totalResult).getText();
            expect(actual).toEqual(expectedGnrl.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', () => {
            const actual = $(selectorGnrl.addNameField).getValue()
            expect(actual).toEqual(expectedGnrl.addNameField);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', () => {
            const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 2].getText();
            expect(actual).toEqual(expectedGnrl.addNameFieldLabel);
        })

        it('TC-013  Label for Default Value Field = Enter Initial Count:', () => {
            const actual = $(selectorGnrl.defaultValueField).getValue();
            expect(actual).toEqual(expectedGnrl.defaultValueField);
        })

        it('TC-014  Placeholder for Default Calue Field = 50', () => {
            const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length - 1].getText();
            expect(actual).toEqual(expectedGnrl.defaultValueFieldLabel);
        })

        it('TC-015 Add Counter = ADD COUNTER', () => {
            const actual = $(selectorGnrl.addCounterBtn).getText();
            expect(actual).toEqual(expectedGnrl.addCounterBtn);
        })

    });

    describe('Default Elements Counter exist', function () {
        it('TC-016 Counter Name', () => {
            const actual = $$(selectorCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-017 Count Value', () => {
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 LLF', () => {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF', () => {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021  Default Sub and Add Buttons', () => {
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed());
            expect(actual.length).toEqual(expectedCnt.defaultNumberBlackBtn);
        })

        it('TC-022  Delete button', () => {
            const actual = $(selectorCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-023  Reset button', () => {
            const actual = $(selectorCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024  Edit Name Field', () => {
            const actual = $(selectorCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-025  Label for Edit Name Field', () => {
            const actual = $(selectorCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-026 Input for LLF', () => {
            $(selectorCnt.lowerLimitField).click();
            const actual = $(selectorCnt.lowerInputField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-027 Input for ULF', () => {
            $(selectorCnt.upperLimitField).click();
            const actual = $(selectorCnt.upperInputField).isDisplayed();
            expect(actual).toEqual(true);
        })
    });

    describe('Default Counter Elements Value', function () {
        it('TC-028 Counter Name = 1. Default Counter', () => {
            browser.refresh();
            const actual = $$(selectorCnt.counterName)[1].getText();
            expect(actual).toEqual(expectedCnt.counterName);
        })

        it('TC-029 Count Value = 0', function () {
            const actual = $(selectorCnt.countValue).getText();
            expect(actual).toEqual(expectedCnt.countValue);
        })

        it('TC-030 LLF = CHANGE STEP OPTIONS?', () => {
            const actual = $(selectorCnt.lowerLimitField).getText();
            expect(actual).toEqual(expectedCnt.lowerLimitField);
        })

        it('TC-032 ULF = CHANGE STEP OPTIONS?', () => {
            const actual = $(selectorCnt.upperLimitField).getText();
            expect(actual).toEqual(expectedCnt.upperLimitField);
        })

        it('TC-031 && TC-033  Default Buttons = -1, -2, -3, 1, 2, 3', () => {
            const actual = $$(selectorCnt.blackBtn).map(el => el.getText());
            expect(actual).toEqual(expectedCnt.blackBtn);
        })

        it('TC-034 Delete button = Delete', () => {
            const actual = $(selectorCnt.deleteBtn).getText();
            expect(actual).toEqual(expectedCnt.deleteBtn);
        })

        it('TC-035 Reset button = Reset', () => {
            const actual = $(selectorCnt.resetBtn).getText();
            expect(actual).toEqual(expectedCnt.resetBtn);
        })

        it('TC-036 Label = Edit Counter Title', () => {
            const actual = $(selectorCnt.editNameFieldLabel).getText();
            expect(actual).toEqual(expectedCnt.editNameFieldLabel);
        })

        it('TC-037 Placeholder for Edit Name Field = Default Counter', () => {
            const actual = $$(selectorCnt.editNameField)[0].getValue();
            expect(actual).toEqual(expectedCnt.editNameField);
        })

        it('TC-038 Input for LLF = 1', () => {
            $(selectorCnt.lowerLimitField).click();
            const actual = $(selectorCnt.lowerInputField).getValue();
            expect(actual).toEqual(expectedCnt.lowerInputField);
        })

        it('TC-039 Input for ULF = 3', () => {
            $(selectorCnt.upperLimitField).click();
            const actual = $(selectorCnt.upperInputField).getValue();
            expect(actual).toEqual(expectedCnt.upperInputField);
        })

    });

});
