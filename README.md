# Twitter Clone ---FRONTEND
## Description
> A personal react full stack project on twitter web page replication
___
## **Tools Used**
* Javascript
* HTML
* Tailwindcss
* cloudinary for image upload

---

```javascript
using npm create vite@latest
```
---

---
> **AUTHENTICATION**
---

Newly registered users are will be required to go through a email verification process. The email verification link could only be used once and only lasts for 15 minutes after which it expires.

_**incase of expired email verification link:**_ The user will be required to login with the registered credentials then a new email verification link will be sent to the user and this link will only last for 25 minutes before it expires.

Unverified users will not be granted access to perform all _**CRUD**_ operations until the account is verified.

***
> **AUTHORIZATION**
---

Upon user login, every user is granted an access token which lasts for only 2 hours and a refresh token which lasts for a day. This token authorizes a user's access to the site's available resource. 

Upon registration, each user is given the role of a USER which is the default role assigned to all registered users. And after the access token expiration, a refresh token is used to get a new access token.

**Refresh token rotation**
---
Also, the refresh token can only be used once then it becomes useless, a new refresh token is generated whenever it is used to get a new access token

---
**Granting of Roles**
---
Admin role has the ability of granting additional roles to a specific user

>**An admin page will be added which will include the following features -**

1. _Toggling of admin role_
1. _Toggling of editor roles_
1. _Fetching of user list_
1. _Users count_
1. _Fetching of all tweets_
1. _Tweets count_
1. _Fetching of all comments_
1. _Comments count_
1. _Fetching of all comments in a tweet_
1. _Count of comments in a tweet_
1. _Fetching of all comments by a user_
1. _Fetching of all response_
1. _Fetching of all response in a tweet comment_
1. _Count of responses in a tweet comment_
1. _Deleting of tweets_
1. _Deleting of comments in a tweet_
1. _Deleting of users_
1. _Locking and Unlocking user account_
---

## _Dependencies_
* react-icons
* react-router-dom
* redux-toolkit
* socket.io-client

***
## _FEATURES_
* [x] Tweets creation
* [x] Tweets like, unlike
* [-] Tweets update
* [-] Tweets deletion
* [x] Tweets fetching
* [x] Single tweet page
* [x] Commenting on tweets
* [-] Replying comments on tweets
* [-] Tweets share
* [-] Tweets retweet
* [-] Role Based authentication
* [-] Admin page
* [x] Token based authentication
* [x] following and unfollowing a user
* [-] Granting of roles to users by only admin
* [-] Deletion of tweets/users by only admin
* [-] Deleting comments and responses by only the post author
* [-] Locking and Unlocking of users account by admin by only admin
* [-] Users can update their info
* [-] Users can delete their account
* [x] Email verification based registration
* [x] Email verification based password reset
* [x] Registration page
* [x] Login page
* [x] Password reset page


