document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('input[name="experience"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            document.getElementById("experiencedFields").style.display = this.value === "Experienced" ? "block" : "none";
            document.getElementById("fresherFields").style.display = this.value === "Fresher" ? "block" : "none";
        });
    });
});
