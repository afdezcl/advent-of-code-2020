"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemOne = void 0;
var fs_1 = __importDefault(require("fs"));
function problemOne() {
    var file = fs_1.default.readFileSync('./data/data.txt', 'utf8');
    console.log(file);
}
exports.problemOne = problemOne;
