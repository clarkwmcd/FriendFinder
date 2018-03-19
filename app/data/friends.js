// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
  "name":"Clark",
  "photo":"pic",
  "scores":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  {
  "name":"Bob",
  "photo":"pic",
  "scores":[
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
