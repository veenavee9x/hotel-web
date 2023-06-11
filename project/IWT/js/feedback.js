let popup = document.getElementById("popup");
const faqs = document.querySelectorAll(".faq");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function validateForm() {
    let allFormsFilled = true;

    const inputFields = document.querySelectorAll("input[required]");
    inputFields.forEach((field) => {
        if (field.value.trim() === "") {
            allFormsFilled = false;
        }
    });

    if (allFormsFilled) {
        openPopup();
        toggleFaqs();
    } else {
    }
}

function toggleFaqs() {
    faqs.forEach((faq) => {
        faq.classList.toggle("active");
    });
}
