// Admin Page Scripts
console.log(`Hello Jo`);

// Update applicant table

// => Fetch data from db
const applicantsBody = document.getElementById("applicants-body");
const totalApplicants = document.getElementById("total-applicants");

const fetchApplicants = async () => {
  try {
    const res = await fetch("app/applicants");
    const data = await res.json();

    if (data.success) {
      renderApplicants(data.data);
    }
  } catch (error) {
    console.error(`Error fetching applicant ${error}`);
  }
};

// => Render applicants to table
const renderApplicants = (applicants) => {
  applicantsBody.innerHTML = "";
  totalApplicants.textContent = applicants.length;

  applicants.forEach((applicant) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${applicant.firstname}</td>
            <td>${applicant.middlename || ""}</td>
            <td>${applicant.lastname}</td>
            <td>${applicant.email}</td>
            <td>${applicant.phone}</td>
            <td>
                <button onclick= "approve('${applicant._id}')">Approve</button>
                <button onclick= "decline('${applicant._id}')">Decline</button>
            </td>
        `;
    applicantsBody.appendChild(row);
  });
};

window.onload = () => {
  setInterval(() => {
    fetchApplicants();
  }, 5000);
};
