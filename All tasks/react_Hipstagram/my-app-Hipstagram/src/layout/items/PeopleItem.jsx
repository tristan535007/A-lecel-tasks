import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { timeConverter } from "../../convertTimeFunc/convertStamp";
import no_avatar from "../../images/no_avatar.png";

export const PeopleItem = ({
  login,
  nick,
  avatar,
  userId,
  myFollowing,
  follow,
  myId,
  regTime,
}) => {
  // console.log(avatar, "avavavav");
  let [friend, setFriend] = useState(false);
  //myFollowing comes with extra keys ({_id: "5d6fccfc5fce6722147978f2", login: "Test3", nick: null}) - clearExcessKeys - leaves only _id key
  function clearExcessKeys(usersList) {
    let newArr = [];
    usersList &&
      usersList.map((el) => {
        for (const i of Object.keys(el)) {
          //1й if очищаем от лишних ключей и пуш
          if (i === "_id") {
            newArr.push({ _id: el[i] });
          }
          //2й if проверяем есть ли юзер в друзьях
          if (el[i] === userId) setFriend(!friend);
          //3й если есть и в друзьях то отправляем массив без этого айДи для отписки
          if (el[i] === userId && friend) {
            newArr = newArr.filter((el) => (el._id !== userId ? el : null));
          }
        }
      });
    return newArr;
  }
  useEffect(() => myFollowing && clearExcessKeys(myFollowing), []); //меняет кнопку на подписан или addFriend
  return (
    <li>
      <div className="container bg-info mt-3 rounded-lg border border-warning">
        <div className="row">
          <div className="col">
            {/* <p>
              <strong>{userId}</strong>
            </p> */}
            <div className="container">
              <Image
                className="rounded-circle mt-3 mb-3"
                height="80"
                width="80"
                src={
                  avatar
                    ? "http://hipstagram.asmer.fs.a-level.com.ua/" + avatar.url
                    : no_avatar
                }
                alt="logo"
              />
              <div>{`User name: ${nick || login}`}</div>
            </div>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                  <strong>Registration:</strong>
                </Col>
                <Col>{timeConverter(regTime)}</Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary  mt-3 mb-3"
                    onClick={() => {
                      setFriend(!friend);

                      friend
                        ? follow(myId, undefined, [
                            ...clearExcessKeys(myFollowing),
                          ])
                        : follow(myId, undefined, [
                            ...clearExcessKeys(myFollowing),
                            { _id: userId }, //разворачиваем всех фолловеров со стейта и добавляем нового
                          ]);
                    }}
                  >
                    {friend ? "Unfollow" : "Add friend"}
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </li>
  );
};
