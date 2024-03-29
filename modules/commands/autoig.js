const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
    name: "autoig",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zaara",
    description: "Tự động tải xuống từ Instagram",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function () { };

module.exports.handleEvent = async function ({ api, event }) {
    if (event.body) {
        const url = extractInstagramURL(event.body);
        if (url) {
            downloadInstagramVideo(url, api, event);
        }
    }
};

function extractInstagramURL(text) {
    const regex = /(https?:\/\/(www\.)?)?instagram\.com(\/(p|reel)\/[\w-]+\/?)/;
    const matches = text.match(regex);
    return matches ? matches[0] : null;
}

async function downloadFile(url, destPath) {
