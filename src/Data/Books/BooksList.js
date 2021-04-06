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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "music",
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
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "music",
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
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "music",
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
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "music",
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
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "music",
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
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "music",
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
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "music",
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
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "music",
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
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "music",
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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "music",
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
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "music",
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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "art",
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
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "art",
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
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "art",
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
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "art",
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
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "art",
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
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "art",
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
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "art",
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
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "art",
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
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "art",
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
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "art",
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
        info: "Kindle Edition, 21 pages",
        published: "September 1st 2018 by Two Lions",
        genre: "art",
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
        info: "Kindle Edition, 48 pages",
        published: "September 18th 2018 by Riverhead Books",
        genre: "art",
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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Biography",
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
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Biography",
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
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "Biography",
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
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "Biography",
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
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "Biography",
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
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "Biography",
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
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "Biography",
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
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "Biography",
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
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "Biography",
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
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "Biography",
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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Biography",
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
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Biography",
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
        info: "Kindle Edition, 336 pages",
        published: "February 9th 2021 by Random House",
        genre: "Business",
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
        info: "Hardcover, 176 pages",
        published: "February 2nd 2021 by Graphix",
        genre: "Business",
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
        info: "Hardcover, 464 pages",
        published: "February 9th 2021 by Simon Schuster",
        genre: "Business",
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
        info: "Hardcover, 256 pages",
        published: "January 19th 2021 by Farrar, Straus and Giroux",
        genre: "Business",
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
        info: "Hardcover, 272 pages",
        published: "January 5th 2021 by Voracious",
        genre: "Business",
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
        info: "Hardcover, 32 pages",
        published: "February 2nd 2021 by Carolrhoda Books (R)",
        genre: "Business",
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
        info: "Hardcover, 400 pages",
        published: "January 19th 2021 by Bloomsbury Publishing",
        genre: "Business",
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
        info: "Hardcover, 880 pages",
        published: "March 23rd 2021 by Knopf Publishing Group",
        genre: "Business",
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
        info: "Paperback, 515 pages",
        published: " April 17th 1997 by Phaidon Pres",
        genre: "Business",
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
        info: "Hardcover, First American Edition, 771 pages",
        published: "October 22nd 2013 by Little, Brown and Company",
        genre: "Business",
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
        info: "Kindle Edition, 21 pages",
        published: "September 1st 2018 by Two Lions",
        genre: "Business",
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
        info: "Kindle Edition, 48 pages",
        published: "September 18th 2018 by Riverhead Books",
        genre: "Business",
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
        id: 49,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/45178637._SY475_.jpg?alt=media&token=76cc9283-3fb5-4a3a-b870-38776f8e4a67",
        title: "Bridge of Souls",
        author: "Victoria Schwab",
        info: "ebook, 304 pages",
        published: "March 2nd 2021 by Scholastic Press",
        genre: "Childrens",
        description: `Where there are ghosts, Cassidy Blake follows ... unless it's the other way around?
        Cass thinks she might have this ghost-hunting thing down. After all, she and her ghost best friend, Jacob, have survived two haunted cities while travelling for her parents' TV show.
        But nothing can prepare Cass for New Orleans, which wears all of its hauntings on its sleeve. In a city of ghost tours and tombs, raucous music and all kinds of magic, Cass could get lost in all the colourful, grisly local legends. And the city's biggest surprise is a foe Cass never expected to face: a servant of Death itself.
        Cass takes on her most dangerous challenge yet...`,
    },
    {
        id: 50,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54458127._SY475_.jpg?alt=media&token=ca09de27-f408-436c-abb9-c594cab41c98",
        title: "Starfish",
        author: "Lisa Fipps",
        info: "Hardcover, 256 pages",
        published: "March 9th 2021 by Crown Books for Young Readers",
        genre: "Childrens",
        description: `Ellie is tired of being fat-shamed and does something about it in this poignant debut novel-in-verse.
        Ever since Ellie wore a whale swimsuit and made a big splash at her fifth birthday party, she’s been bullied about her weight. To cope, she tries to live by the Fat Girl Rules–like “no making waves,” “avoid eating in public,” and “don’t move so fast that your body jiggles.” And she’s found her safe space–her swimming pool–where she feels weightless in a fat-obsessed world. In the water, she can stretch herself out like a starfish and take up all the room she wants. It’s also where she can get away from her pushy mom, who thinks criticizing Ellie’s weight will motivate her to diet. Fortunately, Ellie has allies in her dad, her therapist, and her new neighbor, Catalina, who loves Ellie for who she is. With this support buoying her, Ellie might finally be able to cast aside the Fat Girl Rules and starfish in real life–by unapologetically being her own fabulous self. `,
    },
    {
        id: 51,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54492656.jpg?alt=media&token=310e8397-882f-4bf7-857b-916a049637bf",
        title: "Starfish",
        author: "James Patterson, Chris Grabenstein",
        info: "Hardcover, 304 pages",
        published: "March 15th 2021 by Jimmy Patterson",
        genre: "Childrens",
        description: `Pasha & Poop, two adorable housecats take on Ebeneezer, the Grinch of all Cats. James Patterson’s funniest animal adventure since Katt vs. Dogg.
        When shelter cats Pasha and Poop move in with their new human family, they find themselves up against a ghostly bully. Scaredy Cat demands they follow his rules or he'll cause all kinds of trouble-knock over lamps, spill kitty litter, and even get them shipped back to the animal shelter!   
        But Pasha and Poop are stubborn and rebellious. They won't follow the Scaredy Cat's ridiculous rules like all of the other pets on the block. Together, they set out to find the truth behind who the Scaredy Cat really is, and how they can end his mischief-making for good.`,
    },
    {
        id: 52,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54333457.jpg?alt=media&token=06371f50-c8ab-4755-81a3-c007a73b9a7f",
        title: "The House That Wasn't There",
        author: "Elana K. Arnold",
        info: "Hardcover, 288 pages",
        published: "March 30th 2021 by Walden Pond Press",
        genre: "Childrens",
        description: `Award-winning author Elana K. Arnold returns with an unforgettable story of the strange, wondrous threads that run between all of us, whether we know they’re there or not.
        Alder has always lived in his cozy little house in Southern California. And for as long as he can remember, the old, reliable, comforting walnut tree has stood between his house and the one next door. That is, until a new family—with a particularly annoying girl his age—moves into the neighboring house and, without warning, cuts it down.     
        Oak doesn’t understand why her family had to move to Southern California. She has to attend a new school, find new friends, and live in a new house that isn’t even ready—her mother had to cut down a tree on their property line in order to make room for a second floor. And now a strange boy next door won’t stop staring at her, like she did something wrong moving here in the first place.
        As Oak and Alder start school together, they can’t imagine ever becoming friends. But the two of them soon discover a series of connections between them—mysterious, possibly even magical puzzles they can’t put together. At least not without each other’s help.`,
    },
    {
        id: 53,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54304028.jpg?alt=media&token=93682f07-72a6-4af2-80c7-077ad7b00649",
        title: "Hunt, Gather, Parent: What Ancient Cultures Can Teach Us About the Lost Art of Raising Happy, Helpful Little Humans",
        author: "Michaeleen Doucleff",
        info: "Hardcover, 352 pages",
        published: "March 2nd 2021 by Avid Reader Press / Simon Schuster",
        genre: "Childrens",
        description: `NEW YORK TIMES BESTSELLER
        The oldest cultures in the world have mastered the art of raising happy, well-adjusted children. What can we learn from them?
        “Hunt, Gather, Parent is full of smart ideas that I immediately wanted to force on my own kids.” —Pamela Druckerman, The New York Times Book Review
        When Dr. Michaeleen Doucleff becomes a mother, she examines the studies behind modern parenting guidance and finds the evidence frustratingly limited and the conclusions often ineffective. Curious to learn about more effective parenting approaches, she visits a Maya village in the Yucatán Peninsula. There she encounters moms and dads who parent in a totally different way than we do—and raise extraordinarily kind, generous, and helpful children without yelling, nagging, or issuing timeouts. What else, Doucleff wonders, are Western parents missing out on?
        In Hunt, Gather, Parent, Doucleff sets out with her three-year-old daughter in tow to learn and practice parenting strategies from families in three of the world’s most venerable communities: Maya families in Mexico, Inuit families above the Arctic Circle, and Hadzabe families in Tanzania. She sees that these cultures don’t have the same problems with children that Western parents do. Most strikingly, parents build a relationship with young children that is vastly different from the one many Western parents develop—it’s built on cooperation instead of control, trust instead of fear, and personalized needs instead of standardized development milestones.`,
    },
    {
        id: 54,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54313378.jpg?alt=media&token=eaf81771-5eea-420d-bc82-17e952d0401f",
        title: "The Elephant in the Room",
        author: "Holly Goldberg Sloan",
        info: "Hardcover, 256 pages",
        published: "March 2nd 2021 by Dial Books",
        genre: "Childrens",
        description: `From the New York Times bestselling author of Counting by 7s comes a heartfelt story about the importance of compassion and bravery when facing life's challenges" (Kirkus) for fans of The One and Only Ivan and Front Desk.

        It's been almost a year since Sila's mother traveled halfway around the world to Turkey, hoping to secure the immigration paperwork that would allow her to return to her family in the United States.
        
        The long separation is almost impossible for Sila to withstand. But things change when Sila accompanies her father (who is a mechanic) outside their Oregon town to fix a truck. There, behind an enormous stone wall, she meets a grandfatherly man who only months before won the state lottery. Their new alliance leads to the rescue of a circus elephant named Veda, and then to a friendship with an unusual boy named Mateo, proving that comfort and hope come in the most unlikely of places.
        
        A moving story of family separation and the importance of the connection between animals and humans, this novel has the enormous heart and uplifting humor that readers have come to expect from the beloved author of Counting by 7s.`,
    },
    {
        id: 55,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51082340.jpg?alt=media&token=d641a115-201c-4f83-9054-3b3394bf6845",
        title: "Amber and Clay",
        author: "Laura Amy Schlitz, Julia Iredale",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `From the New York Times bestselling author of Counting by 7s comes a heartfelt story about the importance of compassion and bravery when facing life's challenges" (Kirkus) for fans of The One and Only Ivan and Front Desk.

        It's been almost a year since Sila's mother traveled halfway around the world to Turkey, hoping to secure the immigration paperwork that would allow her to return to her family in the United States.
        
        The long separation is almost impossible for Sila to withstand. But things change when Sila accompanies her father (who is a mechanic) outside their Oregon town to fix a truck. There, behind an enormous stone wall, she meets a grandfatherly man who only months before won the state lottery. Their new alliance leads to the rescue of a circus elephant named Veda, and then to a friendship with an unusual boy named Mateo, proving that comfort and hope come in the most unlikely of places.
        
        A moving story of family separation and the importance of the connection between animals and humans, this novel has the enormous heart and uplifting humor that readers have come to expect from the beloved author of Counting by 7s.`,
    },
    {
        id: 56,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54655853._SY475_.jpg?alt=media&token=9ad5b4f1-364c-45c7-830f-990040ebc4ba",
        title: "Stella",
        author: "McCall Hoyle",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `Ever since she was a puppy, Stella was trained to use her powerful beagle nose to sniff out dangerous chemicals and help her handler keep people safe. But during a routine security inspection, Stella misses the scent of an explosive. The sound of the blast is loud and scary. Unable to go back to work because of her anxiety, Stella is retired as a working dog.

        When a young girl named Cloe wants to adopt Stella, the beagle knows this is her last chance to prove her worth. But how? When Stella smells a strange chemical inside Cloe’s body, a scent that surges just before the girl has a seizure, Stella’s nose makes the connection. But how can Stella warn her new family without them thinking she’s having an anxiety attack? How can she convince others that she can be a new kind of service dog and hopefully save Cloe’s life?
        
        Told from Stella’s perspective, this story is about a special dog who must find the courage to overcome her fears in order to help save a young girl with epilepsy. `,
    },
    {
        id: 57,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54304163.jpg?alt=media&token=a866582b-9cb7-4454-9609-d9643d6737f7",
        title: "Amina's Song",
        author: "Hena Khan",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `In the companion novel to the beloved and award-winning Amina’s Voice, Amina once again uses her voice to bridge the places, people, and communities she loves—this time across continents.

        It’s the last few days of her vacation in Pakistan, and Amina has loved every minute of it. The food, the shops, the time she’s spent with her family—all of it holds a special place in Amina’s heart. Now that the school year is starting again, she’s sad to leave, but also excited to share the wonders of Pakistan with her friends back in Greendale.
        
        After she’s home, though, her friends don’t seem overly interested in her trip. And when she decides to do a presentation on Pakistani hero Malala Yousafzai, her classmates focus on the worst parts of the story. How can Amina share the beauty of Pakistan when no one wants to listen? `,
    },
    {
        id: 58,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53746452.jpg?alt=media&token=b78e8fed-8e02-490f-baf9-bd1450d6f39a",
        title: "The Only",
        author: "Katherine Applegate",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `The thrilling conclusion to the epic middle grade fantasy trilogy from Katherine Applegate, the New York Times bestselling and Newbery Award-winning author of The One and Only Ivan (now a major motion picture!), The One and Only Bob, Wishtree, and Crenshaw!

        In the beginning, Byx’s original quest was to discover if there were more of her kind, or if she was destined to become an endling—the last dairne alive. She did indeed find more dairnes, and along the way she also created allies among other creatures in her world, including humans, felivets, raptidons, and wobbyks.
        
        But Byx and her new friends soon learned that it wasn’t just dairnes in jeopardy of extinction, but that everyone was at risk. With the world in unprecedented danger, Byx must rally creatures of all kinds to lead a revolution.`,
    },
    {
        id: 59,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54222364.jpg?alt=media&token=79a8da4c-d81c-4b29-891e-d89aa2b61c1d",
        title: "Across the Pondё",
        author: "Joy McCullough",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `From the author of A Field Guide to Getting Lost comes a heartwarming story about new beginnings, burgeoning friendships, and finding your flock.

        Callie can’t wait for her new life to start. After a major friendship breakup in San Diego, moving overseas to Scotland gives her the perfect chance to reinvent herself. On top of that, she’s going to live in a real-life castle!
        
        But as romantic as life in a castle sounds, the reality is a little less comfortable: it’s run-down, freezing, and crawling with critters. Plus, starting off on the wrong foot with the gardener’s granddaughter doesn’t help her nerves about making new friends. So she comes up with the perfect solution: she’ll be homeschooled. Her parents agree, on one condition: she has to participate in a social activity.
        
        Inspired by a journal that she finds hidden in her bedroom, Callie decides to join a birding club. Sure, it sounds unusual, but at least it’s not sports or performing. But when she clashes with the club leader, she risks losing a set of friends all over again. Will she ever be able to find her flock and make this strange new place feel like home?`,
    },
    {
        id: 60,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49087613.jpg?alt=media&token=c96e4786-52ba-4027-a955-6d596f34fab7",
        title: "The Accidental Apprentice",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Childrens",
        description: `A boy who accidentally bonds with a magical Beast must set off on an adventure in the mysterious Woods.

        The last thing Barclay Thorne ever wanted was an adventure.
        
        Thankfully, as an apprentice to the town’s mushroom farmer, Barclay need only work hard and follow the rules to one day become the head mushroom farmer himself. No danger required. But then Barclay accidentally breaks his town’s most sacred rule: never ever EVER stray into the Woods, for within the Woods lurk vicious magical Beasts.
        
        To Barclay’s horror, he faces a fate far worse than being eaten: he unwittingly bonds with a Beast and is run out of town by an angry mob. Determined to break this bond and return home, Barclay journeys to find the mysterious town of Lore Keepers, people who have also bonded with Beasts and share their powers.
        
        But after making new friends, entering a dangerous apprenticeship exam, and even facing the legendary Beast of the Woods, Barclay must make a difficult choice: return to the home and rules he’s always known, or embrace the adventure awaiting him.`,
    },
    {
        id: 61,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53911822.jpg?alt=media&token=887f4289-47c9-44a3-ba6b-4e271ab0f561",
        title: "Miriam's Song",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `A boy who accidentally bonds with a magical Beast must set off on an adventure in the mysterious Woods.

        The last thing Barclay Thorne ever wanted was an adventure.
        
        Thankfully, as an apprentice to the town’s mushroom farmer, Barclay need only work hard and follow the rules to one day become the head mushroom farmer himself. No danger required. But then Barclay accidentally breaks his town’s most sacred rule: never ever EVER stray into the Woods, for within the Woods lurk vicious magical Beasts.
        
        To Barclay’s horror, he faces a fate far worse than being eaten: he unwittingly bonds with a Beast and is run out of town by an angry mob. Determined to break this bond and return home, Barclay journeys to find the mysterious town of Lore Keepers, people who have also bonded with Beasts and share their powers.
        
        But after making new friends, entering a dangerous apprenticeship exam, and even facing the legendary Beast of the Woods, Barclay must make a difficult choice: return to the home and rules he’s always known, or embrace the adventure awaiting him.`,
    },
    {
        id: 62,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53912070.jpg?alt=media&token=a17a5467-dd12-42ae-8a58-c163708c3595",
        title: "Facing the Dawn",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `A boy who accidentally bonds with a magical Beast must set off on an adventure in the mysterious Woods.

        The last thing Barclay Thorne ever wanted was an adventure.
        
        Thankfully, as an apprentice to the town’s mushroom farmer, Barclay need only work hard and follow the rules to one day become the head mushroom farmer himself. No danger required. But then Barclay accidentally breaks his town’s most sacred rule: never ever EVER stray into the Woods, for within the Woods lurk vicious magical Beasts.
        
        To Barclay’s horror, he faces a fate far worse than being eaten: he unwittingly bonds with a Beast and is run out of town by an angry mob. Determined to break this bond and return home, Barclay journeys to find the mysterious town of Lore Keepers, people who have also bonded with Beasts and share their powers.
        
        But after making new friends, entering a dangerous apprenticeship exam, and even facing the legendary Beast of the Woods, Barclay must make a difficult choice: return to the home and rules he’s always known, or embrace the adventure awaiting him.`,
    },
    {
        id: 63,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53911931.jpg?alt=media&token=d0fb2d84-968f-4f04-ab8f-009372cfad0e",
        title: "Dreams Rekindled",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Though she hopes for a quiet, uncomplicated life for herself, Dorothy Clark wants nothing more than to stir others up. Specifically, she dreams of writing something that will challenge people as much as Harriet Beecher Stowe's Uncle Tom's Cabin seems to have. But in 1850s Mesquite Springs, there are few opportunities for writers--until newspaperman Brandon Holloway arrives, that is.

        Brandon Holloway has seen the disastrous effects of challenging others and has no intention of repeating that mistake. Instead of following his dreams, he's committed to making a new--and completely uncontroversial--start in the Hill Country.
        
        As Dorothy's involvement in the fledgling newspaper grows from convenient to essential, the same change seems to be happening in Brandon's heart. But before romance can bloom, Dorothy and Brandon must work together to discover who's determined to divide the town and destroy Brandon's livelihood.
        
        With this second novel in the Mesquite Springs series, bestselling author Amanda Cabot invites you to discover the healing power of truth`,
    },
    {
        id: 64,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53911298.jpg?alt=media&token=f00ac58f-087c-4e10-a965-46262a2e70b7",
        title: "Braced for Love",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Though she hopes for a quiet, uncomplicated life for herself, Dorothy Clark wants nothing more than to stir others up. Specifically, she dreams of writing something that will challenge people as much as Harriet Beecher Stowe's Uncle Tom's Cabin seems to have. But in 1850s Mesquite Springs, there are few opportunities for writers--until newspaperman Brandon Holloway arrives, that is.

        Brandon Holloway has seen the disastrous effects of challenging others and has no intention of repeating that mistake. Instead of following his dreams, he's committed to making a new--and completely uncontroversial--start in the Hill Country.
        
        As Dorothy's involvement in the fledgling newspaper grows from convenient to essential, the same change seems to be happening in Brandon's heart. But before romance can bloom, Dorothy and Brandon must work together to discover who's determined to divide the town and destroy Brandon's livelihood.
        
        With this second novel in the Mesquite Springs series, bestselling author Amanda Cabot invites you to discover the healing power of truth`,
    },
    {
        id: 65,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53901470.jpg?alt=media&token=52397016-6a59-4f22-8fc9-c80fa0546940",
        title: "My Dear Miss Dupré (American Royalty, #1)",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Though she hopes for a quiet, uncomplicated life for herself, Dorothy Clark wants nothing more than to stir others up. Specifically, she dreams of writing something that will challenge people as much as Harriet Beecher Stowe's Uncle Tom's Cabin seems to have. But in 1850s Mesquite Springs, there are few opportunities for writers--until newspaperman Brandon Holloway arrives, that is.

        Brandon Holloway has seen the disastrous effects of challenging others and has no intention of repeating that mistake. Instead of following his dreams, he's committed to making a new--and completely uncontroversial--start in the Hill Country.
        
        As Dorothy's involvement in the fledgling newspaper grows from convenient to essential, the same change seems to be happening in Brandon's heart. But before romance can bloom, Dorothy and Brandon must work together to discover who's determined to divide the town and destroy Brandon's livelihood.
        
        With this second novel in the Mesquite Springs series, bestselling author Amanda Cabot invites you to discover the healing power of truth`,
    },
    {
        id: 66,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54999159.jpg?alt=media&token=08a05418-62a9-4af5-bd9f-136ade78dbb4",
        title: "The Indebted Earl",
        author: "Amanda Foody",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Though she hopes for a quiet, uncomplicated life for herself, Dorothy Clark wants nothing more than to stir others up. Specifically, she dreams of writing something that will challenge people as much as Harriet Beecher Stowe's Uncle Tom's Cabin seems to have. But in 1850s Mesquite Springs, there are few opportunities for writers--until newspaperman Brandon Holloway arrives, that is.

        Brandon Holloway has seen the disastrous effects of challenging others and has no intention of repeating that mistake. Instead of following his dreams, he's committed to making a new--and completely uncontroversial--start in the Hill Country.
        
        As Dorothy's involvement in the fledgling newspaper grows from convenient to essential, the same change seems to be happening in Brandon's heart. But before romance can bloom, Dorothy and Brandon must work together to discover who's determined to divide the town and destroy Brandon's livelihood.
        
        With this second novel in the Mesquite Springs series, bestselling author Amanda Cabot invites you to discover the healing power of truth`,
    },
    {
        id: 67,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53911386.jpg?alt=media&token=78fa0abc-b9c0-4725-a20f-07792295434d",
        title: "A Tapestry of Light",
        author: "Kimberly Duffy",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Though she hopes for a quiet, uncomplicated life for herself, Dorothy Clark wants nothing more than to stir others up. Specifically, she dreams of writing something that will challenge people as much as Harriet Beecher Stowe's Uncle Tom's Cabin seems to have. But in 1850s Mesquite Springs, there are few opportunities for writers--until newspaperman Brandon Holloway arrives, that is.

        Brandon Holloway has seen the disastrous effects of challenging others and has no intention of repeating that mistake. Instead of following his dreams, he's committed to making a new--and completely uncontroversial--start in the Hill Country.
        
        As Dorothy's involvement in the fledgling newspaper grows from convenient to essential, the same change seems to be happening in Brandon's heart. But before romance can bloom, Dorothy and Brandon must work together to discover who's determined to divide the town and destroy Brandon's livelihood.
        
        With this second novel in the Mesquite Springs series, bestselling author Amanda Cabot invites you to discover the healing power of truth`,
    },
    {
        id: 68,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54025221.jpg?alt=media&token=8b3fe2fb-4a8e-462f-af70-e3e864211f46",
        title: "The Curator's Daughter",
        author: "Melanie Dobson",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `A young girl, kidnapped on the eve of World War II, changes the lives of a German archaeologist forced into the Nazi Party and--decades later--a researcher trying to overcome her own trauma.
        1940. Hanna Tillich cherishes her work as an archaeologist for the Third Reich, searching for the Holy Grail and other artifacts to bolster evidence of a master Aryan race. But when she is reassigned to work as a museum curator in Nuremberg, then forced to marry an SS officer and adopt a young girl, Hanna begins to see behind the Nazi facade. A prayer labyrinth becomes a storehouse for Hanna's secrets, but as she comes to love Lilly as her own daughter, she fears that what she's hiding--and what she begins to uncover--could put them both in mortal danger.
        
        Eighty years later, Ember Ellis is a Holocaust researcher intent on confronting hatred toward the Jewish people and other minorities. She reconnects with a former teacher on Martha's Vineyard after she learns that Mrs. Kiehl's mother once worked with the Nazi Ahnenerbe. And yet, Mrs. Kiehl describes her mother as "a friend to the Jewish people." Wondering how both could be true, Ember helps Mrs. Kiehl regain her fractured childhood memories of World War II while at the same time confronting the heartache of her own secret past--and the person who wants to silence Ember forever.`,
    },
    {
        id: 69,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53911759.jpg?alt=media&token=e1a26349-a2fe-4c63-b69e-6f75679b3790",
        title: "A Dance in Donegal",
        author: "Jennifer Deibel",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `All of her life, Irish-American Moira Doherty has relished her mother's descriptions of Ireland. When her mother dies unexpectedly in the summer of 1920, Moira decides to fulfill her mother's wish that she become the teacher in Ballymann, her home village in Donegal, Ireland.

        After an arduous voyage, Moira arrives to a new home and a new job in an ancient country. Though a few locals offer a warm welcome, others are distanced by superstition and suspicion. Rumors about Moira's mother are unspoken in her presence but threaten to derail everything she's journeyed to Ballymann to do. Moira must rely on the kindness of a handful of friends--and the strength of Sean, an unsettlingly handsome thatcher who keeps popping up unannounced--as she seeks to navigate a life she'd never dreamed of . . . but perhaps was meant to live.
        
        Jennifer Deibel's debut novel delights the senses, bringing to life the sights, sounds, smells, and language of a lush country and a colorful people. Historical romance fans will embrace her with open arms.`,
    },
    {
        id: 70,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54080850.jpg?alt=media&token=3ae111e6-ff1b-426a-a33a-744adbdd55d5",
        title: "The Moonlight Schoolv",
        author: "Suzanne Woods Fisher",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Haunted by her sister's mysterious disappearance, Lucy Wilson arrives in Rowan County, Kentucky, in the spring of 1911 to work for Cora Wilson Stewart, superintendent of education. When Cora sends Lucy into the hills to act as scribe for the mountain people, she is repelled by the primitive conditions and intellectual poverty she encounters. Few adults can read and write.

        Born in those hills, Cora knows the plague of illiteracy. So does Brother Wyatt, a singing schoolmaster who travels through the hills. Involving Lucy and Wyatt, Cora hatches a plan to open the schoolhouses to adults on moonlit nights. The best way to combat poverty, she believes, is to eliminate illiteracy. But will the people come?
        
        As Lucy emerges from a life in the shadows, she finds purpose; or maybe purpose finds her. With purpose comes answers to her questions, and something else she hadn't expected: love.
        
        Inspired by the true events of the Moonlight Schools, this standalone novel from bestselling author Suzanne Woods Fisher brings to life the story that shocked the nation into taking adult literacy seriously. You'll finish the last page of this enthralling story with deep gratitude for the gift of reading.`,
    },
    {
        id: 71,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/11422._SX318_.jpg?alt=media&token=3d4707cc-a5c2-4897-8926-168ffb11f4dd",
        title: "Redeeming Love",
        author: "Francine Rivers",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `California’s gold country, 1850. A time when men sold their souls for a bag of gold and women sold their bodies for a place to sleep.

        Angel expects nothing from men but betrayal. Sold into prostitution as a child, she survives by keeping her hatred alive. And what she hates most are the men who use her, leaving her empty and dead inside.
        
        Then she meets Michael Hosea. A man who seeks his Father’s heart in everything, Michael Hosea obeys God’s call to marry Angel and to love her unconditionally. Slowly, day by day, he defies Angel’s every bitter expectation until, despite her resistance her frozen heart begins to thaw.
        
        But with her unexpected softening come overwhelming feelings of unworthiness and fear. And so Angel runs. Back to the darkness, away from her husband’s pursuing love, terrified of the truth she can no longer deny: Her final healing must come from the One who loves her even more than Michael Hosea does…the One who will never let her go.
        
        A life-changing story of God’s unconditional, redemptive, all-consuming love.`,
    },
    {
        id: 72,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/100915.jpg?alt=media&token=096987d8-003c-4320-b946-da9414efcd8f",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Christian",
        description: `Narnia… the land beyond the wardrobe door, a secret place frozen in eternal winter, a magical country waiting to be set free.

        Lucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first her brothers and sister don't believe her when she tells of her visit to the land of Narnia. But soon Edmund, then Peter and Susan step through the wardrobe themselves. In Narnia they find a country buried under the evil enchantment of the White Witch. When they meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.`,
    },
    {
        id: 73,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/14935._SY475_.jpg?alt=media&token=f013e14a-827b-49c8-8197-f40122bac3be",
        title: "Sense and Sensibility",
        author: " Jane Austen, Tony Tanner",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `Alternate cover edition of ISBN 9780141439662

        'The more I know of the world, the more am I convinced that I shall never see a man whom I can really love. I require so much!'
        
        Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing but unsuitable John Willoughby she ignores her sister Elinor's warning that her impulsive behaviour leaves her open to gossip and innuendo. Meanwhile Elinor, always sensitive to social convention, is struggling to conceal her own romantic disappointment, even from those closest to her. Through their parallel experience of love—and its threatened loss—the sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love.
        
        This edition includes explanatory notes, textual variants between the first and second editions, and Tony Tanner's introduction to the original Penguin Classic edition.`,
    },
    {
        id: 74,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/7624.jpg?alt=media&token=a5537d9b-e3aa-41d3-8f9f-611c39fd7087",
        title: "Lord of the Flies",
        author: "William Golding",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate; this far from civilization the boys can do anything they want. Anything. They attempt to forge their own society, failing, however, in the face of terror, sin and evil. And as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far from reality as the hope of being rescued. Labeled a parable, an allegory, a myth, a morality tale, a parody, a political treatise, even a vision of the apocalypse, Lord of the Flies is perhaps our most memorable novel about “the end of innocence, the darkness of man’s heart.”`,
    },
    {
        id: 75,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/890._SX318_.jpg?alt=media&token=a74f03db-8a4d-4a43-8378-3e002322ac04",
        title: "Of Mice and Men",
        author: "John Steinbeck",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `An intimate portrait of two men who cherish the slim bond between them and the dream they share in a world marred by petty tyranny, misunderstanding, jealousy, and callousness. Clinging to each other in their Loneliness and alienation, George and his simple-minded friend Lenny dream, as drifters will, of a place to call their own—a couple of acres and a few pigs, chickens, and rabbits back in Hill Country where land is cheap. But after they come to work on a ranch in the fer- tile Salinas Valley of California, their hopes, like "the best laid schemes o' mice an' men," begin to go awry.

        Of Mice and Men also represents an experiment in form, as Steinbeck described his work, "a kind of playable novel, written in novel form but so scened and set that it can be played as it stands." A rarity in American letters, it achieved remarkable success as a novel, a Broadway play, and three acclaimed films. Steinbeck's tale of commitment, loneliness, hope, and loss remains one of America's most widely read and beloved novels.`,
    },
    {
        id: 76,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18135._SY475_.jpg?alt=media&token=9442117e-0c4e-4c67-bf85-19cec4f40dfd",
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.

        In this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.`,
    },
    {
        id: 77,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/5297.jpg?alt=media&token=2275f5c1-5d3b-45df-b177-e5bffbc5cb09",
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde, Jeffrey Eugenides",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work. The tale of Dorian Gray’s moral disintegration caused a scandal when it ﬁrst appeared in 1890, but though Wilde was attacked for the novel’s corrupting inﬂuence, he responded that there is, in fact, “a terrible moral in Dorian Gray.” Just a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment. Of Dorian Gray’s relationship to autobiography, Wilde noted in a letter, “Basil Hallward is what I think I am: Lord Henry what the world thinks me: Dorian what I would like to be—in other ages, perhaps. `,
    },
    {
        id: 78,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/10210._SY475_.jpg?alt=media&token=07337d36-fd89-4f07-9fc1-7eeb4e2ab65e",
        title: "Jane Eyre",
        author: "Charlotte Brontë, Michael Mason",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Classics",
        description: `Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding, proud Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit. She falls in love. Hard.

        But there is a terrifying secret inside the gloomy, forbidding Thornfield Hall. Is Rochester hiding from Jane? Will Jane be left heartbroken and exiled once again?`,
    },
    {
        id: 79,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/44540687._SY475_.jpg?alt=media&token=0a54400f-176f-447b-ba6b-0ef297e2c33e",
        title: "Bruised",
        author: "Tanya Boteju ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `To Daya Wijesinghe, a bruise is a mixture of comfort and control. Since her parents died in an accident she survived, bruises have become a way to keep her pain on the surface of her skin so she doesn’t need to deal with the ache deep in her heart.

        So when chance and circumstances bring her to a roller derby bout, Daya is hooked. Yes, the rules are confusing and the sport seems to require the kind of teamwork and human interaction Daya generally avoids. But the opportunities to bruise are countless, and Daya realizes that if she’s going to keep her emotional pain at bay, she’ll need all the opportunities she can get.
        
        The deeper Daya immerses herself into the world of roller derby, though, the more she realizes it’s not the simple physical pain-fest she was hoping for. Her rough-and-tumble teammates and their fans push her limits in ways she never imagined, bringing Daya to big truths about love, loss, strength, and healing.`,
    },
    {
        id: 80,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54303701.jpg?alt=media&token=ab455b34-6f10-46b7-a181-88a654cd2b2f",
        title: "The Many Lives of Pusheen the Cat",
        author: "Claire Belton",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `A delightful new collection of comics from Pusheen in all of her adorable forms—from the classic gray tabby you know and love, to her unicorn, dragon, alien, mermaid, dinosaur, and even dog alter egos—Pusheen always lives life to the fullest!
        We all know Pusheen, the pleasantly plump cat who has warmed hearts and tickled funny bones of millions worldwide with her signature animated bops, bounces, and tail wiggles. Now you can learn what makes her purr and find out why so many have already fallen in love with her. This delightful collection of comics and illustrations features some of the most popular and purr-fectly adorable Pusheen comics you know and love, plus a healthy serving of never-before-seen material. The Many Lives of Pusheen the Cat is a treat for cat lovers and comics fans alike.`,
    },
    {
        id: 81,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55102443.jpg?alt=media&token=96facf09-be20-47cc-bd7f-92731d936c03",
        title: "My Last Summer with Cass",
        author: "Mark Crilley",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `This One Summer meets The Edge of Seventeen in this poignant coming-of-age YA graphic novel about two childhood friends at a crossroads in their lives and art from the author of Mastering Manga.

        Megan and Cass have been joined at the brush for as long as they can remember. For years, while spending summers together at a lakeside cabin, they created art together, from sand to scribbles . . . to anything available. Then Cass moved away to New York.
        
        When Megan finally convinces her parents to let her spend a week in the city, too, it seems like Cass has completely changed. She has tattoos, every artist in the city knows her. She even eats chicken feet now! At least one thing has stayed the same: They still make their best art together.
        
        But when one girl betrays the other's trust on the eve of what is supposed to be their greatest artistic feat yet, can their friendship survive? Can their art?`,
    },
    {
        id: 82,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54776117.jpg?alt=media&token=bd7121cf-6567-4ae6-985a-f59db441fa5b",
        title: "Flash Forward: An Illustrated Guide to Possible (and Not So Possible) Tomorrows",
        author: "Rose Eveleth ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `An exploration of potential tomorrows from the host of the massively popular and critically acclaimed podcast Flash Forward

        Flash Forward: An Illustrated Guide to Possible (And Not So Possible) Tomorrows takes readers on a journey from speculative fiction to speculative “fact.” Producer and host of the podcast Flash Forward, Rose Eveleth poses provocative questions about our future, which are brought to life by 12 of the most imaginative comics and graphic artists at work, including Matt Lubchanksy, Sophie Goldstein, Ben Passmore, and Box Brown. Each artist chooses a subject close to their heart—Ignatz Award nominee Julia Gfrörer, for instance, will imagine a future in which robots make art—and presents their chosen future in their own style. Drawing on her interviews with experts in various fields of study, Eveleth will then report on what is complete fantasy and what is only just out of reach in insightful essays following the comics. This book introduces compelling visions of the future and vividly explores the human consequences of developing technologies. Flash Forward reveals how complicated, messy, incredible, frightening, and strange our future might be.`,
    },
    {
        id: 83,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54075292.jpg?alt=media&token=be1af68b-7804-4374-82a1-66375d18c10d",
        title: "Feelings: A Story in Seasons",
        author: "Manjit Thapp",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `A gorgeous visual journey through one young woman's year of emotions--from the saturated highs of early summer to the grey isolation of late winter.

        Enter Manjit Thapp's world, where you'll find moods that change as quickly as the weather; the different shades of anxiety and hope that each new season brings; and the stages of joy and pain that fuel our growth. From the spark of possibility and jolt of creativity in High Summer, to the need for release from anxiety and pressure during Monsoon, to the desolation and numbness of Winter, Thapp implores us to consider the seasons of our own emotional journeys.
        
        Articulating and validating the range of feelings we all experience, this is a book that allows us to feel connected and comforted by the experiences that make us human.`,
    },
    {
        id: 84,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53458048.jpg?alt=media&token=99a5c8ad-cc0a-4c93-86fa-cd8117a5fa0e",
        title: "Red Rock Baby Candy",
        author: "Shira Spector",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Comics",
        description: `Shira Spector literally paints a vivid portrait of the most eventful 10 years of her life, encompassing her tenacious struggle to get pregnant, the emotional turmoil of her father’s cancer diagnosis and eventual death, and her recollections of past relationships with her parents and her partner. Set in a kaleidoscope of Montreal and Toronto, Red Rock Baby Candy unfolds as one of the most formally inventive comics in the history of the medium. It begins in subtle, tonal shades of black ink, introduces color slowly over the next 50 pages until it explodes into a glorious full color palette. The irreverent characters begin to bloom and to live life fully, resurrecting the dead in order to map the geography among infertility, sexuality, choice, and mortality. The drawing is visceral, symbolic, and naturalistic. The visual storytelling eschews traditional comics panels in favor of a series of unique page compositions that convey both a stream of consciousness and the tactile reality of life, both the subjective impressions of the author at each moment of her life and the objective series of events that shape her narrative. It is the most formally revolutionary visual storytelling since Emil Ferris’s My Favorite Thing is Monsters.`,
    },
    {
        id: 85,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49204960.jpg?alt=media&token=8cc94e0e-ce16-487f-85b4-1d0f8adfdca4",
        title: "Perfect on Paper",
        author: "Sophie Gonzales",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `In Perfect on Paper, Leah on the Offbeat meets To All the Boys I've Loved Before: a bisexual girl who gives anonymous love advice to her classmates is hired by the hot guy to help him get his ex back

        Her advice, spot on. Her love life, way off.
        
        However, when Brougham catches her in the act of collecting letters from locker 89―out of which she’s been running her questionably legal, anonymous relationship advice service―that’s exactly what happens. In exchange for keeping her secret, Darcy begrudgingly agrees to become his personal dating coach―at a generous hourly rate, at least. The goal? To help him win his ex-girlfriend back.
        
        Darcy has a good reason to keep her identity secret. If word gets out that she’s behind the locker, some things she's not proud of will come to light, and there’s a good chance Brooke will never speak to her again.
        
        Okay, so all she has to do is help an entitled, bratty, (annoyingly hot) guy win over a girl who’s already fallen for him once? What could go wrong?`,
    },
    {
        id: 86,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/45553600._SY475_.jpg?alt=media&token=4d05d284-43f3-4fd4-a1d1-c42c10eafb9b",
        title: "Second First Impressions",
        author: "Sally Thorne",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `Ruthie Midona has worked the front desk at the Providence Luxury Retirement Villa for six years, dedicating her entire adult life to caring for the Villa’s residents, maintaining the property (with an assist from DIY YouTube tutorials), and guarding the endangered tortoises that live in the Villa’s gardens. Somewhere along the way, she’s forgotten that she’s young and beautiful, and that there’s a world outside of work—until she meets the son of the property developer who just acquired the retirement center.

        Teddy Prescott has spent the last few years partying, sleeping in late, tattooing himself when bored, and generally not taking life too seriously—something his father, who dreams of grooming Teddy into his successor, can’t understand. When Teddy needs a place to crash, his father seizes the chance to get him to grow up. He’ll let Teddy stay in one of the on-site cottages at the retirement home, but only if he works to earn his keep. Teddy agrees—he can change a few lightbulbs and clip some hedges, no sweat. But Ruthie has plans for Teddy too.
        
        Her two wealthiest and most eccentric residents have just placed an ad (yet another!) seeking a new personal assistant to torment. The women are ninety-year-old, four-foot-tall menaces, and not one of their assistants has lasted a full week. Offering up Teddy seems like a surefire way to get rid of the tall, handsome, unnerving man who won’t stop getting under her skin.
        
        Ruthie doesn’t count on the fact that in Teddy Prescott, the Biddies may have finally met their match. He’ll pick up Chanel gowns from the dry cleaner and cut Big Macs into bite-sized bits. He’ll do repairs around the property, make the residents laugh, and charm the entire villa. He might even remind Ruthie what it’s like to be young and fun again. But when she finds out Teddy’s father’s only fixing up the retirement home to sell it, putting everything she cares about in jeopardy, she’s left wondering if Teddy’s magic was all just a façade.`,
    },
    {
        id: 87,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/43562313._SX318_.jpg?alt=media&token=d07f6e66-c6c4-4221-b069-3f9436519e91",
        title: "Yolk",
        author: "Mary H.K. Choi",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `From New York Times bestselling author Mary H.K. Choi comes a funny and emotional story about two estranged sisters switching places and committing insurance fraud to save one of their lives.

        Jayne Baek is barely getting by. She shuffles through fashion school, saddled with a deadbeat boyfriend, clout-chasing friends, and a wretched eating disorder that she’s not fully ready to confront. But that’s New York City, right? At least she isn’t in Texas anymore, and is finally living in a city that feels right for her.
        
        On the other hand, her sister June is dazzlingly rich with a high-flying finance job and a massive apartment. Unlike Jayne, June has never struggled a day in her life. Until she’s diagnosed with uterine cancer.
        
        Suddenly, these estranged sisters who have nothing in common are living together. Because sisterly obligations are kind of important when one of you is dying.`,
    },
    {
        id: 88,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53138197.jpg?alt=media&token=bd262ad3-c4bd-41a5-98ba-5503c68d7e93",
        title: "Of Women and Salt",
        author: "Gabriela Garcia ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `A daughter's fateful choice, a mother motivated by her own past, and a family legacy that begins in Cuba before either of them were born

        In present-day Miami, Jeanette is battling addiction. Daughter of Carmen, a Cuban immigrant, she is determined to learn more about her family history from her reticent mother and makes the snap decision to take in the daughter of a neighbor detained by ICE. Carmen, still wrestling with the trauma of displacement, must process her difficult relationship with her own mother while trying to raise a wayward Jeanette. Steadfast in her quest for understanding, Jeanette travels to Cuba to see her grandmother and reckon with secrets from the past destined to erupt.
        
        From 19th-century cigar factories to present-day detention centers, from Cuba to Mexico, Gabriela Garcia's Of Women and Salt is a kaleidoscopic portrait of betrayals--personal and political, self-inflicted and those done by others--that have shaped the lives of these extraordinary women. A haunting meditation on the choices of mothers, the legacy of the memories they carry, and the tenacity of women who choose to tell their stories despite those who wish to silence them, this is more than a diaspora story; it is a story of America's most tangled, honest, human roots.`,
    },
    {
        id: 89,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54017982.jpg?alt=media&token=06b99d3d-2080-4e4e-b9cb-779b1de377b4",
        title: "Float Plan",
        author: "Trish Doller",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `Critically acclaimed author Trish Doller's unforgettable and romantic adult debut about setting sail, starting over, and finding yourself...

        Since the loss of her fiancé, Anna has been shipwrecked by grief—until a reminder goes off about a trip they were supposed to take together. Impulsively, Anna goes to sea in their sailboat, intending to complete the voyage alone.
        
        But after a treacherous night’s sail, she realizes she can’t do it by herself and hires Keane, a professional sailor, to help. Much like Anna, Keane is struggling with a very different future than the one he had planned. As romance rises with the tide, they discover that it’s never too late to chart a new course.
        
        In Trish Doller’s unforgettable Float Plan, starting over doesn't mean letting go of your past, it means making room for your future. `,
    },
    {
        id: 90,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51591602.jpg?alt=media&token=58c33377-4a47-4f2a-815f-be0185e1c3b3",
        title: "She's Too Pretty to Burn",
        author: "Wendy Heard",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Contemporary",
        description: `CAn electric romance set against a rebel art scene sparks lethal danger for two girls in this expertly plotted YA thriller. For fans of E. Lockhart, Lauren Oliver and Kara Thomas.

        The summer is winding down in San Diego. Veronica is bored, caustically charismatic, and uninspired in her photography. Nico is insatiable, subversive, and obsessed with chaotic performance art. They’re artists first, best friends second. But that was before Mick. Delicate, lonely, magnetic Mick: the perfect subject, and Veronica’s dream girl. The days are long and hot―full of adventure―and soon they are falling in love. Falling so hard, they never imagine what comes next. One fire. Two murders. Three drowning bodies. One suspect . . . one stalker. This is a summer they won’t survive.
        
        Inspired by The Picture of Dorian Gray, this sexy psychological thriller explores the intersections of love, art, danger, and power.
        
        "Wild and satisfying." —Kirkus Starred Review `,
    },
    {
        id: 91,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/57320347._SX318_.jpg?alt=media&token=1a89f547-3eb8-41a0-bda2-0af50ae4abc3",
        title: "Doriano virtuvė 3",
        author: "Dorian de Jandreau",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `Kulinarija. Maisto receptai. Desertai. Saldumynai. Pyragai. Visi išbandyti ir labai skanūs.`,
    },
    {
        id: 92,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54303939._SX318_.jpg?alt=media&token=be63aad4-9ce9-4245-a710-f1cada948d3e",
        title: "Toaster Oven Takeover: Easy and Delicious Recipes to Make in Your Toaster Oven",
        author: "Roxanne Wyss, Kathy Moore",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `Enjoy delicious, freshly cooked meals in just minutes with these easy recipes using the most underrated yet versatile appliance in the kitchen—the toaster oven.

        You may think the toaster oven is just a tool for making a simple grilled cheese sandwich, but now it can do so much more! While your standard oven is great for big meals, it may be too large when you’re just cooking for one or two people or when you are in too much of a rush to wait for your full-size oven to pre-heat. That’s when the toaster oven comes in handy! As one of the most flexible and space-saving appliances in the kitchen, the toaster oven can do everything a standard oven can do but is faster, easier to clean, and more energy-efficient.
        
        Now, you can make delicious meals like breakfast burritos, stromboli, sweet chili glazed wings, sheet pan fish with olives and capers, or even German chocolate cake right in your toaster oven. Perfect for cooks of every skill level, Toaster Oven Takeover is chock-full of recipe tips as well as toaster oven basics, including recommendations for the best types of baking dishes or whether to use parchment paper or aluminum foil. These quick and easy recipes will make this book your go-to for delicious perfectly cooked meals that can be made in no time!`,
    },
    {
        id: 93,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54236124._SX318_.jpg?alt=media&token=2bb1dc7b-ae24-4fbc-bcd4-b4bcaf6b5a92",
        title: "The 30-Day Alzheimer's Solution: The Definitive Food and Lifestyle Guide to Preventing Cognitive Decline",
        author: "Dean Sherzai, Ayesha Sherzai",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `The first 30 days of the rest of your life. Prevent and reverse the symptoms of Alzheimer's disease, dementia, and cognitive decline with this breakthrough nutrition program designed by the co-directors of the Alzheimer’s Prevention Program at Loma Linda University Medical Center.

        Food is the first line of defense for preventing Alzheimer's disease, dementia, and cognitive decline. The 30-Day Alzheimer's Solution works because it too starts with food..For Dr. Dean Sherzai and Dr. Ayesha Sherzai, specialists in Alzheimer research and treatment, nutrition has become the single greatest tool for helping their patients build better brain health. A brain-healthy diet = better cognition, improved memory, symptom-reversal, and a brighter future free of disease. Dean and Ayesha have developed a groundbreaking program, the NEURO Plan—Nutrition, Exercise, Unwind, Restore, and Optimize—to help protect and maintain brain health, and it starts with just 30 days of change.
        
        The 30-Day Alzheimer’s Solution is the first and only proven nutrition program for preventing and reversing signs of cognitive decline at every age.  
        
        The authors have spent decades studying the amazing impact of nutrition intervention on their patients suffering with neuro-degenerative disease. The results are astounding. In just thirty days you can boost the power of your brain, protect it from illness, and jump start total body health results, including weight loss and improved sensory ability and mobility—adding happy, healthy years to your life—just by the foods you eat.`,
    },
    {
        id: 94,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/56655263.jpg?alt=media&token=272ef103-fd65-4a8b-8c65-32ec84c0e09d",
        title: "Easy Sheet Pan Cookbook: Creative, Fuss-Free Recipes",
        author: "Ruthy Kirwan",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `Simple, flavorful sheet pan meals for busy home cooks

        Are you often short on time at mealtime? Break out your sheet pan and the Easy Sheet Pan Cookbook! This creative cookbook is packed with quick and easy recipes that let you and your family enjoy a delicious, nourishing meal even on the busiest of days. The only cookware you’ll need is your sheet pan, making prep and cleanup a breeze.
        
        Discover how sheet pan cooking brings out the best in meats and vegetables, tenderizing them while blending and amplifying their flavours. Get tips for buying and caring for sheet pans, and learn how you can use them to create complete meals—no matter your experience level.
        
        The Easy Sheet Pan Cookbook includes:
        
        **Flavorful recipes—Savor a variety of satisfying vegetarian, seafood, poultry, and meat dishes, many created with internationally inspired flavours.
        **45 Minutes or less—Get meals on the table fast with recipes that take 45 minutes from start to finish—many ready in only half an hour.
        **Make it your way—The handy labels in this sheet pan cookbook help you find quick-prep, 5-ingredient, and no-knife-necessary recipes.
        
        When you’re running low on time or energy, these one-pan meals let the oven do the work for you.`,
    },
    {
        id: 95,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/48806799.jpg?alt=media&token=2327f6f7-55f7-4fe4-96e4-e809e9e54de8",
        title: "Fiber Fueled: The Plant-Based Gut Health Program for Losing Weight, Restoring Your Health, and Optimizing Your Microbiome",
        author: "Will Bulsiewicz",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `The instant New York Times, USA Today, and Publisher's Weekly bestseller

        A bold new plant-based plan that challenges popular keto and paleo diets, from an award-winning gastroenterologist.
        
        The benefits of restrictive diets like paleo and keto have been touted for more than a decade, but as renowned gastroenterologist Dr. Will Bulsiewicz, or "Dr. B," illuminates in this groundbreaking book, the explosion of studies on the microbiome makes it abundantly clear that elimination diets are in fact hazardous to our health. What studies clearly now show--and what Dr. B preaches with his patients--is that gut health is the key to boosting our metabolism, balancing our hormones, and taming the inflammation that causes a host of diseases. And the scientifically proven way to fuel our guts is with dietary fiber from an abundant variety of colorful plants.
        
        Forget about the fiber your grandmother used to take--the cutting-edge science on fiber is incredibly exciting. As Dr. B explains, fiber energizes our gut microbes to create powerhouse postbiotics called short-chain fatty acids (SCFAs) that are essential to our health. SCFAs are scientifically proven to promote weight loss, repair leaky gut, strengthen the microbiome, optimize the immune system, reduce food sensitivities, lower cholesterol, reverse type 2 diabetes, improve brain function, and even prevent cancer. Restrictive fad diets starve the gut of the critical fiber we need, weaken the microbes, and make our system vulnerable.`,
    },
    {
        id: 96,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/33630505._SY475_.jpg?alt=media&token=c02df459-4797-4a95-8102-6003d56e2c5a",
        title: `The Plant Paradox: The Hidden Dangers in "Healthy" Foods That Cause Disease and Weight Gain`,
        author: "Steven R. Gundry",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Cookbooks",
        description: `Plants have an impressive array of defense tactics to protect themselves from predators of all shapes and sizes--including humans. Stephen Gundry believes that these defense strategies make the seemingly virtuous plants that we consume every day--fruits, vegetables, grains, nuts, and seeds--far less "good for us" than we assume.

        Dr. Gundry outlines the health hazards posed by lectins. The main sources of lectins in the American diet include conventionally-raised dairy products, beans, and other legumes, wheat and grains, and specific vegetables and fruits
        
        With a full list of lectin-containing foods and simple substitutes for each; a step-by-step detox and eating plan; and easy lectin-free recipes, The Plant Paradox illuminates the hidden dangers lurking in your salad bowl—and shows you how to eat whole foods in a whole new way.`,
    },
    {
        id: 97,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55104757.jpg?alt=media&token=79a109e9-5e70-4647-80c5-415624cf2d56",
        title: `Murder by Page One`,
        author: "Olivia Matthews",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `If you love Hallmark mystery movies,

        you’ll love this cozy mystery
        
        with humor, romance, and a librarian amateur sleuth.
        
        Marvey’s a librarian from Brooklyn who makes book-themed jewelry as a hobby, looks after her cranky cat, and supports events for readers and authors. She’s still adjusting to quirky small-town life in Georgia—and that’s before she discovers a dead body in a bookstore.
        
        When her new best friend becomes a suspect, Marvey develops a new hobby: solving a murder mystery. With her talents for research, her knowledge gleaned from crime novels, and a whole lot of determination, she pursues the truth. But even as she gets closer to it, could she be facing a deadly plot twist?`,
    },
    {
        id: 98,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53138046._SY475_.jpg?alt=media&token=8601578d-72a3-41b5-9fff-df73a79c6bd8",
        title: `Every Last Fear`,
        author: "Alex Finlay",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `So begins this twisty and breathtaking novel that traces the fate of the Pine family, a thriller that will both leave you on the edge of your seat and move you to tears.

        After a late night of partying, NYU student Matt Pine returns to his dorm room to devastating news: nearly his entire family—his mom, his dad, his little brother and sister—have been found dead from an apparent gas leak while vacationing in Mexico. The local police claim it was an accident, but the FBI and State Department seem far less certain—and they won’t tell Matt why.
        
        The tragedy makes headlines everywhere because this isn’t the first time the Pine family has been thrust into the media spotlight. Matt’s older brother, Danny—currently serving a life sentence for the murder of his teenage girlfriend Charlotte—was the subject of a viral true crime documentary suggesting that Danny was wrongfully convicted. Though the country has rallied behind Danny, Matt holds a secret about his brother that he’s never told anyone: the night Charlotte was killed Matt saw something that makes him believe his brother is guilty of the crime.
        
        When Matt returns to his small hometown to bury his parents and siblings, he’s faced with a hostile community that was villainized by the documentary, a frenzied media, and memories he’d hoped to leave behind forever. Now, as the deaths in Mexico appear increasingly suspicious and connected to Danny’s case, Matt must unearth the truth behind the crime that sent his brother to prison—putting his own life in peril—and forcing him to confront his every last fear.`,
    },
    {
        id: 99,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54457917._SY475_.jpg?alt=media&token=8a06e795-076d-4e11-8ebe-86a89311fea7",
        title: `Maniac: The Bath School Disaster and the Birth of the Modern Mass Killer`,
        author: "Harold Schechter",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `Harold Schechter, Amazon Charts bestselling author of Hell’s Princess, unearths a nearly forgotten true crime of obsession and revenge, and one of the first—and worst—mass murders in American history.

        In 1927, while the majority of the township of Bath, Michigan, was celebrating a new primary school—one of the most modern in the Midwest—Andrew P. Kehoe had other plans. The local farmer and school board treasurer was educated, respected, and an accommodating neighbor and friend. But behind his ordinary demeanor was a narcissistic sadist seething with rage, resentment, and paranoia. On May 18 he detonated a set of rigged explosives with the sole purpose of destroying the school and everyone in it. Thirty-eight children and six adults were murdered that morning, culminating in the deadliest school massacre in US history.
        
        Maniac is Harold Schechter’s gripping, definitive, exhaustively researched chronicle of a town forced to comprehend unprecedented carnage and the triggering of a “human time bomb” whose act of apocalyptic violence would foreshadow the terrors of the current age.`,
    },
    {
        id: 200,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55120211.jpg?alt=media&token=2dc70b41-1095-4592-8e77-0cc14cabb992",
        title: `Sleep Tight`,
        author: "C.S. Green",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `A brand new detective series with a supernatural twist

        ‘Detective fiction with a refreshing difference – creepy, tense and twisted.’ Susi Holliday
        
        Even in your dreams you’re not safe…
        
        The nightmare is only just beginning…
        
        When DC Rose Gifford is called to investigate the death of a young woman suffocated in her bed, she can’t shake the feeling that there’s more to the crime than meets the eye.
        
        It looks like a straightforward crime scene – but the police can’t find the killer. Enter DS Moody – an eccentric older detective who runs UCIT, a secret department of the Met set up to solve supernatural crimes. Moody wants Rose to help her out – but Rose doesn’t believe in any of that.
        
        Does she?
        
        As the killer prepares to strike again, Rose must pick a side – before a second woman dies.
        
        Twisty, original and compelling, SLEEP TIGHT is perfect for fans of Alex North and Cara Hunter.`,
    },
    {
        id: 201,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/16160797.jpg?alt=media&token=e21f5595-397e-49c4-a252-180b1659df88",
        title: `The Cuckoo's Calling`,
        author: "Robert Galbraith",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Then John Bristow walks through his door with an amazing story: His sister, the legendary supermodel Lula Landry, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man.`,
    },
    {
        id: 202,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18214414.jpg?alt=media&token=3717ccb7-80df-437a-a236-757b7d178699",
        title: `The Silkworm`,
        author: "Robert Galbraith",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Crime",
        description: `Private investigator Cormoran Strike returns in a new mystery from Robert Galbraith, author of the #1 international bestseller The Cuckoo's Calling.

        When novelist Owen Quine goes missing, his wife calls in private detective Cormoran Strike. At first, Mrs. Quine just thinks her husband has gone off by himself for a few days—as he has done before—and she wants Strike to find him and bring him home.
        
        But as Strike investigates, it becomes clear that there is more to Quine's disappearance than his wife realizes. The novelist has just completed a manuscript featuring poisonous pen-portraits of almost everyone he knows. If the novel were to be published, it would ruin lives—meaning that there are a lot of people who might want him silenced.
        
        When Quine is found brutally murdered under bizarre circumstances, it becomes a race against time to understand the motivation of a ruthless killer, a killer unlike any Strike has encountered before... `,
    },
    {
        id: 203,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/3._SY475_.jpg?alt=media&token=db5fc13e-b915-46d0-806a-f954c99b3b29",
        title: `Harry Potter and the Sorcerer's Stone`,
        author: "J.K. Rowling, Mary GrandPré ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.

        After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.
        
        Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.
        
        Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.`,
    },
    {
        id: 204,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/10507293.jpg?alt=media&token=baf68342-92c3-42b1-80b9-bdbd39e3a6af",
        title: `The Selection`,
        author: "Kiera Cass",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `For thirty-five girls, the Selection is the chance of a lifetime. The opportunity to escape the life laid out for them since birth. To be swept up in a world of glittering gowns and priceless jewels. To live in a palace and compete for the heart of gorgeous Prince Maxon.

        But for America Singer, being Selected is a nightmare. It means turning her back on her secret love with Aspen, who is a caste below her. Leaving her home to enter a fierce competition for a crown she doesn't want. Living in a palace that is constantly threatened by violent rebel attacks.
        
        Then America meets Prince Maxon. Gradually, she starts to question all the plans she's made for herself—and realizes that the life she's always dreamed of may not compare to a future she never imagined.`,
    },
    {
        id: 205,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/256683._SY475_.jpg?alt=media&token=a057ea90-3f56-42b2-8c6e-7070a32111c3",
        title: `City of Bones`,
        author: "Cassandra Clare",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder― much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing―not even a smear of blood―to show that a boy has died. Or was he a boy?

        This is Clary's first meeting with the Shadowhunters, warriors dedicated to ridding the earth of demons. It's also her first encounter with Jace, a Shadowhunter who looks a little like an angel and acts a lot like a jerk. Within twenty-four hours Clary is pulled into Jace's world with a vengeance when her mother disappears and Clary herself is attacked by a demon. But why would demons be interested in ordinary mundanes like Clary and her mother? And how did Clary suddenly get the Sight? The Shadowhunters would like to know...`,
    },
    {
        id: 206,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1885.jpg?alt=media&token=7fbe9df9-3b8e-4c94-b8e3-b206fbb1a8b2",
        title: `Pride and Prejudice`,
        author: "Ane Austen, Anna Quindlen",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England. `,
    },
    {
        id: 207,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/11735983.jpg?alt=media&token=0e92a8dd-e436-4fb5-93cd-2a9b011054d5",
        title: `Insurgent`,
        author: "Veronica Roth",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `One choice can transform you—or it can destroy you. But every choice has consequences, and as unrest surges in the factions all around her, Tris Prior must continue trying to save those she loves—and herself—while grappling with haunting questions of grief and forgiveness, identity and loyalty, politics and love.

        Tris's initiation day should have been marked by celebration and victory with her chosen faction; instead, the day ended with unspeakable horrors. War now looms as conflict between the factions and their ideologies grows. And in times of war, sides must be chosen, secrets will emerge, and choices will become even more irrevocable—and even more powerful. Transformed by her own decisions but also by haunting grief and guilt, radical new discoveries, and shifting relationships, Tris must fully embrace her Divergence, even if she does not know what she may lose by doing so.
        
        New York Times bestselling author Veronica Roth's much-anticipated second book of the dystopian DIVERGENT series is another intoxicating thrill ride of a story, rich with hallmark twists, heartbreaks, romance, and powerful insights about human nature. `,
    },
    {
        id: 208,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2767052.jpg?alt=media&token=e0696fde-69e7-4daa-a8c8-265c200dd1e5",
        title: `The Hunger Games`,
        author: "Suzanne Collins",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Ebooks",
        description: `Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?

        In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.
        
        Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love. `,
    },
    {
        id: 209,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53138025.jpg?alt=media&token=b046ce1e-4b81-409d-83de-c986eaf41bdd",
        title: `Namesake`,
        author: "Adrienne Young",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `Trader. Fighter. Survivor.

        With the Marigold ship free of her father, Fable and its crew were set to start over. That freedom is short-lived when she becomes a pawn in a notorious thug’s scheme. In order to get to her intended destination she must help him to secure a partnership with Holland, a powerful gem trader who is more than she seems.
        
        As Fable descends deeper into a world of betrayal and deception she learns that her mother was keeping secrets, and those secrets are now putting the people Fable cares about in danger. If Fable is going to save them then she must risk everything, including the boy she loves and the home she has finally found.
        
        Filled with action, emotion, and lyrical writing, New York Times bestselling author Adrienne Young returns with Namesake, the final book in the captivating Fable duology.`,
    },
    {
        id: 210,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/17699855._SY475_.jpg?alt=media&token=9b25c87e-8d3e-4025-b1c7-7ba2d925fa29",
        title: `Chain of Iron`,
        author: "Cassandra Clare",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `The Shadowhunters must catch a killer in Edwardian London in this dangerous and romantic sequel to the #1 New York Times bestselling novel Chain of Gold, from New York Times and USA TODAY bestselling author Cassandra Clare. Chain of Iron is a Shadowhunters novel.

        Cordelia Carstairs seems to have everything she ever wanted. She’s engaged to marry James Herondale, the boy she has loved since childhood. She has a new life in London with her best friend Lucie Herondale and James’s charming companions, the Merry Thieves. She is about to be reunited with her beloved father. And she bears the sword Cortana, a legendary hero’s blade.
        
        But the truth is far grimmer. James and Cordelia’s marriage is a lie, arranged to save Cordelia’s reputation. James is in love with the mysterious Grace Blackthorn whose brother, Jesse, died years ago in a terrible accident. Cortana burns Cordelia’s hand when she touches it, while her father has grown bitter and angry. And a serial murderer is targeting the Shadowhunters of London, killing under cover of darkness, then vanishing without a trace.
        
        Together with the Merry Thieves, Cordelia, James, and Lucie must follow the trail of the knife-wielding killer through the city’s most dangerous streets. All the while, each is keeping a shocking secret: Lucie, that she plans to raise Jesse from the dead; Cordelia, that she has sworn a dangerous oath of loyalty to a mysterious power; and James, that he is being drawn further each night into the dark web of his grandfather, the arch-demon Belial. And that he himself may be the killer they seek.`,
    },
    {
        id: 211,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/36307674._SY475_.jpg?alt=media&token=82a3bf87-809b-4443-a92c-e8b20425590c",
        title: `Rule of Wolves`,
        author: "Leigh Bardugo",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `The Grishaverse will be coming to Netflix soon with Shadow and Bone, an original series!

        The wolves are circling and a young king will face his greatest challenge in the explosive finale of the instant #1 New York Times-bestselling King of Scars Duology.
        
        The Demon King. As Fjerda's massive army prepares to invade, Nikolai Lantsov will summon every bit of his ingenuity and charm—and even the monster within—to win this fight. But a dark threat looms that cannot be defeated by a young king's gift for the impossible.
        
        The Stormwitch. Zoya Nazyalensky has lost too much to war. She saw her mentor die and her worst enemy resurrected, and she refuses to bury another friend. Now duty demands she embrace her powers to become the weapon her country needs. No matter the cost.
        
        The Queen of Mourning. Deep undercover, Nina Zenik risks discovery and death as she wages war on Fjerda from inside its capital. But her desire for revenge may cost her country its chance at freedom and Nina the chance to heal her grieving heart.
        
        King. General. Spy. Together they must find a way to forge a future in the darkness. Or watch a nation fall.`,
    },
    {
        id: 212,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52346471.jpg?alt=media&token=f8d23a6c-461a-4a20-9130-3b24e2fc211b",
        title: `Firekeeper's Daughter`,
        author: "Angeline Boulley",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `Eighteen-year-old Daunis’s mixed heritage has always made her feel like an outsider, both in her hometown and on the nearby Ojibwe reservation. When she witnesses a shocking murder, she reluctantly agrees to be part of a covert FBI operation into a series of drug-related deaths.

        But the deceptions – and deaths – keep piling up and soon the threat strikes too close to home. Now Daunis must decide what it means to be a strong Anishinaabe kwe (Ojibwe woman) and how far she’ll go to protect her community, even if it tears apart the only world she’s ever known.`,
    },
    {
        id: 213,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/39897752.jpg?alt=media&token=7f051ecc-fafc-45aa-aef2-b2cbe22d75de",
        title: `Lost in the Never Woods`,
        author: "Aiden Thomas",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `When children go missing in the small coastal town of Astoria, people look to Wendy for answers.

        It's been five years since Wendy and her two brothers went missing in the woods, but when the town’s children start to disappear, the questions surrounding her brothers’ mysterious circumstances are brought back into light. Attempting to flee her past, Wendy almost runs over an unconscious boy lying in the middle of the road, and gets pulled into the mystery haunting the town.
        
        Peter, a boy she thought lived only in her stories, claims that if they don't do something, the missing children will meet the same fate as her brothers. In order to find them and rescue the missing kids, Wendy must confront what's waiting for her in the woods.`,
    },
    {
        id: 214,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53697329._SY475_.jpg?alt=media&token=0305538a-a973-42b7-93aa-20ac3388f932",
        title: `A Trial of Sorcerers`,
        author: "Elise Kova",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Fantasy",
        description: `Ice is in her blood.

        Eighteen-year-old Waterrunner Eira Landan lives her life in the shadows — the shadow of her older brother, of her magic’s whispers, and of the person she accidentally killed. She’s the most unwanted apprentice in the Tower of Sorcerers until the day she decides to step out and compete for a spot in the Tournament of Five Kingdoms.
        
        Pitted against the best sorcerers in the Empire, Eira fights to be one of four champions. Excelling in the trials has its rewards. She's invited to the royal court with the “Prince of the Tower,” discovers her rare talent for forbidden magic, and at midnight, Eira meets with a handsome elfin ambassador.
        
        But, Eira soon learns, no reward is without risk. As she comes into the spotlight, so too do the skeletons of a past she hadn't even realized was haunting her.
        
        Eira went into the trials ready for a fight. Ready to win. She wasn't ready for what it would cost her. No one expected the candidates might not make it out with their lives.
        
        This is the first book in a young adult, epic fantasy that's a tale of competition, coming of age, distant lands, elemental magic, and romance. It's perfect for fans of the Legend of Korra, Truthwitch, and A Sorcery of Thorns.`,
    },
    {
        id: 215,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/50618289.jpg?alt=media&token=3f21b2ad-80ec-44d1-9f30-811700e0c082",
        title: `The Bad Muslim Discount`,
        author: "Syed M. Masood",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `Following two families from Pakistan and Iraq in the 1990s to San Francisco in 2016, Bad Muslim Discount is a hilarious, timely, and provocative comic novel about being Muslim immigrants in modern America. For fans of Hanif Kureshi, Mira Jacob, and Mohammed Hanif.

        It is 1995, and Anvar Faris is a restless, rebellious, and sharp-tongued boy doing his best to grow up in Karachi, Pakistan. As fundamentalists in the government become increasingly strident and the zealots next door start roaming the streets in gangs to help make Islam great again, his family decides, not quite unanimously, to start life over in California. The irony is not lost on Anvar that in America, his deeply devout mother and his model-Muslim brother are the ones who fit right in with the tightly knit and gossipy Desi community. Anvar wants more.
        
        At the same time, thousands of miles away, Safwa, a young girl suffocating in war-torn Baghdad with her grief-stricken, conservative father will find a very different and far more dangerous path to America. These two narratives are intrinsically linked, and when their worlds come together, the fates of two remarkably different people intertwine and set off a series of events that rock their whole community to its core.
        
        The Bad Muslim Discount is an irreverent, dramatic, and often hysterically funny debut novel by an amazing new voice. With deep insight, warmth, and an irreverent sense of humor, Syed Masood examines quirky and intense familial relationships, arranged marriage, Islamic identity, and how to live together in modern America. `,
    },
    {
        id: 216,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/49252613._SY475_.jpg?alt=media&token=f0649b9e-4d88-400d-908e-3efcfc45b45b",
        title: `SPY×FAMILY 4`,
        author: "Tatsuya Endo",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `爆弾犬を使っての西国大臣暗殺計画が判明! アーニャの飼う犬を求め家族で出かけたはずが、黄昏は、テロを止める緊急作戦に加わる事に…!! 一方アーニャは、何故かフォージャー家を知る不思議な犬と出会い――!?`,
    },
    {
        id: 217,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/34106578.jpg?alt=media&token=4cf36039-0ffc-4dfe-816c-df1eb0552667",
        title: `Yakusoku no Neverland 2`,
        author: "Kaiu Shirai, Posuka Demizu (Illustrator)",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `GFハウスから「全員」で逃げ出す為の訓練を開始したエマ達。そんな彼らに監視者・クローネの魔の手が!? 更に新たな「仲間」を得た彼らを待っていたのは…。永遠の子供達よ、絶望に立ち向かえ! 衝撃の脱獄ファンタジー!!`,
    },
    {
        id: 218,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40553160._SX318_.jpg?alt=media&token=c2c25648-60d6-44eb-926f-2b5cecaa6ec1",
        title: `極主夫道〈1〉`,
        author: "Kousuke Oono",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `元・最凶ヤクザが選んだのは、主夫としての道だった――。!
        話題の新鋭作家がおくる、アットホーム任侠コメディ! !
        
        コミックスだけの描き下ろしエピソードも収録!!`,
    },
    {
        id: 219,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52664752.jpg?alt=media&token=38d88d48-bef2-4490-b07f-de20c0d8799e",
        title: `Allergic: A Graphic Novel`,
        author: "Megan Wagner Lloyd ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `A coming-of-age middle-grade graphic novel featuring a girl with severe allergies who just wants to find the perfect pet!

        At home, Maggie is the odd one out. Her parents are preoccupied with getting ready for a new baby, and her younger brothers are twins and always in their own world. Maggie loves animals and thinks a new puppy to call her own is the answer, but when she goes to select one on her birthday, she breaks out in hives and rashes. She's severely allergic to anything with fur!
        
        Can Maggie outsmart her allergies and find the perfect pet? With illustrations by Michelle Mee Nutter, Megan Wagner Lloyd uses inspiration from her own experiences with allergies to tell a heartfelt story of family, friendship, and finding a place to belong. `,
    },
    {
        id: 220,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54865124._SY475_.jpg?alt=media&token=8372e516-5502-4228-bb2b-5cdb8ce4f89c",
        title: `Shingeki no Kyojin 33`,
        author: "Hajime Isayama",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Graphic Novels",
        description: `パラディ島以外すべての土地を踏み潰すべく「地鳴らし」による
        進行を続けるエレン。ミカサやアルミン達は空からエレンを追いかけるため
        飛行艇整備が可能なオディハを目指す。だがその代償としてアニ、ライナーらの
        家族が住む「レベリオ」を諦めることになり・・・・・。`,
    },
    {
        id: 221,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54303133.jpg?alt=media&token=23c07d6b-8e06-446d-a091-16c3010383b4",
        title: `Vera`,
        author: "Carol Edgarian",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `An astonishing feat of imagination, a grand adventure set in 1906 San Francisco—a city leveled by quake and fire—featuring an indomitable heroine coming of age in the aftermath of catastrophe and her quest for love and reinvention.

        Meet Vera Johnson, the uncommonly resourceful fifteen-year-old illegitimate daughter of Rose, notorious proprietor of San Francisco’s most legendary bordello and ally to the city’s corrupt politicians. Vera has grown up straddling two worlds—the madam’s alluring sphere, replete with tickets to the opera, surly henchmen, and scant morality, and the violent, debt ridden domestic life of the family paid to raise her.
        
        On the morning of the great quake, Vera’s worlds collide. As the shattered city burns and looters vie with the injured, orphaned, and starving, Vera and her guileless sister, Pie, are cast adrift. Vera disregards societal norms and prejudices and begins to imagine a new kind of life. She collaborates with Tan, her former rival, and forges an unlikely family of survivors. Together they navigate their way beyond disaster.`,
    },
    {
        id: 222,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54110460.jpg?alt=media&token=a0dc1420-3c55-4564-85d0-0942df5e9126",
        title: `Libertie`,
        author: "Kaitlyn Greenidge",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `The critically acclaimed and Whiting Award–winning author of We Love You, Charlie Freeman returns with an unforgettable story about the meaning of freedom.
 
        Coming of age as a free-born Black girl in Reconstruction-era Brooklyn, Libertie Sampson was all too aware that her purposeful mother, a practicing physician, had a vision for their future together: Libertie would go to medical school and practice alongside her. But Libertie, drawn more to music than science, feels stifled by her mother’s choices and is hungry for something else—is there really only one way to have an autonomous life? And she is constantly reminded that, unlike her mother, who can pass, Libertie has skin that is too dark.
        
        When a young man from Haiti proposes to Libertie and promises she will be his equal on the island, she accepts, only to discover that she is still subordinate to him and all men. As she tries to parse what freedom actually means for a Black woman, Libertie struggles with where she might find it—for herself and for generations to come.
         
        Inspired by the life of one of the first Black female doctors in the United States and rich with historical detail, Kaitlyn Greenidge’s new novel resonates in our times and is perfect for readers of Brit Bennett, Min Jin Lee, and Yaa Gyasi.`,
    },
    {
        id: 223,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53914953.jpg?alt=media&token=8f7dd455-d73a-4e68-9044-5c352f402aee",
        title: `Band of Sisters`,
        author: "Lauren Willig",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `A group of young women from Smith College risk their lives in France at the height of World War I in this sweeping novel based on a true story—a skillful blend of Call the Midwife and The Alice Network—from New York Times bestselling author Lauren Willig.

        A scholarship girl from Brooklyn, Kate Moran thought she found a place among Smith’s Mayflower descendants, only to have her illusions dashed the summer after graduation. When charismatic alumna Betsy Rutherford delivers a rousing speech at the Smith College Club in April of 1917, looking for volunteers to help French civilians decimated by the German war machine, Kate is too busy earning her living to even think of taking up the call. But when her former best friend Emmeline Van Alden reaches out and begs her to take the place of a girl who had to drop out, Kate reluctantly agrees to join the new Smith College Relief Unit.
        
        Four months later, Kate and seventeen other Smithies, including two trailblazing female doctors, set sail for France. The volunteers are armed with money, supplies, and good intentions—all of which immediately go astray. The chateau that was to be their headquarters is a half-burnt ruin. The villagers they meet are in desperate straits: women and children huddling in damp cellars, their crops destroyed and their wells poisoned. 
        
        Despite constant shelling from the Germans, French bureaucracy, and the threat of being ousted by the British army, the Smith volunteers bring welcome aid—and hope—to the region. But can they survive their own differences? As they cope with the hardships and terrors of the war, Kate and her colleagues find themselves navigating old rivalries and new betrayals which threaten the very existence of the Unit.
        
        With the Germans threatening to break through the lines, can the Smith Unit pull together and be truly a band of sisters?  `,
    },
    {
        id: 224,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55811154.jpg?alt=media&token=7d6d8f2c-e96e-4158-9e93-10a8a5f0cdfa",
        title: `The Vines`,
        author: "Shelley Nolden",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `In the shadows of New York City lies forbidden North Brother Island, where the remains of a shuttered hospital hide the haunting memories of century-old quarantines and human experiments. The ruins conceal the scarred and beautiful Cora, imprisoned by contagions and the doctors who torment her. When Finn, a young urban explorer, arrives on the island and glimpses an enigmatic beauty through the foliage, intrigue turns to obsession as he seeks to uncover her past—and his own family’s dark secrets. By unraveling these mysteries, will he be able to save Cora? Will Cora meet the same tragic ending as the thousands who’ve already perished on the island?

        The Vines intertwines North Brother Island’s horrific and elusive history with a captivating tale of love, betrayal, survival, and loss.`,
    },
    {
        id: 225,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/35959740._SY475_.jpg?alt=media&token=c821e6fc-656c-48cc-b8a7-16ced26bc9cd",
        title: `Circe`,
        author: "Madeline Miller",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child - not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power - the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.

        Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.
        
        But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love.`,
    },
    {
        id: 226,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/35959740._SY475_.jpg?alt=media&token=c821e6fc-656c-48cc-b8a7-16ced26bc9cd",
        title: `Circe`,
        author: "Madeline Miller",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Historical Fiction",
        description: `In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child - not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power - the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.

        Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.
        
        But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love.`,
    },
    {
        id: 227,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53968539.jpg?alt=media&token=9c8db1b7-6c77-4dc6-9c78-4ec5f2eed335",
        title: `Come Fly the World: The Jet-Age Story of the Women of Pan Am`,
        author: "Julia Cooke",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `Glamour, danger, liberation: in a Mad Men–era of commercial flight, Pan Am World Airways attracted the kind of young woman who wanted out, and wanted up

        Required to have a college degree, speak two languages, and possess the political savvy of a Foreign Service officer, a jet-age stewardess serving on iconic Pan Am between 1966 and 1975 also had to be between 5′3" and 5′9", between 105 and 140 pounds, and under 26 years of age at the time of hire. Julia Cooke’s intimate storytelling weaves together the real-life stories of a memorable cast of characters, from Lynne Totten, a science major who decided life in a lab was not for her, to Hazel Bowie, one of the relatively few black stewardesses of the era, as they embraced the liberation of their new jet-set life.
        
        Cooke brings to life the story of Pan Am stewardesses’ role in the Vietnam War, as the airline added runs from Saigon to Hong Kong for planeloads of weary young soldiers straight from the battlefields, who were off for five days of R&R, and then flown back to war. Finally, with Operation Babylift—the dramatic evacuation of 2,000 children during the fall of Saigon—the book’s special cast of stewardesses unites to play an extraordinary role on the world stage. `,
    },
    {
        id: 228,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53968539.jpg?alt=media&token=9c8db1b7-6c77-4dc6-9c78-4ec5f2eed335",
        title: `Come Fly the World: The Jet-Age Story of the Women of Pan Am`,
        author: "Julia Cooke",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `Glamour, danger, liberation: in a Mad Men–era of commercial flight, Pan Am World Airways attracted the kind of young woman who wanted out, and wanted up

        Required to have a college degree, speak two languages, and possess the political savvy of a Foreign Service officer, a jet-age stewardess serving on iconic Pan Am between 1966 and 1975 also had to be between 5′3" and 5′9", between 105 and 140 pounds, and under 26 years of age at the time of hire. Julia Cooke’s intimate storytelling weaves together the real-life stories of a memorable cast of characters, from Lynne Totten, a science major who decided life in a lab was not for her, to Hazel Bowie, one of the relatively few black stewardesses of the era, as they embraced the liberation of their new jet-set life.
        
        Cooke brings to life the story of Pan Am stewardesses’ role in the Vietnam War, as the airline added runs from Saigon to Hong Kong for planeloads of weary young soldiers straight from the battlefields, who were off for five days of R&R, and then flown back to war. Finally, with Operation Babylift—the dramatic evacuation of 2,000 children during the fall of Saigon—the book’s special cast of stewardesses unites to play an extraordinary role on the world stage. `,
    },
    {
        id: 229,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54304210.jpg?alt=media&token=3308c3ce-591b-41e1-a14e-9e059b756fea",
        title: `The Barbizon: The Hotel That Set Women Free`,
        author: "Paulina Bren",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `A New York Times Book Review Editor’s Choice ​

        From award-winning author Paulina Bren comes the first history of New York’s most famous residential hotel—The Barbizon—and the remarkable women who lived there.
        
        WELCOME TO NEW YORK’S LEGENDARY HOTEL FOR WOMEN
        
        Liberated from home and hearth by World War I, politically enfranchised and ready to work, women arrived to take their place in the dazzling new skyscrapers of Manhattan. But they did not want to stay in uncomfortable boarding houses. They wanted what men already had—exclusive residential hotels with daily maid service, cultural programs, workout rooms, and private dining.
        
        Built in 1927 at the height of the Roaring Twenties, the Barbizon Hotel was intended as a safe haven for the “Modern Woman” seeking a career in the arts. It became the place to stay for any ambitious young woman hoping for fame and fortune. Sylvia Plath fictionalized her time there in The Bell Jar, and, over the years, its almost 700 tiny rooms with matching floral curtains and bedspreads housed Titanic survivor Molly Brown; actresses Grace Kelly, Liza Minnelli, Ali MacGraw, Jaclyn Smith, Phylicia Rashad, and Cybill Shepherd; writers Joan Didion, Diane Johnson, Gael Greene, and Meg Wolitzer; and many more. Mademoiselle magazine boarded its summer interns there, as did Katharine Gibbs Secretarial School its students and the Ford Modeling Agency its young models. Before the hotel’s residents were household names, they were young women arriving at the Barbizon with a suitcase and a dream.
        
        Not everyone who passed through the Barbizon’s doors was destined for success—for some it was a story of dashed hopes—but until 1981, when men were finally let in, the Barbizon offered its residents a room of their own and a life without family obligations or expectations. It gave women a chance to remake themselves however they pleased; it was the hotel that set them free. No place had existed like it before or has since.
        
        Beautifully written and impeccably researched, The Barbizon weaves together a tale that has, until now, never been told. It is both a vivid portrait of the lives of these young women who came to New York looking for something more, and an epic history of women’s ambition.`,
    },
    {
        id: 230,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53288445.jpg?alt=media&token=b1b0beae-96f0-4e3e-bccb-e4fed0a3c9be",
        title: `Women in White Coats: How the First Women Doctors Changed the World of Medicine`,
        author: "Olivia Campbell",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `For fans of Hidden Figures and Radium Girls comes the remarkable story of three Victorian women who broke down barriers in the medical field to become the first women doctors, revolutionizing the way women receive health care.

        In the early 1800s, women were dying in large numbers from treatable diseases because they avoided receiving medical care. Examinations performed by male doctors were often demeaning and even painful. In addition, women faced stigma from illness--a diagnosis could greatly limit their ability to find husbands, jobs or be received in polite society.
        
        Motivated by personal loss and frustration over inadequate medical care, Elizabeth Blackwell, Elizabeth Garrett Anderson and Sophia Jex-Blake fought for a woman's place in the male-dominated medical field. For the first time ever, Women in White Coats tells the complete history of these three pioneering women who, despite countless obstacles, earned medical degrees and paved the way for other women to do the same. Though very different in personality and circumstance, together these women built women-run hospitals and teaching colleges--creating for the first time medical care for women by women.
        
        With gripping storytelling based on extensive research and access to archival documents, Women in White Coats tells the courageous history these women made by becoming doctors, detailing the boundaries they broke of gender and science to reshape how we receive medical care today.`,
    },
    {
        id: 231,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40538731.jpg?alt=media&token=bb98fbcb-adad-4129-9e93-d548b5bcadc8",
        title: `The Agitators: Three Friends Who Fought for Abolition and Women's Rights`,
        author: "Dorothy Wickenden",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `From the author of the New York Times bestseller Nothing Daunted, The Agitators chronicles the revolutionary activities of Harriet Tubman, Frances Seward, and Martha Wright: three unlikely collaborators in the quest for abolition and women’s rights.

        In Auburn, New York, in the mid-nineteenth century, Martha Wright and Frances Seward, inspired by Harriet Tubman’s rescues in the dangerous territory of Eastern Maryland, opened their basement kitchens as stations on the Underground Railroad.
        
        Tubman was enslaved, Wright was a middle-class Quaker mother of seven, and Seward was the aristocratic wife and moral conscience of her husband, William H. Seward, who served as Lincoln’s Secretary of State. All three refused to abide by laws that denied them the rights granted to white men, and they supported each other as they worked to overturn slavery and achieve full citizenship for blacks and women.
        
        The Agitators opens when Tubman is enslaved and Wright and Seward are young women bridling against their traditional roles. It ends decades later, after Wright’s and Seward’s sons—and Tubman herself—have taken part in three of the defining engagements of the Civil War. Through the sardonic and anguished accounts of the protagonists, reconstructed from their letters, diaries, and public appearances, we see the most explosive debates of the time, and portraits of the men and women whose paths they crossed: Lincoln, Seward, Frederick Douglass, William Lloyd Garrison, John Brown, Elizabeth Cady Stanton, Susan B. Anthony, Harriet Beecher Stowe, and others. Tubman, embraced by Seward and Wright and by the radical network of reformers in western New York State, settled in Auburn and spent the second half of her life there.
        
        With extraordinarily compelling storytelling reminiscent of Doris Kearns Goodwin’s No Ordinary Time and David McCullough’s John Adams, The Agitators brings a vivid new perspective to the epic American stories of abolition, the Underground Railroad, women’s rights activism, and the Civil War. `,
    },
    {
        id: 232,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53404260.jpg?alt=media&token=bbada633-3774-4056-aa64-93d62ff6ce4e",
        title: `Beloved Beasts: Fighting for Life in an Age of Extinction`,
        author: "Michelle Nijhuis",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `A vibrant history of the modern conservation movement—told through the lives and ideas of the people who built it.

        In the late nineteenth century, as humans came to realize that our rapidly industrializing and globalizing societies were driving other animal species to extinction, a movement to protect and conserve them was born. In Beloved Beasts, acclaimed science journalist Michelle Nijhuis traces the movement’s history: from early battles to save charismatic species such as the American bison and bald eagle to today’s global effort to defend life on a larger scale.
        
        She describes the vital role of scientists and activists such as Aldo Leopold and Rachel Carson as well as lesser-known figures in conservation history; she reveals the origins of vital organizations like the Audubon Society and the World Wildlife Fund; she explores current efforts to protect species such as the whooping crane and the black rhinoceros; and she confronts the darker side of conservation, long shadowed by racism and colonialism.
        
        As the destruction of other species continues and the effects of climate change escalate, Beloved Beasts charts the ways conservation is becoming a movement for the protection of all species—including our own.`,
    },
    {
        id: 233,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54236116.jpg?alt=media&token=cd19ff03-8326-48c3-a19f-2582771ba068",
        title: `When Women Invented Television: The Untold Story of the Female Powerhouses Who Pioneered the Way We Watch Today`,
        author: "Jennifer Keishin Armstrong ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "History",
        description: `The New York Times bestselling author of Seinfeldia tells the little-known story of four trailblazing women in the early days of television who laid the foundation of the industry we know today.

        It was the Golden Age of Radio and powerful men were making millions in advertising dollars reaching thousands of listeners every day. When television arrived, few radio moguls were interested in the upstart industry and its tiny production budgets, and expensive television sets were out of reach for most families. But four women—each an independent visionary— saw an opportunity and carved their own paths, and in so doing invented the way we watch tv today.
        
        Irna Phillips turned real-life tragedy into daytime serials featuring female dominated casts. Gertrude Berg turned her radio show into a Jewish family comedy that spawned a play, a musical, an advice column, a line of house dresses, and other products. Hazel Scott, already a renowned musician, was the first African American to host a national evening variety program. Betty White became a daytime talk show fan favorite and one of the first women to produce, write, and star in her own show.
        
        Together, their stories chronicle a forgotten chapter in the history of television and popular culture.
        
        But as the medium became more popular—and lucrative—in the wake of World War II, the House Un-American Activities Committee arose to threaten entertainers, blacklisting many as communist sympathizers. As politics, sexism, racism, anti-Semitism, and money collided, the women who invented television found themselves fighting from the margins, as men took control. But these women were true survivors who never gave up—and thus their legacies remain with us in our television-dominated era. It's time we reclaimed their forgotten histories and the work they did to pioneer the medium that now rules our lives.
        
        This amazing and heartbreaking history, illustrated with photos, tells it all for the first time. `,
    },
    {
        id: 234,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54621094.jpg?alt=media&token=00799232-3f96-4cea-9cba-a4d0013f0699",
        title: `The Last House on Needless Street`,
        author: "Catriona Ward",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `This is the story of a serial killer. A stolen child. Revenge. Death. And an ordinary house at the end of an ordinary street.

        All these things are true. And yet they are all lies...
        
        You think you know what's inside the last house on Needless Street. You think you've read this story before. That's where you're wrong.
        
        In the dark forest at the end of Needless Street, lies something buried. But it's not what you think... `,
    },
    {
        id: 235,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53194688._SY475_.jpg?alt=media&token=67fa4465-6c21-4cf7-9f5e-beca479ba81d",
        title: `The Second Bell`,
        author: "Gabriela Houston ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `In a world which believes her to be a monster, a young striga fights to harness the power of her second heart, while her mother sacrifices everything to stop her...

        In an isolated mountain community, sometimes a child is born with two hearts. This child is called a striga and is considered a demon who must be abandoned on the edge of the forest. The child's mother must then decide to leave with her infant, or stay and try to forget.
        
        Nineteen year-old striga, Salka, and her mother, Miriat, made the choice to leave and live a life of deprivation and squalor in an isolated village. The striga tribe share the human belief that to follow the impulses of their other hearts is dangerous, inviting unspoken horrors and bringing ruin onto them all.
        
        Salka, a headstrong and independent young woman, finds herself in a life threatening situation that forces her to explore the depths of her true nature and test the bonds between mother and child... `,
    },
    {
        id: 236,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53138002.jpg?alt=media&token=5d5b6af0-1c3d-412b-95fa-a0cb28e90869",
        title: `Down World`,
        author: "Rebecca Phelps",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `As the site of a former military base, there have always been rumors that East Township High School was the site of experiments with space and time. For years, students have whispered in the hallways of a doorway created within the school, one that can access multiple timelines and realities, a place known as the Down World.

        As the new kid in school and still reeling from the unexplained death of her brother Robbie, Marina O'Connell is only interested in one thing: leaving the past behind. But a chance encounter with handsome Brady Picelli changes everything. He will lead Marina to a startling discovery. The Down World is real and the past, present, and future are falling out of balance.
        
        Brady is determined to help Marina discover what really happened to her brother. However, what is taken from one world, must be repaid by another. And Marina is about to discover that even a realm of infinite possibilities has rules that must be obeyed. `,
    },
    {
        id: 237,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54313045.jpg?alt=media&token=ff451ce2-28df-4663-a41a-31dc105a6e65",
        title: `Our Last Echoes`,
        author: "Kate Alice Marshall",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `Kara Thomas meets Twin Peaks in this supernatural thriller about one girl's hunt for the truth about her mother's disappearance.

        Sophia's first memory is of drowning. She remembers the darkness of the water and the briny taste as it fills her throat. She remembers the cold shock of going under. She remembers her mother pulling her to safety before disappearing forever. But Sophia has never been in the ocean. And her mother died years ago in a hospital. Or so she has been told her whole life.
        
        A series of clues have led Sophia to the island of Bitter Rock, Alaska, where she talked her way into a summer internship at the Landon Avian Research Center, the same center her mother worked at right before she died. There, she meets the disarmingly clever Liam, whose own mother runs the LARC, as well as Abby, who's following a mystery of her own: a series of unexplained disappearances. People have been vanishing from Bitter Rock for decades, leaving only their ghostly echoes behind. When it looks like their two mysteries might be one and the same, Sophia vows to dig up the truth, no matter how many lies she has to tell along the way. Even if it leads her to a truth she may not want to face.
        
        Our Last Echoes is an eerie collection of found documents and written confessionals, in the style of Rules for Vanishing, with supernatural twists that keep you questioning what is true and what is an illusion.`,
    },
    {
        id: 238,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/46189814.jpg?alt=media&token=9f25943a-5e36-4daa-9e87-f567e0c297ae",
        title: `Down Comes the Night`,
        author: "Allison Saft",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `He saw the darkness in her magic. She saw the magic in his darkness.

        Wren Southerland’s reckless use of magic has cost her everything: she’s been dismissed from the Queen’s Guard and separated from her best friend—the girl she loves. So when a letter arrives from a reclusive lord, asking Wren to come to his estate, Colwick Hall, to cure his servant from a mysterious illness, she seizes her chance to redeem herself.
        
        The mansion is crumbling, icy winds haunt the caved-in halls, and her eccentric host forbids her from leaving her room after dark. Worse, Wren’s patient isn’t a servant at all but Hal Cavendish, the infamous Reaper of Vesria and her kingdom’s sworn enemy. Hal also came to Colwick Hall for redemption, but the secrets in the estate may lead to both of their deaths.
        
        With sinister forces at work, Wren and Hal realize they’ll have to join together if they have any hope of saving their kingdoms. But as Wren circles closer to the nefarious truth behind Hal’s illness, they realize they have no escape from the monsters within the mansion. All they have is each other, and a startling desire that could be their downfall.
        
        Allison Saft’s Down Comes the Night is a snow-drenched romantic fantasy that keeps you racing through the pages long into the night.`,
    },
    {
        id: 239,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/42080142.jpg?alt=media&token=9c280100-1fa3-4de0-802f-ff08fbf673ac",
        title: `The Turn of the Key`,
        author: "Ruth Ware",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Horror",
        description: `When she stumbles across the ad, she’s looking for something else completely. But it seems like too good an opportunity to miss—a live-in nannying post, with a staggeringly generous salary. And when Rowan Caine arrives at Heatherbrae House, she is smitten—by the luxurious “smart” home fitted out with all modern conveniences, by the beautiful Scottish Highlands, and by this picture-perfect family.

        What she doesn’t know is that she’s stepping into a nightmare—one that will end with a child dead and herself in prison awaiting trial for murder.
        
        Writing to her lawyer from prison, she struggles to explain the unravelling events that led to her incarceration. It wasn’t just the constant surveillance from the cameras installed around the house, or the malfunctioning technology that woke the household with booming music, or turned the lights off at the worst possible time. It wasn’t just the girls, who turned out to be a far cry from the immaculately behaved model children she met at her interview. It wasn’t even the way she was left alone for weeks at a time, with no adults around apart from the enigmatic handyman, Jack Grant.
        
        It was everything.
        
        She knows she’s made mistakes. She admits that she lied to obtain the post, and that her behavior toward the children wasn’t always ideal. She’s not innocent, by any means. But, she maintains, she’s not guilty—at least not of murder. Which means someone else is.
        
        Full of spellbinding menace and told in Ruth Ware’s signature suspenseful style, The Turn of the Key is an unputdownable thriller from the Agatha Christie of our time. `,
    },
    {
        id: 239,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51591605.jpg?alt=media&token=1dde43c8-ba0c-465e-af14-53e45d2b9192",
        title: `The Secret Recipe for Moving on`,
        author: "Karen Bischer",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `Home economics is supposed to be an easy A for Ellie Agresti, but, much like an imperfect souffle, her plans collapse epically when she's dumped by her boyfriend, Hunter. Now Ellie has to mend her broken heart while watching Hunter fawn all over his new girlfriend, Brynn, in class. To make matters worse, Ellie is partnered with four of the biggest misfit guys in school: Jeremy, the loudmouth with temper issues; Isaiah, the solemn, silent horse racing obsessive; Andrew, who can't take rejection; and Luke, the giant, tattooed stunt biker.

        Over the course of a semester, Ellie works to overcome her feelings for Hunter, as well as deeper insecurities that have plagued her since middle school. As the weeks go by, she's surprised to find friendships in unexpected places... and sparks flying with the last guy she'd expect.`,
    },
    {
        id: 240,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54061659._SX318_.jpg?alt=media&token=05946761-169e-495a-843f-179d70236a6f",
        title: `A New Day`,
        author: "Brad Meltzer, Dan Santat",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `This rambunctious and big-hearted story of kindness--reminiscent of the Crayons and Cindy Lou Who--is written by the bestselling author of Ordinary People Change the World and illustrated by the Caldecott Medal-winning creator of Beekle.

        Sunday quit, just like that. She said she was tired of being a day. And so the other days of the week had no choice but to advertise: "WANTED: A NEW DAY. Must be relaxing, tranquil, and replenishing. Serious inquires only." Soon lots of hopefuls arrived with their suggestions, such as Funday, Bunday, Acrobaturday, SuperheroDay, and even MonstersWhoResembleJellyfishDay! Things quickly got out of hand . . . until one more candidate showed up: a little girl with a thank-you gift for Sunday. The girl suggested simply a nice day--a day to be kind. And her gratitude made a calendar's worth of difference to Sunday, who decided she didn't need to quit after all.
        
        When we appreciate each other a little bit more, all the days of the week can be brand-new days where everything is possible.`,
    },
    {
        id: 241,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54424566.jpg?alt=media&token=55b7619c-d3c5-4877-a8b3-f9bb509cbb0b",
        title: `Simon B. Rhymin`,
        author: "Dwayne Reed",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `A humorous and heartwarming bounce-to-the-beat underdog story about a young rapper whose rhymes help bring his community together.

        Eleven-year-old Simon Barnes dreams of becoming a world-famous rapper that everyone calls Notorious D. O. G. But for now, he's just a Chicago fifth grader who's small for this age and afraid to use his voice.
        
        Simon prefers to lay low at school and at home, even though he's constantly spitting rhymes in his head. But when his new teacher assigns the class an oral presentation on something that affects their community, Simon must face his fears.
        
        With some help from an unexpected ally and his neighborhood crew, will Simon gain the confidence to rap his way to an A and prove that one kid can make a difference in his 'hood?`,
    },
    {
        id: 242,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/57210980._SY475_.jpg?alt=media&token=4bc4da7a-76da-436a-8486-d667d444a1ed",
        title: `Uncork My Love`,
        author: "Rich Amooi",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `A sweet romantic comedy set in beautiful Napa Valley!

        Ivy needs a miracle and a drink—not necessarily in that order. With a struggling winery, the only hope of keeping her dream alive is snagging a gold medal at the annual wine competition. She’s determined to win, but she can do it without the help of Ted Jacobs, aka Mr. Know-it-All.
        
        Ted wants to catch lightning in a bottle and create the world’s greatest wine, but he’s smart enough to know he can’t do it alone. When he heads to Napa to keep his grandma from ending up in jail (don’t ask), he meets Ivy. She’s as complex and intoxicating as his award-winning cabernet, but as stubborn as the mule next door when she stomps on his offer to collaborate.
        
        Ted knows it’s risky to mix business with pleasure, but if Ivy would only listen, they might just be the toast of the town.`,
    },
    {
        id: 243,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/52851428._SX318_SY475_.jpg?alt=media&token=afa797c9-de28-4e9e-a83d-0bfda50d6823",
        title: `Cat and Dog`,
        author: "Jonathan Bentley",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `One dog. One cat. One very tidy apartment. What could go wrong?

        Cat is grumpy, fashion-obsessed, and a bit of a snob. Dog is excitable, bold, and bursting with energy.
        What do they have in common? They both want to see the world!
        It’s time to come up with a grand escape plan …
        
        
        Join these two loveable and incorrigibly mischievous pets as they team up to break out.
        They’ll need brains. They’ll need bravery. And they’ll definitely need costumes.`,
    },
    {
        id: 244,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54303770.jpg?alt=media&token=2dd1fe10-3cd9-4a3e-98c0-6342587b0d03",
        title: `Good Eggs`,
        author: "Rebecca Hardiman",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Humor",
        description: `A hilarious and heartfelt debut novel following three generations of a boisterous Irish family whose simmering tensions boil over when an American home aide enters the picture, becoming the calamitous force that will either undo or remake this family—perfect for fans of Where’d You Go, Bernadette and Evvie Drake Starts Over.

        When Kevin Gogarty’s irrepressible eighty-three-year-old mother, Millie, is caught shoplifting yet again, he has no choice but to hire a caretaker to keep an eye on her. Kevin, recently unemployed, is already at his wits’ end tending to a full house while his wife travels to exotic locales for work, leaving him solo with his sulky, misbehaved teenaged daughter, Aideen, whose troubles escalate when she befriends the campus rebel at her new boarding school.
        
        Into the Gogarty fray steps Sylvia, Millie’s upbeat American home aide, who appears at first to be their saving grace—until she catapults the Gogarty clan into their greatest crisis yet.
        
        With charm, humor, and pathos to spare, Good Eggs is a delightful study in self-determination; the notion that it’s never too late to start living; and the unique redemption that family, despite its maddening flaws, can offer.`,
    },
    {
        id: 245,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51475209._SY475_.jpg?alt=media&token=dc58f454-0679-4bfb-931c-243337c6483b",
        title: `Small Pleasures`,
        author: "Clare Chambers",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `1957, south-east suburbs of London.
        Jean Swinney is a feature writer on a local paper, disappointed in love and — on the brink of forty — living a limited existence with her truculent mother: a small life from which there is no likelihood of escape.
        
        When a young Swiss woman, Gretchen Tilbury, contacts the paper to claim that her daughter is the result of a virgin birth, it is down to Jean to discover whether she is a miracle or a fraud. But the more Jean investigates, the more her life becomes strangely (and not unpleasantly) intertwined with that of the Tilburys: Gretchen is now a friend, and her quirky and charming daughter Margaret a sort of surrogate child. And Jean doesn't mean to fall in love with Gretchen's husband, Howard, but Howard surprises her with his dry wit, his intelligence and his kindness — and when she does fall, she falls hard.
        
        But he is married, and to her friend — who is also the subject of the story she is researching for the newspaper, a story that increasingly seems to be causing dark ripples across all their lives. And yet Jean cannot bring herself to discard the chance of finally having a taste of happiness...`,
    },
    {
        id: 246,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/50175419.jpg?alt=media&token=70d20e23-7bdd-498b-9b7d-d0dc3590ceaf",
        title: `Exciting Times`,
        author: "Naoise Dolan",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `n intimate, bracingly intelligent debut novel about a millennial Irish expat who becomes entangled in a love triangle with a male banker and a female lawyer

        Ava moved to Hong Kong to find happiness, but so far, it isn’t working out. Since she left Dublin, she’s been spending her days teaching English to rich children—she’s been assigned the grammar classes because she lacks warmth—and her nights avoiding petulant roommates in her cramped apartment.
        
        When Ava befriends Julian, a witty British banker, he offers a shortcut into a lavish life her meager salary could never allow. Ignoring her feminist leanings and her better instincts, Ava finds herself moving into Julian’s apartment, letting him buy her clothes, and, eventually, striking up a sexual relationship with him. When Julian’s job takes him back to London, she stays put, unsure where their relationship stands.
        
        Enter Edith. A Hong Kong–born lawyer, striking and ambitious, Edith takes Ava to the theater and leaves her tulips in the hallway. Ava wants to be her—and wants her. Ava has been carefully pretending that Julian is nothing more than an absentee roommate, so when Julian announces that he’s returning to Hong Kong, she faces a fork in the road. Should she return to the easy compatibility of her life with Julian or take a leap into the unknown with Edith?
        
        Politically alert, heartbreakingly raw, and dryly funny, Exciting Times is thrillingly attuned to the great freedoms and greater uncertainties of modern love. In stylish, uncluttered prose, Naoise Dolan dissects the personal and financial transactions that make up a life—and announces herself as a singular new voice.`,
    },
    {
        id: 247,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40864841.jpg?alt=media&token=944b84df-a134-4abc-9b53-4f5f0a2ffdbd",
        title: `Laura Dean Keeps Breaking Up with Me`,
        author: "Mariko Tamaki, Rosemary Valero-O'Connell (Illustrations)",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `All Freddy Riley wants is for Laura Dean to stop breaking up with her.

        The day they got together was the best one of Freddy's life, but nothing's made sense since. Laura Dean is popular, funny, and SO CUTE ... but she can be really thoughtless, even mean. Their on-again, off-again relationship has Freddy's head spinning — and Freddy's friends can't understand why she keeps going back.
        
        When Freddy consults the services of a local mystic, the mysterious Seek-Her, she isn't thrilled with the advice she receives. But something's got to give: Freddy's heart is breaking in slow motion, and she may be about to lose her very best friend as well as her last shred of self-respect. Fortunately for Freddy, there are new friends, and the insight of advice columnist Anna Vice, to help her through being a teenager in love.
        
        Mariko Tamaki and Rosemary Valero-O'Connell bring to life a sweet and spirited tale of young love that asks us to consider what happens when we ditch the toxic relationships we crave to embrace the healthy ones we need.`,
    },
    {
        id: 248,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/46250106._SY475_.jpg?alt=media&token=0cf551d8-8dc5-4ef8-ac56-efa3e5e48cad",
        title: `A Burning`,
        author: "Megha Majumdar",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `For readers of Tommy Orange, Yaa Gyasi, and Jhumpa Lahiri, an electrifying debut novel about three unforgettable characters who seek to rise—to the middle class, to political power, to fame in the movies—and find their lives entangled in the wake of a catastrophe in contemporary India.

        Jivan is a Muslim girl from the slums, determined to move up in life, who is accused of executing a terrorist attack on a train because of a careless comment on Facebook. PT Sir is an opportunistic gym teacher who hitches his aspirations to a right-wing political party, and finds that his own ascent becomes linked to Jivan's fall. Lovely--an irresistible outcast whose exuberant voice and dreams of glory fill the novel with warmth and hope and humor--has the alibi that can set Jivan free, but it will cost her everything she holds dear.
        
        Taut, symphonic, propulsive, and riveting from its opening lines, A Burning has the force of an epic while being so masterfully compressed it can be read in a single sitting. Majumdar writes with dazzling assurance at a breakneck pace on complex themes that read here as the components of a thriller: class, fate, corruption, justice, and what it feels like to face profound obstacles and yet nurture big dreams in a country spinning toward extremism. An extraordinary debut. `,
    },
    {
        id: 249,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51907346._SY475_.jpg?alt=media&token=9d2a5b03-d9ea-4d6e-96fb-79601c54cad7",
        title: `All Adults Here`,
        author: "Emma Straub ",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `When Astrid Strick witnesses a school bus accident in the center of town, it jostles loose a repressed memory from her young parenting days decades earlier. Suddenly, Astrid realizes she was not quite the parent she thought she’d been to her three, now-grown children. But to what consequence?

        Astrid’s youngest son is drifting and unfocused, making parenting mistakes of his own. Her daughter is intentionally pregnant yet struggling to give up her own adolescence. And her eldest seems to measure his adult life according to standards no one else shares. But who gets to decide, so many years later, which long-ago lapses were the ones that mattered? Who decides which apologies really count? It might be that only Astrid’s thirteen-year-old granddaughter and her new friend really understand the courage it takes to tell the truth to the people you love the most.
        
        In All Adults Here, Emma Straub’s unique alchemy of wisdom, humor, and insight come together in a deeply satisfying story about adult siblings, aging parents, high school boyfriends, middle school mean girls, the lifelong effects of birth order, and all the other things that follow us into adulthood, whether we like them to or not.`,
    },
    {
        id: 250,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/17699853.jpg?alt=media&token=c68b71a3-41ad-4ab2-ab99-2e28ed0d238a",
        title: `Chain of Gold`,
        author: "Cassandra Clare",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "LGBT",
        description: `Chain of Gold, a Shadowhunters novel, is the first novel in a brand-new trilogy where evil hides in plain sight and love cuts deeper than any blade. .

        Cordelia Carstairs is a Shadowhunter, a warrior trained since childhood to battle demons. When her father is accused of a terrible crime, she and her brother travel to London in hopes of preventing the family’s ruin. Cordelia’s mother wants to marry her off, but Cordelia is determined to be a hero rather than a bride. Soon Cordelia encounters childhood friends James and Lucie Herondale and is drawn into their world of glittering ballrooms, secret assignations, and supernatural salons, where vampires and warlocks mingle with mermaids and magicians. All the while, she must hide her secret love for James, who is sworn to marry someone else.
        
        But Cordelia’s new life is blown apart when a shocking series of demon attacks devastate London. These monsters are nothing like those Shadowhunters have fought before—these demons walk in daylight, strike down the unwary with incurable poison, and seem impossible to kill. London is immediately quarantined. Trapped in the city, Cordelia and her friends discover that their own connection to a dark legacy has gifted them with incredible powers—and forced a brutal choice that will reveal the true cruel price of being a hero. `,
    },
    {
        id: 251,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/56211225.jpg?alt=media&token=a6086930-e0a5-4c5f-8a79-e2a51ad795b3",
        title: `This Is the Fire: What I Say to My Friends About Racism`,
        author: "Don Lemon",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `Don Lemon brings his vast audience and experience as a reporter and a Black man to today’s most urgent question: How can we end racism in America in our lifetimes?
 
        The host of CNN Tonight with Don Lemon is more popular than ever. As America’s only Black prime-time anchor, Lemon and his daily monologues on racism and antiracism, on the failures of the Trump administration and of so many of our leaders, and on America’s systemic flaws speak for his millions of fans. Now, in an urgent, deeply personal, riveting plea, he shows us all how deep our problems lie, and what we can do to begin to fix them.
        
        Beginning with a letter to one of his Black nephews, he proceeds with reporting and reflections on his slave ancestors, his upbringing in the shadows of segregation, and his adult confrontations with politicians, activists, and scholars. In doing so, Lemon offers a searing and poetic ultimatum to America. He visits the slave port where a direct ancestor was shackled and shipped to America. He recalls a slave uprising in Louisiana, just a few miles from his birthplace. And he takes us to the heart of the 2020 protests in New York City. As he writes to his young nephew: We must resist racism every single day. We must resist it with love.`,
    },
    {
        id: 252,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54818110.jpg?alt=media&token=1906dcb3-fe72-4ad8-9979-903f7c88fa11",
        title: `Mango and Peppercorns: A Memoir of Food, an Unlikely Family, and the American Dream`,
        author: "Tung Nguyen, Katherine Manning",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `A powerful memoir of resilience, friendship, family, and food from the acclaimed chefs behind the award-winning Hy Vong Vietnamese restaurant in Miami.

        Through powerful narrative, archival imagery, and 20 Vietnamese recipes that mirror their story, Mango & Peppercorns is a unique contribution to culinary literature.
        
        In 1975, after narrowly escaping the fall of Saigon, pregnant refugee and gifted cook Tung Nguyen ended up in the Miami home of Kathy Manning, a graduate student and waitress who was taking in displaced Vietnamese refugees. This serendipitous meeting evolved into a decades-long partnership, one that eventually turned strangers into family and a tiny, no-frills eatery into one of the most lauded restaurants in the country.
        
        Tung's fierce practicality often clashed with Kathy's free-spirited nature, but over time, they found a harmony in their contrasts—a harmony embodied in the restaurant's signature mango and peppercorns sauce.
        
        • IMPORTANT, UNIVERSAL STORY: An inspiring memoir peppered with recipes, it is a riveting read that will appeal to fans of Roy Choi, Ed Lee, Ruth Reichl, and Kwame Onwuachi.
        • TIMELY TOPIC: This real-life American dream is a welcome reminder of our country's longstanding tradition of welcoming refugees and immigrants. This book adds a touchpoint to that larger conversation, resonating beyond the bookshelf.
        • INVENTIVE COOKBOOK: This book is taking genre-bending a step further, focusing on the story first and foremost with 20 complementary recipes.`,
    },
    {
        id: 253,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/55303907._SY475_.jpg?alt=media&token=cf20f00f-480b-4583-8740-53a7850cf2cf",
        title: `You're Leaving When?: Adventures in Downward Mobility`,
        author: "Annabelle Gurwitch",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `From the New York Times bestselling author of I See You Made an Effort comes a timely and hilarious chronicle of downward mobility, financial and emotional.

        With signature "sharp wit" (NPR), Annabelle Gurwitch gives irreverent and empathetic voice to a generation hurtling into their next chapter with no safety net and proving that our no-frills new normal doesn't mean a deficit of humor. In these essays, Gurwitch embraces homesharing, welcoming a housing-insecure young couple and a bunny rabbit into her home. The mother of a college student in recovery who sheds the gender binary, she relearns to parent, one pronoun at a time. She wades into the dating pool with a reupholstered vagina and flunks the magic of tidying up. You're Leaving When? is for anybody who thought they had a semblance of security but wound up with a fragile economy and a blankie. "What do we do when we've already reinvented in midlife?" Gurwitch offers stories of resilience, adaptability, low-rent redemption, and the kindness of strangers. Even in a Zoom.`,
    },
    {
        id: 254,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54304203.jpg?alt=media&token=f0f60ad5-e0e5-406b-a713-f448758d556b",
        title: `A History of Scars: A Memoir`,
        author: "Laura Lee",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `From a writer whose work has been called “breathtaking and dazzling” by Roxane Gay, this moving, illuminating, and multifaceted memoir explores, in a series of essays, the emotional scars we carry when dealing with mental and physical illnesses—reminiscent of The Collected Schizophrenias and An Unquiet Mind.

        In this stunning debut, Laura Lee weaves unforgettable and eye-opening essays on a variety of taboo topics.
        
        In “History of Scars” and “Aluminum’s Erosions,” Laura dives head-first into heavier themes revolving around intimacy, sexuality, trauma, mental illness, and the passage of time. In “Poetry of the World,” Laura shifts and addresses the grief she feels by being geographically distant from her mother whom, after being diagnosed with early onset Alzheimer’s, is relocated to a nursing home in Korea.
        
        Through the vivid imagery of mountain climbing, cooking, studying writing, and growing up Korean American, Lee explores the legacy of trauma on a young queer child of immigrants as she reconciles the disparate pieces of existence that make her whole.
        
        By tapping into her own personal, emotional, and psychological struggles in these powerful and relatable essays, Lee encourages all of us to not be afraid to face our own hardships and inner truths.`,
    },
    {
        id: 255,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54228607.jpg?alt=media&token=66ab6be0-15df-4131-8147-ff01df566492",
        title: `Women and Other Monsters: Building a New Mythology`,
        author: "Jess Zimmerman",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `A fresh cultural analysis of female monsters from Greek mythology, and an invitation for all women to reclaim these stories as inspiration for a more wild, more "monstrous" version of feminism

        The folklore that has shaped our dominant culture teems with frightening female creatures. In our language, in our stories (many written by men), we underline the idea that women who step out of bounds--who are angry or greedy or ambitious, who are overtly sexual or not sexy enough--aren't just outside the norm. They're unnatural. Monstrous. But maybe, the traits we've been told make us dangerous and undesirable are actually our greatest strengths.
        
        Through fresh analysis of eleven female monsters, including Medusa, the Harpies, the Furies, and the Sphinx, Jess Zimmerman takes us on an illuminating feminist journey through mythology. She guides women (and others) to reexamine their relationships with traits like hunger, anger, ugliness, and ambition, teaching readers to embrace a new image of the female hero: one that looks a lot like a monster, with the agency and power to match.
        
        Often, women try to avoid the feeling of monstrousness, of being grotesquely alien, by tamping down those qualities that we're told fall outside the bounds of natural femininity. But monsters also get to do what other female characters--damsels, love interests, and even most heroines--do not. Monsters get to be complete, unrestrained, and larger than life. Today, women are becoming increasingly aware of the ways rules and socially constructed expectations have diminished us. After seeing where compliance gets us--harassed, shut out, and ruled by predators--women have never been more ready to become repellent, fearsome, and ravenous.`,
    },
    {
        id: 256,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/56448976._SY475_.jpg?alt=media&token=7ba147c8-0c14-434d-ba5a-a76d526316de",
        title: `Black Boy Out of Time`,
        author: "Hari Ziyad",
        info: "Hardcover, 544 pages",
        published: "March 9th 2021 by Candlewick Press",
        genre: "Memoir",
        description: `An eloquent, restless, and enlightening memoir by one of the most thought-provoking journalists today about growing up Black and queer in America, reuniting with the past, and coming of age their own way.

        One of nineteen children in a blended family, Hari Ziyad was raised by a Hindu Hare Kṛṣṇa mother and a Muslim father. Through reframing their own coming-of-age story, Ziyad takes readers on a powerful journey of growing up queer and Black in Cleveland, Ohio, and of navigating the equally complex path toward finding their true self in New York City. Exploring childhood, gender, race, and the trust that is built, broken, and repaired through generations, Ziyad investigates what it means to live beyond the limited narratives Black children are given and challenges the irreconcilable binaries that restrict them.
        
        Heartwarming and heart-wrenching, radical and reflective, Hari Ziyad’s vital memoir is for the outcast, the unheard, the unborn, and the dead. It offers us a new way to think about survival and the necessary disruption of social norms. It looks back in tenderness as well as justified rage, forces us to address where we are now, and, born out of hope, illuminates the possibilities for the future.`,
    },
    {
        id: 101,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/To_Kill_a_Mockingbird.jpg?alt=media&token=1ecee028-8afd-4447-91d6-a3adfd0d2dcf",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        info: "Paperback, 324 pages",
        published: "Published May 23rd 2006 by Harper Perennial Modern Classics",
        genre: "Fiction",
        description: ` The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature. `,
    },
    {
        id: 108,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Return.jpg?alt=media&token=b0408a46-a07f-4c14-b551-3525a7578fdf",
        title: "The Return",
        author: "Nicholas Sparks",
        info: "Hardcover, 355 pages",
        published: "Published September 29th 2020 by Grand Central Publishing",
        genre: "Chick Lit",
        description: `Trevor Benson never intended to move back to New Bern, NC. But when a mortar blast outside the hospital where he worked as an orthopedic surgeon sent him home from Afghanistan with devastating injuries, the dilapidated cabin he inherited from his grandfather seemed as good a place to regroup as any. Tending to his grandfather's beloved bee hives while gearing up for a second stint in medical school, Trevor isn't prepared to fall in love with a local . . . and yet, from their very first encounter, his connection with Natalie Masterson can't be ignored. But even as she seems to reciprocate his feelings, she remains frustratingly distant, making Trevor wonder what she's hiding. Further complicating his stay in New Bern is the presence of a sullen teenage girl, Callie, who lives in the trailer park down the road from his grandfather's cabin. Claiming to be 19, she works at the local sundries store and keeps to herself. When he discovers she was once befriended by his grandfather, Trevor hopes Callie can shed light on the mysterious circumstances of his grandfather's death, but she offers few clues -- until a crisis triggers a race that will uncover the true nature of Callie's past, one more intertwined with the elderly man's passing than Trevor could ever have anticipated. In his quest to unravel Natalie and Callie's secrets, Trevor will learn the true meaning of love and forgiveness . . . and that in life, to move forward, we must often return to the place where it all began.`,
    },
    {
        id: 102,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Great_Gatsby.jpg?alt=media&token=b66bdde5-1a62-4b08-97e3-57cce25b864a",
        title: "The Great Gatsby",
        author: " F. Scott Fitzgerald",
        info: "Paperback, US / CAN, 200 pages",
        published: "Published September 2004 by Scribner",
        genre: "Fiction",
        description: `The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.`,
    },
    {
        id: 100,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/One_Hundred_Years_of_Solitude.jpg?alt=media&token=edc676a8-f1d5-4b37-8e8c-f4d94a0b7cff",
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        info: "Mass Market Paperback, 417 pages",
        published: "Published June 24th 2003 by Harper",
        genre: "Fiction",
        description: `The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as "magical realism."`,
    },
    {
        id: 107,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Wedding_Game.jpg?alt=media&token=292bc813-7ce9-4bbf-b1ef-1ceeda09d669",
        title: "The Wedding Game",
        author: "Meghan Quinn",
        info: "Kindle Edition, 1st edition, 397 pages",
        published: "Published March 1st 2021 by Montlake",
        genre: "Chick Lit",
        description: `Luna Rossi is a veritable crafting genius—she can bedazzle and bead so hard her Etsy site is one of the hottest in the world. So it’s only natural that Luna would convince her brother and his husband-to-be to compete on The Wedding Game, a “do-it-yourself” TV show, for the title of Top DIY Wedding Expert. As a jaded divorce lawyer, Alec Baxter scoffs at weddings and romance. But when his recently engaged brother begs him to participate in The Wedding Game, Alec grudgingly picks up a glue gun and prepares for some family bonding. Both fierce competitors, Luna and Alec clash on national TV as harsh words and glitter fly with abandon. But as they bicker over color swatches and mood boards, they find themselves fighting something else: their growing mutual attraction. While Luna is torn between family loyalty and her own feelings, Alec wonders if he might have been wrong about love and marriage all along…`,
    },
    {
        id: 106,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Switch.jpg?alt=media&token=b8f83a58-14a8-4e8c-86cb-983aa5edfe71",
        title: "The Switch",
        author: " Beth O'Leary",
        info: "Kindle Edition, 336 pages",
        published: "Published April 16th 2020 by Quercus",
        genre: "Chick Lit",
        description: "When overachiever Leena Cotton is ordered to take a two-month sabbatical after blowing a big presentation at work, she escapes to her grandmother Eileen's house for some overdue rest. Eileen is newly single and about to turn eighty. She'd like a second chance at love, but her tiny Yorkshire village doesn't offer many eligible gentlemen. Once Leena learns of Eileen's romantic predicament, she proposes a solution: a two-month swap. Eileen can live in London and look for love. Meanwhile Leena will look after everything in rural Yorkshire. But with gossiping neighbours and difficult family dynamics to navigate up north, and trendy London flatmates and online dating to contend with in the city, stepping into one another's shoes proves more difficult than either of them expected. Leena learns that a long-distance relationship isn't as romantic as she hoped it would be, and then there is the annoyingly perfect - and distractingly handsome - school teacher, who keeps showing up to outdo her efforts to impress the local villagers. Back in London, Eileen is a huge hit with her new neighbours, but is her perfect match nearer home than she first thought?",
    },
    {
        id: 105,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Da_Vinci_Code.jpg?alt=media&token=01c8f43b-71e2-42d1-b57a-fdbe5bfb15b7",
        title: "The Da Vinci Code",
        author: "Dan Brown",
        info: "Paperback, 489 pages",
        published: "Published March 28th 2006 by Anchor ",
        genre: "Fiction",
        description: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever. ",
    },
    {
        id: 110,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/In_Five_Years.jpg?alt=media&token=22eaa8a5-477b-4e98-93ec-81ff889f0fa0",
        title: "In Five Years",
        author: "Rebecca Serle",
        info: "Hardcover, 255 pages",
        published: "Published March 10th 2020 by Atria Books",
        genre: "Chick LIt",
        description: "When Type-A Manhattan lawyer Dannie Kohan is asked this question at the most important interview of her career, she has a meticulously crafted answer at the ready. Later, after nailing her interview and accepting her boyfriend's marriage proposal, Dannie goes to sleep knowing she is right on track to achieve her five-year plan. But when she wakes up, she’s suddenly in a different apartment, with a different ring on her finger, and beside a very different man. The television news is on in the background, and she can just make out the scrolling date. It’s the same night—December 15—but 2025, five years in the future. After a very intense, shocking hour, Dannie wakes again, at the brink of midnight, back in 2020. She can’t shake what has happened. It certainly felt much more than merely a dream, but she isn’t the kind of person who believes in visions. That nonsense is only charming coming from free-spirited types, like her lifelong best friend, Bella. Determined to ignore the odd experience, she files it away in the back of her mind. That is, until four-and-a-half years later, when by chance Dannie meets the very same man from her long-ago vision. Brimming with joy and heartbreak, In Five Years is an unforgettable love story that reminds us of the power of loyalty, friendship, and the unpredictable nature of destiny.",
    },
    {
        id: 104,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/Harry_Potter_and_the_Chamber_of_Secrets.jpg?alt=media&token=ea5d017c-a174-45cc-a049-8e089939b581",
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        info: "Hardcover, First American Edition, 341 pages",
        published: "Published June 2nd 1999 by Arthur A. Levine Books",
        genre: "Fiction",
        description: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls’ bathroom. But then the real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possible be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!",
    },
    {
        id: 109,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/The_Hating_Game.jpg?alt=media&token=f7732ff0-b7d8-4d87-9fc9-65528a9717cb",
        title: "The Hating Game",
        author: "Sally Thorne",
        info: "ebook, 2nd Edition, 387 pages",
        published: "Published August 9th 2016 by William Morrow Paperbacks",
        genre: "Chick Lit",
        description: "Lucy Hutton has always been certain that the nice girl can get the corner office. She’s charming and accommodating and prides herself on being loved by everyone at Bexley & Gamin. Everyone except for coldly efficient, impeccably attired, physically intimidating Joshua Templeman. And the feeling is mutual. Trapped in a shared office together 40 (OK, 50 or 60) hours a week, they’ve become entrenched in an addictive, ridiculous never-ending game of one-upmanship. There’s the Staring Game. The Mirror Game. The HR Game. Lucy can’t let Joshua beat her at anything—especially when a huge new promotion goes up for the taking. If Lucy wins this game, she’ll be Joshua’s boss. If she loses, she’ll resign. So why is she suddenly having steamy dreams about Joshua, and dressing for work like she’s got a hot date? After a perfectly innocent elevator ride ends with an earth-shattering kiss, Lucy starts to wonder whether she’s got Joshua Templeman all wrong. Maybe Lucy Hutton doesn’t hate Joshua Templeman. And maybe, he doesn’t hate her either. Or maybe this is just another game.",
    },
    {
        id: 103,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/Harry_Potter_and_the_Sorcerer's_Stone.jpg?alt=media&token=f7cf286a-3d64-45be-ad6e-c00e4c4397b5",
        title: "Harry Potter and the Sorcerer's Stone",
        author: " J.K. Rowling",
        info: "Hardcover, Library Edition, 309 pages",
        published: "Published November 1st 2003 by Scholastic Inc",
        genre: "Fiction",
        description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry. After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry. Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined. Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.",
    },
    {
        id: 111,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/Get_a_Life%2C%20Chloe_Brown.jpg?alt=media&token=35f4f541-17c9-46c3-905c-85510c37d4bd",
        title: "Get a Life, Chloe Brown",
        author: "Talia Hibbert",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Chick Lit",
        description: "Chloe Brown is a chronically ill computer geek with a goal, a plan, and a list. After almost—but not quite—dying, she’s come up with seven directives to help her “Get a Life”, and she’s already completed the first: finally moving out of her glamorous family’s mansion. The next items? • Enjoy a drunken night out. • Ride a motorcycle. • Go camping. • Have meaningless but thoroughly enjoyable sex. • Travel the world with nothing but hand luggage. • And... do something bad. But it’s not easy being bad, even when you’ve written step-by-step guidelines on how to do it correctly. What Chloe needs is a teacher, and she knows just the man for the job. Redford ‘Red’ Morgan is a handyman with tattoos, a motorcycle, and more sex appeal than ten-thousand Hollywood heartthrobs. He’s also an artist who paints at night and hides his work in the light of day, which Chloe knows because she spies on him occasionally. Just the teeniest, tiniest bit. But when she enlists Red in her mission to rebel, she learns things about him that no spy session could teach her. Like why he clearly resents Chloe’s wealthy background. And why he never shows his art to anyone. And what really lies beneath his rough exterior…",
    },
    {
        id: 257,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54457628._SY475_.jpg?alt=media&token=896989c8-afcb-40fe-9004-55f63e20e873",
        title: "Changing the Rules",
        author: "Catherine Bybee",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `From New York Times and USA Today bestselling author Catherine Bybee comes the steamy first novel in her new adrenaline-fueled Richter series.

        As an employee of MacBain Security and Solutions, Claire Kelly can certainly hold her own. Armed with an impressive set of covert skills, she’s more than prepared to tackle any job that comes her way…except one involving Cooper Lockman.
        
        Cooper and Claire used to work together before his feelings for her sent him packing to Europe for six long years. But now he’s back and determined to ignore the still-smoldering heat that lingers between them.
        
        Their current mission: go undercover together at a California high school to root out the mastermind behind a prostitution ring targeting young girls. The closer they get to the truth and the closer they get to each other, however, the deadlier their task becomes. As Claire and Cooper risk their lives to bring down their target, will their hearts be the final casualties?`,
    },
    {
        id: 258,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/43822820.jpg?alt=media&token=081a3a70-5c22-4c8a-9b34-36626bad70f1",
        title: "The Family Upstairs",
        author: "Lisa Jewell",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `An alternative cover edition for this ISBN can be found here.

        Soon after her twenty-fifth birthday, Libby Jones returns home from work to find the letter she’s been waiting for her entire life. She rips it open with one driving thought: I am finally going to know who I am.
        
        She soon learns not only the identity of her birth parents, but also that she is the sole inheritor of their abandoned mansion on the banks of the Thames in London’s fashionable Chelsea neighborhood, worth millions. Everything in Libby’s life is about to change. But what she can’t possibly know is that others have been waiting for this day as well—and she is on a collision course to meet them.
        
        Twenty-five years ago, police were called to 16 Cheyne Walk with reports of a baby crying. When they arrived, they found a healthy ten-month-old happily cooing in her crib in the bedroom. Downstairs in the kitchen lay three dead bodies, all dressed in black, next to a hastily scrawled note. And the four other children reported to live at Cheyne Walk were gone.
        
        The can’t-look-away story of three entangled families living in a house with the darkest of secrets.`,
    },
    {
        id: 259,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/51933429.jpg?alt=media&token=5abbfee2-6f3f-4dcb-b9a2-2effc03beb35",
        title: "The Guest List",
        author: "Lucy Foley",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `The bride ‧ The plus one ‧ The best man ‧ The wedding planner ‧ The bridesmaid ‧ The body

        On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one. The groom: handsome and charming, a rising television star. The bride: smart and ambitious, a magazine publisher. It’s a wedding for a magazine, or for a celebrity: the designer dress, the remote location, the luxe party favors, the boutique whiskey. The cell phone service may be spotty and the waves may be rough, but every detail has been expertly planned and will be expertly executed.
        
        But perfection is for plans, and people are all too human. As the champagne is popped and the festivities begin, resentments and petty jealousies begin to mingle with the reminiscences and well wishes. The groomsmen begin the drinking game from their school days. The bridesmaid not-so-accidentally ruins her dress. The bride’s oldest (male) friend gives an uncomfortably caring toast.
        
        And then someone turns up dead. Who didn’t wish the happy couple well? And perhaps more important, why?`,
    },
    {
        id: 260,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/53137955.jpg?alt=media&token=387f058e-26b2-4e48-8300-383865f82836",
        title: "Too Good to Be True",
        author: "Carola Lovering",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `ONE LOVE STORY. TWO MARRIAGES. THREE VERSIONS OF THE TRUTH.

        Skye Starling is overjoyed when her boyfriend, Burke Michaels, proposes after a whirlwind courtship. Though Skye seems to have the world at her fingertips―she’s smart, beautiful, and from a well-off family―she’s also battled crippling OCD ever since her mother’s death when she was eleven, and her romantic relationships have suffered as a result.
        
        But now Burke―handsome, older, and more emotionally mature than any man she’s met before―says he wants her. Forever. Except, Burke isn’t who he claims to be. And interspersed letters to his therapist reveal the truth: he’s happily married, and using Skye for his own, deceptive ends.
        
        In a third perspective, set thirty years earlier, a scrappy seventeen-year-old named Heather is determined to end things with Burke, a local bad boy, and make a better life for herself in New York City. But can her adolescent love stay firmly in her past―or will he find his way into her future?
        
        On a collision course she doesn’t see coming, Skye throws herself into wedding planning, as Burke’s scheme grows ever more twisted. But of course, even the best laid plans can go astray. And just when you think you know where this story is going, you’ll discover that there’s more than one way to spin the truth.`,
    },
    {
        id: 261,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54733883._SY475_.jpg?alt=media&token=9c94120b-847f-4faa-81cb-c729a2c5e68c",
        title: "The Moonlight Child",
        author: "Karen McQuestion",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `A gripping and emotional novel that will leave you wondering about the neighbors next door...

        On a cold January night, Sharon Lemke heads outside to see a lunar eclipse when she notices something odd at the house behind her backyard. Through her neighbor's kitchen window, she sees what appears to be a little girl washing dishes late at night. But the Fleming family doesn't have a child that age, and even if they did, why would she be doing housework at this late hour?
        
        It would be easy for Sharon to just let this go, but when eighteen-year-old Niki, a former foster child, comes to live with Sharon, she notices suspicious activity at the Flemings' house as well. When calling social services doesn't result in swift action, the two decide to investigate on their own.`,
    },
    {
        id: 262,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/54258617._SY475_.jpg?alt=media&token=36c6b291-94ef-4bf7-8dbe-19dd60372cfa",
        title: "Dark Sky",
        author: "C.J. Box",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Mystery",
        description: `Wyoming game warden Joe Pickett must accompany a Silicon Valley CEO on a hunting trip--but soon learns that he himself may be the hunted--in the thrilling new novel from #1 New York Times bestselling author C. J. Box.

        The governor of Wyoming gives Joe the thankless assignment of taking a tech baron on a hunting trip. Unbeknownst to them, as they trek further into the wilderness, a hunter is hot on their heels. Joe must rely on his wits and his knowledge of the outdoors to protect himself and his charge. Meanwhile, when Joe's closest friend Nate Romanowski and his own daughter Sheridan learn of the threat to his life, they follow him into the woods to rescue him, and all three come together for one final showdown. `,
    },
    {
        id: 263,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/38746485.jpg?alt=media&token=b27e5e63-f3e8-48a8-9b99-a209112cb4e5",
        title: "Becoming",
        author: "Michelle Obama",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare.

        In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same.`,
    },
    {
        id: 264,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/3228917.jpg?alt=media&token=83fb2c92-bf72-4131-93ad-cfc550a96281",
        title: "Outliers: The Story of Success",
        author: "Malcolm Gladwell",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `Learn what sets high achievers apart -- from Bill Gates to the Beatles -- in this #1 bestseller from "a singular talent" (New York Times Book Review).

        In this stunning book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"--the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?
        
        His answer is that we pay too much attention to what successful people are like, and too little attention to where they are from: that is, their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Along the way he explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math, and what made the Beatles the greatest rock band.
        
        Brilliant and entertaining, Outliers is a landmark work that will simultaneously delight and illuminate.`,
    },
    {
        id: 265,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/9418327.jpg?alt=media&token=30c8eef4-240b-4c7e-a8ae-93ea55255fc3",
        title: "Bossypants",
        author: "Tina Fey",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `Before Liz Lemon, before "Weekend Update," before "Sarah Palin," Tina Fey was just a young girl with a dream: a recurring stress dream that she was being chased through a local airport by her middle-school gym teacher. She also had a dream that one day she would be a comedian on TV.

        She has seen both these dreams come true.
        
        At last, Tina Fey's story can be told. From her youthful days as a vicious nerd to her tour of duty on Saturday Night Live; from her passionately halfhearted pursuit of physical beauty to her life as a mother eating things off the floor; from her one-sided college romance to her nearly fatal honeymoon—from the beginning of this paragraph to this final sentence.
        
        Tina Fey reveals all, and proves what we've all suspected: you're no one until someone calls you bossy.`,
    },
    {
        id: 266,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1202._SX318_.jpg?alt=media&token=0aeb3b6d-22f3-4492-aed9-f033c1b3b311",
        title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
        author: "Steven D. Levitt, Stephen J. Dubner",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `Which is more dangerous, a gun or a swimming pool? What do schoolteachers and sumo wrestlers have in common? Why do drug dealers still live with their moms? How much do parents really matter? What kind of impact did Roe v. Wade have on violent crime? Freakonomics will literally redefine the way we view the modern world.

        These may not sound like typical questions for an economist to ask. But Steven D. Levitt is not a typical economist. He is a much heralded scholar who studies the stuff and riddles of everyday life -- from cheating and crime to sports and child rearing -- and whose conclusions regularly turn the conventional wisdom on its head. He usually begins with a mountain of data and a simple, unasked question. Some of these questions concern life-and-death issues; others have an admittedly freakish quality. Thus the new field of study contained in this book: freakonomics.
        
        Through forceful storytelling and wry insight, Levitt and co-author Stephen J. Dubner show that economics is, at root, the study of incentives -- how people get what they want, or need, especially when other people want or need the same thing. In Freakonomics, they set out to explore the hidden side of ... well, everything. The inner workings of a crack gang. The truth about real-estate agents. The myths of campaign finance. The telltale marks of a cheating schoolteacher. The secrets of the Ku Klux Klan.
        
        What unites all these stories is a belief that the modern world, despite a surfeit of obfuscation, complication, and downright deceit, is not impenetrable, is not unknowable, and -- if the right questions are asked -- is even more intriguing than we think. All it takes is a new way of looking. Steven Levitt, through devilishly clever and clear-eyed thinking, shows how to see through all the clutter.
        
        Freakonomics establishes this unconventional premise: If morality represents how we would like the world to work, then economics represents how it actually does work. It is true that readers of this book will be armed with enough riddles and stories to last a thousand cocktail parties. But Freakonomics can provide more than that. It will literally redefine the way we view the modern world.`,
    },
    {
        id: 267,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2612._SY475_.jpg?alt=media&token=c70a4de2-9eb8-4901-8339-df5c9b22f424",
        title: "The Tipping Point: How Little Things Can Make a Big Difference",
        author: "Malcolm Gladwell",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Just as a single sick person can start an epidemic of the flu, so too can a small but precisely targeted push cause a fashion trend, the popularity of a new product, or a drop in the crime rate. This widely acclaimed bestseller, in which Malcolm Gladwell explores and brilliantly illuminates the tipping point phenomenon, is already changing the way people throughout the world think about selling products and disseminating ideas.

        Gladwell introduces us to the particular personality types who are natural pollinators of new ideas and trends, the people who create the phenomenon of word of mouth. He analyzes fashion trends, smoking, children's television, direct mail, and the early days of the American Revolution for clues about making ideas infectious, and visits a religious commune, a successful high-tech company, and one of the world's greatest salesmen to show how to start and sustain social epidemics.`,
    },
    {
        id: 268,
        img: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/21._SY475_.jpg?alt=media&token=764ae8cb-272a-44a5-9562-0a2ee5d70e47",
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        info: "Paperback, 373 pages",
        published: "Published November 5th 2019 by Avon",
        genre: "Nonfiction",
        description: `In Bryson's biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves. Taking as territory everything from the Big Bang to the rise of civilization, Bryson seeks to understand how we got from there being nothing at all to there being us. To that end, he has attached himself to a host of the world’s most advanced (and often obsessed) archaeologists, anthropologists, and mathematicians, travelling to their offices, laboratories, and field camps. He has read (or tried to read) their books, pestered them with questions, apprenticed himself to their powerful minds. A Short History of Nearly Everything is the record of this quest, and it is a sometimes profound, sometimes funny, and always supremely clear and entertaining adventure in the realms of human knowledge, as only Bill Bryson can render it. Science has never been more involving or entertaining.`,
    },






]


var db = firebase.firestore();

books.forEach(obj => {
    db.collection("books").add({
        id: obj.id,
        img: obj.img,
        title: obj.title,
        author: obj.author,
        info: obj.info,
        published: obj.published,
        genre: obj.genre,
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

