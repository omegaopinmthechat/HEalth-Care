document.addEventListener("DOMContentLoaded", loadAppointments);
        
        function bookAppointment() {
            const name = document.getElementById("patientName").value;
            const doctor = document.getElementById("doctorSelect").value;
            const date = document.getElementById("appointmentDate").value;
            const id = document.getElementById('patientId').value;
            
            if (!name || !date) {
                alert("Please enter all details.");
                return;
            }
            
            const appointment = { name, doctor, date, id };
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments.push(appointment);
            localStorage.setItem("appointments", JSON.stringify(appointments));
            loadAppointments();
        }
        
        function loadAppointments() {
            const appointmentList = document.getElementById("appointmentList");
            appointmentList.innerHTML = "";
            const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            
            appointments.forEach((appointment, index) => {
                const li = document.createElement("li");
                li.textContent = `${appointment.name} - ${appointment.doctor} - ${appointment.date} - ${appointment.id}`;
                
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Cancel";
                deleteBtn.style.marginLeft = "10px";
                deleteBtn.onclick = () => deleteAppointment(index);
                
                li.appendChild(deleteBtn);
                appointmentList.appendChild(li);
            });
        }
        
        function deleteAppointment(index) {
            let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
            appointments.splice(index, 1);
            localStorage.setItem("appointments", JSON.stringify(appointments));
            loadAppointments();
        }