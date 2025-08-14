const applicationForm = document.getElementById('applicationForm');
const applicationTable = document.getElementById('applicationTable');

window.onload = loadApplications;

applicationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const status = document.getElementById('status').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${company}</td>
        <td>${role}</td>
        <td>${status}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    applicationTable.appendChild(newRow);

    saveApplications(); 
    applicationForm.reset();
});

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    saveApplications(); 
}

function saveApplications() {
    localStorage.setItem('applications', applicationTable.innerHTML);
}

function loadApplications() {
    const savedData = localStorage.getItem('applications');
    if (savedData) {
        applicationTable.innerHTML = savedData;
    }
}
