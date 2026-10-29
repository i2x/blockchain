// ปุ่มบทก่อน/บทถัดไปท้ายหน้าบท — อ่านรหัสบทจาก <body data-chapter="chXX">
// ต้องโหลด toc.js ก่อนไฟล์นี้
(function () {
  const nav = document.getElementById("chapter-nav");
  if (!nav) return;
  const { prev, next } = findNeighbors(document.body.dataset.chapter);
  const link = (c, cls, label) => c.status === "ready"
    ? `<a class="${cls}" href="${c.id}.html"><small>${label}</small>บทที่ ${c.no} ${c.title}</a>`
    : `<a class="${cls}" href="../index.html#${c.id}"><small>${label} (ยังไม่มีเนื้อหา)</small>บทที่ ${c.no} ${c.title}</a>`;
  nav.innerHTML = (prev ? link(prev, "prev", "บทก่อนหน้า") : `<a class="prev" href="../index.html"><small>กลับไป</small>สารบัญ</a>`)
    + (next ? link(next, "next", "บทถัดไป") : "");
})();

// ช่องติ๊ก "อ่านหัวข้อนี้แล้ว" ท้ายแต่ละหัวข้อ และเครื่องหมายในกล่อง "ในบทนี้"
// ใช้สถานะชุดเดียวกับสารบัญ ติ๊กในหน้านี้แล้วสารบัญจะเห็นด้วย
(function () {
  const id = document.body.dataset.chapter;
  const { current } = findNeighbors(id);
  if (!current) return;
  let checked = loadChecked();

  const marks = current.sections.map((title, i) => {
    const sec = document.getElementById(`s${i + 1}`);
    if (!sec) return null;
    const key = `${id}-${i}`;
    const [no, ...rest] = title.split(" ");
    // แถบปิดท้ายหัวข้อ: ทั้งแถบกดได้ ช่องติ๊กอยู่ด้านขวา
    const label = document.createElement("label");
    label.className = "mark-read";
    label.innerHTML = `
      <span class="end"><small>จบหัวข้อ ${no}</small>${rest.join(" ")}</span>
      <span class="tick"><input type="checkbox" data-key="${key}"><span class="off">อ่านจบแล้ว กดติ๊ก</span><span class="on">อ่านแล้ว</span></span>`;
    sec.appendChild(label);
    return { key, sec, box: label.querySelector("input"), toc: document.querySelector(`.mini-toc a[href="#s${i + 1}"]`) };
  }).filter(Boolean);

  const mini = document.querySelector(".mini-toc strong");
  const count = document.createElement("small");
  count.className = "read-count";
  if (mini) mini.after(count);

  function render() {
    let n = 0;
    marks.forEach((m) => {
      const on = !!checked[m.key];
      n += on;
      m.box.checked = on;
      m.sec.classList.toggle("is-read", on);
      if (m.toc) m.toc.closest("li").classList.toggle("read", on);
    });
    count.textContent = `อ่านแล้ว ${n} / ${marks.length} หัวข้อ`;
  }

  document.addEventListener("change", (e) => {
    const m = marks.find((x) => x.box === e.target);
    if (!m) return;
    checked = loadChecked();  // อ่านใหม่ก่อนเขียน เผื่อมีการติ๊กจากแท็บอื่น
    checked[m.key] = m.box.checked;
    saveChecked(checked);
    render();
  });
  window.addEventListener("storage", (e) => { if (e.key === CHECK_KEY) { checked = loadChecked(); render(); } });
  window.addEventListener("pageshow", (e) => { if (e.persisted) { checked = loadChecked(); render(); } });

  render();
})();
