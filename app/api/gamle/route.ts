import { initializeApp } from "firebase-admin/app";
import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import dotenv from "dotenv";
dotenv.config();

export async function GET(request: Request) {
  try {
    if (admin.apps.length === 0) {
      initializeApp();
    }

    const firestore = getFirestore();

    const gamesRef = firestore.collection("games");
    const snapshot = await gamesRef.get();

    let greatestId = 0;
    const randomIds = new Array();
    const randomGames = new Array();
    let newestGame;

    snapshot.forEach((doc) => {
      if (doc.data().id > greatestId) {
        greatestId = doc.data().id;
      }
    });

    while (randomIds.length < 3) {
      const randomId = Math.floor(Math.random() * (greatestId - 1)) + 1;
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }

    snapshot.forEach((doc) => {
      if (randomIds.includes(doc.data().id)) {
        randomGames.push(doc.data());
      }
      if (doc.data().id === greatestId) {
        newestGame = doc.data();
      }
    });

    var today = new Date();
    today.setDate(today.getDate() + 1); // Add 1 day to get the next day

    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    const exploreRef = firestore.collection("explore");
    await exploreRef.doc(`${mm}-${dd}-${yyyy}`).set({
      featured: randomGames[0],
      secondary: randomGames[1],
      tertiary: randomGames[2],
      newest: newestGame,
    });
  } catch (error) {
    console.log(error);
  }

  return new Response("OK", { status: 200 });
}
