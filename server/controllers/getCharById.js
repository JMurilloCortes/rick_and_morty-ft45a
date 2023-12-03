const axios = require("axios");
const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
        .then(({ data }) => {
            const {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status,
                location,
            } = data;
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
        })
        .catch((error) => {
            return res.status(500).send({ error: error.message });
        });
};

module.exports = {
    getCharById,
};
