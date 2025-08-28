 // Call java scripr
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const number = btn.dataset.number;
        const name = btn.dataset.name;

        if (coins < 20) {
          alert("আপনার পর্যাপ্ত কয়েন নেই,প্রত্যেকটি কলের জন্য ২০ টি কয়েন প্রয়োজন.");
          return;
        }

        coins -= 20;
        coinCount.textContent = coins;
        alert(`Calling ${name} ${number}...`);

        const time = new Date().toLocaleTimeString();
        history.unshift({name, number, time});
        renderHistory();
      });
    });
