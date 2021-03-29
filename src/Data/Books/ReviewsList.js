const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDTjLCxR3pIvJ7DT_pU_H_ofSUzjnqAjbs",
  authDomain: "goodreads-9c368.firebaseapp.com",
  databaseURL: "https://goodreads-9c368-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goodreads-9c368",
  storageBucket: "goodreads-9c368.appspot.com",
  messagingSenderId: "427942194216",
  appId: "1:427942194216:web:86bdc3fb72e303ef90991d",
  measurementId: "G-38S3RLP5ZK"
};

firebase.initializeApp(firebaseConfig);


const reviews = [
  {
    commentId: 1,
    forBookId: 1,
    userName: "Lex Kent",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/479984.jpg?alt=media&token=fe7dcab8-d308-4fe1-93fc-b2e6a89358b6",
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
    commentId: 2,
    forBookId: 1,
    userName: "Blair",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2888524.jpg?alt=media&token=8267c36f-f487-4a46-ab7a-3719bf70e4f3",
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
    commentId: 3,
    forBookId: 1,
    userName: "Dennis",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2764493.jpg?alt=media&token=8af7ac4d-6247-47d9-aa72-15e97a4afea6",
    date: "Jan 28, 2021",
    rate: 4.5,
    likes: 452,
    review: `We Play Ourselves is a story about theatre, art, sexuality, and relationships. Full review to come,
           but this book was a refreshingly honest portrayal of second chances and accepting who you are. This book was 
           funny, poignant, and brutally accurate. I loved the social dynamics between the relationships of the main 
           characters and I can’t wait to read more by the author. I read this book in one sitting—very fast paced.`,
    hiddenReview: null,
  },
  {
    commentId: 4,
    forBookId: 1,
    userName: "Bandit",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1916695.jpg?alt=media&token=68f1c983-51e6-44b3-9319-89e324855b2c",
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
    commentId: 5,
    forBookId: 1,
    userName: "Carlene",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1068337.jpg?alt=media&token=33727a46-d81f-4fe8-adfe-f272f323777d",
    date: "Feb 04, 2021",
    rate: 4.1,
    likes: 30,
    review: `I really don't know how to review this book, I just want to tell everyone to read it and let it sink in. 
          Jen Silverman's We Play Ourselves is honest, brutal, hilarious, and heartbreaking all at once. If I knew a better 
          h word for brutal I would use it, but I don't think any could fit what I'm trying to say as well. This book is a 
          punch in your face, with scenes that make you gasp and, again, honest portrayals of those in the theatre and film world. 
          We Play Ourselves covers art, sexuality, self discovery, coming of age, and then some. It's about the measures we hold 
          ourselves to, our definitions of success, and the pitfalls of going after something so hard you lose sight of what's real. 
          We Play Ourselves is an unforgettable read.`,
    hiddenReview: null,
  },
  {
    commentId: 6,
    forBookId: 2,
    userName: "Sarina",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/34502206.jpg?alt=media&token=84d58ddd-2c7c-4109-9737-a8c77af53e73",
    date: "Nov 27, 2020",
    rate: 4.65,
    likes: 8,
    review: `Do you SEE Claudia’s outfit?!! Yes, I think I will get along fine with Gabriela Epstein. I have literally never been this excited for 2021.`,
    hiddenReview: null,
  },
  {
    commentId: 7,
    forBookId: 2,
    userName: "Shira",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2634685.jpg?alt=media&token=b1f5c131-39bc-44fb-b585-3ef627ed0f6f",
    date: "Feb 06, 2021",
    rate: 4.9,
    likes: 11,
    review: `our first bsc graphic novel with new artist gabriela epstein! like with the transition from raina 
            telgemeier to gale galligan, this transition isn't quite seamless, but is close enough to fool most kids. 
            the book was just as subtexty (claudia x ashley = clashley) as the source material, but I can't pretend 
            I wasn't hoping for the gayness to be explicit rather than implied.`,
    hiddenReview: `three notes about the adaptation that are worth mentioning: first, though everyone still 
            makes fun of ashley's style, she's much more alternative/punk than the described boho style in the original
             book. secondly, there is one two-page spread where ashley's face is smack dab in the middle of the panel, 
             so we lose her facial expression (a mistake that, I suspect, epstein will probably not make again). thirdly,
             in the scene where claud makes rice krispies treats with the rodowskys, the actual recipe is included, which is a really lovely touch!`

  },
  {
    commentId: 8,
    forBookId: 2,
    userName: "Logan Hughes",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/15052079.jpg?alt=media&token=41fbc1fc-d3f1-47e1-aac1-c71f63aec037",
    date: "Mar 10, 2021",
    rate: 5,
    likes: 18,
    review: `This is one of my favorite books, so I'm happy that the graphic novel is extremely faithful to the
             source material. I like the character design of Ashley; her edgy style felt like a good update of the 1980s
              "hippie". I enjoyed the way this brings the story to life. Claudia and Ashley's "finding source material" 
              montage is funny and relatable, Jackie Rodowsky is sweet and winning, and Ashley's abstract fire hydrant sculpture is cool.`,
    hiddenReview: `I was sort of hoping against hope that the queer subtext in this book would be made text in the update, and it's 
              not, but it's also not toned down. It includes one of my favorite moments: when Claudia tells Mimi she just met a girl who she 
              somehow thinks will be a good friend, and Mimi remarks that it happens that way sometimes - it happened that way with Claudia's
               grandfather. I felt the exact same way when I, at twelve, first met the cool edgy-style artist who would eventually become my 
               first queer significant other, so that moment/this book was very important to me.`
  },
  {
    commentId: 9,
    forBookId: 2,
    userName: "Ashley",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/5874251.jpg?alt=media&token=047c4d87-1425-4192-a5c2-772e46989355",
    date: "Jan 22, 2021",
    rate: 5,
    likes: 4,
    review: `Gabriela Epstein had some big shoes to fill, joining the BSC Graphic Novel series nine books in,
             and I'll be honest, it took me a couple chapters to really warm up to her art. Not that it's a huge departure 
             from what we've already seen, but it's still a little different and change is scary haha. But her cherubic angel 
             Jackie Rodowsky won me over, and made me notice how great everyone looks. For some reason, I was especially drawn 
             to Kristy and Dawn. I'm excited to see the next book she adapts!`,
    hiddenReview: `Story-wise, I enjoyed this. It's been a couple of years since I last read the original (which is embarrassing,
            since I thought I would get through the whole series in, like, a couple months lmao) but as far as I can tell, it was a
            pretty faithful adaption. I especially liked the salty BSC eating all her snacks, that was a fun little montage (especially
            Mary Anne catching the marshmallow thrown by Kristy in her mouth ahhahahaha!!) Oh, and the one panel of all their
            identical angry faces (except Mary Anne's sympathetic one) cracked me up!I can see this book being just as popular 
            as the rest of the series, and hope that we get many, many more books. (Hey, Raina and Gale each got four, so it's 
            only fair for Gaby and Chan Chau (who is adapting the next book) to also each get four. BSC FOREVER!!!)`,
  },
  {
    commentId: 10,
    forBookId: 2,
    userName: "Destiny Henderson",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/64443319.jpg?alt=media&token=aab215e9-7c4d-4c04-9094-24fbfa51a59c",
    date: "Feb 04, 2021",
    rate: 4,
    likes: 3,
    review: `I thought the message if you can call it that, was great. It's not good to monopolize one person's time, 
            especially if you have to manipulate them to do so.`,
    hiddenReview: null,
  },
  {
    commentId: 11,
    forBookId: 3,
    userName: "Annalisa",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/542037.jpg?alt=media&token=b6fab23c-ef13-454c-a0b5-ad91609fce33",
    date: "Oct 04, 2011",
    rate: 5,
    likes: 539,
    review: `Hillenbrand has broken the unwritten code for Americans to downplay the wrongs of the Japanese during World War II (other than Pearl Harbor)
        in favor of focusing on the egregious acts of the Nazis. My education in World War II history has focused on the Holocaust and the unforgivable
         damage we did to Japan by unleashing the atomic bomb. I appreciate all the research Hillenbrand did to bring us the other side of the story.`,
    hiddenReview: `Louis Zamperini is my new hero. I loved his charisma and endurance, both of which shined through in Hillenbrand's meticulous writing.
        I haven't been this invested in non-fiction in a long time. Even when she was talking about airplane design I was enthralled. And even though I
         figured Zamperini had to have survived his ordeal to give Hillenbrand an interview, I was still anxious about his survival. My favorite part of 
         Louis' story is (view spoiler). How inspiring and moving, his whole story, but especially his life after the war.

        I don't think I can pick up another book for a few days. I need to let this one settle before I delve into fiction that will feel meaningless after 
        this.`
  },
  {
    commentId: 12,
    forBookId: 3,
    userName: "Kemper",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/405390.jpg?alt=media&token=943f6795-b5fb-4d4d-973e-1ae23000004d",
    date: "Nov 24, 2010",
    rate: 4.8,
    likes: 930,
    review: `I was cleaning up after the wife and I had dinner last night and there was a small amount of green beans left. There weren’t
         nearly enough for another serving to make them worth saving so I dumped them in the sink, but just as I was about to turn on the garbage
          disposal, I realized that to the POWs described in Unbroken those few green beans I was about to mulch would have been a feast they would
           have risked torture and beatings for. I was disgusted with myself for the rest of the night. You know the book you’re reading is hitting
            you hard when you feel that much shame for letting a tiny bit of food go to waste.`,
    hiddenReview: `Louie Zamperini is one of those guys who definitely earned that Greatest Generation label. The son of Italian immigrant
         parents, Louie was a rebellious kid who was constantly into one form of mischief or another, but when he finally channeled his energy
          into running, he became a high school track star in California. Louie was so good that he made the 1936 Olympics in Berlin at the age of 19, and even though he didn’t medal, he ran one lap of a race so quickly that he electrified the crowd and even caught Hitler’s attention.

        As a college runner, Louie held several national records and many thought that he’d be the man to eventually break the four minute mile. 
        He was poised to do well in the 1940 Olympics, but then World War II cancelled the games. Louie left college and ended up in the air corps
         even though he was scared of planes. He became a bombardier and went to the Pacific after Pearl Harbor. Louie survived several missions,
          including one where their B-24 barely made it back with over 500 holes in it.`
  },
  {
    commentId: 13,
    forBookId: 3,
    userName: "Craig",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1613125.jpg?alt=media&token=b8dcf0f9-3498-4987-928a-e689a23df3f4",
    date: "Jan 26, 2011",
    rate: 1.5,
    likes: 294,
    review: `I’ve seen recently that negative commentary or reviews about this book invoke a kind of backlash normally reserved 
        for non-conformists who critique the Bible, The Diary of Ann Frank, The Last Lecture, or any Oprah 'Book of the Month'. Well, 
        brace yourself because here comes another one.`,
    hiddenReview: null,
  },
  {
    commentId: 14,
    forBookId: 3,
    userName: "Alison",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/124482.jpg?alt=media&token=b0cae97f-948b-43a6-8ccb-7bbe2eddfc43",
    date: "Mar 27, 2011",
    rate: 5,
    likes: 105,
    review: `If you are wondering if you should read "Unbroken", just read it. Even if you don't end up liking it, you just need
         to read it. Everyone does.
        Louis Zamperini was an Italian-American Olympic runner whose plane goes down in World War 2, and he and two other men drift
         on a raft for a long, long time. I don't want to tell you anything else, because I want you to experience it. This books
          packs a double punch--the story itself is as amazing as Laura Hillenbrand's genius story-telling.`,
    hiddenReview: `Books like this inspire us, they shift our perspectives, they enlighten us, and they scare the *bleep* out 
        of us. Louis stretched the human experience to the very depth and breadth of its ability to survive and lived, scratch that, LIVES to tell about it. `
  },
  {
    commentId: 15,
    forBookId: 3,
    userName: "Dem",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2752994.jpg?alt=media&token=78398b19-3ac3-439c-ac1b-59d36e38e18d",
    date: "Jun 25, 2011",
    rate: 4,
    likes: 71,
    review: `This is a inspiring and educational read. It’s one of those books that you gasp out load while reading it as the
         horrors of war really come to the forefront in this book. This is a story of five parts and I really enjoyed the first three 
         parts. Part one deals with the protagonist Louis Zamperini's childhood and running career and I really enjoyed this introduction
          to Louis as I felt I really understood this man and knew how he survived the horrors of war and the physiological and physical 
          pain he endured.`,
    hiddenReview: null,
  },
  {
    commentId: 16,
    forBookId: 4,
    userName: "David Baldacci",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/25479304.jpg?alt=media&token=fa826fa8-73c3-4aae-975d-4b5f6a189a0f",
    date: "Nov 15, 2013",
    rate: 5,
    likes: 58,
    review: `A true tale of human resilience so unbelievable that you would think it was a novel. But Louis Zamperini did it and
         Hillenbrand chronicles that harrowing journey in a way only she can.`,
    hiddenReview: null
  },
  {
    commentId: 17,
    forBookId: 4,
    userName: "Sarah",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18894476.jpg?alt=media&token=45612f4b-a7dc-4010-9e57-4232964cb79c",
    date: "Jan 05, 2017",
    rate: 5,
    likes: 55,
    review: `"I'm loving this book. I would love to just breeze through it but there is so much information. 
        I'm only on page 28 but I'm listening to an audio book at the same time. I'm almost don't with that. Anyway,
         this book is a must read. Very well written !"`,
    hiddenReview: `"I'm reading this book slower than I do some. I want to absorb everything. My Father, Uncle 
        and Father in law went through this. I'm sad because of the conditions they had to deal with but also proud
         beyond words. This is a must read book"
        I finished reading this book last night. It was one of the most memorable books I have read in some time. I 
        didn't care much for History in school, but I was drawn to this one. It amazes me what our soldiers went through
         and how much we have to be proud of. I would give this more stars if I could. I highly recommend this book. `
  },
  {
    commentId: 18,
    forBookId: 4,
    userName: "Nicole",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
    date: "Oct 05, 2020",
    rate: 4,
    likes: 45,
    review: `It took me a year (rather, 11 months exactly) to listen to this audio... I started the first half while
         I was painting last year and never got the opportunity to finish it. Months later, when I had it on my phone,
          I continued listening to it but got bored. B-9 and B-12 planes sadly did not interest. Nor the details on his 
          military service. I honestly know nothing about planes, never been in one even, so the technical part bored me. A lot.`,
    hiddenReview: `Last week I finally made enough progress and reached the ocean part, the story improved considerably.
         I listened to the audio at every chance I had and finished it rather quickly.

        I honestly didn't know who Louis was before starting this book. Back in spring, my dad was watching a movie on
         tv.. I was watching snippets with him and then wow it's so similar to the book.. WAIT what. Yeah, that's how
          I discovered it's the same Unbroken directed by Angelina Jolie. And Louis is going to get captured by the Japs.
           You see, I had the audiobook on my laptop and only knew it's a non-fic biography. It was only last week, when 
           I became invested in the story again, that I googled some things about the book (other than the general google 
            page) and yes I did read some spoilers but are is there a spoiler in a biography? Well if I didn't know the story.. 
            I think yes. I couldn't help it, I wanted to know if Allen will survive too.`,
  },
  {
    commentId: 19,
    forBookId: 4,
    userName: "Erin",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1668821.jpg?alt=media&token=afc73239-7638-441f-ae37-64c020d086d7",
    date: "Apr 16, 2012",
    rate: 1,
    likes: 22,
    review: `I enjoyed the beginning of the book somewhat, learning about the main character's struggles to become an Olympic
         runner. It quickly transitioned into an account of his experiences at war. I had a very difficult time connecting
          to/caring about any of the characters. (Perhaps the third-person narrative was too distant for me? I felt as though
             I was just reading a series of facts.) Also, I don't have much interest in war, combat, or airplanes; when I
              picked up 'Unbroken' I was depending on my love for the characters to be enough of a gripper to keep me engaged,
               and that just didn't happen. Reading it became more of a chore than an escape, so ultimately I only made it through 
               about a quarter of the book. I wonder if I just needed to hang on a bit longer to fall in love with this book the
                way that so many others have...`,
    hiddenReview: null
  },
  {
    commentId: 20,
    forBookId: 4,
    userName: "Amanda",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/4678252.jpg?alt=media&token=1a7afedb-e647-43d9-80c6-750a7923c832",
    date: "Apr 30, 2011",
    rate: 5,
    likes: 11,
    review: `What a remarkable story about a remarkable life. I couldn't put it down.`,
    hiddenReview: null,
  },
  {
    commentId: 21,
    forBookId: 5,
    userName: "Craig",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1613125.jpg?alt=media&token=b8dcf0f9-3498-4987-928a-e689a23df3f4",
    date: "Jan 26, 2011",
    rate: 1.5,
    likes: 294,
    review: `I’ve seen recently that negative commentary or reviews about this book invoke a kind of backlash normally reserved 
      for non-conformists who critique the Bible, The Diary of Ann Frank, The Last Lecture, or any Oprah 'Book of the Month'. Well, 
      brace yourself because here comes another one.`,
    hiddenReview: null,
  },
  {
    commentId: 22,
    forBookId: 5,
    userName: "Destiny Henderson",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/64443319.jpg?alt=media&token=aab215e9-7c4d-4c04-9094-24fbfa51a59c",
    date: "Feb 04, 2021",
    rate: 4,
    likes: 3,
    review: `I thought the message if you can call it that, was great. It's not good to monopolize one person's time, 
        especially if you have to manipulate them to do so.`,
    hiddenReview: null,
  },
  {
    commentId: 23,
    forBookId: 5,
    userName: "Lex Kent",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/479984.jpg?alt=media&token=fe7dcab8-d308-4fe1-93fc-b2e6a89358b6",
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
    commentId: 24,
    forBookId: 5,
    userName: "Shira",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2634685.jpg?alt=media&token=b1f5c131-39bc-44fb-b585-3ef627ed0f6f",
    date: "Feb 06, 2021",
    rate: 4.9,
    likes: 11,
    review: `our first bsc graphic novel with new artist gabriela epstein! like with the transition from raina 
      telgemeier to gale galligan, this transition isn't quite seamless, but is close enough to fool most kids. 
      the book was just as subtexty (claudia x ashley = clashley) as the source material, but I can't pretend 
      I wasn't hoping for the gayness to be explicit rather than implied.`,
    hiddenReview: `three notes about the adaptation that are worth mentioning: first, though everyone still 
      makes fun of ashley's style, she's much more alternative/punk than the described boho style in the original
       book. secondly, there is one two-page spread where ashley's face is smack dab in the middle of the panel, 
       so we lose her facial expression (a mistake that, I suspect, epstein will probably not make again). thirdly,
       in the scene where claud makes rice krispies treats with the rodowskys, the actual recipe is included, which is a really lovely touch!`
  },
  {
    commentId: 25,
    forBookId: 5,
    userName: "Nicole",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
    date: "Oct 05, 2020",
    rate: 4,
    likes: 45,
    review: `It took me a year (rather, 11 months exactly) to listen to this audio... I started the first half while
   I was painting last year and never got the opportunity to finish it. Months later, when I had it on my phone,
    I continued listening to it but got bored. B-9 and B-12 planes sadly did not interest. Nor the details on his 
    military service. I honestly know nothing about planes, never been in one even, so the technical part bored me. A lot.`,
    hiddenReview: `Last week I finally made enough progress and reached the ocean part, the story improved considerably.
   I listened to the audio at every chance I had and finished it rather quickly.

  I honestly didn't know who Louis was before starting this book. Back in spring, my dad was watching a movie on
   tv.. I was watching snippets with him and then wow it's so similar to the book.. WAIT what. Yeah, that's how
    I discovered it's the same Unbroken directed by Angelina Jolie. And Louis is going to get captured by the Japs.
     You see, I had the audiobook on my laptop and only knew it's a non-fic biography. It was only last week, when 
     I became invested in the story again, that I googled some things about the book (other than the general google 
      page) and yes I did read some spoilers but are is there a spoiler in a biography? Well if I didn't know the story.. 
      I think yes. I couldn't help it, I wanted to know if Allen will survive too.`,
  },
  {
    commentId: 26,
    forBookId: 6,
    userName: "Craig",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1613125.jpg?alt=media&token=b8dcf0f9-3498-4987-928a-e689a23df3f4",
    date: "Jan 26, 2011",
    rate: 1.5,
    likes: 294,
    review: `I’ve seen recently that negative commentary or reviews about this book invoke a kind of backlash normally reserved 
        for non-conformists who critique the Bible, The Diary of Ann Frank, The Last Lecture, or any Oprah 'Book of the Month'. Well, 
        brace yourself because here comes another one.`,
    hiddenReview: null,
  },
  {
    commentId: 27,
    forBookId: 6,
    userName: "Alison",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/124482.jpg?alt=media&token=b0cae97f-948b-43a6-8ccb-7bbe2eddfc43",
    date: "Mar 27, 2011",
    rate: 5,
    likes: 105,
    review: `If you are wondering if you should read "Unbroken", just read it. Even if you don't end up liking it, you just need
         to read it. Everyone does.
        Louis Zamperini was an Italian-American Olympic runner whose plane goes down in World War 2, and he and two other men drift
         on a raft for a long, long time. I don't want to tell you anything else, because I want you to experience it. This books
          packs a double punch--the story itself is as amazing as Laura Hillenbrand's genius story-telling.`,
    hiddenReview: `Books like this inspire us, they shift our perspectives, they enlighten us, and they scare the *bleep* out 
        of us. Louis stretched the human experience to the very depth and breadth of its ability to survive and lived, scratch that, LIVES to tell about it. `
  },
  {
    commentId: 28,
    forBookId: 6,
    userName: "Dem",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2752994.jpg?alt=media&token=78398b19-3ac3-439c-ac1b-59d36e38e18d",
    date: "Jun 25, 2011",
    rate: 4,
    likes: 71,
    review: `This is a inspiring and educational read. It’s one of those books that you gasp out load while reading it as the
         horrors of war really come to the forefront in this book. This is a story of five parts and I really enjoyed the first three 
         parts. Part one deals with the protagonist Louis Zamperini's childhood and running career and I really enjoyed this introduction
          to Louis as I felt I really understood this man and knew how he survived the horrors of war and the physiological and physical 
          pain he endured.`,
    hiddenReview: null,
  },
  {
    commentId: 29,
    forBookId: 6,
    userName: "David Baldacci",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/25479304.jpg?alt=media&token=fa826fa8-73c3-4aae-975d-4b5f6a189a0f",
    date: "Nov 15, 2013",
    rate: 5,
    likes: 58,
    review: `A true tale of human resilience so unbelievable that you would think it was a novel. But Louis Zamperini did it and
         Hillenbrand chronicles that harrowing journey in a way only she can.`,
    hiddenReview: null
  },
  {
    commentId: 30,
    forBookId: 6,
    userName: "Sarah",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18894476.jpg?alt=media&token=45612f4b-a7dc-4010-9e57-4232964cb79c",
    date: "Jan 05, 2017",
    rate: 5,
    likes: 55,
    review: `"I'm loving this book. I would love to just breeze through it but there is so much information. 
        I'm only on page 28 but I'm listening to an audio book at the same time. I'm almost don't with that. Anyway,
         this book is a must read. Very well written !"`,
    hiddenReview: `"I'm reading this book slower than I do some. I want to absorb everything. My Father, Uncle 
        and Father in law went through this. I'm sad because of the conditions they had to deal with but also proud
         beyond words. This is a must read book"
        I finished reading this book last night. It was one of the most memorable books I have read in some time. I 
        didn't care much for History in school, but I was drawn to this one. It amazes me what our soldiers went through
         and how much we have to be proud of. I would give this more stars if I could. I highly recommend this book. `
  },
  {
    commentId: 31,
    forBookId: 7,
    userName: "Logan Hughes",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/15052079.jpg?alt=media&token=41fbc1fc-d3f1-47e1-aac1-c71f63aec037",
    date: "Mar 10, 2021",
    rate: 5,
    likes: 18,
    review: `This is one of my favorite books, so I'm happy that the graphic novel is extremely faithful to the
             source material. I like the character design of Ashley; her edgy style felt like a good update of the 1980s
              "hippie". I enjoyed the way this brings the story to life. Claudia and Ashley's "finding source material" 
              montage is funny and relatable, Jackie Rodowsky is sweet and winning, and Ashley's abstract fire hydrant sculpture is cool.`,
    hiddenReview: `I was sort of hoping against hope that the queer subtext in this book would be made text in the update, and it's 
              not, but it's also not toned down. It includes one of my favorite moments: when Claudia tells Mimi she just met a girl who she 
              somehow thinks will be a good friend, and Mimi remarks that it happens that way sometimes - it happened that way with Claudia's
               grandfather. I felt the exact same way when I, at twelve, first met the cool edgy-style artist who would eventually become my 
               first queer significant other, so that moment/this book was very important to me.`
  },
  {
    commentId: 32,
    forBookId: 7,
    userName: "Ashley",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/5874251.jpg?alt=media&token=047c4d87-1425-4192-a5c2-772e46989355",
    date: "Jan 22, 2021",
    rate: 5,
    likes: 4,
    review: `Gabriela Epstein had some big shoes to fill, joining the BSC Graphic Novel series nine books in,
             and I'll be honest, it took me a couple chapters to really warm up to her art. Not that it's a huge departure 
             from what we've already seen, but it's still a little different and change is scary haha. But her cherubic angel 
             Jackie Rodowsky won me over, and made me notice how great everyone looks. For some reason, I was especially drawn 
             to Kristy and Dawn. I'm excited to see the next book she adapts!`,
    hiddenReview: `Story-wise, I enjoyed this. It's been a couple of years since I last read the original (which is embarrassing,
            since I thought I would get through the whole series in, like, a couple months lmao) but as far as I can tell, it was a
            pretty faithful adaption. I especially liked the salty BSC eating all her snacks, that was a fun little montage (especially
            Mary Anne catching the marshmallow thrown by Kristy in her mouth ahhahahaha!!) Oh, and the one panel of all their
            identical angry faces (except Mary Anne's sympathetic one) cracked me up!I can see this book being just as popular 
            as the rest of the series, and hope that we get many, many more books. (Hey, Raina and Gale each got four, so it's 
            only fair for Gaby and Chan Chau (who is adapting the next book) to also each get four. BSC FOREVER!!!)`,
  },
  {
    commentId: 33,
    forBookId: 7,
    userName: "Destiny Henderson",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/64443319.jpg?alt=media&token=aab215e9-7c4d-4c04-9094-24fbfa51a59c",
    date: "Feb 04, 2021",
    rate: 4,
    likes: 3,
    review: `I thought the message if you can call it that, was great. It's not good to monopolize one person's time, 
            especially if you have to manipulate them to do so.`,
    hiddenReview: null,
  },
  {
    commentId: 34,
    forBookId: 7,
    userName: "Annalisa",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/542037.jpg?alt=media&token=b6fab23c-ef13-454c-a0b5-ad91609fce33",
    date: "Oct 04, 2011",
    rate: 5,
    likes: 539,
    review: `Hillenbrand has broken the unwritten code for Americans to downplay the wrongs of the Japanese during World War II (other than Pearl Harbor)
        in favor of focusing on the egregious acts of the Nazis. My education in World War II history has focused on the Holocaust and the unforgivable
         damage we did to Japan by unleashing the atomic bomb. I appreciate all the research Hillenbrand did to bring us the other side of the story.`,
    hiddenReview: `Louis Zamperini is my new hero. I loved his charisma and endurance, both of which shined through in Hillenbrand's meticulous writing.
        I haven't been this invested in non-fiction in a long time. Even when she was talking about airplane design I was enthralled. And even though I
         figured Zamperini had to have survived his ordeal to give Hillenbrand an interview, I was still anxious about his survival. My favorite part of 
         Louis' story is (view spoiler). How inspiring and moving, his whole story, but especially his life after the war.

        I don't think I can pick up another book for a few days. I need to let this one settle before I delve into fiction that will feel meaningless after 
        this.`
  },
  {
    commentId: 35,
    forBookId: 7,
    userName: "Kemper",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/405390.jpg?alt=media&token=943f6795-b5fb-4d4d-973e-1ae23000004d",
    date: "Nov 24, 2010",
    rate: 4.8,
    likes: 930,
    review: `I was cleaning up after the wife and I had dinner last night and there was a small amount of green beans left. There weren’t
         nearly enough for another serving to make them worth saving so I dumped them in the sink, but just as I was about to turn on the garbage
          disposal, I realized that to the POWs described in Unbroken those few green beans I was about to mulch would have been a feast they would
           have risked torture and beatings for. I was disgusted with myself for the rest of the night. You know the book you’re reading is hitting
            you hard when you feel that much shame for letting a tiny bit of food go to waste.`,
    hiddenReview: `Louie Zamperini is one of those guys who definitely earned that Greatest Generation label. The son of Italian immigrant
         parents, Louie was a rebellious kid who was constantly into one form of mischief or another, but when he finally channeled his energy
          into running, he became a high school track star in California. Louie was so good that he made the 1936 Olympics in Berlin at the age of 19, and even though he didn’t medal, he ran one lap of a race so quickly that he electrified the crowd and even caught Hitler’s attention.

        As a college runner, Louie held several national records and many thought that he’d be the man to eventually break the four minute mile. 
        He was poised to do well in the 1940 Olympics, but then World War II cancelled the games. Louie left college and ended up in the air corps
         even though he was scared of planes. He became a bombardier and went to the Pacific after Pearl Harbor. Louie survived several missions,
          including one where their B-24 barely made it back with over 500 holes in it.`
  },
  {
    commentId: 36,
    forBookId: 8,
    userName: "Sarah",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18894476.jpg?alt=media&token=45612f4b-a7dc-4010-9e57-4232964cb79c",
    date: "Jan 05, 2017",
    rate: 5,
    likes: 55,
    review: `"I'm loving this book. I would love to just breeze through it but there is so much information. 
        I'm only on page 28 but I'm listening to an audio book at the same time. I'm almost don't with that. Anyway,
         this book is a must read. Very well written !"`,
    hiddenReview: `"I'm reading this book slower than I do some. I want to absorb everything. My Father, Uncle 
        and Father in law went through this. I'm sad because of the conditions they had to deal with but also proud
         beyond words. This is a must read book"
        I finished reading this book last night. It was one of the most memorable books I have read in some time. I 
        didn't care much for History in school, but I was drawn to this one. It amazes me what our soldiers went through
         and how much we have to be proud of. I would give this more stars if I could. I highly recommend this book. `
  },
  {
    commentId: 37,
    forBookId: 8,
    userName: "Nicole",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
    date: "Oct 05, 2020",
    rate: 4,
    likes: 45,
    review: `It took me a year (rather, 11 months exactly) to listen to this audio... I started the first half while
         I was painting last year and never got the opportunity to finish it. Months later, when I had it on my phone,
          I continued listening to it but got bored. B-9 and B-12 planes sadly did not interest. Nor the details on his 
          military service. I honestly know nothing about planes, never been in one even, so the technical part bored me. A lot.`,
    hiddenReview: `Last week I finally made enough progress and reached the ocean part, the story improved considerably.
         I listened to the audio at every chance I had and finished it rather quickly.

        I honestly didn't know who Louis was before starting this book. Back in spring, my dad was watching a movie on
         tv.. I was watching snippets with him and then wow it's so similar to the book.. WAIT what. Yeah, that's how
          I discovered it's the same Unbroken directed by Angelina Jolie. And Louis is going to get captured by the Japs.
           You see, I had the audiobook on my laptop and only knew it's a non-fic biography. It was only last week, when 
           I became invested in the story again, that I googled some things about the book (other than the general google 
            page) and yes I did read some spoilers but are is there a spoiler in a biography? Well if I didn't know the story.. 
            I think yes. I couldn't help it, I wanted to know if Allen will survive too.`,
  },
  {
    commentId: 38,
    forBookId: 8,
    userName: "Erin",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1668821.jpg?alt=media&token=afc73239-7638-441f-ae37-64c020d086d7",
    date: "Apr 16, 2012",
    rate: 1,
    likes: 22,
    review: `I enjoyed the beginning of the book somewhat, learning about the main character's struggles to become an Olympic
         runner. It quickly transitioned into an account of his experiences at war. I had a very difficult time connecting
          to/caring about any of the characters. (Perhaps the third-person narrative was too distant for me? I felt as though
             I was just reading a series of facts.) Also, I don't have much interest in war, combat, or airplanes; when I
              picked up 'Unbroken' I was depending on my love for the characters to be enough of a gripper to keep me engaged,
               and that just didn't happen. Reading it became more of a chore than an escape, so ultimately I only made it through 
               about a quarter of the book. I wonder if I just needed to hang on a bit longer to fall in love with this book the
                way that so many others have...`,
    hiddenReview: null
  },
  {
    commentId: 39,
    forBookId: 8,
    userName: "Amanda",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/4678252.jpg?alt=media&token=1a7afedb-e647-43d9-80c6-750a7923c832",
    date: "Apr 30, 2011",
    rate: 5,
    likes: 11,
    review: `What a remarkable story about a remarkable life. I couldn't put it down.`,
    hiddenReview: null,
  },
  {
    commentId: 40,
    forBookId: 8,
    userName: "Craig",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1613125.jpg?alt=media&token=b8dcf0f9-3498-4987-928a-e689a23df3f4",
    date: "Jan 26, 2011",
    rate: 1.5,
    likes: 294,
    review: `I’ve seen recently that negative commentary or reviews about this book invoke a kind of backlash normally reserved 
      for non-conformists who critique the Bible, The Diary of Ann Frank, The Last Lecture, or any Oprah 'Book of the Month'. Well, 
      brace yourself because here comes another one.`,
    hiddenReview: null,
  },
  {
    commentId: 41,
    forBookId: 9,
    userName: "Dennis",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2764493.jpg?alt=media&token=8af7ac4d-6247-47d9-aa72-15e97a4afea6",
    date: "Jan 28, 2021",
    rate: 4.5,
    likes: 452,
    review: `We Play Ourselves is a story about theatre, art, sexuality, and relationships. Full review to come,
           but this book was a refreshingly honest portrayal of second chances and accepting who you are. This book was 
           funny, poignant, and brutally accurate. I loved the social dynamics between the relationships of the main 
           characters and I can’t wait to read more by the author. I read this book in one sitting—very fast paced.`,
    hiddenReview: null,
  },
  {
    commentId: 42,
    forBookId: 9,
    userName: "Bandit",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1916695.jpg?alt=media&token=68f1c983-51e6-44b3-9319-89e324855b2c",
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
    commentId: 43,
    forBookId: 9,
    userName: "Carlene",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1068337.jpg?alt=media&token=33727a46-d81f-4fe8-adfe-f272f323777d",
    date: "Feb 04, 2021",
    rate: 4.1,
    likes: 30,
    review: `I really don't know how to review this book, I just want to tell everyone to read it and let it sink in. 
          Jen Silverman's We Play Ourselves is honest, brutal, hilarious, and heartbreaking all at once. If I knew a better 
          h word for brutal I would use it, but I don't think any could fit what I'm trying to say as well. This book is a 
          punch in your face, with scenes that make you gasp and, again, honest portrayals of those in the theatre and film world. 
          We Play Ourselves covers art, sexuality, self discovery, coming of age, and then some. It's about the measures we hold 
          ourselves to, our definitions of success, and the pitfalls of going after something so hard you lose sight of what's real. 
          We Play Ourselves is an unforgettable read.`,
    hiddenReview: null,
  },
  {
    commentId: 44,
    forBookId: 9,
    userName: "Sarina",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/34502206.jpg?alt=media&token=84d58ddd-2c7c-4109-9737-a8c77af53e73",
    date: "Nov 27, 2020",
    rate: 4.65,
    likes: 8,
    review: `Do you SEE Claudia’s outfit?!! Yes, I think I will get along fine with Gabriela Epstein. I have literally never been this excited for 2021.`,
    hiddenReview: null,
  },
  {
    commentId: 45,
    forBookId: 9,
    userName: "Shira",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2634685.jpg?alt=media&token=b1f5c131-39bc-44fb-b585-3ef627ed0f6f",
    date: "Feb 06, 2021",
    rate: 4.9,
    likes: 11,
    review: `our first bsc graphic novel with new artist gabriela epstein! like with the transition from raina 
            telgemeier to gale galligan, this transition isn't quite seamless, but is close enough to fool most kids. 
            the book was just as subtexty (claudia x ashley = clashley) as the source material, but I can't pretend 
            I wasn't hoping for the gayness to be explicit rather than implied.`,
    hiddenReview: `three notes about the adaptation that are worth mentioning: first, though everyone still 
            makes fun of ashley's style, she's much more alternative/punk than the described boho style in the original
             book. secondly, there is one two-page spread where ashley's face is smack dab in the middle of the panel, 
             so we lose her facial expression (a mistake that, I suspect, epstein will probably not make again). thirdly,
             in the scene where claud makes rice krispies treats with the rodowskys, the actual recipe is included, which is a really lovely touch!`

  },
  {
    commentId: 46,
    forBookId: 10,
    userName: "Alison",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/124482.jpg?alt=media&token=b0cae97f-948b-43a6-8ccb-7bbe2eddfc43",
    date: "Mar 27, 2011",
    rate: 5,
    likes: 105,
    review: `If you are wondering if you should read "Unbroken", just read it. Even if you don't end up liking it, you just need
         to read it. Everyone does.
        Louis Zamperini was an Italian-American Olympic runner whose plane goes down in World War 2, and he and two other men drift
         on a raft for a long, long time. I don't want to tell you anything else, because I want you to experience it. This books
          packs a double punch--the story itself is as amazing as Laura Hillenbrand's genius story-telling.`,
    hiddenReview: `Books like this inspire us, they shift our perspectives, they enlighten us, and they scare the *bleep* out 
        of us. Louis stretched the human experience to the very depth and breadth of its ability to survive and lived, scratch that, LIVES to tell about it. `
  },
  {
    commentId: 47,
    forBookId: 10,
    userName: "Dem",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2752994.jpg?alt=media&token=78398b19-3ac3-439c-ac1b-59d36e38e18d",
    date: "Jun 25, 2011",
    rate: 4,
    likes: 71,
    review: `This is a inspiring and educational read. It’s one of those books that you gasp out load while reading it as the
         horrors of war really come to the forefront in this book. This is a story of five parts and I really enjoyed the first three 
         parts. Part one deals with the protagonist Louis Zamperini's childhood and running career and I really enjoyed this introduction
          to Louis as I felt I really understood this man and knew how he survived the horrors of war and the physiological and physical 
          pain he endured.`,
    hiddenReview: null,
  },
  {
    commentId: 48,
    forBookId: 10,
    userName: "David Baldacci",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/25479304.jpg?alt=media&token=fa826fa8-73c3-4aae-975d-4b5f6a189a0f",
    date: "Nov 15, 2013",
    rate: 5,
    likes: 58,
    review: `A true tale of human resilience so unbelievable that you would think it was a novel. But Louis Zamperini did it and
         Hillenbrand chronicles that harrowing journey in a way only she can.`,
    hiddenReview: null
  },
  {
    commentId: 49,
    forBookId: 10,
    userName: "Sarah",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18894476.jpg?alt=media&token=45612f4b-a7dc-4010-9e57-4232964cb79c",
    date: "Jan 05, 2017",
    rate: 5,
    likes: 55,
    review: `"I'm loving this book. I would love to just breeze through it but there is so much information. 
        I'm only on page 28 but I'm listening to an audio book at the same time. I'm almost don't with that. Anyway,
         this book is a must read. Very well written !"`,
    hiddenReview: `"I'm reading this book slower than I do some. I want to absorb everything. My Father, Uncle 
        and Father in law went through this. I'm sad because of the conditions they had to deal with but also proud
         beyond words. This is a must read book"
        I finished reading this book last night. It was one of the most memorable books I have read in some time. I 
        didn't care much for History in school, but I was drawn to this one. It amazes me what our soldiers went through
         and how much we have to be proud of. I would give this more stars if I could. I highly recommend this book. `
  },
  {
    commentId: 50,
    forBookId: 10,
    userName: "Nicole",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
    date: "Oct 05, 2020",
    rate: 4,
    likes: 45,
    review: `It took me a year (rather, 11 months exactly) to listen to this audio... I started the first half while
         I was painting last year and never got the opportunity to finish it. Months later, when I had it on my phone,
          I continued listening to it but got bored. B-9 and B-12 planes sadly did not interest. Nor the details on his 
          military service. I honestly know nothing about planes, never been in one even, so the technical part bored me. A lot.`,
    hiddenReview: `Last week I finally made enough progress and reached the ocean part, the story improved considerably.
         I listened to the audio at every chance I had and finished it rather quickly.

        I honestly didn't know who Louis was before starting this book. Back in spring, my dad was watching a movie on
         tv.. I was watching snippets with him and then wow it's so similar to the book.. WAIT what. Yeah, that's how
          I discovered it's the same Unbroken directed by Angelina Jolie. And Louis is going to get captured by the Japs.
           You see, I had the audiobook on my laptop and only knew it's a non-fic biography. It was only last week, when 
           I became invested in the story again, that I googled some things about the book (other than the general google 
            page) and yes I did read some spoilers but are is there a spoiler in a biography? Well if I didn't know the story.. 
            I think yes. I couldn't help it, I wanted to know if Allen will survive too.`,
  },
  {
    commentId: 51,
    forBookId: 11,
    userName: "Sarina",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/34502206.jpg?alt=media&token=84d58ddd-2c7c-4109-9737-a8c77af53e73",
    date: "Nov 27, 2020",
    rate: 4.65,
    likes: 8,
    review: `Do you SEE Claudia’s outfit?!! Yes, I think I will get along fine with Gabriela Epstein. I have literally never been this excited for 2021.`,
    hiddenReview: null,
  },
  {
    commentId: 52,
    forBookId: 11,
    userName: "Amanda",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/4678252.jpg?alt=media&token=1a7afedb-e647-43d9-80c6-750a7923c832",
    date: "Feb 06, 2021",
    rate: 4.9,
    likes: 11,
    review: `our first bsc graphic novel with new artist gabriela epstein! like with the transition from raina 
            telgemeier to gale galligan, this transition isn't quite seamless, but is close enough to fool most kids. 
            the book was just as subtexty (claudia x ashley = clashley) as the source material, but I can't pretend 
            I wasn't hoping for the gayness to be explicit rather than implied.`,
    hiddenReview: `three notes about the adaptation that are worth mentioning: first, though everyone still 
            makes fun of ashley's style, she's much more alternative/punk than the described boho style in the original
             book. secondly, there is one two-page spread where ashley's face is smack dab in the middle of the panel, 
             so we lose her facial expression (a mistake that, I suspect, epstein will probably not make again). thirdly,
             in the scene where claud makes rice krispies treats with the rodowskys, the actual recipe is included, which is a really lovely touch!`

  },
  {
    commentId: 53,
    forBookId: 11,
    userName: "Shira",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2634685.jpg?alt=media&token=b1f5c131-39bc-44fb-b585-3ef627ed0f6f",
    date: "Mar 27, 2011",
    rate: 5,
    likes: 105,
    review: `If you are wondering if you should read "Unbroken", just read it. Even if you don't end up liking it, you just need
         to read it. Everyone does.
        Louis Zamperini was an Italian-American Olympic runner whose plane goes down in World War 2, and he and two other men drift
         on a raft for a long, long time. I don't want to tell you anything else, because I want you to experience it. This books
          packs a double punch--the story itself is as amazing as Laura Hillenbrand's genius story-telling.`,
    hiddenReview: `Books like this inspire us, they shift our perspectives, they enlighten us, and they scare the *bleep* out 
        of us. Louis stretched the human experience to the very depth and breadth of its ability to survive and lived, scratch that, LIVES to tell about it. `
  },
  {
    commentId: 54,
    forBookId: 11,
    userName: "Alison",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/124482.jpg?alt=media&token=b0cae97f-948b-43a6-8ccb-7bbe2eddfc43",
    date: "Jun 25, 2011",
    rate: 4,
    likes: 71,
    review: `This is a inspiring and educational read. It’s one of those books that you gasp out load while reading it as the
         horrors of war really come to the forefront in this book. This is a story of five parts and I really enjoyed the first three 
         parts. Part one deals with the protagonist Louis Zamperini's childhood and running career and I really enjoyed this introduction
          to Louis as I felt I really understood this man and knew how he survived the horrors of war and the physiological and physical 
          pain he endured.`,
    hiddenReview: null,
  },
  {
    commentId: 55,
    forBookId: 11,
    userName: "Lex Kent",
    userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/479984.jpg?alt=media&token=fe7dcab8-d308-4fe1-93fc-b2e6a89358b6",
    date: "Nov 15, 2013",
    rate: 5,
    likes: 58,
    review: `A true tale of human resilience so unbelievable that you would think it was a novel. But Louis Zamperini did it and
         Hillenbrand chronicles that harrowing journey in a way only she can.`,
    hiddenReview: null
  },
]


var db = firebase.firestore();

reviews.forEach(obj => {
  db.collection("reviewsList").add({
    commentId: obj.commentId,
    forBookId: obj.forBookId,
    userName: obj.userName,
    userImg: obj.userImg,
    date: obj.date,
    rate: obj.rate,
    likes: obj.likes,
    review: obj.review,
    hiddenReview: obj.hiddenReview,
  })
    .then((obj) => {
      console.log("My books :" + obj.title)
    })
    .catch((error) => {
      console.log("Error" + error)
    })
});

// node src/Data/Books/ReviewsList.js