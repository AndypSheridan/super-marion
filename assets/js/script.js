// Extract context to allow interaction with canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Game SFX
let scoreSFX = new Audio("https://archive.org/download/classiccoin/classiccoin.wav");
let gameOverSFX = new Audio("https://archive.org/download/smb_gameover/smb_gameover.wav");
let jumpSFX = new Audio("https://archive.org/download/jump_20210424/jump.wav");


