document.addEventListener("DOMContentLoaded", function () {

    // Hide app initially
    const layout = document.querySelector(".layout");
    const loginPage = document.getElementById("loginPage");

    if (layout) layout.style.display = "none";
    if (loginPage) loginPage.style.display = "flex";

    // Attach login button safely
    const loginBtn = document.querySelector("#loginPage button");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const usernameInput = document.getElementById("username");

            if (!usernameInput) return;

            const user = usernameInput.value.trim();

            if (!user) {
                alert("Please enter username");
                return;
            }

            // Hide login
            loginPage.style.display = "none";

            // Show app
            layout.style.display = "flex";

            // Show user
            const userDisplay = document.getElementById("userDisplay");
            if (userDisplay) userDisplay.innerText = "Welcome " + user;
        });
    }
});


/* NAVIGATION */
function switchPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    const selected = document.getElementById(page + "Page");
    if (selected) selected.classList.remove("hidden");
}

/* FEATURES */

function checkRisk() {
    const input = document.getElementById("city");
    const output = document.getElementById("riskResult");

    const data = {
        vijayawada: "Moderate Risk (Heat)",
        mumbai: "High Risk (Flood)",
        delhi: "Pollution Risk"
    };

    output.innerText = data[input.value.toLowerCase()] || "No data available";
}

function emergency() {
    alert("📞 Calling Support...");
}

let balance = 0;

/* LOAN SYSTEM */
function requestLoan() {
    const amtInput = document.getElementById("loanAmount");
    const reasonInput = document.getElementById("loanReason");
    const box = document.getElementById("loanResult");

    if (!amtInput || !reasonInput || !box) return;

    const amt = parseInt(amtInput.value);
    const reason = reasonInput.value.toLowerCase().trim();

    if (!amt || amt <= 0 || !reason) {
        box.innerText = "❌ Enter valid amount and reason";
        return;
    }

    // ✅ Acceptable reasons
    const validReasons = [
        "medical",
        "emergency",
        "education",
        "family",
        "accident"
    ];

    const isReasonValid = validReasons.some(r => reason.includes(r));

    if (!isReasonValid) {
        box.innerText = "❌ Reason not acceptable. Try again with valid reason.";
        return;
    }

    // 🔥 Combine reason + amount logic
    let approvalChance = 0;

    if (amt <= 5000) {
        approvalChance = 0.9;
    } else if (amt <= 20000) {
        approvalChance = 0.6;
    } else if (amt <= 50000) {
        approvalChance = 0.4;
    } else {
        approvalChance = 0.2;
    }

    // Bonus approval if strong reason
    if (reason.includes("medical") || reason.includes("emergency")) {
        approvalChance += 0.2;
    }

    const isApproved = Math.random() < approvalChance;

    if (isApproved) {
        balance += amt;
        box.innerText = `✅ Approved ₹${amt} for ${reason} | Balance ₹${balance}`;
    } else {
        box.innerText = `❌ Loan Rejected (Risk too high even with valid reason)`;
    }
}

/* CONTACT */
function sendMessage() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const msg = document.getElementById("contactMsg").value;
    const box = document.getElementById("contactResult");

    if (!name || !email || !msg) {
        box.innerText = "Please fill all fields";
        return;
    }

    box.innerText = "✅ Message sent successfully!";
}
let qaHistory = [];

// 🔥 Normalize text (ignore case, symbols, spaces)
function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

// 🔥 Similarity check (basic NLP)
function isSimilar(q1, q2) {
    const words1 = q1.split(" ");
    const words2 = q2.split(" ");

    let matchCount = 0;

    words1.forEach(w => {
        if (words2.includes(w)) matchCount++;
    });

    return matchCount >= 2; // 2 common words = similar
}

