# **IMPORTANT NOTES**

This project uses external API service, and you will need a key to access it. To do so register on
https://rebrickable.com/home/ and obtain your API key in settings tab. Next you will have to create
.env file in root of the project and paste your API key in this manner:

`REBRICKABLE_API_KEY=<yourKeyHere>`

**_I used expo environment to complete this task. The mobile app is optimized only for Android devices.
You will have to use phisical device or emulator to run it locally. To setup android emulator you can refer to:
https://docs.expo.dev/workflow/android-studio-emulator/_**

# Running the application on Android Emulator:

```
$ npm install
$ npm run android
```

# Running test for the application:

```
$ npm install
$ npm run test
```

# Workflow and thoughts:

1. I entered rebrickable.com to check how the data is served. The api needs key for authentication so I assumed I have to register to be able to obtain it. I registered and with Postman I checked what data was served under https://rebrickable.com/api/v3/lego/minifigs . I will need only Harry Potter themed minifigs so I dove into the API swagger documentation. The set I was looking for with only Harry Potter themed minifigs was found under https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246 . However the results are paginated by default and to fetch all minifigs in this theme I will need to make subsequent calls until 'next' field in response equals null. For the application I am making I would need only list of Ids of minifigs in this specific set, but there is no such endpoint. So to get three random minifigs I will unfortunately need to call all of the pages from the theme and chose three. I am pointing this out because if we had control of what backend returns the performance could be improved. The parts of the specific minifig can be fetched bycalling https://rebrickable.com/api/v3/lego/minifigs/{:id}/parts/ . The response is also paginated so even though it is unlikely a minifig will have more than 100 parts I have to check if there are no next pages and fetch them as well. So now I have good understanding of how the API works and how to call specific endpoints. I created requests in postman for my future reference.

2. I decided I will use expo CLI environment to create the app so I created empty expo repository. I am using Windows so the application will only be optimized for Android devices. I would need access to XCode which only runs on MacOS to run ios simulator. Also I don't have Iphone. I connected React Native Debugger to track my app structure and redux state.

3. I decided to use Redux Toolkit as state management tool so I create a store and slices in which I will hold all data that I will fetch from the rebrickable API.

4. Global styles for most used components are placed in styles and then desctructured.

5. Flatlist renders placeholder image when there is 404 returned from image url, and I managed to complete webview alongside with it's loader when content is not yet displayed.

6. I created a form which will preserve values in case user wants to go back and select another minifig. There is listener onhardware back press which will preserve values from formik and save them to redux slice.

7. After successfuly submitting the data, the fake API endpoint is called with POST method. In real life situation our backend would probably handle user authentication, so we would be able to send only authToken and id of the minifig user wants to get for free. We would also have to keep track of what minifigs user already has in his ownership, to disallow duplicate purchase. Form data is cleared and minifigs are randomly selected again from the initial pool.

# App Preview:
