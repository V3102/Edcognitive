const User = require("../models/user-model");
const bcryptjs = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router HOME');
    } catch (error) {
        console.log("error");
    }
} 

const register = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router RES');
    } catch (error) {
        console.log("error");
    }
};

const login = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router LOGIN');
    } catch (error) {
        console.log("error");
    }
};

module.exports = {home, register, login};