import { operationsCollection } from "../database/db.js";

export async function newOperation(req, res) {
  const { value, description, type } = req.body;
  const user = res.locals.user;

  const date = Date.now();

  try {
    await operationsCollection.insertOne({
      value,
      description,
      type,
      date,
      userId: user._id,
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getOperations(req, res) {
  const user = res.locals.user;

  try {
    const operations = await operationsCollection
      .find({ userId: user._id })
      .toArray();
    res.send(operations);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
