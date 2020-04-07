const admin = require('firebase-admin');
// const functions = require('firebase-functions');

admin.initializeApp();

const firestore = admin.firestore();

const get = (req:any ,res: any) => {
    firestore.collection('organizations').doc().get((snapshot: any) => {
        snapshot.forEach((obj: any) => {
            const data = obj.data();
            res.json({ message: 'List of Organizations', data: data });
        });
    });
};

export { get };