import React from 'react'
import {render} from 'chatApp-test-utils'
import Login from '../Login'

test('render login', () => {
  const {container} = render(<Login />)
  debugger
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      id="auth-container"
    >
      <div
        id="auth-card"
      >
        <div
          class="card-shadow"
        >
          <div
            id="image-section"
          >
            <img
              alt="Login"
              src="[object Object]"
            />
          </div>
          <div
            id="form-section"
          >
            <h2>
              Welcome back
            </h2>
            <form>
              <div
                class="input-field mb-1"
              >
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  value=""
                />
              </div>
              <div
                class="input-field mb-2"
              >
                <input
                  placeholder="Password"
                  required=""
                  type="passsword"
                  value=""
                />
              </div>
              <button>
                LOGIN
              </button>
            </form>
            <p>
              Don't have an account?
              <a
                href="/register"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `)
})
