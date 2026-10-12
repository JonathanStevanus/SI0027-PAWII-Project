// Mini Project - Pertemuan 9-10: Controller Mahasiswa
// TODO 2: lengkapi setiap handler agar memanggil Model Mongoose yang sesuai.

const Mahasiswa = require("../models/mahasiswaModel");

exports.getAll = async (req, res) => {
const data = await Mahasiswa.find().populate('prodiId');
res.json(data);
};

exports.getById = async (req, res) => {
 const data = await Mahasiswa.findById(req.params.id).populate('prodiId');

if (!data) return res.status(404).json({ pesan: 'Tidak ditemukan' });

res.json(data);
};

exports.create = async (req, res) => {
try {


res.status(201).json(mahasiswa);

} catch (err) {

res.status(400).json({ pesan: err.message });

}
};

exports.update = async (req, res) => {
  try {
 const data = await Mahasiswa.findByIdAndUpdate(

  req.params.id, req.body, { new: true, runValidators: true }

);

res.json(data);
 }catch(err){
  res.status(400).json({ pesan: err.message });
 }

};

exports.remove = async (req, res) => {
const data = await Mahasiswa.findById(req.params.id)
if (!data) return res.status(404).json({ pesan: 'Tidak ditemukan' });

await Mahasiswa.findByIdAndDelete(req.params.id);
res.status(204).send();
};
