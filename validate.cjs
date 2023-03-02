var yaml = require('yaml-js');
var fs = require("fs");
var resumeSchema = require("resume-schema");
var resumeObject = yaml.load(fs.readFileSync("resume.yaml", "utf8"));
resumeSchema.validate(resumeObject,
    function (err, report) {
        if (err) {
            console.error("The resume was invalid:", err);
            exit(1);
        }
        console.log("Resume validated successfully:", report);
    },
    function (err) {
        console.error("The resume was invalid:", err);
        exit(1);
    }
);