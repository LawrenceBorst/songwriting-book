import express from "express";
import path from "path";
import { chapterEndpoint } from "./chapter/endpoint";

const app: express.Express = express();
const PORT: string | 3000 = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../songwriting-book/www")));

app.get("/", (_, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
