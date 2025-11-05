// === Langkah 2: Deklarasi variabel dan tipe data ===
const appName = "Electrical Engineering Score Analyzer";
let version = 1.0;
const author = "Nama Anda"; // ganti dengan nama kamu sendiri

console.log(`Aplikasi: ${appName} v${version} oleh ${author}`);

// === Langkah 3: Fungsi dan Arrow Function ===
function greet(name) {
  return `Halo, ${name}!`;
}

const sayHello = (name) => `Selamat datang, ${name}!`;

console.log(greet("Rina"));
console.log(sayHello("Doni"));

// === Langkah 4: Array dan Object ===
const students = [
  { name: "Rina", score: 88 },
  { name: "Doni", score: 72 },
  { name: "Ayu", score: 95 },
  { name: "Bima", score: 67 },
  { name: "Lala", score: 82 },
];

for (const s of students) {
  console.log(s.name);
}

// === Langkah 5: Destructuring & Spread Operator ===
const { name, score } = students[0];
console.log(`Mahasiswa pertama: ${name} (${score})`);

const newStudents = [...students, { name: "Eka", score: 90 }];
console.log("Array baru dengan tambahan Eka:", newStudents);

// === Langkah 6: Array Methods: map, filter, reduce ===
const passed = students.filter(s => s.score >= 80);
console.log("Mahasiswa lulus:", passed);

const names = students.map(s => s.name.toUpperCase());
console.log("Nama mahasiswa (huruf besar):", names);

const avg = students.reduce((acc, s) => acc + s.score, 0) / students.length;
console.log("Rata-rata nilai:", avg.toFixed(2));

// === Langkah 7: Fungsi Utility ===
const getAverage = arr => arr.reduce((sum, s) => sum + s.score, 0) / arr.length;
const getPassed = arr => arr.filter(s => s.score >= 80);
const getTopStudent = arr => arr.reduce((best, s) => s.score > best.score ? s : best);

console.log("Nilai rata-rata:", getAverage(students));
console.log("Lulus:", getPassed(students).map(s => s.name).join(", "));
console.log("Mahasiswa terbaik:", getTopStudent(students).name);

// === Langkah 8: Template Literal dan Output Rapi ===
const avgScore = getAverage(students).toFixed(2);
const topStudent = getTopStudent(students); // Ganti 'top' → 'topStudent' agar tidak bentrok dengan window.top

console.log(`
Ringkasan Nilai
Rata-rata: ${avgScore}
Terbaik: ${topStudent.name} (${topStudent.score})
Jumlah Lulus: ${getPassed(students).length}/${students.length}
`);

// === BONUS POINT 1: Fungsi Peringkat ===
const rankStudents = arr => [...arr].sort((a, b) => b.score - a.score);
const ranked = rankStudents(students);
console.log("Peringkat (tertinggi ke terendah):", ranked);
console.log("3 Besar:", ranked.slice(0, 3));

// === BONUS POINT 2: Nilai Huruf ===
const toLetter = score => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "E";
};

const studentsWithGrade = students.map(s => ({
  ...s,
  grade: toLetter(s.score)
}));

console.log("Mahasiswa dengan nilai huruf:", studentsWithGrade);

// === BONUS POINT 3: Optional Chaining / Nullish Coalescing ===
const sampleStudent = { name: "Rina", advisor: { email: "rina@univ.ac.id" } };
console.log(sampleStudent.advisor?.email ?? "Belum ada pembimbing");
