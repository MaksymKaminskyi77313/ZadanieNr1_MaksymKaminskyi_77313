let isGreen = false;

function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    
    if (isGreen) {
        link.href = "red.css";
    } else {
        link.href = "green.css";
    }

    isGreen = !isGreen;
}

function toggleSection() {
    const section = document.getElementById("projekty");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    error.innerText = "";

    if (name === "" || surname === "" || email === "" || message === "") {
        error.innerText = "Wszystkie pola są wymagane";
        return false;
    }

    if (/\d/.test(name) || /\d/.test(surname)) {
        error.innerText = "Imię i nazwisko nie mogą zawierać cyfr";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Niepoprawny email";
        return false;
    }

    return true;
}


function addNote() {
    let input = document.getElementById("noteInput");
    let note = input.value;

    if (note === "") return;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function displayNotes() {
    let list = document.getElementById("notesList");
    list.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.textContent = note;

        let btn = document.createElement("button");
        btn.textContent = "Usuń";
        btn.onclick = function() {
            deleteNote(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

window.onload = displayNotes;