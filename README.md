# Library API - Week 1

API sederhana berbasis Express 5 + TypeScript untuk mengelola data buku dan kategori. Data disimpan di memori (array) sehingga cocok untuk latihan atau demo tanpa database.

## Tech stack

- Express 5, TypeScript, express-validator
- Middleware logging kustom (`requestLogger`) menambahkan header `X-Request-Id` dan durasi request

## Menjalankan proyek

1. Instal dependensi: `npm install`
2. Jalankan pengembangan: `npm run dev`
3. Server berjalan di `http://localhost:3000`

## Struktur utama

- `src/index.ts` : bootstrap server, daftar router & middleware
- `src/routes/` : definisi endpoint (`book.route.ts`, `category.route.ts`)
- `src/controllers/` : logika per-request
- `src/services/` : operasi data in-memory
- `src/models/` : tipe & data dummy
- `src/middlewares/` : logger, validator
- `src/utils/response.ts` : helper format respons

## Validasi

- Buku: `title`, `author` wajib; `publishedYear` integer 1000-2025; `stock` integer >= 0; `isbn` string.
- Kategori: `name` wajib.
- Error validasi dikembalikan dengan status 400 dan daftar detail.

## Endpoint

Semua respons sukses memiliki bentuk `{ succes: true, message, data }`. Kesalahan memakai `{ succes: false, message, errors }`.

### Books

- `GET /books` — daftar buku; query opsional `title`, `minYear`, `maxYear`.
- `GET /books/:id` — detail buku.
- `POST /books` — tambah buku baru.
  ```json
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "publishedYear": 1965,
    "stock": 3,
    "isbn": "9780441172719"
  }
  ```
- `PUT /books/:id` — perbarui buku (payload sama seperti POST).
- `DELETE /books/:id` — hapus buku.

### Category

- `GET /category` — daftar kategori.
- `POST /category` — tambah kategori baru.
  ```json
  { "name": "Philosophy" }
  ```
- `PUT /category/:id` — perbarui nama kategori.
- `DELETE /category/:id` — hapus kategori.

## Contoh curl singkat

```bash
curl -X POST http://localhost:3000/category \
  -H "Content-Type: application/json" \
  -d '{"name":"Philosophy"}'

curl -X PUT http://localhost:3000/category/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Sci-Fi"}'
```

## Catatan

- Data hanya hidup selama server berjalan; restart akan mengembalikan dataset awal di `src/models`.
- Middleware logger menampilkan request di console dan menyisipkan `X-Request-Id` di setiap respons.

Jawaban Soal Materi:
1.b
2.c
3.b
4.c
5.c
6.b
7.b
8.c
9.b
10.c