function getRecommendation() {
    const input = document.getElementById("userQuestion");
    const box = document.getElementById("smartBox");
    const historyBox = document.getElementById("historyBox");

    if (!input || !box || !historyBox) return;

    let question = input.value;
    if (!question) {
        box.innerText = "❌ Please ask a question";
        return;
    }

    let q = normalize(question);

    // 🔥 STEP 1: Check history for similar question
    for (let i = 0; i < qaHistory.length; i++) {
        let oldQ = normalize(qaHistory[i].question);

        if (isSimilar(q, oldQ)) {
            box.innerText = qaHistory[i].answer + " (from history)";
            return;
        }
    }

    // 🔥 STEP 2: Generate answer
    let answer = "🤖 I don’t know yet, try asking differently.";

    if (q.includes("earn") || q.includes("money") || q.includes("income")) {
        answer = "💰 Work during peak hours like evenings and weekends.";
    } 
    else if (q.includes("safe") || q.includes("risk") || q.includes("danger")) {
        answer = "🛡 Avoid isolated areas and work in crowded, well-lit zones.";
    } 
    else if (q.includes("time") || q.includes("best") || q.includes("when")) {
        answer = "⏰ Best time: Morning (deliveries) & Evening (rides).";
    } 
    else if (q.includes("loan") || q.includes("borrow")) {
        answer = "🏦 Take loans only for emergency or essential needs.";
    } 
    else if (q.includes("save") || q.includes("saving") || q.includes("budget")) {
        answer = "💡 Save at least 20% of your daily earnings.";
    }
    else if (q.includes("job") || q.includes("work")) {
        answer = "🚀 Choose gigs with high demand and better pay.";
    }

    box.innerText = answer;

    // 🔥 STEP 3: Store (limit 100)
    qaHistory.push({ question, answer });

    if (qaHistory.length > 100) {
        qaHistory.shift();
    }

    // 🔥 STEP 4: Show history
    historyBox.innerHTML = qaHistory
        .map(q => `<div>Q: ${q.question}<br>A: ${q.answer}</div><hr>`)
        .join("");

    input.value = "";
}
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("generateBtn");

    if (btn) {
        btn.addEventListener("click", generateDashboard);
    }

});

function generateDashboard() {
    const income = parseInt(document.getElementById("income").value) || 0;
    const expense = parseInt(document.getElementById("expense").value) || 0;
    const name = document.getElementById("name").value || "User";

    const loadingBox = document.getElementById("loadingBox");

    if (!loadingBox) return;

    if (income === 0 && expense === 0) {
        loadingBox.innerText = "❌ Enter income or expense";
        return;
    }

    loadingBox.innerText = "📊 Reading your data...";

    setTimeout(() => {

        loadingBox.innerText = `✅ Dashboard Ready for ${name}`;

        const savings = income - expense;

        const barCtx = document.getElementById("barChart").getContext("2d");
        const pieCtx = document.getElementById("pieChart").getContext("2d");

        if (window.barChartInstance) window.barChartInstance.destroy();
        if (window.pieChartInstance) window.pieChartInstance.destroy();

        window.barChartInstance = new Chart(barCtx, {
            type: "bar",
            data: {
                labels: ["Income", "Expense", "Savings"],
                datasets: [{
                    label: "Financial Overview",
                    data: [income, expense, savings]
                }]
            }
        });

        window.pieChartInstance = new Chart(pieCtx, {
            type: "pie",
            data: {
                labels: ["Income", "Expense", "Savings"],
                datasets: [{
                    data: [income, expense, savings]
                }]
            }
        });

    }, 2000);
}
// ✅ FIX: Always attach event safely after page loads
setTimeout(() => {
    const btn = document.getElementById("generateBtn");

    if (btn) {
        btn.onclick = function () {

            const income = parseInt(document.getElementById("income").value) || 0;
            const expense = parseInt(document.getElementById("expense").value) || 0;
            const name = document.getElementById("name").value || "User";
            const box = document.getElementById("loadingBox");

            if (income === 0 && expense === 0) {
                box.innerText = "❌ Enter income or expense";
                return;
            }

            box.innerText = "📊 Reading your data...";

            setTimeout(() => {

                box.innerText = `✅ Dashboard Ready for ${name}`;

                const savings = income - expense;

                const barCanvas = document.getElementById("barChart");
                const pieCanvas = document.getElementById("pieChart");

                if (!barCanvas || !pieCanvas) {
                    box.innerText = "❌ Chart error";
                    return;
                }

                // destroy old charts
                if (window.barChartInstance) window.barChartInstance.destroy();
                if (window.pieChartInstance) window.pieChartInstance.destroy();

                // BAR CHART
                window.barChartInstance = new Chart(barCanvas, {
                    type: "bar",
                    data: {
                        labels: ["Income", "Expense", "Savings"],
                        datasets: [{
                            label: "Financial Data",
                            data: [income, expense, savings]
                        }]
                    }
                });

                // PIE CHART
                window.pieChartInstance = new Chart(pieCanvas, {
                    type: "pie",
                    data: {
                        labels: ["Income", "Expense", "Savings"],
                        datasets: [{
                            data: [income, expense, savings]
                        }]
                    }
                });

            }, 2000);
        };
    }
}, 1000);
let communityPosts = [];

