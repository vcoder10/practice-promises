/**
 * In this task, you will simulate a situation where you need to process multiple asynchronous operations (promises) 
 * in parallel but with different priorities. 
 * Some tasks should have a higher priority and finish earlier than others, even if they take longer to execute. 
 * You'll need to manage both the execution and the results properly.

Task
Create a function processTasksWithPriority(tasks) where:

Each task has a promise and a priority (e.g., {promise: myPromise, priority: 1}).
Higher priority numbers mean the task should be resolved first, even if it takes longer.
Process all tasks in parallel, but ensure that higher-priority tasks are logged first, regardless of their completion order.
Instructions:

Create an array of tasks where each task is an object containing:
A promise (use setTimeout to simulate delayed resolution).
A priority value.
Process all tasks in parallel using Promise.allSettled.
Ensure that results are printed in the order of task priority (from highest to lowest), 
even if the promise resolves at different times.
Log both the success and failure of each task.
 */
