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


const books = [
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1297985.jpg?alt=media&token=bb646025-9c30-45a7-9115-8f48384981ff",
        title: "Musicophilia: Tales of Music and the Brain",
        author: "Oliver Sacks",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "music",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `With the same trademark compassion and erudition he brought to The Man Who Mistook His Wife for a Hat,
         Oliver Sacks explores the place music occupies in the brain and how it affects the human condition. In Musicophilia,
          he shows us a variety of what he calls “musical misalignments.” Among them: a man struck by lightning who suddenly 
          desires to become a pianist at the age of forty-two; an entire group of children with Williams syndrome, who are hypermusical 
          from birth; people with “amusia,” to whom a symphony sounds like the clattering of pots and pans; and a man whose memory
           spans only seven seconds-for everything but music. Illuminating, inspiring, and utterly unforgettable, Musicophilia is 
           Oliver Sacks’ latest masterpiece. `,

    },
    {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/141565.jpg?alt=media&token=ffb622ea-ce02-4736-85cc-1599acfa954e",
        title: "This Is Your Brain on Music: The Science of a Human Obsession",
        author: "Daniel J. Levitin",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "music",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `Whether you load your iPod with Bach or Bono, music has a significant role in your life—even if you never
         realized it. Why does music evoke such powerful moods? The answers are at last be- coming clear, thanks to revolutionary
          neuroscience and the emerging field of evolutionary psychology. Both a cutting-edge study and a tribute to the beauty
           of music itself, This Is Your Brain on Music unravels a host of mysteries that affect everything from pop culture to
            our understanding of human nature, including:
        • Are our musical preferences shaped in utero?
        • Is there a cutoff point for acquiring new tastes in music?
        • What do PET scans and MRIs reveal about the brain’s response to music?
        • Is musical pleasure different from other kinds of pleasure?
        
        This Is Your Brain on Music explores cultures in which singing is considered an essential human function, patients who have
         a rare disorder that prevents them from making sense of music, and scientists studying why two people may not have the same
          definition of pitch. At every turn, this provocative work unlocks deep secrets about how nature and nurture forge a uniquely human obsession.`,
    },
    {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/22693211.jpg?alt=media&token=f7285bef-343e-4368-9e2f-729462355ed4",
        title: "Girl in a Band",
        author: "Kim Gordon",
        rating: 3.82,
        myRating: 0,
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "music",
        ratingsCount: 22,
        reviewsCount: 8,
        description: `Kim Gordon, founding member of Sonic Youth, fashion icon, and role model for a generation of women,
         now tells her story—a memoir of life as an artist, of music, marriage, motherhood, independence, and as one of the
          first women of rock and roll, written with the lyricism and haunting beauty of Patti Smith's Just Kids.

        Often described as aloof, Kim Gordon opens up as never before in Girl in a Band. Telling the story of her family,
         growing up in California in the '60s and '70s, her life in visual art, her move to New York City, the men in her
          life, her marriage, her relationship with her daughter, her music, and her band, Girl in a Band is a rich and beautifully written memoir.
        
        Gordon takes us back to the lost New York of the 1980s and '90s that gave rise to Sonic Youth, and the Alternative
         revolution in popular music. The band helped build a vocabulary of music—paving the way for Nirvana, Hole, Smashing
          Pumpkins and many other acts. But at its core, Girl in a Band examines the route from girl to woman in uncharted 
          territory, music, art career, what partnership means—and what happens when that identity dissolves.
        
        Evocative and edgy, filled with the sights and sounds of a changing world and a transformative life, Girl in a Band
         is the fascinating chronicle of a remarkable journey and an extraordinary artist.`,
    },
    {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/50235819._SY475_.jpg?alt=media&token=2927a3a3-e117-4ea1-87de-44c52a989067",
        title: "The Girl in the Love Song",
        author: "Emma Scott",
        rating: 3.83,
        myRating: 0,
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "music",
        ratingsCount: 103,
        reviewsCount: 26,
        description: `Miller Stratton is a survivor. After a harrowing childhood of poverty, he will do anything it takes
         to find security for himself and his mom. He’s putting all his hopes and dreams in the fragile frame of his guitar
          and the beauty he creates with its strings and his soulful voice.

        Until Violet.
        
        No one expects to meet the love of their life at age thirteen. But the spunky rich girl steals Miller’s heart and refuses to give it back.
        
        Violet McNamara’s life hasn’t been as simple as it looks. Her picture-perfect family is not so perfect after all.
         Her best friend Miller is her one constant and she is determined not to ruin their friendship with romantic complications.
        
        But the heart wants what it wants. As Miller’s star begins to rise to stratospheric heights, what will it take for
         Violet to realize that she’s the girl in all of his love songs?
        
        Lost Boys is a new series of interconnected, coming-of-age standalones from USA Today bestselling author Emma Scott, coming in 2020`,
    },
    {
        id: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52816566._SY475_.jpg?alt=media&token=9db420b0-7dd1-48bc-9999-43beb0ca3697",
        title: "Liar, Liar, Hearts on Fire",
        author: "Pippa Grant",
        rating: 3.73,
        myRating: 0,
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "music",
        ratingsCount: 83,
        reviewsCount: 14,
        description: `The lies will come back to bite you every time...

        Never borrow pants from your brother. Especially if he’s a size smaller than you are, because all that pressure
         in the junk will short-circuit your brain.
        
        And you’ll lie to a woman in a club about your real name.
        
        Leave her unsatisfied after making out in a bathroom.
        
        Then find out that she’s the one thing standing in the way of your dreams. And she very much doesn’t like being lied to.
        
        Now I have to convince Lila Valentine—the woman I can’t stop thinking about, my biggest regret, and my new boss—that
         I’m what’s best for the baseball team she’s inherited.
        
        If we can’t work together to save the Fireballs, the commissioner’s forcing a sale and moving them across the country.
        
        I’ll do anything to save my home team.
        
        But the one thing I can’t do?
        
        Keep my hands to myself.
        
        Which would be fine, if she hadn’t been telling me lies this whole time too. `,
    },
    {
        id: 6,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/43554866._SX318_.jpg?alt=media&token=e4e1bb8a-9875-4f45-b5cd-ab0fe255884b",
        title: "Violet Bent Backwards Over the Grass",
        author: "Lana Del Rey",
        rating: 4.7,
        myRating: 0,
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "music",
        ratingsCount: 351,
        reviewsCount: 136,
        description: `The highly anticipated spoken word poetry collection from Lana Del Rey, Violet Bent Backwards over the Grass

        “'Violet Bent Backwards over the Grass' is the title poem of the book and the first poem 
        I wrote of many. Some of which came to me in their entirety, which I dictated and then typed
         out, and some that I worked laboriously picking apart each word to make the perfect poem. They
          are eclectic and honest and not trying to be anything other than what they are and for that reason
           I’m proud of them, especially because the spirit in which they were written was very authentic.” (Lana Del Rey)
        
        Lana Del Rey brings her breathtaking poetry to life in an unprecedented audiobook. In this stunning spoken word performance,
         Lana Del Rey reads 14 poems from her debut book Violet Bent Backwards over the Grass accompanied by music from Grammy 
         Award-winning musician Jack Antonoff. Lana’s debut book solidifies her further as “the essential writer of her times”
          (The Atlantic). This audiobook features Lana reading select poems from the book, including "LA Who Am I to Love You?",
           "The Land of 1,000 Fires", "Past the Bushes Cypress Thriving", "Never to Heaven", "Tessa DiPietro", "Happy", and several others.
            The result is an extraordinary poetic landscape that reflects the unguarded spirit of its creator.  `,
    },
    {
        id: 7,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53916522.jpg?alt=media&token=284f01cf-882a-48c5-ac5e-1b4bb0b6737c",
        title: "Dolly Parton, Songteller: My Life in Lyrics",
        author: "Dolly Parton, Robert K. Oermann",
        rating: 3.55,
        myRating: 0,
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "music",
        ratingsCount: 38,
        reviewsCount: 9,
        description: `Dolly Parton, Songteller: My Life in Lyrics is a landmark celebration of the remarkable life and career
         of a country music and pop culture legend.

        As told by Dolly Parton in her own inimitable words, explore the songs that have defined her journey. Illustrated throughout
         with previously unpublished images from Dolly Parton's personal and business archives.
        
        Mining over 60 years of songwriting, Dolly Parton highlights 175 of her songs and brings readers behind the lyrics.
        
        • Packed with never-before-seen photographs and classic memorabilia
        • Explores personal stories, candid insights, and myriad memories behind the songs
        
        Dolly Parton, Songteller: My Life in Lyrics reveals the stories and memories that have made Dolly a beloved icon across generations,
         genders, and social and international boundaries.
        
        Containing rare photos and memorabilia from Parton's archives, this book is a show-stopping must-have for every Dolly Parton fan.
        
        • Learn the history behind classic Parton songs like "Jolene," "9 to 5," "I Will Always Love You," and more.
        • The perfect gift for Dolly Parton fans (everyone loves Dolly!) as well as lovers of music history and country
        
        Add it to the shelf with books like Coat of Many Colors by Dolly Parton, The Beatles Anthology by The Beatles, and Born to Run by Bruce Springsteen. `,
    },
    {
        id: 8,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40611133._SY475_.jpg?alt=media&token=0d10420e-4173-4e86-b7ea-7a0d40c4dcc7",
        title: "Ellie and the Harpmaker",
        author: "Hazel Prior ",
        rating: 4.05,
        myRating: 0,
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "music",
        ratingsCount: 21,
        reviewsCount: 5,
        description: `In the rolling hills of beautiful Exmoor, there’s a barn. And in that barn, you’ll find Dan. He’s a maker
         of exquisite harps - but not a great maker of conversation. He’s content in his own company, quietly working and away 
         from social situations that he doesn’t always get right.

        But one day, a cherry-socked woman stumbles across his barn and the conversation flows a little more easily than usual.
         She says her name’s Ellie, a housewife, alone, out on her daily walk and, though she doesn’t say this, she looks sad. 
         He wants to make her feel better, so he gives her one of his harps, made of cherry wood.
        
        And before they know it, this simple act of kindness puts them on the path to friendship, big secrets, pet pheasants and,
         most importantly, true love. `,
    },
    {
        id: 9,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55046122._SY475_.jpg?alt=media&token=08c9ec74-0527-4ed5-a429-975139ab2d75",
        title: "The Violinist of Auschwitz",
        author: "Ellie Midwood ",
        rating: 3.84,
        myRating: 0,
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "music",
        ratingsCount: 140.774,
        reviewsCount: 276,
        description: `Auschwitz, 1943: In the depths of hell, can hope rise? And can love triumph over hatred?

        Based on the unforgettable true story of Alma Rosé, The Violinist of Auschwitz brings to life one of history’s most fearless,
         inspiring and courageous heroines. Alma’s bravery saved countless lives, bringing hope to those who had forgotten its meaning…
        
        In Auschwitz, every day is a fight for survival. Alma is inmate 50381, the number tattooed on her skin in pale blue ink. She is
        
        cooped up with thousands of others, torn from loved ones, trapped in a maze of barbed wire. Every day people disappear, never to be seen again.
        
        This tragic reality couldn’t be further from Alma’s previous life. An esteemed violinist, her performances left her audiences 
        spellbound. But when the Nazis descend on Europe, none of that can save her…
        
        When the head of the women’s camp appoints Alma as the conductor of the orchestra, performing for prisoners trudging to work
         as well as the highest-ranking Nazis, Alma refuses: “they can kill me but they won’t make me play”. Yet she soon realizes the
         
         
         power this position offers: she can provide starving girls with extra rations and save many from the clutches of death.
        
        This is how Alma meets Miklos, a talented pianist. Surrounded by despair, they find happiness in joint rehearsals, secret notes,
         and concerts they give side by side––all the while praying that this will one day end. But in Auschwitz, the very air is tainted
         
         with loss, and tragedy is the only certainty… In such a hopeless place, can their love survive?
        
        This devastatingly heartbreaking yet beautifully hopeful tale proves that even in the darkest of days, love can prevail––and give
         you something to live for. Fans of The Choice, The Tattooist of Auschwitz and The Orphan Train will lose their hearts to this magnificent tale. `,
    },
    {
        id: 10,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52664814._SY475_.jpg?alt=media&token=70a32c3b-c02b-444d-a04c-568724ad37bb",
        title: "Muted",
        author: "Tami Charles",
        rating: 3.92,
        myRating: 0,
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "music",
        ratingsCount: 753.458,
        reviewsCount: 62.824,
        description: `A ripped-from-the-headlines novel of ambition, music, and innocence lost, perfect for fans of
         Elizabeth Acevedo and Jason Reynolds!
        Be bold. Get seen. Be Heard.
        
        For seventeen-year-old Denver, music is everything. Writing, performing, and her ultimate goal: escaping her
         very small, very white hometown.
        
        So Denver is more than ready on the day she and her best friends Dali and Shak sing their way into the orbit
         of the biggest R&B star in the world, Sean "Mercury" Ellis. Merc gives them everything: parties, perks, wild
          nights -- plus hours and hours in the recording studio. Even the painful sacrifices and the lies the girls have to tell are all worth it.
        
        Until they're not.
        
        Denver begins to realize that she's trapped in Merc's world, struggling to hold on to her own voice. As the
         dream turns into a nightmare, she must make a choice: lose her big break, or get broken.
        
        Inspired by true events, Muted is a fearless exploration of the dark side of the music industry, the business
         of exploitation, how a girl's dreams can be used against her -- and what it takes to fight back.`,
    },
    {
        id: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52658293.jpg?alt=media&token=1eb63803-fb85-4435-be2d-1fb42bfdb21e",
        title: "Love Songs for Skeptics",
        author: "Christina Pishiris ",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "music",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `For fans of Josie Silver and Emily Henry comes a debut romcom about the life-changing magic of second chances.

        Zoë Frixos gets the whole love song thing. Truly, she does. As an editor at a major music magazine in London, it's part of
         her job description. But love? Let's just say Zoë's been a bit off-beat in that department. After falling hard for her best
          friend, Simon, at thirteen and missing every chance to tell him how she felt before he left town, Zoë came to one grand conclusion: Love stinks.
        
        Twenty years later, Simon is returning to London, newly single and as charming as ever, and Zoë vows to take her second chance.
         But Zoë's got other problems now: In order to save her magazine from closure, she has to land the biggest interview of her career
          with a notoriously elusive rock idol. There's just one problem: Nick, the arrogant publicist who seems determined to stop the 
          story and ruin Zoë's life.
        
        With her brother's big(ish) fat(ish) Greek wedding on the horizon, Zoë begins to wonder if her first love is the right love. In 
        the wake of a life-changing choice, Zoë must decide if she's right to be skeptical about love, or if it's time to change her tune... `,
    },
    {
        id: 12,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55513324.jpg?alt=media&token=53d29f4d-792c-4350-82b3-5effa8b5320b",
        title: "The Black Church: This Is Our Story, This Is Our Song",
        author: "Henry Louis Gates Jr.",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "music",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `From the New York Times-bestselling author of Stony the Road and one of our most important voices on the African-American 
        experience, a powerful new history of the Black church in America as the Black community's abiding rock and its fortress.

        The companion book to the upcoming PBS series.
        
        For the young Henry Louis Gates, Jr., growing up in a small, segregated West Virginia town, the church was his family and his 
        community's true center of gravity. Within those walls, voices were lifted up in song to call forth the best in each other, and 
        to comfort each other when times were at their worst. In this book, his tender and magisterial reckoning with the meaning of 
        the Black church in American history, Gates takes us from his own experience onto a journey across more than four hundred years 
        and spanning the entire country. At road's end, we emerge with a new understanding of the centrality of the Black church to the
         American story--as a cultural and political force, as the center of resistance to slavery and white supremacy, as an unparalleled 
         incubator of talent, and as a crucible for working through the community's most important issues, down to today.`,
    },
    {
        id: 13,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54899574.jpg?alt=media&token=d6cfc3db-5e6f-468f-895c-03dcdf916322",
        title: "We Play Ourselves",
        author: "Jen Silverman",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "art",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `After a humiliating scandal, a young writer flees to the West Coast to start over, where she is drawn into 
              the morally-ambiguous orbit of a charismatic filmmaker and the teenage girls who are her next subjects.
              Not too long ago, Cass was a promising young playwright in New York, hailed as "a fierce new voice" and "queer, feminist,
               and ready to spill the tea." But at the height of all this attention, Cass finds herself at the center of a searing public 
               shaming, and flees to Los Angeles to escape--and reinvent herself.There she meets her next - door neighbor Caroline, a 
               magnetic filmmaker on the rise, as well as the pack of teenage girls who hang around her house.They are the subjects of 
               Caroline's next semidocumentary movie, which follows the girls' clandestine after - school activity: a Fight Club inspired by
                the violent classic.
              As Cass is drawn into the film's orbit, she is awed by Caroline's drive and confidence.But over time, she becomes troubled by
               how deeply Caroline is manipulating the teens in the name of art--especially as the consequences become increasingly disturbing.
               With her past proving hard to shake and her future one she's no longer sure she wants, Cass is forced to reckon with her own 
               ambitions and confront what she has come to believe about the steep price of success.`,
    },
    {
        id: 14,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52664730._SX318_.jpg?alt=media&token=d5addb5b-95a5-4cba-af1a-6503489033de",
        title: "Claudia and the New Girl",
        author: "Gabriela Epstein",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "art",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `A brand-new Baby-sitters Club graphic novel adapted by newcomer Gabriela Epstein!

              Claudia has always been the most creative kid in her class... until Ashley Wyeth comes along. 
              Ashley's really different: She wears hippie clothes and has multiple earrings, and she's the 
              most fantastic artist Claudia has ever met.
              
              Ashley says Claudia is a great artist, too, but thinks she's wasting her artistic talent with 
              The Baby-sitters Club. When Claudia starts spending more time with Ashley and missing BSC meetings, 
              it becomes clear that Claudia has to make a decision -- one of them has to go!`,
    },
    {
        id: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54303114.jpg?alt=media&token=ed6f69bd-aca4-4929-b19b-ec280c4383b6",
        title: "Dress Codes: How the Laws of Fashion Made History",
        author: "Richard Thompson Ford",
        rating: 3.82,
        myRating: 0,
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "art",
        ratingsCount: 22,
        reviewsCount: 8,
        description: `A revelatory exploration of fashion through the ages that asks what our clothing reveals
               about ourselves and our society.

              Dress codes are as old as clothing itself. For centuries, clothing has been a wearable status symbol;
               fashion, a weapon in struggles for social change; and dress codes, a way to maintain political control.
                Merchants who dressed like princes and butchers’ wives wearing gem-encrusted crowns were public enemies
                 in medieval societies structured by social hierarchy and defined by spectacle. In Tudor England, silk,
                  velvet, and fur were reserved for the nobility and ballooning pants called “trunk hose” could be considered
                   a menace to good order. The Renaissance era Florentine patriarch Cosimo de Medici captured the power of
                    fashion and dress codes when he remarked, “One can make a gentleman from two yards of red cloth.” Dress
                     codes evolved along with the social and political ideals of the day, but they always reflected struggles
                      for power and status. In the 1700s, South Carolina’s “Negro Act” made it illegal for Black people to dress 
                      “above their condition.” In the 1920s, the bobbed hair and form-fitting dresses worn by free-spirited 
                      flappers were banned in workplaces throughout the United States and in the 1940s the baggy zoot suits 
                      favored by Black and Latino men caused riots in cities from coast to coast.
              
              Even in today’s more informal world, dress codes still determine what we wear, when we wear it—and what our 
              clothing means. People lose their jobs for wearing braided hair, long fingernails, large earrings, beards, and 
              tattoos or refusing to wear a suit and tie or make-up and high heels. In some cities, wearing sagging pants is
               a crime. And even when there are no written rules, implicit dress codes still influence opportunities and social 
               mobility. Silicon Valley CEOs wear t-shirts and flip flops, setting the tone for an entire industry: women wearing
                fashionable dresses or high heels face ridicule in the tech world and some venture capitalists refuse to invest in
                 any company run by someone wearing a suit.
              
              In Dress Codes, law professor and cultural critic Richard Thompson Ford presents an insightful and entertaining
               history of the laws of fashion from the middle ages to the present day, a walk down history’s red carpet to uncover
                and examine the canons, mores, and customs of clothing—rules that we often take for granted. After reading Dress Codes,
                 you’ll never think of fashion as superficial again—and getting dressed will never be the same.`,
    },
    {
        id: 16,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53317371.jpg?alt=media&token=8d178326-be21-400e-ab52-6598f9c9b6ea",
        title: "Homo Irrealis: Essays",
        author: "André Aciman",
        rating: 3.83,
        myRating: 0,
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "art",
        ratingsCount: 103,
        reviewsCount: 26,
        description: `The New York Times-bestselling author of Find Me and Call Me by Your Name returns to the essay form with his
               collection of thoughts on time, the creative mind, and great lives and works

              Irrealis moods are the set of verbal moods that indicate that something is not actually the case or a certain situation
               or action is not known to have happened . . .
              
              Andr� Aciman returns to the essay form in Homo Irrealis to explore what the present tense means to artists who cannot
               grasp the here and now. Irrealis is not about the present, or the past, or the future, but about what might have been
                but never was--but could in theory still happen.
              
              From meditations on subway poetry and the temporal resonances of an empty Italian street, to considerations of the lives
               and work of Sigmund Freud, Constantine Cavafy, W. G. Sebald, John Sloan, �ric Rohmer, Marcel Proust, and Fernando Pessoa,
                and portraits of cities such as Alexandria and St. Petersburg, Homo Irrealis is a deep reflection of the imagination's power
                 to shape our memories under time's seemingly intractable hold.`,
    },
    {
        id: 17,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49088643.jpg?alt=media&token=a4603f3d-7b6d-4a79-86ba-b643eb6baced",
        title: "Every Body: An Honest and Open Look at Sex from Every Angle",
        author: "Julia Rothman",
        rating: 3.73,
        myRating: 0,
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "art",
        ratingsCount: 83,
        reviewsCount: 14,
        description: `Experience a radically inclusive and informative collection of stories, essays, interviews, and art
               about sex, relationships, and body confidence.

              Have you ever had a question about sex—whether out of curiosity, desire, or the sneaking suspicion you’re, somehow,
               different? Every Body will help you feel less alone. It’s a huge collection of anonymous stories, essays, artwork,
                and expert tell-alls on myriad subjects, all rolled into one. Really, it’s the conversations most of us are too scared to start.
              
              Thanks to talented duo Julia Rothman and Shaina Feinberg, we don’t have to. The stories, essays, and interviews they’ve 
              compiled touch on a wide array of topics, including first times, open relationships, body acceptance, accidental
              pregnancies, sex toys, pleasure, fear and trauma, sexual discovery, and more.
              
              Framed by dozens of artists’ illustrations, deeply personal interviews, and expert essays that address stigmas and clichés,
               this book is an informative, welcoming, and inclusive user’s guide to your body, no matter its shape, size, or preferences.
              
              A dynamic group of voices and styles makes Every Body an essential resource and helpful companion as you explore your own body (and more!). `,
    },
    {
        id: 18,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54222468._SX318_.jpg?alt=media&token=6ae69091-ccb4-4e3b-b3db-1de402e5e873",
        title: "Unspeakable: The Tulsa Race Massacre",
        author: "Carole Boston Weatherford, Floyd Cooper (Illustrations)",
        rating: 4.7,
        myRating: 0,
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "art",
        ratingsCount: 351,
        reviewsCount: 136,
        description: `Celebrated author Carole Boston Weatherford and illustrator Floyd Cooper provide a powerful
               look at the Tulsa Race Massacre, one of the worst incidents of racial violence in our nation's history.
                The book traces the history of African Americans in Tulsa's Greenwood district and chronicles the 
                devastation that occurred in 1921 when a white mob attacked the Black community.

              News of what happened was largely suppressed, and no official investigation occurred for seventy-five years. 
              This picture book sensitively introduces young readers to this tragedy and concludes with a call for a better future. `,
    },
    {
        id: 19,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49127644.jpg?alt=media&token=6e086c13-1cf5-40c7-b16f-0436534882d9",
        title: "Craft: An American History",
        author: "Glenn Adamson",
        rating: 3.55,
        myRating: 0,
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "art",
        ratingsCount: 38,
        reviewsCount: 9,
        description: `A groundbreaking and endlessly surprising history of how artisans created America, from
               the nation's origins to the present day.

              At the center of the United States' economic and social development, according to conventional wisdom,
               are industry, commodities, and technology-while craftspeople and handmade objects are relegated to a 
               bygone past. Renowned craft historian Glenn Adamson turns that narrative on its head in this innovative 
               account, revealing how makers have always been central to America's identity. Examine any phase of the 
               nation's struggle to define itself, and artisans are there-from the silversmith Paul Revere and the 
               revolutionary carpenters and blacksmiths who hurled tea into Boston Harbor, to today's “craftivists.” 
               From Mother Jones to Rosie the Riveter. From Betsy Ross to the AIDS Quilt.
              
              Adamson documents how craft has long been implicated in debates around inequality, education, and class, 
              as well as America's failures to live up to its loftiest ideals. Yet artisanship has also been a site of 
              resistance for oppressed people, such as enslaved African-Americans whose skilled labor might confer hard-won 
              agency under bondage, or the Native American makers who built traditional arts into businesses that preserved
               cherished folkways. Theirs are among the array of memorable portraits of Americans both celebrated and unfamiliar 
               in this richly peopled book. As Adamson argues, these artisans' stories speak to our collective striving toward
                a more perfect union: from the beginning, America had to be-and still remains to be-crafted. `,
    },
    {
        id: 20,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52005438.jpg?alt=media&token=be45b3cd-c515-4d49-a513-31d3f52263ba",
        title: "Francis Bacon: Revelations",
        author: "Mark Stevens, Annalyn Swan",
        rating: 4.05,
        myRating: 0,
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "art",
        ratingsCount: 21,
        reviewsCount: 5,
        description: `A decade in the making: the first comprehensive look at the life and art of Francis Bacon,
               one of the iconic painters of the twentieth century--from the Pulitzer Prize-winning authors of de Kooning:
                An American Master.

              Francis Bacon created an indelible image of mankind in modern times, and played an outsized role in both 
              twentieth century art and life--from his public emergence with his legendary Triptych 1944 (its images so
                   unrelievedly awful that people fled the gallery), to his death in Madrid in 1992.
              
              Bacon was a witty free spirit and unabashed homosexual at a time when many others remained closeted, and his
               exploits were as unforgettable as his images. He moved among the worlds of London's Soho and East End, the
                literary salons of London and Paris, and the homosexual life of Tangier. Through hundreds of interviews, 
                and extensive new research, the authors probe Bacon's childhood in Ireland (he earned his father's lasting
                 disdain because his asthma prevented him from hunting); his increasingly open homosexuality; his early design 
                 career--never before explored in detail; the formation of his vision; his early failure as an artist; his
                  uneasy relationship with American abstract art; and his improbable late emergence onto the international
                   stage as one of the great visionaries of the twentieth century. In all, Francis Bacon: Revelations gives
                    us a more complete and nuanced--and more international--portrait than ever before of this singularly private,
                     darkly funny, eruptive man and his equally eruptive, extraordinary art. Bacon was not just an influential 
                     artist, he helped remake the twentieth-century figure. `,
    },
    {
        id: 21,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/567616.jpg?alt=media&token=aa8a5629-2216-49b6-8f0d-3bd1c131da12",
        title: "The Art Book",
        author: "Phaidon Press",
        rating: 3.84,
        myRating: 0,
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "art",
        ratingsCount: 140.774,
        reviewsCount: 276,
        description: `An A to Z guide to 500 great painters and sculptors from medieval to modern times, it debunks
               art historical classifications by throwing together brilliant examples of all periods, schools, visions and 
               techniques. Each artist is represented by a full-page colour plate of a definitive work, accompanied by explanatory 
               and illuminating information on the image and its creator. Glossaries of artistic movements and technical 
               terms are included, making this a valuable work of reference as well as a feast for the eyes. By breaking with
                traditional classifications, The Art Book presents a fresh and original approach to art: an unparalleled visual
                 sourcebook and a celebration of our rich and multi-faceted culture. `,
    },
    {
        id: 22,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/17333223.jpg?alt=media&token=a5d07bd3-2cb3-4b37-89cd-d36a16df18b0",
        title: "The Goldfinch",
        author: "Donna Tartt",
        rating: 3.92,
        myRating: 0,
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "art",
        ratingsCount: 753.458,
        reviewsCount: 62.824,
        description: `Winner of the Pulitzer Prize for Fiction 2014

              Aged thirteen, Theo Decker, son of a devoted mother and a reckless, largely absent father, survives an accident
               that otherwise tears his life apart. Alone and rudderless in New York, he is taken in by the family of a wealthy
                friend. He is tormented by an unbearable longing for his mother, and down the years clings to the thing that
                 most reminds him of her: a small, strangely captivating painting that ultimately draws him into the criminal
                  underworld. As he grows up, Theo learns to glide between the drawing rooms of the rich and the dusty antiques
                   store where he works. He is alienated and in love - and his talisman, the painting, places him at the centre
                    of a narrowing, ever more dangerous circle.
              
              The Goldfinch is a haunted odyssey through present-day America and a drama of enthralling power. Combining
               unforgettably vivid characters and thrilling suspense, it is a beautiful, addictive triumph - a sweeping story
                of loss and obsession, of survival and self-invention, of the deepest mysteries of love, identity and fate.`,
    },
    {
        id: 23,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/37922875._SX318_.jpg?alt=media&token=c5ea2543-006c-40f1-9853-3b6e85ac61a3",
        title: "Eraser",
        author: "Anna Kang, Christopher Weyant",
        rating: 3.77,
        myRating: 0,
        info: "Kindle Edition, 21 pages",
        published: "September 1st 2018 by Two Lions",
        genre: "art",
        ratingsCount: 12.196,
        reviewsCount: 6.403,
        description: `Eraser is always cleaning up everyone else’s mistakes. Except for Ruler and Pencil Sharpener, none
             of the other school supplies seem to appreciate her. They all love how sharp Pencil is and how Tape and Glue help
              everyone stick together. Eraser wants to create so that she can shine like the others. She decides to give it a
               try, but it’s not until the rubber meets the road that Eraser begins to understand a whole lot about herself.

            Inspired by a school essay their daughter Kate wrote in the third grade, the author and illustrator behind Theodor
             Seuss Geisel Award–winner You Are (Not) Small have created a desktop drama about figuring out who you are, finding 
             happiness, and the importance of second, third, and maybe even fourth chances.`,
    },
    {
        id: 24,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/38664775._SY475_.jpg?alt=media&token=299d46d9-9ef2-4cc1-8c95-4cf955526f05",
        title: "Sea Prayer",
        author: "Khaled Hosseini, Dan Williams (Illustrator)",
        rating: 4.05,
        myRating: 0,
        info: "Kindle Edition, 48 pages",
        published: "September 18th 2018 by Riverhead Books",
        genre: "art",
        ratingsCount: 45.496,
        reviewsCount: 4.687,
        description: `A short, powerful, illustrated book written by Khaled Hosseini in response to the current refugee crisis,
           Sea Prayer is composed in the form of a letter, from a father to his son, on the eve of their journey. Watching over his
            sleeping son, the father reflects on the dangerous sea-crossing that lies before them. It is also a vivid portrait of
             their life in Homs, Syria, before the war, and of that city's swift transformation from a home into a deadly war zone.

          Impelled to write this story by the haunting image of young Alan Kurdi, the three-year-old Syrian boy whose body washed
           upon the beach in Turkey in September 2015, Hosseini hopes to pay tribute to the millions of families, like Kurdi's,
            who have been splintered and forced from home by war and persecution, and he will donate author proceeds from this book
             to the UNHCR (the UN Refugee Agency) and The Khaled Hosseini Foundation to help fund lifesaving relief efforts to help 
             refugees around the globe. Hosseini is also a Goodwill Envoy to the UNHCR, and the founder of The Khaled Hosseini Foundation,
              a nonprofit that provides humanitarian assistance to the people of Afghanistan.`,
    },
    {
        id: 25,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40779082._SY475_.jpg?alt=media&token=1c77622d-525b-4beb-bf87-fa57d9db1ee2",
        title: "The Guns of August",
        author: "Oliver Sacks",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Biography",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `With the same trademark compassion and erudition he brought to The Man Who Mistook His Wife for a Hat,
         Oliver Sacks explores the place music occupies in the brain and how it affects the human condition. In Musicophilia,
          he shows us a variety of what he calls “musical misalignments.” Among them: a man struck by lightning who suddenly 
          desires to become a pianist at the age of forty-two; an entire group of children with Williams syndrome, who are hypermusical 
          from birth; people with “amusia,” to whom a symphony sounds like the clattering of pots and pans; and a man whose memory
           spans only seven seconds-for everything but music. Illuminating, inspiring, and utterly unforgettable, Musicophilia is 
           Oliver Sacks’ latest masterpiece. `,
    },
    {
        id: 26,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/8664353.jpg?alt=media&token=70205d67-e3e8-43b8-a727-1c5d9971e2ad",
        title: "Unbroken: A World War II Story of Survival, Resilience and Redemption",
        author: "Daniel J. Levitin",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Biography",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `Whether you load your iPod with Bach or Bono, music has a significant role in your life—even if you never
         realized it. Why does music evoke such powerful moods? The answers are at last be- coming clear, thanks to revolutionary
          neuroscience and the emerging field of evolutionary psychology. Both a cutting-edge study and a tribute to the beauty
           of music itself, This Is Your Brain on Music unravels a host of mysteries that affect everything from pop culture to
            our understanding of human nature, including:
        • Are our musical preferences shaped in utero?
        • Is there a cutoff point for acquiring new tastes in music?
        • What do PET scans and MRIs reveal about the brain’s response to music?
        • Is musical pleasure different from other kinds of pleasure?
        
        This Is Your Brain on Music explores cultures in which singing is considered an essential human function, patients who have
         a rare disorder that prevents them from making sense of music, and scientists studying why two people may not have the same
          definition of pitch. At every turn, this provocative work unlocks deep secrets about how nature and nurture forge a uniquely human obsession.`,
    },
    {
        id: 27,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/6493208.jpg?alt=media&token=151b396b-f279-47be-bc7b-6140b08fa226",
        title: "The Immortal Life of Henrietta Lacks",
        author: "Kim Gordon",
        rating: 3.82,
        myRating: 0,
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "Biography",
        ratingsCount: 22,
        reviewsCount: 8,
        description: `Kim Gordon, founding member of Sonic Youth, fashion icon, and role model for a generation of women,
         now tells her story—a memoir of life as an artist, of music, marriage, motherhood, independence, and as one of the
          first women of rock and roll, written with the lyricism and haunting beauty of Patti Smith's Just Kids.

        Often described as aloof, Kim Gordon opens up as never before in Girl in a Band. Telling the story of her family,
         growing up in California in the '60s and '70s, her life in visual art, her move to New York City, the men in her
          life, her marriage, her relationship with her daughter, her music, and her band, Girl in a Band is a rich and beautifully written memoir.
        
        Gordon takes us back to the lost New York of the 1980s and '90s that gave rise to Sonic Youth, and the Alternative
         revolution in popular music. The band helped build a vocabulary of music—paving the way for Nirvana, Hole, Smashing
          Pumpkins and many other acts. But at its core, Girl in a Band examines the route from girl to woman in uncharted 
          territory, music, art career, what partnership means—and what happens when that identity dissolves.
        
        Evocative and edgy, filled with the sights and sounds of a changing world and a transformative life, Girl in a Band
         is the fascinating chronicle of a remarkable journey and an extraordinary artist.`,
    },
    {
        id: 28,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/29780253.jpg?alt=media&token=fe31e78a-b20c-4ba0-b57b-cab02ec4254b",
        title: "Born a Crime: Stories From a South African Childhood",
        author: "Emma Scott",
        rating: 3.83,
        myRating: 0,
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "Biography",
        ratingsCount: 103,
        reviewsCount: 26,
        description: `Miller Stratton is a survivor. After a harrowing childhood of poverty, he will do anything it takes
         to find security for himself and his mom. He’s putting all his hopes and dreams in the fragile frame of his guitar
          and the beauty he creates with its strings and his soulful voice.

        Until Violet.
        
        No one expects to meet the love of their life at age thirteen. But the spunky rich girl steals Miller’s heart and refuses to give it back.
        
        Violet McNamara’s life hasn’t been as simple as it looks. Her picture-perfect family is not so perfect after all.
         Her best friend Miller is her one constant and she is determined not to ruin their friendship with romantic complications.
        
        But the heart wants what it wants. As Miller’s star begins to rise to stratospheric heights, what will it take for
         Violet to realize that she’s the girl in all of his love songs?
        
        Lost Boys is a new series of interconnected, coming-of-age standalones from USA Today bestselling author Emma Scott, coming in 2020`,
    },
    {
        id: 29,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/92057.jpg?alt=media&token=3ead4a27-c5d8-4d3f-b03d-d741034ecea1",
        title: "The Autobiography of Malcolm X",
        author: "Pippa Grant",
        rating: 3.73,
        myRating: 0,
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "Biography",
        ratingsCount: 83,
        reviewsCount: 14,
        description: `The lies will come back to bite you every time...

        Never borrow pants from your brother. Especially if he’s a size smaller than you are, because all that pressure
         in the junk will short-circuit your brain.
        
        And you’ll lie to a woman in a club about your real name.
        
        Leave her unsatisfied after making out in a bathroom.
        
        Then find out that she’s the one thing standing in the way of your dreams. And she very much doesn’t like being lied to.
        
        Now I have to convince Lila Valentine—the woman I can’t stop thinking about, my biggest regret, and my new boss—that
         I’m what’s best for the baseball team she’s inherited.
        
        If we can’t work together to save the Fireballs, the commissioner’s forcing a sale and moving them across the country.
        
        I’ll do anything to save my home team.
        
        But the one thing I can’t do?
        
        Keep my hands to myself.
        
        Which would be fine, if she hadn’t been telling me lies this whole time too. `,
    },
    {
        id: 30,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/10884.jpg?alt=media&token=b7f34eb9-91e2-4c13-9708-2d756fe25357",
        title: "Einstein: His Life and Universe",
        author: "Lana Del Rey",
        rating: 4.7,
        myRating: 0,
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "Biography",
        ratingsCount: 351,
        reviewsCount: 136,
        description: `The highly anticipated spoken word poetry collection from Lana Del Rey, Violet Bent Backwards over the Grass

        “'Violet Bent Backwards over the Grass' is the title poem of the book and the first poem 
        I wrote of many. Some of which came to me in their entirety, which I dictated and then typed
         out, and some that I worked laboriously picking apart each word to make the perfect poem. They
          are eclectic and honest and not trying to be anything other than what they are and for that reason
           I’m proud of them, especially because the spirit in which they were written was very authentic.” (Lana Del Rey)
        
        Lana Del Rey brings her breathtaking poetry to life in an unprecedented audiobook. In this stunning spoken word performance,
         Lana Del Rey reads 14 poems from her debut book Violet Bent Backwards over the Grass accompanied by music from Grammy 
         Award-winning musician Jack Antonoff. Lana’s debut book solidifies her further as “the essential writer of her times”
          (The Atlantic). This audiobook features Lana reading select poems from the book, including "LA Who Am I to Love You?",
           "The Land of 1,000 Fires", "Past the Bushes Cypress Thriving", "Never to Heaven", "Tessa DiPietro", "Happy", and several others.
            The result is an extraordinary poetic landscape that reflects the unguarded spirit of its creator.  `,
    },
    {
        id: 31,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/16130._SY475_.jpg?alt=media&token=bbfb6811-35af-4abb-bb93-1075a494be91",
        title: "Alexander Hamilton",
        author: "Dolly Parton, Robert K. Oermann",
        rating: 3.55,
        myRating: 0,
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "Biography",
        ratingsCount: 38,
        reviewsCount: 9,
        description: `Dolly Parton, Songteller: My Life in Lyrics is a landmark celebration of the remarkable life and career
         of a country music and pop culture legend.

        As told by Dolly Parton in her own inimitable words, explore the songs that have defined her journey. Illustrated throughout
         with previously unpublished images from Dolly Parton's personal and business archives.
        
        Mining over 60 years of songwriting, Dolly Parton highlights 175 of her songs and brings readers behind the lyrics.
        
        • Packed with never-before-seen photographs and classic memorabilia
        • Explores personal stories, candid insights, and myriad memories behind the songs
        
        Dolly Parton, Songteller: My Life in Lyrics reveals the stories and memories that have made Dolly a beloved icon across generations,
         genders, and social and international boundaries.
        
        Containing rare photos and memorabilia from Parton's archives, this book is a show-stopping must-have for every Dolly Parton fan.
        
        • Learn the history behind classic Parton songs like "Jolene," "9 to 5," "I Will Always Love You," and more.
        • The perfect gift for Dolly Parton fans (everyone loves Dolly!) as well as lovers of music history and country
        
        Add it to the shelf with books like Coat of Many Colors by Dolly Parton, The Beatles Anthology by The Beatles, and Born to Run by Bruce Springsteen. `,
    },
    {
        id: 32,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/25541028.jpg?alt=media&token=3f5efddd-2086-4479-80a0-0f4a4c04e0a0",
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        author: "Hazel Prior ",
        rating: 4.05,
        myRating: 0,
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "Biography",
        ratingsCount: 21,
        reviewsCount: 5,
        description: `In the rolling hills of beautiful Exmoor, there’s a barn. And in that barn, you’ll find Dan. He’s a maker
         of exquisite harps - but not a great maker of conversation. He’s content in his own company, quietly working and away 
         from social situations that he doesn’t always get right.

        But one day, a cherry-socked woman stumbles across his barn and the conversation flows a little more easily than usual.
         She says her name’s Ellie, a housewife, alone, out on her daily walk and, though she doesn’t say this, she looks sad. 
         He wants to make her feel better, so he gives her one of his harps, made of cherry wood.
        
        And before they know it, this simple act of kindness puts them on the path to friendship, big secrets, pet pheasants and,
         most importantly, true love. `,
    },
    {
        id: 33,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2203._SY475_.jpg?alt=media&token=574ce707-7027-4f0b-b9d2-30dfb9004299",
        title: "John Adams",
        author: "Ellie Midwood ",
        rating: 3.84,
        myRating: 0,
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "Biography",
        ratingsCount: 140.774,
        reviewsCount: 276,
        description: `Auschwitz, 1943: In the depths of hell, can hope rise? And can love triumph over hatred?

        Based on the unforgettable true story of Alma Rosé, The Violinist of Auschwitz brings to life one of history’s most fearless,
         inspiring and courageous heroines. Alma’s bravery saved countless lives, bringing hope to those who had forgotten its meaning…
        
        In Auschwitz, every day is a fight for survival. Alma is inmate 50381, the number tattooed on her skin in pale blue ink. She is
        
        cooped up with thousands of others, torn from loved ones, trapped in a maze of barbed wire. Every day people disappear, never to be seen again.
        
        This tragic reality couldn’t be further from Alma’s previous life. An esteemed violinist, her performances left her audiences 
        spellbound. But when the Nazis descend on Europe, none of that can save her…
        
        When the head of the women’s camp appoints Alma as the conductor of the orchestra, performing for prisoners trudging to work
         as well as the highest-ranking Nazis, Alma refuses: “they can kill me but they won’t make me play”. Yet she soon realizes the
         
         
         power this position offers: she can provide starving girls with extra rations and save many from the clutches of death.
        
        This is how Alma meets Miklos, a talented pianist. Surrounded by despair, they find happiness in joint rehearsals, secret notes,
         and concerts they give side by side––all the while praying that this will one day end. But in Auschwitz, the very air is tainted
         
         with loss, and tragedy is the only certainty… In such a hopeless place, can their love survive?
        
        This devastatingly heartbreaking yet beautifully hopeful tale proves that even in the darkest of days, love can prevail––and give
         you something to live for. Fans of The Choice, The Tattooist of Auschwitz and The Orphan Train will lose their hearts to this magnificent tale. `,
    },
    {
        id: 34,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/8664353.jpg?alt=media&token=70205d67-e3e8-43b8-a727-1c5d9971e2ad",
        title: "Unbroken: A World War II Story of Survival, Resilience and Redemption",
        author: "Tami Charles",
        rating: 3.92,
        myRating: 0,
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "Biography",
        ratingsCount: 753.458,
        reviewsCount: 62.824,
        description: `A ripped-from-the-headlines novel of ambition, music, and innocence lost, perfect for fans of
         Elizabeth Acevedo and Jason Reynolds!
        Be bold. Get seen. Be Heard.
        
        For seventeen-year-old Denver, music is everything. Writing, performing, and her ultimate goal: escaping her
         very small, very white hometown.
        
        So Denver is more than ready on the day she and her best friends Dali and Shak sing their way into the orbit
         of the biggest R&B star in the world, Sean "Mercury" Ellis. Merc gives them everything: parties, perks, wild
          nights -- plus hours and hours in the recording studio. Even the painful sacrifices and the lies the girls have to tell are all worth it.
        
        Until they're not.
        
        Denver begins to realize that she's trapped in Merc's world, struggling to hold on to her own voice. As the
         dream turns into a nightmare, she must make a choice: lose her big break, or get broken.
        
        Inspired by true events, Muted is a fearless exploration of the dark side of the music industry, the business
         of exploitation, how a girl's dreams can be used against her -- and what it takes to fight back.`,
    },
    {
        id: 35,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/48855.jpg?alt=media&token=04fd5c61-882f-4822-b56c-865c4d3a5581",
        title: "The Diary of a Young Girl",
        author: "Anne Frank, Eleanor Roosevelt",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Biography",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable 
        diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.

        In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam
         and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another 
         family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, 
         boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her
          diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and
           surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait 
           of a sensitive and spirited young woman whose promise was tragically cut short.`,
    },
    {
        id: 36,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/11084145._SY475_.jpg?alt=media&token=40eb9c20-c063-4ad3-9830-a8af0157bc61",
        title: "Steve Jobs",
        author: "Walter Isaacson ",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Biography",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `Walter Isaacson's "enthralling" (The New Yorker) worldwide bestselling biography of Apple cofounder
         Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews
          with more than 100 family members, friends, adversaries, competitors, and colleagues--Walter Isaacson has written
           a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose
            passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, 
            music, phones, tablet computing, and digital publishing. Isaacson's portrait touched millions of readers. At a 
            time when America is seeking ways to sustain its innovative edge, Jobs stands as the ultimate icon of inventiveness
             and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity 
             with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. 
             Although Jobs cooperated with the author, he asked for no control over what was written. He put nothing off-limits. He
              encouraged the people he knew to speak honestly. He himself spoke candidly about the people he worked with and competed
               against. His friends, foes, and colleagues offer an unvarnished view of the passions, perfectionism, obsessions, artistry,
                devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted.
                
                His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values. 
                Steve Jobs is the inspiration for the movie of the same name starring Michael Fassbender, Kate Winslet, Seth Rogen,
                 and Jeff Daniels, directed by Danny Boyle with a screenplay by Aaron Sorkin.`,
    },
    {
        id: 37,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/6732019.jpg?alt=media&token=d4b73d2e-eb1a-487a-9fc9-44938a5e9bca",
        title: "Rework",
        author: "Jen Silverman",
        rating: 3.89,
        myRating: 0,
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Business",
        ratingsCount: 211,
        reviewsCount: 198,
        description: `After a humiliating scandal, a young writer flees to the West Coast to start over, where she is drawn into 
              the morally-ambiguous orbit of a charismatic filmmaker and the teenage girls who are her next subjects.
              Not too long ago, Cass was a promising young playwright in New York, hailed as "a fierce new voice" and "queer, feminist,
               and ready to spill the tea." But at the height of all this attention, Cass finds herself at the center of a searing public 
               shaming, and flees to Los Angeles to escape--and reinvent herself.There she meets her next - door neighbor Caroline, a 
               magnetic filmmaker on the rise, as well as the pack of teenage girls who hang around her house.They are the subjects of 
               Caroline's next semidocumentary movie, which follows the girls' clandestine after - school activity: a Fight Club inspired by
                the violent classic.
              As Cass is drawn into the film's orbit, she is awed by Caroline's drive and confidence.But over time, she becomes troubled by
               how deeply Caroline is manipulating the teens in the name of art--especially as the consequences become increasingly disturbing.
               With her past proving hard to shake and her future one she's no longer sure she wants, Cass is forced to reckon with her own 
               ambitions and confront what she has come to believe about the steep price of success.`,
    },
    {
        id: 38,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54304208.jpg?alt=media&token=7886e55c-9601-4281-9d25-4e9cf5c0fbaa",
        title: "Ladies Get Paid: The Ultimate Guide to Breaking Barriers, Owning Your Worth, and Taking Command of Your Career",
        author: "Gabriela Epstein",
        rating: 4.18,
        myRating: 0,
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Business",
        ratingsCount: 745,
        reviewsCount: 66,
        description: `A brand-new Baby-sitters Club graphic novel adapted by newcomer Gabriela Epstein!

              Claudia has always been the most creative kid in her class... until Ashley Wyeth comes along. 
              Ashley's really different: She wears hippie clothes and has multiple earrings, and she's the 
              most fantastic artist Claudia has ever met.
              
              Ashley says Claudia is a great artist, too, but thinks she's wasting her artistic talent with 
              The Baby-sitters Club. When Claudia starts spending more time with Ashley and missing BSC meetings, 
              it becomes clear that Claudia has to make a decision -- one of them has to go!`,
    },
    {
        id: 39,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/56563411._SY475_.jpg?alt=media&token=6e575bce-b11d-46ba-b4e5-0d79f96c8532",
        title: "Black, White, and the Grey: The Story of an Unexpected Friendship and a Beloved Restaurant",
        author: "Richard Thompson Ford",
        rating: 3.82,
        myRating: 0,
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "Business",
        ratingsCount: 22,
        reviewsCount: 8,
        description: `A revelatory exploration of fashion through the ages that asks what our clothing reveals
               about ourselves and our society.

              Dress codes are as old as clothing itself. For centuries, clothing has been a wearable status symbol;
               fashion, a weapon in struggles for social change; and dress codes, a way to maintain political control.
                Merchants who dressed like princes and butchers’ wives wearing gem-encrusted crowns were public enemies
                 in medieval societies structured by social hierarchy and defined by spectacle. In Tudor England, silk,
                  velvet, and fur were reserved for the nobility and ballooning pants called “trunk hose” could be considered
                   a menace to good order. The Renaissance era Florentine patriarch Cosimo de Medici captured the power of
                    fashion and dress codes when he remarked, “One can make a gentleman from two yards of red cloth.” Dress
                     codes evolved along with the social and political ideals of the day, but they always reflected struggles
                      for power and status. In the 1700s, South Carolina’s “Negro Act” made it illegal for Black people to dress 
                      “above their condition.” In the 1920s, the bobbed hair and form-fitting dresses worn by free-spirited 
                      flappers were banned in workplaces throughout the United States and in the 1940s the baggy zoot suits 
                      favored by Black and Latino men caused riots in cities from coast to coast.
              
              Even in today’s more informal world, dress codes still determine what we wear, when we wear it—and what our 
              clothing means. People lose their jobs for wearing braided hair, long fingernails, large earrings, beards, and 
              tattoos or refusing to wear a suit and tie or make-up and high heels. In some cities, wearing sagging pants is
               a crime. And even when there are no written rules, implicit dress codes still influence opportunities and social 
               mobility. Silicon Valley CEOs wear t-shirts and flip flops, setting the tone for an entire industry: women wearing
                fashionable dresses or high heels face ridicule in the tech world and some venture capitalists refuse to invest in
                 any company run by someone wearing a suit.
              
              In Dress Codes, law professor and cultural critic Richard Thompson Ford presents an insightful and entertaining
               history of the laws of fashion from the middle ages to the present day, a walk down history’s red carpet to uncover
                and examine the canons, mores, and customs of clothing—rules that we often take for granted. After reading Dress Codes,
                 you’ll never think of fashion as superficial again—and getting dressed will never be the same.`,
    },
    {
        id: 40,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/48904521.jpg?alt=media&token=f95ec092-d773-4075-9f16-c0ee538ffff4",
        title: "Social Chemistry: Decoding the Elements of Human Connection",
        author: "André Aciman",
        rating: 3.83,
        myRating: 0,
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "Business",
        ratingsCount: 103,
        reviewsCount: 26,
        description: `The New York Times-bestselling author of Find Me and Call Me by Your Name returns to the essay form with his
               collection of thoughts on time, the creative mind, and great lives and works

              Irrealis moods are the set of verbal moods that indicate that something is not actually the case or a certain situation
               or action is not known to have happened . . .
              
              Andr� Aciman returns to the essay form in Homo Irrealis to explore what the present tense means to artists who cannot
               grasp the here and now. Irrealis is not about the present, or the past, or the future, but about what might have been
                but never was--but could in theory still happen.
              
              From meditations on subway poetry and the temporal resonances of an empty Italian street, to considerations of the lives
               and work of Sigmund Freud, Constantine Cavafy, W. G. Sebald, John Sloan, �ric Rohmer, Marcel Proust, and Fernando Pessoa,
                and portraits of cities such as Alexandria and St. Petersburg, Homo Irrealis is a deep reflection of the imagination's power
                 to shape our memories under time's seemingly intractable hold.`,
    },
    {
        id: 41,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53287275.jpg?alt=media&token=545f2dbd-5b03-4693-9fcf-d86e6ea98095",
        title: "Everybody Has a Podcast (Except You): A How-to Guide from the First Family of Podcasting",
        author: "Julia Rothman",
        rating: 3.73,
        myRating: 0,
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "Business",
        ratingsCount: 83,
        reviewsCount: 14,
        description: `Experience a radically inclusive and informative collection of stories, essays, interviews, and art
               about sex, relationships, and body confidence.

              Have you ever had a question about sex—whether out of curiosity, desire, or the sneaking suspicion you’re, somehow,
               different? Every Body will help you feel less alone. It’s a huge collection of anonymous stories, essays, artwork,
                and expert tell-alls on myriad subjects, all rolled into one. Really, it’s the conversations most of us are too scared to start.
              
              Thanks to talented duo Julia Rothman and Shaina Feinberg, we don’t have to. The stories, essays, and interviews they’ve 
              compiled touch on a wide array of topics, including first times, open relationships, body acceptance, accidental
              pregnancies, sex toys, pleasure, fear and trauma, sexual discovery, and more.
              
              Framed by dozens of artists’ illustrations, deeply personal interviews, and expert essays that address stigmas and clichés,
               this book is an informative, welcoming, and inclusive user’s guide to your body, no matter its shape, size, or preferences.
              
              A dynamic group of voices and styles makes Every Body an essential resource and helpful companion as you explore your own body (and more!). `,
    },
    {
        id: 42,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49829875.jpg?alt=media&token=e8c4d46d-5bd8-4e11-bf78-249f5c9fc53c",
        title: "Beginners: The Joy and Transformative Power of Lifelong Learning",
        author: "Carole Boston Weatherford, Floyd Cooper (Illustrations)",
        rating: 4.7,
        myRating: 0,
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "Business",
        ratingsCount: 351,
        reviewsCount: 136,
        description: `Celebrated author Carole Boston Weatherford and illustrator Floyd Cooper provide a powerful
               look at the Tulsa Race Massacre, one of the worst incidents of racial violence in our nation's history.
                The book traces the history of African Americans in Tulsa's Greenwood district and chronicles the 
                devastation that occurred in 1921 when a white mob attacked the Black community.

              News of what happened was largely suppressed, and no official investigation occurred for seventy-five years. 
              This picture book sensitively introduces young readers to this tragedy and concludes with a call for a better future. `,
    },
    {
        id: 43,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54486366.jpg?alt=media&token=d58df041-038a-4508-83e6-135d96c40e56",
        title: "Never Enough: A Navy SEAL Commander on Living a Life of Excellence, Agility, and Meaning",
        author: "Glenn Adamson",
        rating: 3.55,
        myRating: 0,
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "Business",
        ratingsCount: 38,
        reviewsCount: 9,
        description: `A groundbreaking and endlessly surprising history of how artisans created America, from
               the nation's origins to the present day.

              At the center of the United States' economic and social development, according to conventional wisdom,
               are industry, commodities, and technology-while craftspeople and handmade objects are relegated to a 
               bygone past. Renowned craft historian Glenn Adamson turns that narrative on its head in this innovative 
               account, revealing how makers have always been central to America's identity. Examine any phase of the 
               nation's struggle to define itself, and artisans are there-from the silversmith Paul Revere and the 
               revolutionary carpenters and blacksmiths who hurled tea into Boston Harbor, to today's “craftivists.” 
               From Mother Jones to Rosie the Riveter. From Betsy Ross to the AIDS Quilt.
              
              Adamson documents how craft has long been implicated in debates around inequality, education, and class, 
              as well as America's failures to live up to its loftiest ideals. Yet artisanship has also been a site of 
              resistance for oppressed people, such as enslaved African-Americans whose skilled labor might confer hard-won 
              agency under bondage, or the Native American makers who built traditional arts into businesses that preserved
               cherished folkways. Theirs are among the array of memorable portraits of Americans both celebrated and unfamiliar 
               in this richly peopled book. As Adamson argues, these artisans' stories speak to our collective striving toward
                a more perfect union: from the beginning, America had to be-and still remains to be-crafted. `,
    },
    {
        id: 44,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53241562.jpg?alt=media&token=bcb33977-f5fc-415b-b341-9a51fcd291fd",
        title: "Work Won't Love You Back: How Devotion to Our Jobs Keeps Us Exploited, Exhausted, and Alone",
        author: "Mark Stevens, Annalyn Swan",
        rating: 4.05,
        myRating: 0,
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "Business",
        ratingsCount: 21,
        reviewsCount: 5,
        description: `A decade in the making: the first comprehensive look at the life and art of Francis Bacon,
               one of the iconic painters of the twentieth century--from the Pulitzer Prize-winning authors of de Kooning:
                An American Master.

              Francis Bacon created an indelible image of mankind in modern times, and played an outsized role in both 
              twentieth century art and life--from his public emergence with his legendary Triptych 1944 (its images so
                   unrelievedly awful that people fled the gallery), to his death in Madrid in 1992.
              
              Bacon was a witty free spirit and unabashed homosexual at a time when many others remained closeted, and his
               exploits were as unforgettable as his images. He moved among the worlds of London's Soho and East End, the
                literary salons of London and Paris, and the homosexual life of Tangier. Through hundreds of interviews, 
                and extensive new research, the authors probe Bacon's childhood in Ireland (he earned his father's lasting
                 disdain because his asthma prevented him from hunting); his increasingly open homosexuality; his early design 
                 career--never before explored in detail; the formation of his vision; his early failure as an artist; his
                  uneasy relationship with American abstract art; and his improbable late emergence onto the international
                   stage as one of the great visionaries of the twentieth century. In all, Francis Bacon: Revelations gives
                    us a more complete and nuanced--and more international--portrait than ever before of this singularly private,
                     darkly funny, eruptive man and his equally eruptive, extraordinary art. Bacon was not just an influential 
                     artist, he helped remake the twentieth-century figure. `,
    },
    {
        id: 45,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53915346.jpg?alt=media&token=d0a40844-b644-458f-8000-50fcedb0995a",
        title: "Backable: The Surprising Truth Behind What Makes People Take a Chance on You",
        author: "Phaidon Press",
        rating: 3.84,
        myRating: 0,
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "Business",
        ratingsCount: 140.774,
        reviewsCount: 276,
        description: `An A to Z guide to 500 great painters and sculptors from medieval to modern times, it debunks
               art historical classifications by throwing together brilliant examples of all periods, schools, visions and 
               techniques. Each artist is represented by a full-page colour plate of a definitive work, accompanied by explanatory 
               and illuminating information on the image and its creator. Glossaries of artistic movements and technical 
               terms are included, making this a valuable work of reference as well as a feast for the eyes. By breaking with
                traditional classifications, The Art Book presents a fresh and original approach to art: an unparalleled visual
                 sourcebook and a celebration of our rich and multi-faceted culture. `,
    },
    {
        id: 46,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53138083.jpg?alt=media&token=0b1a983e-6833-4e79-971b-2cad67eda418",
        title: "Working Backwards: Insights, Stories, and Secrets from Inside Amazon",
        author: "Donna Tartt",
        rating: 3.92,
        myRating: 0,
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "Business",
        ratingsCount: 753.458,
        reviewsCount: 62.824,
        description: `Winner of the Pulitzer Prize for Fiction 2014

              Aged thirteen, Theo Decker, son of a devoted mother and a reckless, largely absent father, survives an accident
               that otherwise tears his life apart. Alone and rudderless in New York, he is taken in by the family of a wealthy
                friend. He is tormented by an unbearable longing for his mother, and down the years clings to the thing that
                 most reminds him of her: a small, strangely captivating painting that ultimately draws him into the criminal
                  underworld. As he grows up, Theo learns to glide between the drawing rooms of the rich and the dusty antiques
                   store where he works. He is alienated and in love - and his talisman, the painting, places him at the centre
                    of a narrowing, ever more dangerous circle.
              
              The Goldfinch is a haunted odyssey through present-day America and a drama of enthralling power. Combining
               unforgettably vivid characters and thrilling suspense, it is a beautiful, addictive triumph - a sweeping story
                of loss and obsession, of survival and self-invention, of the deepest mysteries of love, identity and fate.`,
    },
    {
        id: 47,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49151008.jpg?alt=media&token=5c0a2af7-ebbc-4a4f-b8c6-052246876980",
        title: "Made in China: A Prisoner, an SOS Letter, and the Hidden Cost of America's Cheap Goods",
        author: "Anna Kang, Christopher Weyant",
        rating: 3.77,
        myRating: 0,
        info: "Kindle Edition, 21 pages",
        published: "September 1st 2018 by Two Lions",
        genre: "Business",
        ratingsCount: 12.196,
        reviewsCount: 6.403,
        description: `Eraser is always cleaning up everyone else’s mistakes. Except for Ruler and Pencil Sharpener, none
             of the other school supplies seem to appreciate her. They all love how sharp Pencil is and how Tape and Glue help
              everyone stick together. Eraser wants to create so that she can shine like the others. She decides to give it a
               try, but it’s not until the rubber meets the road that Eraser begins to understand a whole lot about herself.

            Inspired by a school essay their daughter Kate wrote in the third grade, the author and illustrator behind Theodor
             Seuss Geisel Award–winner You Are (Not) Small have created a desktop drama about figuring out who you are, finding 
             happiness, and the importance of second, third, and maybe even fourth chances.`,
    },
    {
        id: 48,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55539565.jpg?alt=media&token=e0beeae0-95f0-4561-87e1-70f0938a1929",
        title: "Think Again: The Power of Knowing What You Don't Know",
        author: "Khaled Hosseini, Dan Williams (Illustrator)",
        rating: 4.05,
        myRating: 0,
        info: "Kindle Edition, 48 pages",
        published: "September 18th 2018 by Riverhead Books",
        genre: "Business",
        ratingsCount: 45.496,
        reviewsCount: 4.687,
        description: `A short, powerful, illustrated book written by Khaled Hosseini in response to the current refugee crisis,
           Sea Prayer is composed in the form of a letter, from a father to his son, on the eve of their journey. Watching over his
            sleeping son, the father reflects on the dangerous sea-crossing that lies before them. It is also a vivid portrait of
             their life in Homs, Syria, before the war, and of that city's swift transformation from a home into a deadly war zone.

          Impelled to write this story by the haunting image of young Alan Kurdi, the three-year-old Syrian boy whose body washed
           upon the beach in Turkey in September 2015, Hosseini hopes to pay tribute to the millions of families, like Kurdi's,
            who have been splintered and forced from home by war and persecution, and he will donate author proceeds from this book
             to the UNHCR (the UN Refugee Agency) and The Khaled Hosseini Foundation to help fund lifesaving relief efforts to help 
             refugees around the globe. Hosseini is also a Goodwill Envoy to the UNHCR, and the founder of The Khaled Hosseini Foundation,
              a nonprofit that provides humanitarian assistance to the people of Afghanistan.`,
    }
]


var db = firebase.firestore();

books.forEach(obj => {
    db.collection("books").add({
        id: obj.id,
        img: obj.img,
        title: obj.title,
        author: obj.author,
        rating: obj.rating,
        info: obj.info,
        published: obj.published,
        genre: obj.genre,
        ratingsCount: obj.ratingsCount,
        reviewsCount: obj.reviewsCount,
        description: obj.description
    })
        .then((obj) => {
            // console.log("My books :" + obj.title)
        })
        .catch((error) => {
            // console.log("Error" + error)
        })
});

// node src/Data/Books/BooksList.js

