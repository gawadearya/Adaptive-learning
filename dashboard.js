document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    if (!userData) {
        window.location.href = "login.html";
        return;
    }

    const score = userData.score || 0;
    const topicAnalysis = userData.topicAnalysis || {};
    const topics = ['Data Types', 'Loops', 'Functions', 'OOP']; // Strictly 4 core topics

    // 1. FUZZY STATUS LOGIC (Thresholds: 13/8)
    const statusEl = document.getElementById("skillStatus");
    let statusText = "Struggling";
    let statusClass = "struggling";

    if (score >= 13) {
        statusText = "Mastery";
        statusClass = "mastery";
    } else if (score >= 8) {
        statusText = "Developing";
        statusClass = "developing";
    }
    
    statusEl.innerText = `Status: ${statusText}`;
    statusEl.className = `skill-status ${statusClass}`;
    document.getElementById("lifetimePoints").innerText = `${score} / 15 Points`;

    // 2. SORTING & FOCUS LOGIC (Fixing "Data Types" stickiness)
    const sortedTopics = topics.map(topic => ({
        name: topic,
        score: topicAnalysis[topic] || 0
    })).sort((a, b) => a.score - b.score);

    const weakest = sortedTopics[0];
    const needsWorkNames = sortedTopics.filter(t => t.score < 80).map(t => t.name);

    const focusSummary = document.getElementById("focusSummary");
    const currentLesson = document.getElementById("currentLesson");
    const suggestionText = document.getElementById("suggestionText");
    const lessonVideo = document.getElementById("lessonVideo");

    // Video Resources Mapping
    const ytLinks = {
        "Data Types": "https://www.youtube.com/embed/khKv-8q7YmY",
        "Loops": "https://www.youtube.com/embed/6iF8Xb7Z3wQ",
        "Functions": "https://www.youtube.com/embed/u-OmBn_u94M",
        "OOP": "https://www.youtube.com/embed/Ej_02ICOIgs"
    };

    if (score >= 13 || needsWorkNames.length === 0) {
        focusSummary.innerText = "All Mastered";
        currentLesson.innerText = "Advanced Python";
        suggestionText.innerText = "Excellent work! You've reached Mastery. We suggest diving into Project-Based learning.";
        lessonVideo.src = "https://www.youtube.com/embed/rfscVS0vtbw"; 
    } else {
        focusSummary.innerText = needsWorkNames.slice(0, 2).join(" & ");
        currentLesson.innerText = weakest.name;
        suggestionText.innerText = `Your knowledge of ${weakest.name} needs reinforcement. Watch this tutorial to boost your score.`;
        lessonVideo.src = ytLinks[weakest.name] || ytLinks["Data Types"];
    }

    // 3. CHART.JS IMPLEMENTATION (Thick "Block" Style)
    const ctx = document.getElementById('topicChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topics,
            datasets: [{
                data: topics.map(t => topicAnalysis[t] || 0),
                backgroundColor: topics.map(t => (topicAnalysis[t] || 0) >= 80 ? '#22c55e' : '#f59e0b'),
                borderRadius: 6,
                barPercentage: 0.8,      // This makes the bars thick
                categoryPercentage: 0.9  // This ensures they fill the category width
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { 
                    beginAtZero: true, 
                    max: 100, 
                    ticks: { color: '#ffffff', stepSize: 10 },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                x: { 
                    ticks: { color: '#ffffff' },
                    grid: { display: false }
                }
            }
        }
    });
});

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}