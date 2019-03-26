import { Selector } from 'testcafe';
import { clickRandomElement } from './utils';


fixture('Main Page')
    .page('https://wsd.events')
    .beforeEach(async t => {
    });

test('Page opens successfully', async t => t);

test('More events button changes amout of events', async t => {

    const moreEventsButtonSelector = Selector('.calendar__button');
    const eventsSelector = Selector('.calendar__item:not(.calendar__item--hidden) .calendar__event', { visibilityCheck: true });
    
    const eventsCount = await eventsSelector().count;
    
    await t.click(moreEventsButtonSelector);
    const expanedEventsCount = await eventsSelector().count;

    await t.expect(expanedEventsCount).gt(eventsCount);
});

test('Event link should open event page', async t => {
    await clickRandomElement(t, '.calendar__item:not(.calendar__item--hidden) .calendar__event a'); 
});