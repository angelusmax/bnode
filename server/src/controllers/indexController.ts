import { Request, Response } from "express";

class IndexContorller {
  //definir metodo
  public index(req: Request, res: Response) {
    res.json({ text: "API IS /api/games" });
  }
}

export const indexController = new IndexContorller();
