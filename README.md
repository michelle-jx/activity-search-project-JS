# library-search-project-JS

- HTML/CSS/JS frontend
    - accesses from public API ([https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)) or db.json using json-server
    - API or json should return collection of >5 objects, 3 attributes
    - handled async, use json as communication format
- runs on single page — no redirect/reload (1 HTML file)
- 3 different event listeners (different types)
    - search/filter, toggle light/dark, upvoting posts (each has unique callback function using .addEventListener())
    - events embedded into HTML/CSS do not count
- 1 instance of array iteration (map, forEach, filter, etc)

Project Pitch:
Our project aims to let users search for books using a group of different criteria, including: title, author, subject, etc. 
We'll be using the Open Library API as a database to pull from.  

Features we'd like to include:
-allows users to search with a variety of queries
-renders each book as a card, displaying details such as author, genre, and cover image (click event)
-users can leave comments and ratings for each book (submit event)