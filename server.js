const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");
const PORT = process.env.PORT || 3500;
const app = express();

const fileExtLimiter = require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');
const filesPayloadExists = require('./middleware/filesPayloadExists');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'myPage.html'));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/myPage.html"));
});
app.get("/courses", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/courses.html"));
});


app.post('/upload',
    fileupload({ createParentPath : true}),
    filesPayloadExists,
    fileExtLimiter(['.png', '.jpg', '.jpeg', '.pdf', '.txt', '.xls', '.xlsx', '.docx', '.pptx']),
    fileSizeLimiter,
    (req, res) => {
        const files = req.files;
        console.log(files);

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({status: "error", message: err});
            })
        })

        return res.json({status : 'success', message: Object.keys(files).toString() });
    }

)













app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));