
let mahasiswa = [
  { id: 1, nama: "mahasiswa1", jurusan: "Sistem Informasi" },
  { id: 2, nama: "mahasiswa2", jurusan: "Informatika" },
];

function getAll() {
  return mahasiswa;
}

function getById(id) {
  return mahasiswa.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: mahasiswa.length + 1, ...data };
  mahasiswa.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
