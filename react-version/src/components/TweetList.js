import Tweet from "./Tweet";

const tweet1 = {
  avatar: "https://i.imgur.com/73hZDYK.png",
  firstName: "Isaac",
  lastName: "Newton",
  handle: "@SirIsaac",
  body: "If I have seen further it is by standing on the shoulders of giants",
  age: "10 days ago"
}

const tweet2 = {
  avatar: "https://i.imgur.com/nlhLi3I.png",
  firstName: "R",
  lastName: "Descartes",
  handle: "@rd",
  body: "Je pense , donc je suis",
  age: "10 days ago"
}


function TweetList() {
    return (
      <section className="tweets">
        <Tweet {...tweet1} />
          {/* avatar={tweet1.avatar}
          firstName={tweet1.firstName}
          lastName={tweet1.lastName}
          handle={tweet1.handle}
          body={tweet1.body}
          age={tweet1.age}
        /> */}
        
        <Tweet
          avatar={tweet2.avatar}
          firstName={tweet2.firstName}
          lastName={tweet2.lastName}
          handle={tweet2.handle}
          body={tweet2.body}
          age={tweet2.age}
    />
    </section>
  );
}


export default TweetList;