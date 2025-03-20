module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-redux|@react-native|@react-navigation|@d11/react-native-fast-image)', 
  ],
  moduleNameMapper: {
    "@components/*": ["./src/components/*"],
    "@icons/*": ["./assets/icons/*"],
    "@images/*": ["./src/assets/images/*"],
    "@util/*": ["./src/util/*"],
    "@styles/*": ["./src/styles/*"],
    "@features/*": ["./src/features/*"],
    "@navigators/*": ["./src/navigators/*"],
    "@api/*": ["./src/util/api/*"],
    "@app/*": ["./src/app/*"],
  },
};