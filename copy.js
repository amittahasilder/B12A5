// Copy
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const number = btn.dataset.number;
        try {
          await navigator.clipboard.writeText(number);
          copies++;
          copyCount.textContent = copies;
          alert(`নম্বর কপি হয়েছে : ${number}`);
        } catch {
          alert("Copy failed!");
        }
      });
    });