function postHelp() {
    const text = document.getElementById("helpText").value;
    const target = document.getElementById("target").value;
    const person = document.getElementById("personName").value;
    const box = document.getElementById("communityBox");
    const history = document.getElementById("communityHistory");

    if (!text) {
        box.innerText = "❌ Enter message";
        return;
    }

    let targetText = "";

    if (target === "all") targetText = "📢 For Everyone";
    else if (target === "delivery") targetText = "🚚 Delivery Workers";
    else if (target === "drivers") targetText = "🚗 Drivers";
    else if (target === "personal") {
        if (!person) {
            box.innerText = "❌ Enter person name";
            return;
        }
        targetText = `👤 To ${person}`;
    }

    const post = {
        message: text,
        target: targetText,
        time: new Date().toLocaleString()
    };

    communityPosts.unshift(post);

    // limit history
    if (communityPosts.length > 50) {
        communityPosts.pop();
    }

    box.innerText = "✅ Posted successfully";

    // show history
    history.innerHTML = communityPosts.map(p => `
        <div>
            <strong>${p.target}</strong><br>
            ${p.message}<br>
            <small>${p.time}</small>
        </div>
        <hr>
    `).join("");

    // clear inputs
    document.getElementById("helpText").value = "";
    document.getElementById("personName").value = "";
}
function checkSafety() {
    const input = document.getElementById("safeCity");
    const box = document.getElementById("safetyBox");
    const canvas = document.getElementById("trafficChart");

    if (!input || !box || !canvas) return;

    const city = input.value.trim();

    if (!city) {
        box.innerText = "❌ Enter city";
        return;
    }

    // 🔥 Random Safety Status
    const safetyLevels = ["🟢 Safe", "🟡 Moderate Risk", "🔴 Unsafe"];
    const weatherTypes = ["☀ Sunny", "🌧 Rainy", "💨 Windy"];

    const safety = safetyLevels[Math.floor(Math.random() * safetyLevels.length)];
    const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

    // 🔥 Random Tech Details
    const details = [
        "Low crime rate detected",
        "Heavy traffic in peak hours",
        "Police patrol active",
        "High pollution detected",
        "Construction zones nearby"
    ];

    const tech = details[Math.floor(Math.random() * details.length)];

    box.innerHTML = `
        📍 Location: ${city} <br>
        Status: ${safety} <br>
        Weather: ${weather} <br>
        Insight: ${tech}
    `;

    // 🔥 Traffic Data (random)
    const hours = ["6AM","9AM","12PM","3PM","6PM","9PM"];
    const trafficData = hours.map(() => Math.floor(Math.random() * 100));

    // Destroy old chart
    if (window.trafficChartInstance) {
        window.trafficChartInstance.destroy();
    }

    window.trafficChartInstance = new Chart(canvas, {
        type: "line",
        data: {
            labels: hours,
            datasets: [{
                label: "Traffic Level",
                data: trafficData,
                fill: false
            }]
        }
    });
}
let goals = [];

