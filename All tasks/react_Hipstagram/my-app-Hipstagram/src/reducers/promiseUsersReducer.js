const USERS = "USERS";
const PERSONAL = "PERSONAL";
const UPDATEME = "UPDATEME";
const SEARCHUSERS = "SEARCHUSERS";
//console.log({ ...obj, myInfo: { ...obj.myInfo, foll } });
const promiseUsersReducer = (state = {}, action) => {
  if (action.type === USERS) {
    return { ...state, dataUsers: [...action.dataUsers] };
  }
  if (action.type === SEARCHUSERS) {
    return { ...state, dataUsers: action.dataUsers }; //если поиск то заменяем всех пользователей на данные из поиска
  }
  if (action.type === PERSONAL) {
    return { ...state, myInfo: action.myInfo, myPosts: action.myPosts };
  }
  // if (action.type === UPDATEME) {
  //   const { following, nick } = action.updatePerson;
  //   // разворачиваем в поле myInfo предыдущий стейт и меняем значения в полях following, nick
  //   // following при нажатии на кнопку addFriend, nick при изменении ника
  //   return { ...state, myInfo: { ...state.myInfo, following, nick } };
  // }
  return state;
};

export { promiseUsersReducer, USERS, PERSONAL, UPDATEME, SEARCHUSERS };
