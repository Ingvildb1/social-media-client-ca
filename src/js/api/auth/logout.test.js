import { logout } from "./logout";

// Mock localstorage
class localStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new localStorageMock();

const TOKEN = "ABCDE";
const PROFILE = {
  name: "ingvildtest",
  email: "ingvildtest@noroff.no",
};

describe("logout", () => {
  it("removes token and profile values from localStorage", async () => {
    global.localStorage.setItem("token", TOKEN);
    global.localStorage.setItem("profile", JSON.stringify(PROFILE));

    expect(global.localStorage.getItem("token")).toEqual(TOKEN);
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);

    logout();

    expect(global.localStorage.getItem("token")).toBeNull();
    expect(global.localStorage.getItem("profile")).toBeNull();
  });
});
