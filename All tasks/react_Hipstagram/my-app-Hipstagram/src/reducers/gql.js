const getGQL = (url) => (query, variables = {}) => {
  //  localStorage.authToken =
  //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MDJjMTI5YWU3Y2IyNjI0ZDA4OWI1ZGUiLCJsb2dpbiI6IlRyaXN0YW4iLCJhY2wiOlsiNjAyYzEyOWFlN2NiMjYyNGQwODliNWRlIiwidXNlciJdfSwiaWF0IjoxNjEzODM5NjAwfQ.cnWJRfLbGFzjWk8ejzLC_9bWcQ_9rHT06HylKoATHzQ";
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localStorage.authToken
        ? { Authorization: `Bearer ${localStorage.authToken}` }
        : {}),
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
};

export const gql = getGQL("/graphql");
