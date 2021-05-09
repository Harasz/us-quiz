import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../../utils/get-data";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    const data = await getData();

    const result = [];

    for (let index = 0; index < data.length; index++) {
      if (data[index].id === id) {
        result.push(data[index]);

        if (result.length === 3) {
          break;
        }
      }
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
