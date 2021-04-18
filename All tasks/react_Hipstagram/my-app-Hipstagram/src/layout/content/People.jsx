import { React, useEffect, useState } from "react";
import { ListContent } from "..";
import { actionAllUsers } from "../../reducers/actionAllUsers";
import { PeopleItem } from "../items/PeopleItem";
import { connect } from "react-redux";
import { actionSetUpdMe } from "../../reducers";
import pathComp from "../../PathForRoute/pathObject";

const People = ({ getUsers, allUsers, follow, myFollowing = [], myId }) => {
  // console.log(allUsers, "allUsers", "   ");
  //высчитываем высоту экрана и заносим в переменную height
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // upd по скипу - он не работал :( заменил на сорт
  // подгружаем юзеров по 10 штук при скролле
  // let [skip, setSkip] = useState(0); // данные для атрибута skipArg - пропустить
  let [limit, setLimit] = useState(10); //данные для атрибута limitArg
  let [offset, setOffset] = useState(0); // задаем значение при скроле вверх
  useEffect(() => {
    if (window.location.pathname !== pathComp.search) {
      if (allUsers && !allUsers.length) {
        getUsers(limit);
        // setSkip((prev) => prev + 10);
        setLimit((prev) => prev + 10);
      }
      //отслеживает событие скролла
      window.addEventListener("scroll", () => {
        setOffset(Math.ceil(document.documentElement.scrollTop));
      });

      //проверка на конец скролла, тогда подгрузить users
      if (offset >= height) {
        getUsers(limit); //  actionAllUsers= (skipArg, limitArg)=>{...}
        // setSkip((prev) => prev + 10);
        setLimit((prev) => prev + 10);
      }
      // console.log(offset, "offset");
    }
    // if (window.location.pathname !== pathComp.people) {
    //   return () => {
    //     console.log("SRABOTANO!");
    //     window.removeEventListener("scroll", () => {
    //       setOffset(Math.ceil(document.documentElement.scrollTop));
    //     });
    //   };
    // }
  }, [offset, allUsers]);

  return (
    <ListContent>
      {allUsers &&
        allUsers.map(({ login, nick, avatar, _id, createdAt }) => {
          return (
            <PeopleItem
              regTime={createdAt}
              myId={myId}
              myFollowing={myFollowing}
              follow={follow}
              login={login}
              key={_id}
              userId={_id}
              nick={nick}
              avatar={avatar}
            />
          );
        })}
    </ListContent>
  );
};

export const CPeople = connect(
  (s) => ({
    allUsers: s.users?.dataUsers,
    myFollowing: s.users?.myInfo?.following,
    myId: s.auth.payload?.sub.id,
  }),
  { getUsers: actionAllUsers, follow: actionSetUpdMe }
)(People);
