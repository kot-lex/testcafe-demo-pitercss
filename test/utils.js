import { Selector } from 'testcafe';

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export async function clickRandomElement(t, selector) {
    const elementsSelector = Selector(selector, { visibilityCheck: true });
    const elementsCount = await elementsSelector().count;
    
    const elementSelector = elementsSelector.nth(getRandomInt(elementsCount));
    
    await t.click(elementSelector);
}