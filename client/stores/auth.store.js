import { defineStore } from "pinia";
import authService from '~~/services/auth.service'
export const authStore = defineStore("authStore", {
    id: 'auth',
    state() {
        return {
            user: null,
        };
    },
    getters: {
        isUserLoggedIn(state) {
            return !!state.user && !!state.user.accessToken;
        },

        getToken(state) {
            if (state.user) {
                return state.user.accessToken
            }
            else return null
        }
    },
    actions: {
        loadAuthState() {
            this.user = JSON.parse(localStorage.getItem("user"));
        },

        logout() {
            this.user = null;
            localStorage.removeItem("user");
        },
        async signin(user) {
            const response = await authService.signin(user);
            this.user = response;
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        },
        signup(user) {
            this.user = null;
            return authService.signup(user);
        },
    },
});