// 🔥 Predefined goals for gig workers
const goalData = {
    family: [
        "Pay school fees",
        "Buy groceries monthly",
        "Medical emergency fund",
        "Support parents",
        "Pay house rent",
        "Save for family trip"
    ],
    assets: [
        "Buy bike",
        "Buy car",
        "Buy house",
        "Upgrade phone",
        "Invest in tools",
        "Purchase laptop"
    ],
    work: [
        "Increase daily income",
        "Work peak hours",
        "Join new platform",
        "Improve ratings",
        "Save 20% income",
        "Expand to freelancing"
    ]
};

// 🔥 Load category goals
function loadGoals() {
    const category = document.getElementById("goalCategory").value;
    const box = document.getElementById("goalBox");

    if (!category) {
        box.innerText = "❌ Select category";
        return;
    }

    goals = goalData[category].map(g => ({
        text: g,
        done: false
    }));

    renderGoals();
}

// 🔥 Add custom goal
function addCustomGoal() {
    const input = document.getElementById("customGoal");
    const val = input.value.trim();

    if (!val) return;

    goals.push({
        text: val,
        done: false
    });

    input.value = "";
    renderGoals();
}

// 🔥 Toggle complete
function toggleGoal(index) {
    goals[index].done = !goals[index].done;
    renderGoals();
}

