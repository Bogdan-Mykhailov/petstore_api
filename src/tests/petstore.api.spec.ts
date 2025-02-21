import {expect, test} from "@playwright/test";
import UserAPI from "../api/UserAPI";
import {user, users} from "../data/data";

const api = new UserAPI();

test.describe('Petstore API user functionality testing', () => {
  test('Verify creating a User', async () => {
    const response = await api.createUser(user);

    expect(response.status).toBe(200);
  })

  test('Verify that allows get User', async () => {
    await api.createUser(user);
    const response = await api.getUser(user.username);

    expect(response.status).toBe(200);
    expect(response.data.username).toBe(user.username);
    expect(response.data.firstName).toBe(user.firstName);
    expect(response.data.lastName).toBe(user.lastName);
  })

  test('Verify creating the list of Users', async () => {
    const response = await api.createUsers(users);
    expect(response.status).toBe(200);

    for (const user of users) {
      const response = await api.getUser(user.username);
      expect(response.status).toBe(200);

      expect(response.data.firstName).toBe(user.firstName);
      expect(response.data.lastName).toBe(user.lastName);
      expect(response.data.userStatus).toBe(user.userStatus);
    }
  })

  test('Verify allows login as a User', async () => {
    const response = await api.login(user.username, user.password);
    expect(response.message).toContain('logged in user session:');
  })

  test('Verify allows Log out User', async () => {
    const response = await api.logout();
    expect(response.status).toBe(200);
  })
})
