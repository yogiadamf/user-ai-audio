import { z } from "zod";

export const informationSchema = z.object({
    username: z.string().min(1, { message: "Mohon isikan nama anda" }).min(3, { message: "Nama minimal terdiri dari 3 karakter" }),
    gender: z.string().min(1, { message: "Mohon pilih jenis kelamin anda" }),
    age: z.string().min(1, { message: "Mohon isikan usia anda" })
});