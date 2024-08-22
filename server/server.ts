import express from "express";
import { Express } from "express";
import path from "path";
import { chapterEndpoint } from "./chapter/endpoints/chapter";
import { chapterInfoEndpoint } from "./chapter/endpoints/chapter-info";

const app: Express = express();
const PORT: string | 3000 = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../songwriting-book/www")));

app.get("/", (_req, res) => {
  res.sendFile(
    path.join(__dirname, "../songwriting-book/www/index.html"),
    (err: Error) => {
      if (err) {
        res.status((err as any).status).end();
      }
    }
  );
});

app.get("/api/chapters/:index", chapterEndpoint);

app.get("/api/chapterinfo", chapterInfoEndpoint)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
