
let dosen = [
  { id: 1, nama: "dosenA", nip: "Sistem Informasi", prodiId: 1 },
  { id: 2, nama: "dosenB", nip: "Informatika", prodiId: 2 },
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
