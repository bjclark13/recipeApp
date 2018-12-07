Recipe Seach
-------------------------
A super basic web app that allow you to call https://api.edamam.com in order to search for recipes, and add them as your favories.

To run: 
 ```
    npm install -g http-server
    http-service -o
```

Notes: 
- I would have loved to have done searching onChange rather than clicking a submit button, but the API's free version rate limits API calls, so I decided not to do that to keep from hitting those limits.
- Some of the diet checkboxes don't work (like high-fiber). I think that is a bug in the API, as I just copied and pasted those from the documentation.
- I am saving the favorites to localStorage, so if you refresh your page, you Favorites are still saved in the browser. Woohoo!
- I didn't do any minification or anything, as I'm sure the code challenge's main focus is being able to write logical and concise AngularJS code, not necessarily having performance in mind. I also am aware that it looks hideous, but again, I'm assuming CSS wasn't the main priority.