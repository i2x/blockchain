// โครงสร้างหนังสือทั้งเล่ม — ใช้ร่วมกันระหว่างหน้าสารบัญและหน้าแต่ละบท (ปุ่มบทก่อน/บทถัดไป)
// status: "todo" = ยังไม่มีเนื้อหา, "ready" = เขียนเสร็จแล้ว (เปลี่ยนเมื่อเติมเนื้อหาบทนั้นครบ)
const BOOK = [
  {
    part: "ภาค 1",
    title: "Bitcoin",
    desc: "Whitepaper ข้อ 1–8 และการใช้งาน Bitcoin Core",
    chapters: [
      {
        id: "ch00", no: 0, status: "ready",
        title: "ความรู้พื้นฐานก่อนอ่าน Whitepaper",
        tag: "พื้นฐาน",
        sections: [
          "0.1 ฟังก์ชันแฮช (Hash function) และคุณสมบัติของ SHA-256",
          "0.2 กุญแจสาธารณะ กุญแจส่วนตัว และลายเซ็นดิจิทัล",
          "0.3 เชื่อมบล็อกเป็นสายโซ่ด้วยค่าแฮช (Hash chain)",
          "0.4 ปัญหาการใช้จ่ายซ้ำ (Double-spending)",
        ],
        keywords: ["SHA-256", "ECDSA", "digital signature", "double-spending"],
      },
      {
        id: "ch01", no: 1, status: "ready",
        title: "Whitepaper ส่วนที่ 1: ปัญหาและแนวคิดตั้งต้น",
        tag: "Whitepaper ข้อ 1–3",
        sections: [
          "1.1 [ข้อ 1] Introduction: ข้อจำกัดของระบบที่อาศัยตัวกลาง",
          "1.2 [ข้อ 2] Transactions: เหรียญในฐานะสายโซ่ของลายเซ็นดิจิทัล",
          "1.3 [ข้อ 2] การป้องกันการใช้จ่ายซ้ำโดยไม่มีตัวกลาง",
          "1.4 [ข้อ 3] Timestamp Server: การประทับเวลาด้วยค่าแฮช",
        ],
        keywords: ["trusted third party", "chain of signatures", "timestamp", "previous hash"],
      },
      {
        id: "ch02", no: 2, status: "ready",
        title: "Whitepaper ส่วนที่ 2: การหาฉันทามติด้วย Proof-of-Work",
        tag: "Whitepaper ข้อ 4–6",
        sections: [
          "2.1 [ข้อ 4] Proof-of-Work: การหา nonce ให้ได้ค่าแฮชตามเป้าหมาย",
          "2.2 [ข้อ 4] การปรับความยาก (Difficulty adjustment) และหลัก one-CPU-one-vote",
          "2.3 [ข้อ 4] กฎสายโซ่ที่ยาวที่สุด และเหตุที่แก้ไขบล็อกเก่าได้ยาก",
          "2.4 [ข้อ 5] Network: ขั้นตอนการทำงานของโหนด 6 ขั้น",
          "2.5 [ข้อ 5] การแยกสายชั่วคราวเมื่อมีบล็อกเกิดขึ้นพร้อมกัน",
          "2.6 [ข้อ 6] Incentive: รางวัลบล็อก ค่าธรรมเนียม Halving และอุปทาน 21 ล้าน BTC",
          "2.7 [ข้อ 6] เหตุที่ผู้ถือพลังประมวลผลส่วนใหญ่ยังเลือกทำตามกติกา (51% attack)",
        ],
        keywords: ["nonce", "difficulty", "longest chain", "coinbase", "halving", "51%"],
      },
      {
        id: "ch03", no: 3, status: "ready",
        title: "Whitepaper ส่วนที่ 3: การลดพื้นที่จัดเก็บและการตรวจสอบแบบย่อ",
        tag: "Whitepaper ข้อ 7–8",
        sections: [
          "3.1 [ข้อ 7] Merkle Tree และ Merkle Root",
          "3.2 [ข้อ 7] การตัดข้อมูลธุรกรรมเก่า (Pruning) โดยไม่กระทบค่าแฮชของบล็อก",
          "3.3 [ข้อ 7] การคำนวณขนาด Block header: 80 ไบต์ต่อบล็อก ประมาณ 4.2 MB ต่อปี",
          "3.4 [ข้อ 8] Simplified Payment Verification (SPV) และ Merkle proof",
          "3.5 [ข้อ 8] ข้อจำกัดของ SPV: Full node เทียบกับ Light client",
        ],
        keywords: ["Merkle root", "pruning", "block header", "SPV", "Merkle branch"],
      },
      {
        id: "ch04", no: 4, status: "ready",
        title: "Bitcoin Core: Mainnet, Testnet และ Regtest",
        tag: "ภาคปฏิบัติ",
        sections: [
          "4.1 ส่วนประกอบของ Bitcoin Core: bitcoind, bitcoin-cli และ bitcoin-qt",
          "4.2 ความแตกต่างของ Mainnet, Testnet, Signet และ Regtest",
          "4.3 ไฟล์ bitcoin.conf พอร์ต และไดเรกทอรีข้อมูลของแต่ละเครือข่าย",
          "4.4 คำสั่งพื้นฐาน: getblockchaininfo, getnewaddress, getbalance, sendtoaddress, generatetoaddress",
          "4.5 UTXO model: การอ่าน input, output, เงินทอน และค่าธรรมเนียม",
          "4.6 รูปแบบ address: Legacy (1…), P2SH (3…), SegWit (bc1q…), Taproot (bc1p…) และ Testnet (tb1…)",
        ],
        keywords: ["full node", "testnet faucet", "regtest", "UTXO", "bitcoin-cli"],
      },
    ],
  },
  {
    part: "ภาค 2",
    title: "Ethereum และ Smart Contract",
    desc: "Account model การเขียน smart contract และกลไก Proof of Stake",
    chapters: [
      {
        id: "ch05", no: 5, status: "ready",
        title: "Ethereum และ Smart Contract เบื้องต้น",
        tag: "พื้นฐาน Ethereum",
        sections: [
          "5.1 UTXO model ของ Bitcoin เทียบกับ Account model ของ Ethereum",
          "5.2 บัญชีผู้ใช้ (EOA) และบัญชีสัญญา (Contract account)",
          "5.3 Smart contract และการทำงานบน EVM",
          "5.4 ธุรกรรมและบล็อกของ Ethereum: ฟิลด์ของธุรกรรม, state root และการเลือกสายโซ่",
          "5.5 Gas: gas limit, base fee, priority fee และหน่วย Wei / Gwei / ETH",
          "5.6 พื้นฐานภาษา Solidity: ชนิดข้อมูล, visibility, modifier และ event",
          "5.7 เครื่องมือที่ใช้: Remix, MetaMask และ Sepolia testnet",
        ],
        keywords: ["EVM", "gas", "EOA", "Solidity", "Remix", "fork choice", "state root"],
      },
      {
        id: "ch06", no: 6, status: "ready",
        title: "Counter Storage: Smart Contract แรก",
        tag: "ภาคปฏิบัติ",
        sections: [
          "6.1 เขียน Counter contract ทีละบรรทัด",
          "6.2 ความแตกต่างของ storage, memory และ calldata",
          "6.3 ธุรกรรมที่เปลี่ยนสถานะ (เสีย gas) กับการเรียกอ่านด้วย view / pure (ไม่เสีย gas)",
          "6.4 Deploy และทดสอบบน Remix",
          "6.5 ต่อยอดด้วย require, owner และ event",
        ],
        keywords: ["storage", "view", "pure", "deploy", "state change"],
      },
      {
        id: "ch07", no: 7, status: "ready",
        title: "Infinite Loop และแนวทางแก้ไข",
        tag: "ความปลอดภัยของ contract",
        sections: [
          "7.1 เหตุที่ blockchain ต้องป้องกันลูปไม่รู้จบ (Halting problem)",
          "7.2 Bitcoin Script: ตัดลูปออกตั้งแต่การออกแบบ",
          "7.3 Ethereum: ใช้ gas จำกัดการทำงาน และผลของ Out of gas (revert โดยไม่คืนค่า gas)",
          "7.4 ลูปบน array ที่ขยายไม่จำกัด ทำให้ฟังก์ชันใช้งานไม่ได้ถาวร (DoS)",
          "7.5 แนวทางแก้: จำกัดขนาด ประมวลผลเป็นชุด ใช้รูปแบบ Pull over Push และใช้ mapping",
        ],
        keywords: ["Turing-complete", "out of gas", "block gas limit", "DoS", "pull payment"],
      },
      {
        id: "ch08", no: 8, status: "ready",
        title: "Proof of Stake",
        tag: "กลไกฉันทามติ",
        sections: [
          "8.1 ข้อจำกัดของ PoW: การใช้พลังงานและการรวมศูนย์ (centralization) ที่ mining pool",
          "8.2 แนวคิดของ PoS: วางเงินค้ำประกันแทนการใช้พลังประมวลผล",
          "8.3 Validator, การวาง 32 ETH, การเลือก proposer และ attestation",
          "8.4 Slot, Epoch, Fork choice (LMD-GHOST) และ Finality (Casper FFG)",
          "8.5 Slashing และปัญหา Nothing-at-stake",
          "8.6 The Merge (กันยายน 2022) และการเปรียบเทียบ PoW กับ PoS",
        ],
        keywords: ["validator", "stake", "slashing", "epoch", "finality", "The Merge"],
      },
    ],
  },
  {
    part: "ภาค 3",
    title: "การอัปเกรดและการขยายระบบ",
    desc: "การเปลี่ยนกติกาของเครือข่าย และการรองรับธุรกรรมจำนวนมาก",
    chapters: [
      {
        id: "ch09", no: 9, status: "ready",
        title: "Hard Fork และ Soft Fork",
        tag: "การอัปเกรดเครือข่าย",
        sections: [
          "9.1 Fork ชั่วคราวกับ Fork จากการเปลี่ยนกติกา",
          "9.2 Soft fork: กติกาเข้มงวดขึ้น โหนดรุ่นเก่ายังทำงานร่วมได้ (Backward compatible)",
          "9.3 Hard fork: โหนดรุ่นเก่าไม่ยอมรับกติกาใหม่ ต้องอัปเกรดหรือแยกสาย",
          "9.4 กรณีศึกษา: SegWit และ Taproot (Soft fork), Bitcoin Cash และ ETH/ETC (Hard fork)",
          "9.5 ตารางเปรียบเทียบ Hard fork กับ Soft fork",
        ],
        keywords: ["backward compatible", "chain split", "SegWit", "Bitcoin Cash", "ETC"],
      },
      {
        id: "ch10", no: 10, status: "ready",
        title: "Scaling: Lightning Network และ Ethereum Rollups",
        tag: "Layer 2",
        sections: [
          "10.1 Blockchain Trilemma: การกระจายศูนย์ ความปลอดภัย และการขยายตัว",
          "10.2 การขยายบน Layer 1 (ขนาดบล็อก, Sharding) กับ Layer 2",
          "10.3 Lightning Network: Payment channel การเปิดและปิดช่อง และการส่งต่อด้วย HTLC",
          "10.4 Rollup: ประมวลผลนอกเชนแล้วส่งข้อมูลกลับ Layer 1",
          "10.5 Optimistic Rollup (Fraud proof, ถอนเงินรอประมาณ 7 วัน) กับ ZK Rollup (Validity proof)",
          "10.6 ตารางเปรียบเทียบ Lightning, Optimistic Rollup, ZK Rollup และ Sidechain",
        ],
        keywords: ["trilemma", "payment channel", "HTLC", "fraud proof", "zero-knowledge"],
      },
    ],
  },
  {
    part: "ภาค 4",
    title: "แอปพลิเคชันและระบบนิเวศ",
    desc: "DApp, DAO, โทเคน, Oracle และการเก็บรักษา private key",
    chapters: [
      {
        id: "ch11", no: 11, status: "todo",
        title: "DApp และ DAO",
        tag: "แอปพลิเคชัน",
        sections: [
          "11.1 ความแตกต่างระหว่าง DApp กับแอปพลิเคชันทั่วไป",
          "11.2 สถาปัตยกรรม DApp: Frontend, Wallet, Smart contract และ IPFS",
          "11.3 การเชื่อม Frontend กับ Contract: ABI, provider และ signer (ethers.js)",
          "11.4 DAO: การเสนอ การลงมติ และการดำเนินการตามกติกาในโค้ด",
          "11.5 กรณีศึกษา The DAO (2016): ช่องโหว่ Reentrancy และผลที่ตามมา",
        ],
        keywords: ["ABI", "provider", "governance token", "proposal", "reentrancy"],
      },
      {
        id: "ch12", no: 12, status: "todo",
        title: "NFT และ Snapshot",
        tag: "โทเคน",
        sections: [
          "12.1 Fungible กับ Non-fungible: ERC-20, ERC-721 และ ERC-1155",
          "12.2 โครงสร้าง NFT: tokenId, ownerOf, tokenURI และ metadata บน IPFS",
          "12.3 ขั้นตอน Mint, Transfer และ Approve",
          "12.4 Snapshot: การบันทึกยอดถือครอง ณ บล็อกที่กำหนด เพื่อแจก Airdrop หรือกำหนดสิทธิ์ลงมติ",
          "12.5 Snapshot.org: การลงมติแบบ off-chain โดยไม่เสีย gas",
        ],
        keywords: ["ERC-721", "tokenURI", "IPFS", "mint", "block number", "off-chain voting"],
      },
      {
        id: "ch13", no: 13, status: "todo",
        title: "Oracle",
        tag: "ข้อมูลภายนอกเชน",
        sections: [
          "13.1 Oracle problem: เหตุที่ smart contract ดึงข้อมูลภายนอกเองไม่ได้",
          "13.2 รูปแบบการทำงาน: Inbound / Outbound และ Push / Pull",
          "13.3 Oracle แบบรวมศูนย์กับแบบกระจายศูนย์ (Chainlink)",
          "13.4 ความเสี่ยง: การปั่นราคา และจุดล้มเหลวเดียว (Single point of failure)",
          "13.5 ตัวอย่างการใช้งาน: Price feed ใน DeFi, ประกันภัย และการสุ่มเลขด้วย VRF",
        ],
        keywords: ["oracle problem", "Chainlink", "price feed", "VRF", "deterministic"],
      },
      {
        id: "ch14", no: 14, status: "todo",
        title: "Hardware Wallet",
        tag: "ความปลอดภัย",
        sections: [
          "14.1 สิ่งที่ wallet เก็บคือ private key ไม่ใช่ตัวเหรียญ",
          "14.2 Hot wallet กับ Cold wallet",
          "14.3 Seed phrase (BIP39) และ HD wallet (BIP32 / BIP44)",
          "14.4 หลักการของ Hardware wallet: ลงนามธุรกรรมภายในอุปกรณ์ โดย key ไม่ออกจากเครื่อง",
          "14.5 ภัยที่พบบ่อยและวิธีป้องกัน",
        ],
        keywords: ["cold storage", "seed phrase", "BIP39", "secure element", "offline signing"],
      },
    ],
  },
  {
    part: "ภาค 5",
    title: "ทบทวนก่อนสอบ",
    desc: "สรุปเนื้อหาและแบบฝึกหัด",
    chapters: [
      {
        id: "ch15", no: 15, status: "todo",
        title: "สรุปรวบยอดและแบบฝึกหัด",
        tag: "ทบทวน",
        sections: [
          "15.1 สรุปคำศัพท์และตัวเลขสำคัญ",
          "15.2 ตารางเปรียบเทียบรวม: BTC / ETH, PoW / PoS, Hard / Soft fork และ Layer 2",
          "15.3 ข้อสอบปรนัยพร้อมเฉลย",
          "15.4 แนวข้อสอบอัตนัย",
        ],
        keywords: ["cheat sheet", "quiz"],
      },
    ],
  },
];

// เครื่องหมาย "อ่านแล้ว" ใช้ร่วมกันระหว่างสารบัญและหน้าบท
// key ของแต่ละหัวข้อคือ "chXX-i" โดย i เริ่มที่ 0 และตรงกับ <section id="s{i+1}"> ในหน้าบท
const CHECK_KEY = "bc-final-checked";
function loadChecked() {
  try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; } catch (e) { return {}; }
}
function saveChecked(checked) {
  try { localStorage.setItem(CHECK_KEY, JSON.stringify(checked)); } catch (e) {}
}

// ใช้ในหน้าบท: หาบทก่อน/ถัดไป
function findNeighbors(id) {
  const all = BOOK.flatMap((p) => p.chapters);
  const i = all.findIndex((c) => c.id === id);
  return { prev: all[i - 1] || null, current: all[i] || null, next: all[i + 1] || null };
}
