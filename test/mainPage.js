import { Selector } from 'testcafe';

fixture('Main Page')
    .page('https://wsd.events');

test('Page opens successfully', async t => t);

test('More events button changes amout of events', async t => {

    const moreEventsButtonSelector = Selector('.calendar__button');
    const eventsSelector = Selector('.calendar__item:not(.calendar__item--hidden) .calendar__event', { visibilityCheck: true });
    
    const eventsCount = await eventsSelector().count;
    
    await t.click(moreEventsButtonSelector);
    const expanedEventsCount = await eventsSelector().count;

    await t.expect(expanedEventsCount).gt(eventsCount);
});