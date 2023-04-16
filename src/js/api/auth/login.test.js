import { login } from "./login";

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

const ACCESSTOKEN = "ABCDE";
const PROFILE = {
  name: "ingvildtest",
  email: "ingvildtest@noroff.no",
  password: "test1234",
  accessToken: ACCESSTOKEN,
};

function validFetch() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(PROFILE),
  });
}

function failFetch(statusCode = 404, status = "Not Found") {
  return Promise.resolve({
    ok: false,
    statusCode,
    status,
  });
}

describe("login", () => {
  it("logs in the user with email and password, and stores a token in localstorage", async () => {
    global.localStorage.clear();
    global.fetch = jest.fn(() => validFetch());
    await login(PROFILE.email, PROFILE.password);

    expect(JSON.parse(global.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);
  });
  it("Returns HTTP 401 error when user has wrong credentials", async () => {
    global.fetch = jest.fn(() => failFetch(401, "Not authorized"));
    await expect(
      login("invaliduser@noroff.no", "invalidpassword")
    ).rejects.toThrow(new Error());
  });
});
