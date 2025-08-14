window.addEventListener("load", function() {
        const loading = document.getElementById("loading-screen");
        const content = document.getElementById("content");

        // Tunggu sebentar biar transisinya halus
        setTimeout(() => {
            loading.classList.add("fade-out");
            setTimeout(() => {
                loading.style.display = "none";
                content.style.display = "block";
            }, 800);
        }, 1000);
    });