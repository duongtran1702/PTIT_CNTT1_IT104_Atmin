"use strict";
const scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
const avgScore = (scores.reduce((sum, tmp) => sum + tmp, 0) / scores.length).toFixed(2);
console.log('Average score: ', avgScore);
