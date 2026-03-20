let chart;
let claimTriggered = false;

/* ---------------- LOGIN ---------------- */
window.onload = () => {
    document.body.classList.add("login-active");
    document.querySelector(".ticker").style.display = "none";
};

function login() {
    let user = document.getElementById("username").value.trim();
    if (!user) return;

    localStorage.setItem("user", user);

    document.getElementById("loginPage").style.display = "none";
    document.body.classList.remove("login-active");

    document.querySelector(".ticker").style.display = "flex";

    document.getElementById("userDisplay").innerText =
        "Logged in as: " + user;
}

/* ---------------- PREMIUM ---------------- */
function calculatePremium() {
    let income = parseFloat(document.getElementById("income").value);
    let city = document.getElementById("city").value;

    if (!income || !city) {
        showToast("Enter income & city!");
        return;
    }

    document.getElementById("premiumResult").innerHTML =
        `<span class="loader"></span> Calculating...`;

    let user = localStorage.getItem("user");

    let profiles = {
        "ravi": 0.3,
        "arjun": 0.8,
        "sneha": 0.7
    };

    let riskScore = profiles[user?.toLowerCase()] || 0.5;
    let premium = Math.round(income * 0.02 * riskScore);

    updateTicker("📊 AI analyzing risk for " + city);

    setTimeout(() => {
        document.getElementById("premiumResult").innerHTML =
            `Risk Score: ${Math.floor(riskScore * 100)}%<br>Premium: ₹${premium}`;

        animateValue("kpiRisk", 0, Math.floor(riskScore * 100), 600);
        animateValue("kpiPremium", 0, premium, 600);

        renderChart(riskScore);
        showToast("Premium calculated!");
    }, 600);
}

/* ---------------- CHART ---------------- */
function renderChart(riskScore) {
    const ctx = document.getElementById("riskChart");
    if (!ctx) return;

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Risk", "Safe"],
            datasets: [{
                data: [riskScore * 100, (1 - riskScore) * 100]
            }]
        }
    });
}

/* ---------------- DISRUPTION ---------------- */
function triggerDisruption() {
    let event = document.getElementById("event").value;

    if (event === "rain") {
        startRain();
        applyEnvironmentEffect(null);
    } else if (event === "heat") {
        stopRain();
        applyEnvironmentEffect("heat");
    } else if (event === "curfew") {
        stopRain();
        applyEnvironmentEffect("pollution");
    } else {
        stopRain();
        removeEffects();
    }

    if (event !== "none") {
        claimTriggered = true;

        document.getElementById("claimResult").innerHTML =
            `<span class="success">✔ Claim Triggered (${event})</span>`;

        document.getElementById("kpiClaim").innerHTML = "Active";

        updateTicker("⚡ " + event.toUpperCase() + " EVENT → CLAIM TRIGGERED");
        showToast("Claim triggered!");
    } else {
        claimTriggered = false;
    }
}

/* ---------------- FRAUD ---------------- */
function checkFraud() {
    switchTab("fraud"); // ✅ redirect

    let fraud = Math.random() > 0.8;

    document.getElementById("fraudBox").innerHTML =
        fraud ? `<span class="fail">⚠ Fraud Detected</span>` :
                `<span class="success">✔ No Fraud</span>`;

    updateTicker("🕵 Fraud analysis completed");
    showToast("Fraud check done!");
}

/* ---------------- PAYOUT ---------------- */
function processPayout() {
    switchTab("payout"); // ✅ redirect

    document.getElementById("payoutBox").innerHTML =
        claimTriggered ?
        `<span class="success">💰 Payment Released</span>` :
        `<span class="fail">No Active Claim</span>`;

    updateTicker("💰 Instant payout processed");
    showToast("Payout processed!");
}

/* ---------------- TOAST ---------------- */
function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2000);
}

/* ---------------- TABS ---------------- */
function switchTab(tab) {
    // hide all
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));

    // remove active
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));

    if (tab === "dashboard") {
        document.querySelectorAll(".card").forEach(c => c.classList.remove("hidden"));
        document.querySelectorAll(".sidebar li")[0].classList.add("active");
    }

    if (tab === "fraud") {
        document.getElementById("fraudBox").parentElement.classList.remove("hidden");
        document.querySelectorAll(".sidebar li")[1].classList.add("active");
    }

    if (tab === "payout") {
        document.getElementById("payoutBox").parentElement.classList.remove("hidden");
        document.querySelectorAll(".sidebar li")[2].classList.add("active");
    }
}

/* ---------------- RAIN ---------------- */
function startRain() {
    let container = document.getElementById("rainContainer");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        let drop = document.createElement("div");
        drop.classList.add("raindrop");

        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDuration = (Math.random() * 1 + 0.5) + "s";

        container.appendChild(drop);
    }
}

function stopRain() {
    let container = document.getElementById("rainContainer");
    if (container) container.innerHTML = "";
}

/* ---------------- KPI ANIMATION ---------------- */
function animateValue(id, start, end, duration) {
    let range = end - start;
    if (range <= 0) return;

    let stepTime = Math.max(10, Math.abs(Math.floor(duration / range)));
    let current = start;

    let timer = setInterval(() => {
        current++;
        document.getElementById(id).innerText = current;

        if (current >= end) clearInterval(timer);
    }, stepTime);
}

/* ---------------- ENVIRONMENT ---------------- */
function applyEnvironmentEffect(type) {
    removeEffects();

    if (type === "heat") {
        let heat = document.createElement("div");
        heat.className = "heatwave";
        document.body.appendChild(heat);
    }

    if (type === "pollution") {
        let pollution = document.createElement("div");
        pollution.className = "pollution";
        document.body.appendChild(pollution);
    }
}

function removeEffects() {
    document.querySelectorAll(".heatwave, .pollution").forEach(el => el.remove());
}

/* ---------------- TICKER ---------------- */
function updateTicker(message) {
    let el = document.getElementById("tickerText");
    if (el) el.innerText = message;
}

/* ---------------- LIVE SIMULATION ---------------- */
setInterval(() => {
    let events = ["rain", "heat", "curfew"];
    let random = events[Math.floor(Math.random() * events.length)];

    updateTicker("📡 Live Alert: " + random.toUpperCase() + " risk detected");
}, 7000);