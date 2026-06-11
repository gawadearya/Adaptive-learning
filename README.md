# Adaptive Instruction in E-Learning Computer Programming

## Overview

Adaptive Instruction in E-Learning Computer Programming is a web-based learning platform designed to provide a personalized learning experience for programming students. The system dynamically adjusts quiz difficulty based on user performance and classifies learners into different proficiency levels.

The project aims to overcome the limitations of traditional "one-size-fits-all" learning systems by adapting assessments according to the learner's understanding and progress.

## Features

* User Registration and Login
* Programming Language Selection
* Adaptive Quiz System
* Dynamic Difficulty Adjustment (Easy, Medium, Hard)
* Performance Evaluation
* Learner Classification:

  * Struggling
  * Developing
  * Mastery
* Topic-wise Performance Analysis
* Interactive Dashboard
* Learning Progress Visualization
* Local Storage-Based Data Management

## Technologies Used

### Frontend

* HTML
* CSS
* Bootstrap
* JavaScript

### Visualization

* Chart.js

### Storage

* Browser Local Storage

## System Workflow

1. User registers or logs in.
2. User selects a programming language.
3. Quiz starts at Medium difficulty.
4. Performance is continuously evaluated.
5. Difficulty level is adjusted dynamically.
6. Final score is calculated.
7. Learner status is determined.
8. Dashboard displays performance analytics and weak areas.

## Difficulty Adaptation Logic

* Performance < 45 → Easy
* Performance 45–85 → Medium
* Performance > 85 → Hard

## Learner Classification

| Score   | Status     |
| ------- | ---------- |
| 0 – 7   | Struggling |
| 8 – 12  | Developing |
| 13 – 15 | Mastery    |

## Project Structure

```text
Adaptive-Elearning-System/
│
├── index.html
├── home.html
├── login.html
├── signup.html
├── quiz.html
├── dashboard.html
│
├── quiz.js
├── dashboard.js
├── fuzzy.engine.js
│
└── README.md
```

## Future Enhancements

* Machine Learning-based personalization
* Coding assessments with code editor
* Automated code evaluation
* Personalized topic recommendations
* Advanced analytics dashboard
* Gamification features (Badges, Levels, Leaderboards)

