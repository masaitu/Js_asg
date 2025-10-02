const greetingEl = document.getElementById("greeting");
const summaryEl = document.getElementById("summary");
const defaultSummary = summaryEl.textContent;

let studentName = prompt("Welcome to USIU! What's your first name?");
if (!studentName || !studentName.trim()) {
  studentName = "USIU Maverick";
}
studentName = studentName.trim();

alert("Karibu, " + studentName + "!");
console.log("Student entered name:", studentName);

greetingEl.textContent = "Hello, " + studentName + " \uD83D\uDC4B";

const rootStyle = document.documentElement.style;
let themeMode = "day";

applyPreferredTheme();

function applyTheme(mode) {
  const isNight = mode === "night";
  document.body.style.backgroundColor = isNight ? "#0b1728" : "#ffffff";
  document.body.style.color = isNight ? "#f9fafb" : "#111827";
  rootStyle.setProperty("--surface", isNight ? "#0f172a" : "#ffffff");
  rootStyle.setProperty("--surface-muted", isNight ? "#1c2541" : "#f5f7fb");
  rootStyle.setProperty("--summary-surface", isNight ? "#111827" : "#0b1728");
  rootStyle.setProperty("--summary-text", isNight ? "#e0f2fe" : "#fdfcff");
  rootStyle.setProperty("--text", isNight ? "#f3f4f6" : "#111827");
  rootStyle.setProperty("--text-muted", isNight ? "#cbd5f5" : "#4b5563");
  rootStyle.setProperty("--accent-day", isNight ? "#ffb703" : "#3a86ff");
  themeMode = mode;
  console.log("Theme toggled. Background now:", document.body.style.backgroundColor);
}

function applyPreferredTheme() {
  const hour = new Date().getHours();
  const preferred = hour >= 6 && hour < 18 ? "day" : "night";
  applyTheme(preferred);
}

function toggleTheme() {
  applyTheme(themeMode === "day" ? "night" : "day");
}

function buildSavingsTip(totalWeekly) {
  const save10 = totalWeekly * 0.1;
  const tip = totalWeekly >= 2000
    ? "Try carpooling twice a week to save on matatu fares."
    : "Bundle snack runs with friends to cut impulse buys.";
  return { save10, message: tip };
}

function runEstimator() {
  const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
  const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
  const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
  const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

  if ([days, costPerTrip, snacksPerDay, snackPrice].some(value => Number.isNaN(value))) {
    alert("Please enter valid numbers for each prompt. Let's try again.");
    console.log("Estimator aborted due to invalid input.", { days, costPerTrip, snacksPerDay, snackPrice });
    return;
  }

  const transportWeekly = days * costPerTrip * 2;
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;
  const savings = buildSavingsTip(totalWeekly);
  const totalWithSavings = totalWeekly - savings.save10;

  console.log({
    days,
    costPerTrip,
    snacksPerDay,
    snackPrice,
    transportWeekly,
    snacksWeekly,
    totalWeekly,
    totalWithSavings
  });

  const summary = [
    "Generated for: " + studentName,
    "--------------------------------",
    "Weekly Transport: KSh " + transportWeekly.toFixed(2),
    "Weekly Snacks: KSh " + snacksWeekly.toFixed(2),
    "--------------------------------",
    "Weekly Total: KSh " + totalWeekly.toFixed(2),
    "If you save 10%: KSh " + Math.round(totalWithSavings),
    "Tip: " + savings.message
  ].join("\n");

  summaryEl.innerText = summary;
  alert("Check your summary on the page. All details logged to console for debugging.");
}

function resetSummary() {
  summaryEl.innerText = defaultSummary;
  console.log("Summary reset to default view.");
}
