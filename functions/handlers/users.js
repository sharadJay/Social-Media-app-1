const { db, admin } = require("../util/admin");
const firebase = require("firebase");
const config = require("../util/config");
const { validateSignup, validateLogin } = require("../util/validators");

firebase.initializeApp(config);
console.log(config);

exports.signup = (req, res) => {
  let newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };
  const { error, valid } = validateSignup(newUser);
  if (!valid) {
    return res.status(400).json(error);
  }

  let token, userId;
  let noImg = "no-face-img.webp";
  // eslint-disable-next-line promise/catch-or-return
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ handle: "This handle is already taken" });
      } else {
        // eslint-disable-next-line promise/no-nesting
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
          })
          .then(idToken => {
            token = idToken;
            const userCredentials = {
              email: newUser.email,
              handle: newUser.handle,
              createdAt: new Date().toISOString(),
              imgUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
              userId
            };
            return admin
              .firestore()
              .doc(`/users/${newUser.handle}`)
              .set(userCredentials);
          })
          .then(() => {
            return res.status(201).json({ token });
          })
          .catch(err => {
            if (err.code === "auth/email-already-in-use") {
              return res.status(400).json({ email: "Email laready exists" });
            } else {
              return res.status(500).json({ err: err.code });
            }
          });
      }
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const { error, valid } = validateLogin(user);
  if (!valid) {
    return res.status(400).json(error);
  }
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      console.log(data);

      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    .catch(err => {
      if (err.code === "auth/wrong-password") {
        return res
          .status(403)
          .json({ error: "Wrong password . Please try again" });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
};

exports.uploadImage = (req, res) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");
  let imgFileName;
  let imgToBeUploaded = {};

  const busboy = new BusBoy({ headers: req.headers });
  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const imgExtension = filename.split(".")[filename.split(".").length - 1];
    imgFileName = `${Math.round(Math.random() * 1000000)}.${imgExtension}`;
    console.log("imgname", imgFileName);
    const filePath = path.join(os.tmpdir(), imgFileName);
    imgToBeUploaded = { filePath, mimetype };
    console.log("imagetobeuploaded", imgToBeUploaded);
    file.pipe(fs.createWriteStream(filePath));
  });
  busboy.on("finish", () => {
    return (
      admin
        .storage()
        .bucket()
        .upload(imgToBeUploaded.filePath, {
          resumable: false,
          metadata: {
            metadata: {
              contentType: imgToBeUploaded.mimetype
            }
          }
        })
        // eslint-disable-next-line promise/always-return
        .then(() => {
          console.log("jwsqnjknskqnk");
          const imgUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imgFileName}?alt=media`;
          return db.doc(`/users/${req.user.handle}`).update({ imgUrl });
        })
        .then(() => {
          return res.json({ messgae: "image uploaded succeffully" });
        })
        .catch(err => {
          console.log(err);
          return res.status(500).json({ err: err.code });
        })
    );
  });
  busboy.end(req.rawBody);
};
