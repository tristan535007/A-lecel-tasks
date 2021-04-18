const Gq_registration = `mutation reg($login:String!, $password:String!){
  createUser(login:$login,password:$password){
    _id,login
  }

}`;

const getPost = `query getPost($query:String){
  PostFindOne(query:$query) {
    _id
  comments{
_id
createdAt
text 
post{ _id}  
answers{
_id
createdAt
post{ _id} 
text
     	 }
owner{
  _id
  nick
  login
  avatar{
    url
  }
}
    }
  }  
}`;

const Rq_Login_Password = `query login($login:String!,$password:String!){
    login(login:$login,password:$password)
      }`;

const GQ_registration = `mutation reg($login:String!, $password:String!){
  createUser(login:$login,password:$password){
  _id,login
  }`;
const Gq_getUsers = `query getUsers($someAmountUsers:String){
  UserFind(query:$someAmountUsers){
    createdAt
    login
    _id
    nick
    avatar{
    url
    }
  }
}
  `;

const Gq_personal_Data = `
  query getUser($query:String){
    UserFindOne(query:$query){
      login
      following{
        _id
        login
        nick
      }
      _id
      nick
      avatar{
      url
      }
    }
  }
  `;

const Gq_mutation_update_person = `mutation updateMe($user:UserInput){
  UserUpsert(user:$user){
     following{
      _id
      login
      nick
    }
    _id
    nick
 
    avatar{
   url
    }
  }
}`;

const Gq_get_following_posts = `query getFeed($usersList:String){
  PostFind(query:$usersList){
    createdAt
    _id  
   title
   text
   owner{
   nick
   login
   _id
   avatar{
         url
       }
          }
    
   images{ 
   _id
   url
   posts{ _id}
        
         }
   comments{
   _id
   createdAt
   text 
   post{ _id}  
   answers{
   _id
   createdAt
   post{ _id} 
   text
           }
   owner{
     _id
     nick
     login
     avatar{
       url
     }
   }
       }
    directs{
     _id
     text
     image{
       _id
       url
     }

   }   
    likesCount  
       likes{
         _id
         post{
           _id
         }
         comment{
           _id
           text
           owner{
             nick 
             login
           }
         }
       }
       
     }
     
   }`;

const Gq_setComment = `mutation addPostComment($addPostComment:CommentInput){
  CommentUpsert(comment:$addPostComment){
    post{
      comments{
        createdAt _id text
      }
    }
  }
}`;

const Gq_findFriends = `query findFriend($query:String){
  UserFind(query:$query){
    createdAt
    login
    _id
    nick
    avatar{
    url
    }
    }
    }`;

const Gq_newPost = `mutation addNewMyPost($post:PostInput){
      PostUpsert(post:$post){
        _id
        createdAt
        title
        text
        images{
          _id
          url
        }
      }
    }`;

const Gq_newAvatar = `
    mutation updateMe($user:UserInput){
      UserUpsert(user:$user){
        avatar{
       url
        }
      }
    }
    `;

const Gq_addLike = `mutation addLike($like:LikeInput){
      LikeUpsert(like:$like){
        _id
        post{
          _id
          owner{
            _id
          }
        }
      }
    }`;

export {
  getPost,
  Rq_Login_Password,
  GQ_registration,
  Gq_getUsers,
  Gq_personal_Data,
  Gq_mutation_update_person,
  Gq_get_following_posts,
  Gq_setComment,
  Gq_registration,
  Gq_findFriends,
  Gq_newPost,
  Gq_newAvatar,
  Gq_addLike,
};
