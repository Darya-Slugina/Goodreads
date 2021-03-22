import React from "react";
import styles from './Comments.module.css';
import SimpleRating from "./Rating";

const comments = [
    {
        userName: "Lex Kent",
        userImg: "https://images.gr-assets.com/users/1249228199p2/479984.jpg",
        date: "Feb 07, 2021",
        rate: 3.25,
        likes: 52,
        review: `This was interesting. In the end I don’t think that this book was for me, but I did really like the author’s 
      writing style. The way Silverman writes, got me through a book that I might have really struggled with otherwise. The 
      last two books I’ve read in a row, I have had similar experiences with. The book I reviewed right before this one, I 
      didn’t enjoy and it was my own fault for misreading the blurb. With this book, I actually did not misread anything. 
      The book blurb makes you think that this book is in a certain genre, which it is not. This is contemporary or literary 
      fiction, and is not a thriller with a mystery twist that the blurb leads you to believe. The blurb gave me certain 
      expectations, that the book just could not meet, and I don’t think that is fair to the author. I know it may be too 
      late, with the book coming out in only two days, but I would change the blurb so readers are not disappointed and so 
      this book will be targeted to the right audience.`,
        hiddenReview: `This is a first person story about Cass, a playwright, who flees to L.A. after a scandal of her own making. Cass wants
       to reinvent herself and gets sucked into the world of indie moviemaking about a group of teenage girls who have their 
       own “Fight Club”. We get to see, through flashbacks, Cass success as a playwright, her downfall, and what her life is 
       like now in L.A. in present time. It’s an odd premise for sure, and the story gets even weirder as you read it. I kept 
       waiting for the mystery/thriller part to happen and was left scratching my head wondering “what am I reading?” when it didn’t.
      One of the issues I had was that Cass is not the easiest character to like. It’s tough being in first person POV with 
      someone you are struggling to connect with. She can be very self-centered, jealous, has a real woe is me attitude, and 
      loves to run when anything gets tough. I don’t know that I can say if she ever really grew in the end, but I did find her 
      a little more palatable as the book went on. Her relationship with one of the teenagers named BB –Cass is bisexual and BB 
      is queer, so they seemed to bond over that plus Cass just knew how to really talk to BB- these scenes ended up being some 
      of my favorite. They showed Cass in a better light and the character of BB really was the most interesting character of 
      the whole book.
      I have to mention that I’m a bit disappointed in the end. Maybe it is just not that kind of book, but I really wanted some
       better closure. Towards the end Cass seemed to be doing better, she was making amends to people and sticking up for herself, 
       but then she fell into an old bad habit, which seemed to stop any growth I thought was happening. You see a spark of something 
       at the end, but I was left saying “that’s it?” I feel like I spent a good amount of time on this book and I needed something
        more than the ending we get.
      In the end, this was not the book I thought I was getting and I had a few issues that were pretty big. On the goods side, 
      I really liked Silverman’s writing. This sounds a little weird, but her writing style felt good to read. I would read 
      another book by her in a heartbeat, just to have more of that good reading feel. I wasn’t crazy about some of her story choices,
       but she is clearly a talented writer.
      An ARC was given to me for a honest review.`
    },
    {
        userName: "Blair",
        userImg: "https://images.gr-assets.com/users/1546111608p2/2888524.jpg",
        date: "Dec 22, 2020",
        rate: 4.5,
        likes: 5,
        review: `There is so much in this book that I'm not sure how to begin talking about it, and what exactly it was that 
      I loved about it. I'm worried that merely describing the plot won't make it sound as good as it actually is, because
      the language really makes it sizzle, and Silverman writes about complicated emotions in a style I found thrilling, 
      and those things are difficult to communicate in a review.`,
        hiddenReview: `Cass is a 33-year-old playwright who's had a tumultuous few months: after years of work, she's finally attained success, 
      winning a coveted award – but this is swiftly followed by a spectacular downfall. Fleeing the fallout of a scandal in New York,
       she hides out at her friend’s house in Silver Lake, LA. While she tries to keep a low profile, she can't help being intrigued 
       by her new next-door neighbour Caroline, a flighty, charismatic filmmaker. It isn't long before she gets caught up in 
       Caroline's latest project, a documentary about a group of teen girls who organise violent gatherings inspired by Fight Club.
      Here are three particular things about We Play Ourselves that I can't stop thinking about:
      1. Cass's unrequited love for Hélène, the director of her play. It's just such a great portrayal of what it means, 
      what it is, to feel like this about someone – painfully dead-on and, if you've experienced it yourself, exceptionally validating.
      2. The scene wherein Cass is finally reunited with her nemesis, wunderkind Tara-Jean Slater. Odd and sparse and dreamy 
      and lonely; a Hollywood hallucination.
      3. The penultimate chapter!! I don't want to describe it because that would spoil the experience of reading it, but I
       will say this: if, after reading the first chapter, I had flipped forward and read the penultimate one, I would never have 
       believed that both could have come from the same book. It's a tour de force in itself, and has to be read to be believed.
      At first, I much preferred the New York flashbacks, which reminded me strongly – in language and in spirit – of Sweetbitter, 
      one of my favourite books. I'll admit I found the LA plot less compelling, and Caroline and the teens less interesting characters
       than Cass, Hélène and Tara-Jean. But when the narratives eventually converge, everything slots together marvellously. I think
        Cass's realisations about what's important in her life – what 'success' actually means, and whether it matters at all – are
         exactly what many of us need to read in this era of uncertainty, when so many people have seen their professional and personal 
         lives stymied by the effects of the pandemic. They certainly helped me. 
      This novel is a fizzing ball of ideas, a delightfully messy multilayered exploration of queerness and desire, art and 
      ambition, and what it means to fail (or not). 'A strange miracle', as someone tells Cass. I adored Cass's voice and found
       a great deal to love about the story.   I received an advance review copy of We Play Ourselves from the publisher through Edelweiss.`
    },
    {
        userName: "Dennis",
        userImg: "https://images.gr-assets.com/users/1442525969p2/2764493.jpg",
        date: "Jan 28, 2021",
        rate: 4.5,
        likes: 452,
        review: `We Play Ourselves is a story about theatre, art, sexuality, and relationships. Full review to come,
       but this book was a refreshingly honest portrayal of second chances and accepting who you are. This book was 
       funny, poignant, and brutally accurate. I loved the social dynamics between the relationships of the main 
       characters and I can’t wait to read more by the author. I read this book in one sitting—very fast paced.`
    },
    {
        userName: "Bandit",
        userImg: "https://images.gr-assets.com/users/1424107677p2/1916695.jpg",
        date: "Sep 22, 2020",
        rate: 4.5,
        likes: 22,
        review: `I was interested in reading this because I really enjoyed Silverman’s debut short story collection. 
      In long form she doesn’t disappoint. This is a book about find oneself…not, not quite right, this is a book 
      about finding equanimity within yourself, an ability to be at peace with your place in the world, even if that 
      place isn’t what you had planned for or imagined. But first…adventures and obstacles. And Cass, the protagonist, 
      chooses a road fraught with the latter, because she decides to dedicate herself to theatre. One of the most 
      masochistic career choices out there, the most arrogant and least permanent of the arts. Plays, the ultimate 
      goal of it all, are the castles in the sand of the art world, admired by a few for a short time and promptly vanished.`,
        hiddenReview: `Being a playwright is possibly the most permanent aspect of the entire field, and that’s what Cass plies at for
       10 long years until a major boon of an award and cash prize elevates her on a new level and allows her to have a
        play produced properly with a well known director and lead actress. Cass is determined to make the best of it, but
         finds herself in love with her director and sleeping with her star and constantly surpassed by a fellow prize winner 
         on the success ladder. And then the reviews come out…So onto the second act, for this is a classic three act play 
         in itself. Reinvention. Cass is now in LA, staying with a friend, witness to the slow dissolution of his seven year 
         long relationship. In a theatre world and world at large Cass is now a persona non grata with social media’s public 
         morality never letting her forget her sins. Cass meets a neighbor who is directing an all girl version of Fight Club 
         and gets involved in that, but eventually finds out that movies are just another imperfect art form, less real than
          most, and rife with lying liars. Third act…Cass goes back to the small town she has so eagerly left so many years 
          ago to stay with her parents and figure out what’s next. Tries to find some peace in small scale pretense free life, 
          but much like art, in some form or another it is everywhere. So there you go, a faulty and flawed, but surprisingly 
          compelling narrator stumbling through life in that very millennial specific way of desperately trying to be an artist 
          at all costs. But, because Silverman is such a great writer, this book never become an ode to millennial wishywashy 
          uncertainty and immaturity, instead it goes further to mediate on the very nature of choices and authenticity. 
          We play ourselves in life, for different people, on different stages, often until we forget the really important 
          things, the permanent things, the things that matter. For me, that’s what the book was about and overwhelmingly 
          it succeeded. Certainly I enjoyed reading it way more than most millennial adventures out there. Interestingly 
          enough, the author is a playwright herself, so it’s impossible not to think of how much of her is in Cass and so 
          on, but then again, she seems to have made it, unlike her protagonist, but then again…the odds, the odds. Liked
           this book very much. Recommended. Thanks Netgalley.`
    },
    {
        commentId: 2,
        userName: "Carlene",
        userImg: "https://images.gr-assets.com/users/1217381505p2/1068337.jpg",
        date: "Feb 04, 2021",
        rate: 4.1,
        likes: 30,
        review: `I really don't know how to review this book, I just want to tell everyone to read it and let it sink in. 
      Jen Silverman's We Play Ourselves is honest, brutal, hilarious, and heartbreaking all at once. If I knew a better 
      h word for brutal I would use it, but I don't think any could fit what I'm trying to say as well. This book is a 
      punch in your face, with scenes that make you gasp and, again, honest portrayals of those in the theatre and film world. 
      We Play Ourselves covers art, sexuality, self discovery, coming of age, and then some. It's about the measures we hold 
      ourselves to, our definitions of success, and the pitfalls of going after something so hard you lose sight of what's real. 
      We Play Ourselves is an unforgettable read.`
    }
]

