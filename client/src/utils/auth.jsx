import { jwtDecode } from "jwt-decode";

class Auth {
  getToken() {
    return localStorage.getItem("token");
  }
  getUser() {
    const token = this.getToken();
    return token ? jwtDecode(token) : "";
  }
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }
  isTokenExpired(token) {
    const decode = jwtDecode(token);
    if (decode.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  }

  login(token) {
    localStorage.setItem("token", token);
  }
  logout() {
    localStorage.removeItem("token");
  }
}

export default new Auth();
