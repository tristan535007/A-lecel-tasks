// const POST = "POST";
const FOLLOWING = "FOLLOWING";
const RENEWCOMMENTS = "RENEWCOMMENTS";
const NEWPICTUREPOSTID = "NEWPICTUREPOSTID";

const promisePostReducer = (state = [], action) => {
  if (action.type === FOLLOWING) {
    //если стейт новый и нет поля myFollowingPosts, то в поле myFollowingPosts добавляем action.myFollowingPosts
    // а если поле существует, то тогда проверяем на одинаковость постов и разворачиваем filtredArr
    //почему - то с бека прилетают одинаковые id постов

    let filtredArr;
    if (state.myFollowingPosts) {
      filtredArr = [...state.myFollowingPosts];
      action.myFollowingPosts.forEach((post) => {
        let newId = false;
        for (const { _id, likes } of state.myFollowingPosts) {
          //добавлена проверка на изменение длины массива лайков
          if (_id === post._id && likes.length === post.likes.length) {
            newId = false;
            break;
          } else {
            newId = true;
          }
        }
        if (newId) {
          filtredArr.push(post);
        }
      });
    }

    return {
      ...state,
      myFollowingPosts:
        (state.myFollowingPosts && [...filtredArr]) || action.myFollowingPosts,
    };
  }

  if (action.type === RENEWCOMMENTS) {
    //берем старый стейт перебираем его если есть совпадение по id то меняем только поле comments в посте
    return {
      ...state,
      myFollowingPosts: [
        ...state.myFollowingPosts.map((post) =>
          post._id === action.newComments._id
            ? { ...post, comments: action.newComments.comments }
            : post
        ),
      ],
    };
  }

  if (action.type === NEWPICTUREPOSTID) {
    //для текущего id загружаемой картинки не массив (загрузка по 1й картинке дроп зона не сработала) я - нуб :(
    return {
      ...state,
      newCurrentPictureId: action.newCurrentPictureId,
    };
  }

  // if (action.type === POST) {
  //   //Figure out!!!
  //   return { ...action };
  // }
  return state;
};

export { promisePostReducer, FOLLOWING, RENEWCOMMENTS, NEWPICTUREPOSTID };