// export default function Comments({ comments }) {
class Comments extends React.Component {
    state = {
        displayComment: false,
        comment: comments,
    }

    displayComment = () => {
        this.setState({
            displayComment: !this.state.displayComment
        })
    }

    addLike = (e) => {
        console.log(e.target.getAttribute("commentId"));
        // let currentComment = comments.filter(el => el.id === e.target.getAttribute("commentId"))
        // currentComment.likes += 1;
        // this.setState({
        //     comment: [...this.state.comment]
        // })
    }


    render() {
        return (
            <React.Fragment>
                {comments.map((comment, index) => (
                    <div className={styles.commentsContainer}>
                        <div className={styles.userImgContainer}>
                            <img key={index} src={comment.userImg} alt={comment.userName} className={styles.userImg} />
                        </div>
                        <div className={styles.commentsInfoContainer}>
                            <div className={styles.metaInfo}>
                                <div>
                                    <span className={styles.userName}> {comment.userName} </span>
                                    <span className={styles.rating}>  rated  it </span>
                                    <SimpleRating stars={comment.rate} />
                                </div>
                                <span className={styles.date}>{comment.date}</span>
                            </div>
                            <div className={styles.commentInfo}>
                                {comment.hiddenReview &&
                                    <React.Fragment>
                                        <span className={styles.description}>{comment.review}</span>
                                        {this.state.displayComment ?
                                            <React.Fragment>
                                                <span className={styles.description}>{comment.hiddenReview}</span>
                                                <span className={styles.more} onClick={this.displayComment}>...less</span>
                                            </React.Fragment>
                                            : <span className={styles.more} onClick={this.displayComment}>...more</span>}
                                    </React.Fragment>
                                }
                                <span className={styles.description}>{comment.review}</span>
                            </div>
                            <div className={styles.footerInfo}>
                                <span class="likeItContainer" id="like_container_review_7329616">
                                    <span className={styles.likesCount}>{comment.likes}&nbsp; likes</span>
                                    &nbsp;·&nbsp;
                                    <span className={styles.likeBtn} onClick={this.addLike} commentId={comment.commentId}>Like </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
export default Comments;