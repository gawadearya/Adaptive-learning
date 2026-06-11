// 🎯 DATA BANK (45 Questions)
const allQuestions = [
    // ================= EASY LEVEL =================
    { q: "Which data type is used for whole numbers?", options: ["float", "int", "str", "list"], answer: "int", level: "easy", topic: "Data Types" },
    { q: "How do you create a list in Python?", options: ["(1,2)", "{1,2}", "[1,2]", "<1,2>"], answer: "[1,2]", level: "easy", topic: "Data Types" },
    { q: "What symbol is used for comments in Python?", options: ["//", "/*", "#", "--"], answer: "#", level: "easy", topic: "Data Types" },
    { q: "What is the first index of a list?", options: ["1", "0", "-1", "none"], answer: "0", level: "easy", topic: "Data Types" },
    { q: "How do you start a 'for' loop?", options: ["for i in range(5):", "loop 5:", "for(i=0; i<5)", "foreach i:"], answer: "for i in range(5):", level: "easy", topic: "Loops" },
    { q: "What does 'while True' create?", options: ["A syntax error", "An infinite loop", "A one-time loop", "A function"], answer: "An infinite loop", level: "easy", topic: "Loops" },
    { q: "Which loop is best for iterating over a list?", options: ["while", "for", "if", "def"], answer: "for", level: "easy", topic: "Loops" },
    { q: "Which keyword exits the current loop immediately?", options: ["exit", "stop", "break", "end"], answer: "break", level: "easy", topic: "Loops" },
    { q: "Which keyword is used to create a function?", options: ["func", "define", "def", "function"], answer: "def", level: "easy", topic: "Functions" },
    { q: "How do you call a function named 'start'?", options: ["call start()", "run start", "start()", "start[]"], answer: "start()", level: "easy", topic: "Functions" },
    { q: "What does 'return' do in a function?", options: ["Exits", "Sends a value back", "Prints", "Restarts"], answer: "Sends a value back", level: "easy", topic: "Functions" },
    { q: "Variables defined inside a function are called?", options: ["Global", "Static", "Local", "Public"], answer: "Local", level: "easy", topic: "Functions" },
    { q: "In OOP, what is a 'Class'?", options: ["A variable", "A blueprint", "A loop", "A data type"], answer: "A blueprint", level: "easy", topic: "OOP" },
    { q: "What keyword creates an instance of a class?", options: ["new", "Class()", "instance", "create"], answer: "Class()", level: "easy", topic: "OOP" },
    { q: "What is an 'Object' in OOP?", options: ["A function", "An instance of a class", "A loop", "A module"], answer: "An instance of a class", level: "easy", topic: "OOP" },

    // ================= MEDIUM LEVEL =================
    { q: "Which data type is immutable?", options: ["list", "dict", "set", "tuple"], answer: "tuple", level: "medium", topic: "Data Types" },
    { q: "How do you add an item to the end of a list?", options: ["add()", "insert()", "append()", "push()"], answer: "append()", level: "medium", topic: "Data Types" },
    { q: "What is the output of 2 ** 3?", options: ["6", "8", "9", "5"], answer: "8", level: "medium", topic: "Data Types" },
    { q: "Which method removes and returns the last item of a list?", options: ["remove()", "delete()", "pop()", "discard()"], answer: "pop()", level: "medium", topic: "Data Types" },
    { q: "What does 'break' do in a loop?", options: ["Skips one", "Exits the loop", "Restarts", "Crashes"], answer: "Exits the loop", level: "medium", topic: "Loops" },
    { q: "How do you skip the current iteration and move to next?", options: ["break", "pass", "continue", "skip"], answer: "continue", level: "medium", topic: "Loops" },
    { q: "What is the result of range(1, 4)?", options: ["1,2,3,4", "1,2,3", "0,1,2,3", "1,4"], answer: "1,2,3", level: "medium", topic: "Loops" },
    { q: "Which loop is used when the number of iterations is unknown?", options: ["for", "while", "do-while", "foreach"], answer: "while", level: "medium", topic: "Loops" },
    { q: "What is a 'parameter' in a function?", options: ["Return value", "Input variable", "Name", "Loop"], answer: "Input variable", level: "medium", topic: "Functions" },
    { q: "What happens if a function has no 'return'?", options: ["Error", "Returns None", "Returns 0", "Loops"], answer: "Returns None", level: "medium", topic: "Functions" },
    { q: "How do you define a function with an unknown number of arguments?", options: ["*args", "args[]", "all_args", "varargs"], answer: "*args", level: "medium", topic: "Functions" },
    { q: "What is the output of: print(type(len))?", options: ["<class 'int'>", "<class 'function'>", "<class 'builtin_function_or_method'>", "Error"], answer: "<class 'builtin_function_or_method'>", level: "medium", topic: "Functions" },
    { q: "In OOP, what does 'self' represent?", options: ["The class", "The current object", "Global", "First function"], answer: "The current object", level: "medium", topic: "OOP" },
    { q: "What is inheritance in OOP?", options: ["Copying", "Taking features from another", "Deleting", "Looping"], answer: "Taking features from another", level: "medium", topic: "OOP" },
    { q: "What is a constructor method called in Python?", options: ["__init__", "start()", "new()", "create()"], answer: "__init__", level: "medium", topic: "OOP" },

    // ================= HARD LEVEL =================
    { q: "What is the time complexity of looking up a value in a list by index?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)", level: "hard", topic: "Data Types" },
    { q: "What is the result of set([1, 2, 2, 3])?", options: ["{1,2,2,3}", "{1,2,3}", "[1,2,3]", "Error"], answer: "{1,2,3}", level: "hard", topic: "Data Types" },
    { q: "Which of these creates a deep copy of a list 'a'?", options: ["b = a", "b = a.copy()", "import copy; b = copy.deepcopy(a)", "b = list(a)"], answer: "import copy; b = copy.deepcopy(a)", level: "hard", topic: "Data Types" },
    { q: "What is the time complexity of appending to a list?", options: ["O(n)", "O(1) amortized", "O(log n)", "O(n^2)"], answer: "O(1) amortized", level: "hard", topic: "Data Types" },
    { q: "What is the output of [x for x in range(5) if x % 2 == 0]?", options: ["[1,3]", "[0,2,4]", "[0,1,2,3,4]", "[2,4]"], answer: "[0,2,4]", level: "hard", topic: "Loops" },
    { q: "What is a 'Nested' loop?", options: ["Infinite", "Loop inside loop", "Fast", "Loop with if"], answer: "Loop inside loop", level: "hard", topic: "Loops" },
    { q: "Which 'else' clause executes only if a loop completes without 'break'?", options: ["if-else", "for-else", "try-else", "while-if"], answer: "for-else", level: "hard", topic: "Loops" },
    { q: "What is the result of: [i*j for i in range(2) for j in range(2)]?", options: ["[0,0,0,1]", "[0,1,0,1]", "[0,1,2,3]", "Error"], answer: "[0,0,0,1]", level: "hard", topic: "Loops" },
    { q: "What is a lambda function?", options: ["Complex class", "Anonymous one-liner", "Debugger", "List"], answer: "Anonymous one-liner", level: "hard", topic: "Functions" },
    { q: "What does 'yield' do instead of 'return'?", options: ["Crashes", "Creates generator", "Ends loop", "Prints"], answer: "Creates generator", level: "hard", topic: "Functions" },
    { q: "What is a decorator in Python?", options: ["UI Tool", "Function that modifies another function", "Class variable", "Loop handler"], answer: "Function that modifies another function", level: "hard", topic: "Functions" },
    { q: "What is the output of: (lambda x: x*x)(5)?", options: ["5", "10", "25", "Error"], answer: "25", level: "hard", topic: "Functions" },
    { q: "Which OOP concept 'hides' internal data?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], answer: "Encapsulation", level: "hard", topic: "OOP" },
    { q: "What is 'Polymorphism'?", options: ["One name, many forms", "Hiding data", "Copying classes", "Deleting variables"], answer: "One name, many forms", level: "hard", topic: "OOP" },
    { q: "What is 'Method Overriding'?", options: ["Deleting a method", "Child class redefines parent method", "Calling method twice", "Syntax error"], answer: "Child class redefines parent method", level: "hard", topic: "OOP" }
];

// --- CORE STATE ---
let count = 0; 
let score = 0;
const totalQuestions = 15;
let currentLevel = "medium";
let performance = 50; 
let askedQuestions = [];
let topicStats = {};
let currentQuestion = null;
let selectedAnswer = null;

// --- GLOBAL 20-MIN TIMER ---
let totalTimeInSeconds = 20 * 60; 
let timerInterval = null;
let quizStartTime = Date.now();

function startGlobalTimer() {
    const timerDisplay = document.getElementById("timer");
    timerInterval = setInterval(() => {
        totalTimeInSeconds--;
        let mins = Math.floor(totalTimeInSeconds / 60);
        let secs = totalTimeInSeconds % 60;
        if (timerDisplay) timerDisplay.innerText = `⏱ ${mins}:${secs < 10 ? '0' + secs : secs}`;

        if (totalTimeInSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Auto-submitting your results.");
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    selectedAnswer = null;
    let filtered = allQuestions.filter(q => q.level === currentLevel && !askedQuestions.includes(q.q));
    if (filtered.length === 0) filtered = allQuestions.filter(q => !askedQuestions.includes(q.q));

    if (count >= totalQuestions) {
        endQuiz();
        return;
    }

    currentQuestion = filtered[Math.floor(Math.random() * filtered.length)];
    askedQuestions.push(currentQuestion.q);

    // Update UI
    document.getElementById("qno").innerText = `Question ${count + 1} / ${totalQuestions}`;
    document.getElementById("question").innerText = currentQuestion.q;
    document.getElementById("levelTag").innerText = currentLevel.toUpperCase();
    
    // --- BUTTON TRANSFORMATION ---
    const nextBtn = document.getElementById("nextBtn");
    if (count === totalQuestions - 1) {
        nextBtn.innerText = "Submit Quiz";
        nextBtn.style.background = "linear-gradient(to right, #22c55e, #16a34a)";
    } else {
        nextBtn.innerText = "Next Question";
        nextBtn.style.background = "#6366f1";
    }

    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(opt => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = opt;
        div.onclick = () => {
            selectedAnswer = opt;
            document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
            div.classList.add("selected");
        };
        optionsEl.appendChild(div);
    });
}

function handleNext() {
    if (!selectedAnswer) {
        alert("Please select an answer or click Skip!");
        return;
    }
    processScore(selectedAnswer === currentQuestion.answer);
    moveForward();
}

function skipQuestion() {
    processScore(false); 
    moveForward();
}

function moveForward() {
    count++; 
    if (count < totalQuestions) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function processScore(isCorrect) {
    let topic = currentQuestion.topic;
    if (!topicStats[topic]) topicStats[topic] = { correct: 0, total: 0 };
    topicStats[topic].total++;

    if (isCorrect) {
        topicStats[topic].correct++;
        score++;
        performance += 15;
    } else {
        performance -= 10;
    }

    performance = Math.max(0, Math.min(100, performance));
    if (performance < 35) currentLevel = "easy";
    else if (performance < 75) currentLevel = "medium";
    else currentLevel = "hard";
}

function endQuiz() {
    clearInterval(timerInterval);
    let accuracy = (score / totalQuestions) * 100;
    let timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);

    // Filtered to exactly 4 topics as requested
    let topicAnalysis = {};
    ["Data Types", "Loops", "Functions", "OOP"].forEach(t => {
        let data = topicStats[t] || { correct: 0, total: 0 };
        topicAnalysis[t] = data.total === 0 ? 0 : Math.round((data.correct / data.total) * 100);
    });

    // Generate Fuzzy Status
    let statusObj = (typeof FuzzyEngine !== 'undefined') ? 
        FuzzyEngine.getFuzzyRecommendation(accuracy, timeTaken, totalQuestions) : 
        { status: "DEVELOPING", action: "Keep reviewing your fundamentals." };

    // Structure for Dashboard
    let user = JSON.parse(localStorage.getItem("currentUser")) || {};
    user.score = score;
    user.accuracy = Math.round(accuracy);
    user.topicAnalysis = topicAnalysis;
    user.fuzzyStatus = statusObj.status.toUpperCase(); // DEVELOPING, MASTERY, STRUGGLING
    user.fuzzyAction = statusObj.action; 
    user.lifetimeExperience = (user.lifetimeExperience || 0) + score;

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", () => {
    startGlobalTimer();
    loadQuestion();
});