



https://github.com/user-attachments/assets/38f4acf0-2a2d-403b-bce4-fb1d98ff01c7


https://github.com/user-attachments/assets/7a16d9d9-3b3e-4e71-9788-ee2f3e4049e4




## Project Screens

1. **Splash Screen**: The app begins with a shiny splash screen.  ✨ [See Detail](#splash-screen)
2. **Login Screen**: Users can log in with their email and password. [See Detail](#login-screen)
3. **Cuisine List Screen**: Users see a list of `Cuisines` after logging in. 🍲 [See Detail](#cuisine-list-screen)
4. **Restaurant List Screen**: Clicking on a `Cuisine` shows `Restaurants` for that `Cuisine`. Open restaurants are listed first, followed by closed ones. 🧑‍🍳 [See Detail](#restaurant-list-screen)
5. **Restaurant Detail Screen**: Clicking on a `Restaurant` shows its detailed information. [See Detail](#restaurant-detail-screen)

## Feature Specifications

### Splash screen

- The design of the splash screen is up to your imagination.
- Use any relevant online image or assets that suit the app theme.

### Login screen

- The screen includes:
  - A simple form with email and password fields.
  - A **submit** button.

- **Field Validations**:
  - **Email**: Required, must be a valid email format.
  - **Password**: Required, must be at least 6 characters.

      > Validations should only trigger upon form submission.

### Restaurant list screen

- Displays a list of `Restaurants` for a selected `Cuisine`.
- Information about each `Restaurant` can be found in the response of the `Cuisines` API.
- Sort restaurants: **Open** first, then **Closed**.


### Restaurant detail screen

- This page opens when a `Restaurant` is clicked and displays detailed information about a selected restaurant.
- Information can be retrieved from the cuisine API.
