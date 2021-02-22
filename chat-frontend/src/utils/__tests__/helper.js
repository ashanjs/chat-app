import { userStatus } from "../helpers"

const testUser = {
  status: 'online'
}

test('user status', () => {
  expect(userStatus(testUser)).toBe(testUser.status)
})
