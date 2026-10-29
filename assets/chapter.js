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
