const rules = {
    visitor: {
      static: ["signin-page:visit"]
    },
    writer: {
      static: [
        "posts:list",
        "posts:create",
        "users:getSelf",
        "home-page:visit",
        "dashboard-page:visit",
        "signin-page:visit",
        "about-page:visit",
        "inbox-page:visit",
        "detail-page:visit"
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
        "signin-page:visit",
        "dashboard-page:visit",
        "home-page:visit",
        "about-page:visit",
        "inbox-page:visit",
        "detail-page:visit"
      ]
    }
  };
  
  export default rules;