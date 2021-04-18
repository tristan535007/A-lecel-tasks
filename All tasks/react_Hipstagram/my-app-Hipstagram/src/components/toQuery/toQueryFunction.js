let toRegexp = (str) => {
  let newStr = str.filter((el) => el !== "" && el).join("|"); // если попадает массив > 1 то объединяем (ПА|MA)
  return `/${newStr}/`;
};

export const toQuery = (
  fields = [
    {
      login: "/uuu/",
      nick: "/Yona/",
    },
  ],
  str
) => {
  let keys = fields.map((objQuery) => {
    let newArr = [];
    //формируем новый обьект если другие поля и помещаем в массив
    for (const iterator of Object.keys(objQuery)) {
      newArr.push({ [iterator]: toRegexp(str) });
    }
    return newArr;
  });
  let [key] = keys; //лолучаем 1н массив из [[]]
  return {
    $or: key,
  };
};
