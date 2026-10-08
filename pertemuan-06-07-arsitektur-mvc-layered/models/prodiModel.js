
let prodi = [
  { id: 1, nama: "Sistem Informasi", jenjang: "S1", fakultasId: 1 },
  { id: 2, nama: "Informatika", jenjang: "S1", fakultasId: 1 },
];

function getAll() {
  return prodi;
}

function getById(id) {
  return prodi.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: prodi.length + 1, ...data };
  prodi.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
