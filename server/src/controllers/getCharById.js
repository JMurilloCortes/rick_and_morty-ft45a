const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const characterId = req.params.id;
        const { data } = await axios(`${URL}/${characterId}`);
        const { id, name, gender, species, origin, image, status, location } =
            data;
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status,
            location,
        };
        return character
            ? res.status(200).json(character)
            : res.status(404).send("Not found");
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    getCharById,
};
