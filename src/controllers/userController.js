import bcrypt from "bcrypt";
import { usersCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidv4 } from "uuid";

export async function signUp(req, res) {
  const user = req.body;

  try {
    const hashPassword = bcrypt.hashSync(user.password, 10);
    await usersCollection.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  const token = uuidv4();

  try {
    const userExists = await usersCollection.findOne({ email });
    await sessionsCollection.insertOne({
      token,
      userId: userExists._id,
    });

    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
