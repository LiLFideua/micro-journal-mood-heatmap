const moodList = [["calm","#a7f3d0"],["happy","#fde68a"],["driven","#93c5fd"],["tired","#c4b5fd"],["rough","#fda4af"]];
    const store = JSON.parse(localStorage.microJournal || "[]");
    let selected = moodList[0][0];
    const entry = document.querySelector("#entry");
    function key(date) { return date.toISOString().slice(0,10); }
    function save() { localStorage.microJournal = JSON.stringify(store); }
    function renderMoods() {
      document.querySelector("#moods").innerHTML = moodList.map(([m,c]) => `<button class="mood ${m === selected ? "active" : ""}" style="--accent:${c}" data-mood="${m}">${m}</button>`).join("");
    }
    function renderYears() {
      const years = [...new Set([new Date().getFullYear(), ...store.map(e => new Date(e.date).getFullYear())])].sort((a,b)=>b-a);
      document.querySelector("#year").innerHTML = years.map(y => `<option>${y}</option>`).join("");
    }
    function streak() {
      const days = new Set(store.map(e => e.date.slice(0,10))); let n = 0, d = new Date();
      while (days.has(key(d))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    }
    function render() {
      renderMoods(); renderYears();
      const year = +document.querySelector("#year").value || new Date().getFullYear();
      const byDay = {};
      store.forEach(e => { const k = e.date.slice(0,10); byDay[k] = e; });
      const start = new Date(`${year}-01-01T00:00:00`), cells = [];
      for (let i=0; i<182; i++) {
        const d = new Date(start); d.setDate(start.getDate() + i * 2);
        const item = byDay[key(d)], color = item ? moodList.find(m => m[0] === item.mood)?.[1] : "#ffffff12";
        cells.push(`<div class="cell" title="${key(d)}${item ? ": " + item.mood : ""}" style="background:${color}"></div>`);
      }
      document.querySelector("#heatmap").innerHTML = cells.join("");
      document.querySelector("#entries").innerHTML = store.slice(-12).reverse().map(e => `<article class="entry"><time>${new Date(e.date).toLocaleString()} - ${e.mood}</time><p>${e.text}</p></article>`).join("") || "<p>No entries yet.</p>";
      document.querySelector("#total").textContent = store.length;
      document.querySelector("#streak").textContent = streak();
      const counts = moodList.map(([m]) => [m, store.filter(e => e.mood === m).length]).sort((a,b)=>b[1]-a[1]);
      document.querySelector("#top").textContent = counts[0][1] ? counts[0][0] : "-";
    }
    entry.addEventListener("input", () => document.querySelector("#count").textContent = `${entry.value.length}/280`);
    document.querySelector("#moods").onclick = e => { const btn = e.target.closest(".mood"); if (!btn) return; selected = btn.dataset.mood; renderMoods(); };
    document.querySelector("#save").onclick = () => { if (!entry.value.trim()) return; store.push({ date:new Date().toISOString(), mood:selected, text:entry.value.trim() }); entry.value = ""; document.querySelector("#count").textContent = "0/280"; save(); render(); };
    document.querySelector("#clear").onclick = () => { if (confirm("Delete all local journal entries?")) { store.length = 0; save(); render(); } };
    document.querySelector("#year").onchange = render; render();

