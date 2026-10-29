// SHA-256 แบบ synchronous สำหรับการทดลองขุด (crypto.subtle เป็น async จึงช้าเมื่อต้องแฮชหลายแสนครั้ง)
// ค่าคงที่คำนวณจากรากของจำนวนเฉพาะตามนิยามของ SHA-256 แทนการพิมพ์ตาราง
const sha256 = (function () {
  const primes = [];
  for (let n = 2; primes.length < 64; n++) {
    if (primes.every((p) => n % p !== 0)) primes.push(n);
  }
  const frac32 = (x) => ((x - Math.floor(x)) * 2 ** 32) >>> 0;
  const K = new Uint32Array(primes.map((p) => frac32(Math.cbrt(p))));
  const H0 = primes.slice(0, 8).map((p) => frac32(Math.sqrt(p)));
  const W = new Uint32Array(64);
  const enc = new TextEncoder();
  const rotr = (x, n) => (x >>> n) | (x << (32 - n));

  return function (str) {
    const bytes = enc.encode(str);
    const len = bytes.length;
    const total = ((len + 9 + 63) >> 6) << 6;
    const m = new Uint8Array(total);
    m.set(bytes);
    m[len] = 0x80;
    const dv = new DataView(m.buffer);
    dv.setUint32(total - 8, Math.floor((len * 8) / 2 ** 32));
    dv.setUint32(total - 4, (len * 8) >>> 0);

    const h = H0.slice();
    for (let off = 0; off < total; off += 64) {
      for (let t = 0; t < 16; t++) W[t] = dv.getUint32(off + t * 4);
      for (let t = 16; t < 64; t++) {
        const x = W[t - 15], y = W[t - 2];
        const s0 = rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3);
        const s1 = rotr(y, 17) ^ rotr(y, 19) ^ (y >>> 10);
        W[t] = (W[t - 16] + s0 + W[t - 7] + s1) | 0;
      }
      let [a, b, c, d, e, f, g, k] = h;
      for (let t = 0; t < 64; t++) {
        const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (k + S1 + ch + K[t] + W[t]) | 0;
        const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + maj) | 0;
        k = g; g = f; f = e; e = (d + t1) | 0;
        d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
      h[4] = (h[4] + e) | 0; h[5] = (h[5] + f) | 0; h[6] = (h[6] + g) | 0; h[7] = (h[7] + k) | 0;
    }
    return h.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
  };
})();
