import axios from "axios";
import Fact from "../models/Fact.model.js";
import StatusCodes from "http-status";

class FactController {
  async getDogFacts(req, res) {
    const { number } = req.query;

    if (!number || number < 1 || number > 100) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Number must be between 1 and 100" });
    }

    try {
      const response = await axios.get(
        `https://dog-api.kinduff.com/api/facts?number=${number}`
      );
      const facts = response.data.facts;
      const savedFacts = await Fact.insertMany(facts.map((fact) => ({ fact })));
      res.status(StatusCodes.OK).json(savedFacts);
    } catch (error) {
      console.error(error);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "An error occurred while fetching facts" });
    }
  }
}

export default new FactController();
