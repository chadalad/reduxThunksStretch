const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */
const gotDesserts = (desserts) => ({
  type: GOT_DESSERTS_DATA,
  desserts,
});

const addDessert = (newDessert) => ({
  type: NEW_DESSERT_DATA,
  newDessert,
});

const fetchDesserts = (dispatch) => {
  dispatch(() => {
    return axios.get('/api/desserts')
      .then((res) => {
        const { data : { desserts } } = res;

        dispatch({
          type: GOT_DESSERTS_DATA,
          desserts: desserts,
        })
      })

      
  })
}

const postDessert = () => ({

});

module.exports = { 
  gotDesserts, 
  addDessert, 
  fetchDesserts, 
  postDessert 
};
