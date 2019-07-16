const rules = {
    visitor: {
      static: ["home-page:visit"]
    },
    writer: {
      static: [
        "posts:list",
        "posts:create",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit",
        "allposts-page:visit",
        "about-page:visit",
        "inbox-page:visit"
      ],
      dynamic: {
        "posts:edit": ({userId, postOwnerId}) => {
          if (!userId || !postOwnerId) return false;
          return userId === postOwnerId;
        }
      }
    },
    admin: {
      static: [
        "posts:list",
        "posts:create",
        "posts:edit",
        "posts:delete",
        "users:get",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit",
        "allposts-page:visit",
        "about-page:visit",
        "inbox-page:visit"
      ]
    }
  };
  
  export default rules;