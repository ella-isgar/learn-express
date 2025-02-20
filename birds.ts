import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

// Middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Time: ", Date.now());
  next();
});

// GET SERVICE 1
// Define the home page route
router.get("/", (req: Request, res: Response) => {
  res.send("Birds home page");
});

// GET SERVICE 2
// Define the about route
router.get("/about", (req: Request, res: Response) => {
  res.send("About birds");
});

export default router;
