const apiUrl = "http://localhost:5000";

async function fetchHabits() {
    const response = await fetch(${apiUrl}/habits);
    const habits = await response.json();
    const habitList = document.getElementById("habitList");
    habitList.innerHTML = "";
    habits.forEach(habit => {
        const li = document.createElement("li");
        li.textContent = habit.name;
        li.classList.toggle("completed", habit.completed);
        li.onclick = () => toggleHabit(habit._id);
        habitList.appendChild(li);
    });
}

async function addHabit() {
    const name = document.getElementById("habitInput").value;
    if (!name) return;
    await fetch(${apiUrl}/add-habit, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
    });
    document.getElementById("habitInput").value = "";
    fetchHabits();
}

async function toggleHabit(id) {
    await fetch(${apiUrl}/toggle-habit/${id}, { method: "PUT" });
    fetchHabits();
}

fetchHabits();