// 🔥 Render UI
function renderGoals() {
    const box = document.getElementById("goalBox");

    if (goals.length === 0) {
        box.innerText = "No goals yet";
        return;
    }

    box.innerHTML = goals.map((g, i) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="text-decoration:${g.done ? 'line-through' : 'none'}">
                ${g.text}
            </span>
            <button onclick="toggleGoal(${i})">
                ${g.done ? "Undo" : "Done"}
            </button>
        </div>
    `).join("");
}
let expenses = [];

// Add expense
function addExpense() {
    const income = parseInt(document.getElementById("incomeInput").value) || 0;
    const expense = parseInt(document.getElementById("expenseInput").value) || 0;
    const note = document.getElementById("expenseNote").value || "General";

    if (!income && !expense) return;

    expenses.push({
        income,
        expense,
        note
    });

    renderExpenses();
}

// Render table
function renderExpenses() {
    const table = document.getElementById("expenseTable");

    if (expenses.length === 0) {
        table.innerText = "No data yet";
        return;
    }

    let totalIncome = 0;
    let totalExpense = 0;

    table.innerHTML = `
        <table style="width:100%; border-collapse:collapse; text-align:center;">
            <tr style="background:#1e293b; color:#38bdf8;">
                <th>Income</th>
                <th>Expense</th>
                <th>Note</th>
                <th>Edit</th>
            </tr>
            ${expenses.map((e, i) => {
                totalIncome += e.income;
                totalExpense += e.expense;

                return `
                <tr style="background:#020617;">
                    <td>₹${e.income}</td>
                    <td>₹${e.expense}</td>
                    <td>${e.note}</td>
                    <td>
                        <button onclick="editExpense(${i})">Edit</button>
                    </td>
                </tr>
                `;
            }).join("")}
        </table>

        <br>

        <div style="padding:10px; background:#1e293b; border-radius:8px;">
            Total Income: ₹${totalIncome} <br>
            Total Expense: ₹${totalExpense} <br>
            Savings: ₹${totalIncome - totalExpense}
        </div>
    `;

    // Last month simulation
    const last = document.getElementById("lastMonth");

    const lastIncome = Math.floor(Math.random() * 50000);
    const lastExpense = Math.floor(Math.random() * 40000);

    last.innerHTML = `
        Income: ₹${lastIncome} <br>
        Expense: ₹${lastExpense} <br>
        Savings: ₹${lastIncome - lastExpense}
    `;
}

// Edit expense
function editExpense(index) {
    const newExpense = prompt("Enter new expense:");

    if (!newExpense) return;

    expenses[index].expense = parseInt(newExpense);
    renderExpenses();
}
// 🔥 Career goals data
let careerGoals = [
    "Increase monthly income",
    "Learn new skills",
    "Switch to high paying gigs",
    "Build savings",
    "Start freelancing",
    "Improve ratings"
];

// 🔥 Open career section
// 🔥 Open career section (RESET button position)
function openCareer() {
    const box = document.getElementById("careerContent");
    const btn = document.getElementById("closeBtn");

    // ✅ Reset close button to original position
    btn.style.position = "static";
    btn.style.left = "0px";
    btn.style.top = "0px";

    box.style.display = "block";

    box.innerHTML = `
        <h3>🎯 Career Goals</h3>

        ${careerGoals.map((g, i) => `
            <div style="display:flex; justify-content:space-between;">
                <span>${g}</span>
                <button class="icon-btn" onclick="editGoal(${i})">✏️</button>
            </div>
        `).join("")}

        <hr>

        <h3>📊 Career Plan</h3>
        <ul>
            <li>Step 1: Improve daily work hours</li>
            <li>Step 2: Focus on peak time gigs</li>
            <li>Step 3: Learn new digital skills</li>
            <li>Step 4: Expand income sources</li>
        </ul>

        <hr>

        <h3>🌟 Vision Board</h3>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div style="background:#1e293b; padding:10px; border-radius:8px;">💰 Financial Freedom</div>
            <div style="background:#1e293b; padding:10px; border-radius:8px;">🚗 Own Vehicle</div>
            <div style="background:#1e293b; padding:10px; border-radius:8px;">🏠 Own House</div>
        </div>
    `;
}


// 🔥 Move button randomly (before open)
function moveButton() {
    const btn = document.getElementById("closeBtn");

    const x = Math.random() * 150;
    const y = Math.random() * 150;

    btn.style.position = "relative";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
let isSignup = false;

// Toggle login/signup
function toggleAuth() {
    isSignup = !isSignup;

    const title = document.getElementById("authTitle");

    if (isSignup) {
        title.innerText = "Signup";
    } else {
        title.innerText = "Login";
    }
}

// Signup or Login
function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Enter details");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignup) {
        // Signup → save user
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Now login.");
        toggleAuth();
        return;
    }

    // Login → check user exists (ANY password allowed)
    const userExists = users.find(u => u.username === username);

    if (!userExists) {
        alert("User not found. Please signup.");
        return;
    }

    // SUCCESS LOGIN
    document.getElementById("loginPage").style.display = "none";
    document.querySelector(".layout").style.display = "flex";

    document.getElementById("userDisplay").innerText = "Welcome " + username;
}
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 🔐 LOGIN SYSTEM
    // =========================

    const layout = document.querySelector(".layout");
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    const dashboardPage = document.getElementById("dashboardPage");

    if (layout) layout.style.display = "none";
    if (loginPage) loginPage.style.display = "flex";
    if (registerPage) registerPage.style.display = "none";
    if (dashboardPage) dashboardPage.style.display = "none";

    let isSignup = false;

    window.toggleAuth = function () {
        isSignup = !isSignup;
        document.getElementById("authTitle").innerText = isSignup ? "Signup" : "Login";
    };

    window.loginUser = function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            alert("Enter details");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (isSignup) {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Signup successful! Now login.");
            toggleAuth();
            return;
        }

        const userExists = users.find(u => u.username === username);

        if (!userExists) {
            alert("User not found. Please signup.");
            return;
        }

        loginPage.style.display = "none";

        // 👉 Check registration
        const worker = JSON.parse(localStorage.getItem("user"));

        if (!worker) {
            registerPage.style.display = "flex";
        } else {
            showDashboard(username);
        }
    };

    // =========================
    // 🧾 REGISTRATION SYSTEM
    // =========================

    function showDashboard(username = "User") {
        registerPage.style.display = "none";
        layout.style.display = "flex";
        dashboardPage.style.display = "block";

        const userDisplay = document.getElementById("userDisplay");
        if (userDisplay) userDisplay.innerText = "Welcome " + username;
    }

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const userData = {
                name: document.getElementById("name").value,
                jobType: document.getElementById("jobType").value,
                location: document.getElementById("location").value,
            };

            if (!userData.name || !userData.jobType || !userData.location) {
                alert("Fill all fields");
                return;
            }

            localStorage.setItem("user", JSON.stringify(userData));

            alert("✅ Registration Successful");

            showDashboard(userData.name);
        });
    }

});

// =========================
// 🔄 NAVIGATION
// =========================
function switchPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    const selected = document.getElementById(page + "Page");
    if (selected) selected.classList.remove("hidden");
}

// =========================
// ⚠️ RISK CHECK
// =========================
function checkRisk() {
    const input = document.getElementById("city");
    const output = document.getElementById("riskResult");

    const data = {
        vijayawada: "Moderate Risk (Heat)",
        mumbai: "High Risk (Flood)",
        delhi: "Pollution Risk"
    };

    output.innerText = data[input.value.toLowerCase()] || "No data available";
}

// =========================
// 💰 LOAN SYSTEM
// =========================


function requestLoan() {
    const amt = parseInt(document.getElementById("loanAmount").value);
    const reason = document.getElementById("loanReason").value.toLowerCase();
    const box = document.getElementById("loanResult");

    if (!amt || !reason) {
        box.innerText = "❌ Enter valid details";
        return;
    }

    const valid = ["medical", "emergency", "education", "family", "accident"];
    const ok = valid.some(r => reason.includes(r));

    if (!ok) {
        box.innerText = "❌ Invalid reason";
        return;
    }

    let chance = amt <= 5000 ? 0.9 : amt <= 20000 ? 0.6 : 0.3;

    if (reason.includes("medical")) chance += 0.2;

    if (Math.random() < chance) {
        balance += amt;
        box.innerText = `✅ Approved ₹${amt} | Balance ₹${balance}`;
    } else {
        box.innerText = "❌ Loan Rejected";
    }
}

// =========================
// 🤖 SMART Q&A
// =========================

// =========================
// 📊 CHART SYSTEM
// =========================
function generateDashboard() {
    const income = +document.getElementById("income").value;
    const expense = +document.getElementById("expense").value;
    const name = document.getElementById("name").value;

    const savings = income - expense;

    if (window.barChartInstance) window.barChartInstance.destroy();

    window.barChartInstance = new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: ["Income", "Expense", "Savings"],
            datasets: [{ data: [income, expense, savings] }]
        }
    });
}

// =========================
// 🧠 SAFETY AI
// =========================
async function createPolicy() {
    const amount = parseInt(document.getElementById("policyAmount").value);
    const type = document.getElementById("policyType").value;

    if (!amount || !type) {
        alert("Enter details");
        return;
    }

    const policy = {
        amount,
        type
    };

    // 🔥 API CALL
   
    await fetch("http://localhost:5000/policy", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(policy),
});

    // ✅ KEEP YOUR UI LOGIC
    localStorage.setItem("policy", JSON.stringify(policy));

    document.getElementById("policyBox").innerText = "Policy Created!";
}
/* ================= DYNAMIC PREMIUM ================= */

function calculatePremium() {
    const amount = parseInt(document.getElementById("policyAmount").value) || 0;
    const job = document.getElementById("jobType").value.toLowerCase();
    const city = document.getElementById("cityType").value.toLowerCase();
    const manualRisk = parseFloat(document.getElementById("riskSlider").value);

    let risk = manualRisk;

    // 🔥 Job risk
    if (job.includes("driver")) risk += 0.5;
    if (job.includes("delivery")) risk += 0.3;

    // 🔥 City risk
    if (city.includes("mumbai")) risk += 0.5;
    if (city.includes("delhi")) risk += 0.3;

    // 🔥 Final premium
    const premium = Math.floor(amount * 0.02 * risk);

    const preview = document.getElementById("premiumPreview");

    preview.innerHTML = `
        💰 Premium: ₹${premium} <br>
        ⚠ Risk Score: ${risk.toFixed(2)}
    `;
}
/* ================= RISK ANALYSIS MODULE ================= */

/* LOCATION + CLIMATE + TRAFFIC */

function analyzeRiskLocation() {
    const city = document.getElementById("riskCity").value.toLowerCase();
    const riskBox = document.getElementById("riskLevel");
    const climateBox = document.getElementById("climateInfo");

    if (!city) return;

    const risks = ["Low Risk 🟢", "Moderate Risk 🟡", "High Risk 🔴"];
    const climates = ["Sunny ☀️", "Rainy 🌧", "Windy 🌬", "Humid 🌫"];

    const risk = risks[Math.floor(Math.random() * risks.length)];
    const climate = climates[Math.floor(Math.random() * climates.length)];

    riskBox.innerHTML = `⚠ Risk Level: <b>${risk}</b>`;
    climateBox.innerHTML = `🌦 Climate: <b>${climate}</b>`;

    generateRiskTraffic();
}

/* TRAFFIC GRAPH */

function generateRiskTraffic() {
    const ctx = document.getElementById("riskTrafficChart");

    const data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

    if (window.riskTrafficChartInstance) {
        window.riskTrafficChartInstance.destroy();
    }

    window.riskTrafficChartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"],
            datasets: [{
                label: "Traffic Density",
                data: data
            }]
        }
    });
}

/* FINANCIAL RISK */

function analyzeRiskFinance() {
    const income = parseInt(document.getElementById("riskIncome").value) || 0;
    const expense = parseInt(document.getElementById("riskExpense").value) || 0;

    const result = document.getElementById("riskFinanceResult");
    const table = document.getElementById("riskTable");

    if (!income && !expense) return;

    const savings = income - expense;
    const ratio = income ? ((expense / income) * 100).toFixed(1) : 0;

    let status = "Stable 🟢";
    if (ratio > 80) status = "High Risk 🔴";
    else if (ratio > 60) status = "Moderate Risk 🟡";

    result.innerHTML = `
        💰 Savings: ₹${savings} <br>
        📊 Expense Ratio: ${ratio}% <br>
        ⚠ Risk Status: <b>${status}</b>
    `;

    table.innerHTML = `
        <tr><th>Metric</th><th>Value</th></tr>
        <tr><td>Income</td><td>₹${income}</td></tr>
        <tr><td>Expense</td><td>₹${expense}</td></tr>
        <tr><td>Savings</td><td>₹${savings}</td></tr>
        <tr><td>Expense %</td><td>${ratio}%</td></tr>
    `;
}
/* ================= SMART TRIGGER SYSTEM ================= */

let lastTrigger = null;

/* MAIN ANALYSIS */

function runTrigger() {
    const city = document.getElementById("routeCity").value.toLowerCase();
    const distance = parseInt(document.getElementById("distance").value) || 0;
    const time = parseInt(document.getElementById("time").value) || 0;

    const resultBox = document.getElementById("triggerResult");
    const systemBox = document.getElementById("systemStatus");

    if (!city || !distance || !time) {
        resultBox.innerText = "❌ Enter all details";
        return;
    }

    // 🔥 Simulated real-world conditions
    const weather = ["Sunny ☀️", "Rainy 🌧", "Storm ⚡", "Heatwave 🔥"];
    const traffic = ["Low 🚗", "Moderate 🚕", "Heavy 🚚"];

    const w = weather[Math.floor(Math.random() * weather.length)];
    const t = traffic[Math.floor(Math.random() * traffic.length)];

    // 🔥 Risk Logic
    let riskScore = 0;

    if (w.includes("Rainy") || w.includes("Storm")) riskScore += 2;
    if (t.includes("Heavy")) riskScore += 2;
    if (distance > 10) riskScore += 1;
    if (time > 40) riskScore += 1;

    let status = "✅ Delivery Successful";
    if (riskScore >= 3) status = "❌ Delivery Failed";
    else if (riskScore === 2) status = "⚠ Delay Expected";

    lastTrigger = {
        city,
        weather: w,
        traffic: t,
        riskScore,
        status
    };

    resultBox.innerHTML = `
        📍 City: ${city} <br>
        🌦 Weather: ${w} <br>
        🚦 Traffic: ${t} <br>
        ⚠ Risk Score: ${riskScore} <br>
        📦 Status: <b>${status}</b>
    `;

    // SYSTEM HEALTH
    systemBox.innerHTML = `
        System Check: ${Math.random() > 0.2 ? "✅ Success" : "❌ Failure"} <br>
        Route Optimization: Active <br>
        AI Monitoring: Enabled
    `;
}

/* ================= AUTO PAYOUT ================= */

function checkPayout() {
    const box = document.getElementById("payoutBox");

    if (!lastTrigger) {
        box.innerText = "❌ No trigger data";
        return;
    }

    const policy = JSON.parse(localStorage.getItem("policy"));

    if (!policy) {
        box.innerText = "❌ No insurance policy found";
        return;
    }

    // 🔥 Payout Logic
    if (lastTrigger.riskScore >= 3) {
        const payout = Math.floor(policy.amount * 0.5);

        box.innerHTML = `
            💰 Auto Claim Triggered <br>
            Reason: High Risk Failure <br>
            Payout: ₹${payout}
        `;
    } else {
        box.innerHTML = "✅ No payout required (safe delivery)";
    }
}
/* ================= ZERO TOUCH CLAIM SYSTEM ================= */

let claims = JSON.parse(localStorage.getItem("claims")) || [];

function autoClaim() {
    const resultBox = document.getElementById("autoClaimResult");
    const historyBox = document.getElementById("claimHistory");

    const policy = JSON.parse(localStorage.getItem("policy"));
    const trigger = lastTrigger;

    if (!policy || !trigger) {
        resultBox.innerText = "❌ No policy or trigger data";
        return;
    }

    // 🔥 AUTO DECISION ENGINE
    if (trigger.riskScore >= 3 || trigger.status.includes("Failed")) {

        const payout = Math.floor(policy.amount * 0.5);

        const claim = {
            id: Date.now(),
            city: trigger.city,
            reason: trigger.weather + " + " + trigger.traffic,
            risk: trigger.riskScore,
            payout: payout,
            time: new Date().toLocaleString(),
            status: "Auto Approved"
        };

        // Save claim
        claims.unshift(claim);
        localStorage.setItem("claims", JSON.stringify(claims));

        resultBox.innerHTML = `
            ✅ CLAIM AUTO-GENERATED <br>
            📍 ${claim.city} <br>
            ⚠ Risk: ${claim.risk} <br>
            💰 Payout: ₹${payout} <br>
            🕒 ${claim.time}
        `;

        renderClaims();
    } else {
        resultBox.innerHTML = "✅ No claim needed (Safe operation)";
    }
}

/* ================= CLAIM HISTORY ================= */

function renderClaims() {
    const historyBox = document.getElementById("claimHistory");

    if (!claims.length) {
        historyBox.innerText = "No claims yet";
        return;
    }

    historyBox.innerHTML = claims.map(c => `
        <div>
            📍 ${c.city} <br>
            ⚠ ${c.reason} <br>
            💰 ₹${c.payout} <br>
            🕒 ${c.time} <br>
            ✔ ${c.status}
        </div>
        <hr>
    `).join("");
}


