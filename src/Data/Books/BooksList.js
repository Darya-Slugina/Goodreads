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

