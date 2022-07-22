import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../router";

export const useUseStore = defineStore("defineStore", {
  state: () => ({
    userData: null,
    loadingUser: true,
    loadingSession: false
  }),
  getters: {
    minuscula(state) {
      return state.userData.toLowerCase();
    },
  },
  actions: {
    async registerUser(email, password) {
      this.loadingUser = false;
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.userData = {
          email: user.email,
          uid: user.uid,
        };
        router.push("/");
        console.log(user);
      } catch (error) {
      } finally {
        this.loadingUser = true;
      }
    },
    async loginuSER(email, password) {
      this.loadingUser = false;
      try {
        const usuario = await signInWithEmailAndPassword(auth, email, password);
        this.userData = {
          email: usuario.email,
          uid: usuario.uid,
        };
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingUser = true;
      }
    },
    async logoutUser() {
      try {
        await signOut(auth);
        this.userData = null;
        router.push("/login");
      } catch (error) {}
    },
    currentUser() {
      return new Promise((resolve, reject) => {
        const unsuscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              this.userData = { email: user.email, uid: user.uid };
            } else {
              this.userData = null;
            }
            resolve(user);
          },
          (e) => reject(e)
        );
        unsuscribe();
      });
    },
  },
});
