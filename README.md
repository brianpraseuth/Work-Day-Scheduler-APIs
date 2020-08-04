# 05 Third-Party APIs: Work Day Scheduler
Created a simple work day scheduler in which the day was divided in to hour long blocks. The user can type in the text box of each hour and save using the save button. User input will be stored to local storage, so the information will still be present if page is refreshed. 

![Screen Shot 2020-08-04 at 9 15 30 AM](https://user-images.githubusercontent.com/66890142/89318012-11e33300-d633-11ea-99b3-6fb6d6c6fc26.png)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
