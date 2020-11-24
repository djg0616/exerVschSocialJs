var crochetGal = {
  firstName: "Dannie",
  lastName: "Greenlee",
  age: 33,
  favoriteStitches: ["half double crochet", "triple crochet", "reverse single crochet"],
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  crochetGalFriends: [
    {
      firstName: "River",
      lastName: "Rain",
      age: 31,
      favoriteStitches: [
        {
          stitchName: "double crochet",
          difficulty: 2,
        }, {
          stitchName: "front post double crochet",
          difficulty: 3,
        }, {
          stitchName: "triple crochet",
          difficulty: 2,
        },
      ],
    },
    {
      firstName: "Mary",
      lastName: "Moonshadow",
      age: 27,
      favoriteStitches: [
        {
          stitchName: "granny square",
          difficulty: 3,
        }, {
          stitchName: "tunisian",
          difficulty: 4,
        }, {
          stitchName: "half double crochet",
          difficulty: 2,
        },
      ],
    },
    {
      firstName: "Johnny",
      lastName: "Jupiter",
      age: 38,
      favoriteStitches: [
        {
          stitchName: "single crochet in the backloop",
          difficulty: 1,
        }, {
          stitchName: "bobble stitch",
          difficulty: 3
        },
      ],
    },
  ],
};

// add 2 properties to an object
crochetGal.crochetGalFriends[0].gender = "non-binary";
crochetGal.crochetGalFriends[0].phoneNumber = "1-800-382-5968";
console.log(crochetGal.crochetGalFriends[0].gender);
console.log(crochetGal.crochetGalFriends[0].phoneNumber);
// add 2 items to an array
crochetGal.favoriteStitches.push("tunisian");
crochetGal.favoriteStitches.push("bobble");
console.log(crochetGal.favoriteStitches);