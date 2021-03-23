const genresList = [
  {
    genre: "Music",
    description: "Books about music history, music genres and musicians.",
  },
  {
    genre: "Art",
    description: "Books that showcase particular types of art.",
  },
  {
    genre: "Biography",
    description: `A biography (from the Greek words bios meaning "life", and graphos meaning "write")
         is a non-fictional account of a person's life. Biographies are written by an author who is not the subject/focus of the book.`
  },
  {
    genre: "Business",
    description: `A business (also known as enterprise or firm) is an organization engaged in the
         trade of goods, services, or both to consumers. Businesses are predominant in capitalist
          economies, where most of them are privately owned and administered to earn profit to increase
           the wealth of their owners. Businesses may also be not-for-profit or state-owned. A business
            owned by multiple individuals may be referred to as a company, although that term also has a more precise meaning.`
  },
  {
    genre: "Chick Lit",
    description: `Chick lit is genre fiction which addresses issues of modern womanhood,
         often humorously and lightheartedly. Although it sometimes includes romantic elements,
          chick lit is generally not considered a direct subcategory of the romance novel genre,
           because the heroine's relationship with her family or friends is often just as important as her romantic relationships.`
  },
  {
    genre: "Childrens",
    description: `Children's literature is for readers and listeners up to about age 12. It is often illustrated. 
        The term is used in senses that sometimes exclude young-adult fiction, comic books, or other genres. 
        Books specifically for children existed at least several hundred years ago.`
  },
  {
    genre: "Christian",
    description: `The term "Christian" is used adjectivally to describe anything associated with Christianity, 
        or in a proverbial sense "all that is noble, and good, and Christ-like". It can also refer to content 
        produced by a christian without the content being explicitly Christian.`
  },
  {
    genre: "Classics",
    description: `A classic stands the test of time. The work is usually considered to be a representation of the period
         in which it was written; and the work merits lasting recognition. In other words, if the book was published in the
          recent past, the work is not a classic.
        A classic has a certain universal appeal. Great works of literature touch us to our very core beings--partly because 
        they integrate themes that are understood by readers from a wide range of backgrounds and levels of experience. Themes 
        of love, hate, death, life, and faith touch upon some of our most basic emotional responses.
        Although the term is often associated with the Western canon, it can be applied to works of literature from all
         traditions, such as the Chinese classics or the Indian Vedas`
  },
  {
    genre: "Comics",
    description: `A comic book or comicbook, also called comic magazine or simply comic, is a publication that consists of 
        comic art in the form of sequential juxtaposed panels that represent individual scenes. Panels are often accompanied by 
        brief descriptive prose and written narrative, usually dialog contained in word balloons emblematic of the comics art form.`
  },
  {
    genre: "Contemporary",
    description: `Literature that largely takes place in the present time.`
  },
  {
    genre: "Cookbooks",
    description: `Non-fiction books that contain a collection of recipes, techniques, and tricks of the trade or else focus on
         the exploration of food, cooking, and culture of food. Many cookbooks are divided into sections such as baking, dinner, and
          breakfast. A specialty cookbook may focus only on a certain country's cuisine, such as Italian or Cajun. There are some 
          cookbooks that are written to highlight one ingredient (i.e. honey), and some cookbooks focused on only one branch of cooking
           (such as bread.) Even further, some cookbooks focus on types of cooking (microwave, barbecue, baking.)`
  },
  {
    genre: "Crime",
    description: `The crime genre includes the broad selection of books on criminals and the court system, but the most common 
        focus is investigations and sleuthing. Mystery novels are usually placed into this category, although there is a separate
         division for "crime". Hard Case Crime is one example.`
  },
  {
    genre: "Ebooks",
    description: `An electronic book (eBook) is a digital form of a book that consists of text and sometimes images, or both. 
        Common formats of ebooks include: .iba(Apple iBooks), .azw(Amazon Kindle), EPUB and PDF files.`
  },
  {
    genre: "Fantasy",
    description: `Fantasy is a genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting.
         Fantasy is generally distinguished from science fiction and horror by the expectation that it steers clear of technological and macabre
          themes, respectively, though there is a great deal of overlap between the three (collectively known as speculative fiction or science fiction/fantasy)
        In its broadest sense, fantasy comprises works by many writers, artists, filmmakers, and musicians, from ancient myths and legends 
        to many recent works embraced by a wide audience today, including young adults, most of whom are represented by the works below.`
  },
  {
    genre: "Fiction",
    description: `Fiction is the telling of stories which are not real. More specifically, fiction is an imaginative form of narrative, 
        one of the four basic rhetorical modes. Although the word fiction is derived from the Latin fingo, fingere, finxi, fictum, "to form, 
        create", works of fiction need not be entirely imaginary and may include real people, places, and events. Fiction may be either written 
        or oral. Although not all fiction is necessarily artistic, fiction is largely perceived as a form of art or entertainment. The ability
         to create fiction and other artistic works is considered to be a fundamental aspect of human culture, one of the defining 
         characteristics of humanity. `
  },
  {
    genre: "LGBT",
    description: `LGBT is an initialism that stands for lesbian, gay, bisexual, and transgender. In use since the 1990s, the term 
         an adaptation of the initialism LGB, which was used to replace the term gay in reference to the LGBT community beginning in the mid-to-late 1980s.

        The initialism LGBT is intended to emphasize a diversity of sexuality and gender identity-based cultures. It may be used to refer 
        to anyone who is non-heterosexual or non-cisgender, instead of exclusively to people who are lesbian, gay, bisexual, or transgender.
         To recognize this inclusion, a popular variant adds the letter Q for those who identify as queer or are questioning their sexual
          identity; LGBTQ has been recorded since 1996.
        
        Those who add intersex people to LGBT groups or organizing use an extended initialism LGBTI. Some people combine the two acronyms 
        and use the term LGBTIQ. Others use LGBT+ to encompass a spectrum of gender and sexuality. There is also a rise in the use of the 
        acronym QUILTBAG. The A stands for "Asexual," and the G covers both the more usual "Gay" as well as "Gender-Questioning"/"Gender-Queer".`
  },
  {
    genre: "Graphic Novels",
    description: `A graphic novel is a narrative work in which the story is conveyed to the reader using sequential art in either
         an experimental design or in a traditional comics format. The term is employed in a broad manner, encompassing non-fiction 
         works and thematically linked short stories as well as fictional stories across a number of genres.`
  },
  {
    genre: "Historical Fiction",
    description: `Historical fiction presents a story set in the past, often during a significant time period. In historical fiction,
         the time period is an important part of the setting and often of the story itself.

        Historical fiction may include fictional characters, well-known historical figures or a mixture of the two. Authors of historical 
        fiction usually pay close attention to the details of their stories (settings, clothing, dialogue, etc.) to ensure that they fit
         the time periods in which the narratives take place.
        
        In some historical fiction, famous events appear from points of view not recorded in history, showing historical figures dealing
         with actual events while depicting them in a way that is not recorded in history. Other times, the historical event or time period 
         complements a story's narrative, forming a framework and background for the characters' lives. Sometimes, historical fiction can be 
         for the most part true, but the names of people and places have been in some way altered.
        
        As this is fiction, artistic license is permitted in regard to presentation and subject matter, so long as it does not deviate in 
        significant ways from established history. If events should deviate significantly, the story may then fall into the genre of alternate 
        history, which is known for speculating on what could have happened if a significant historical event had gone differently. On a similar
         note, events occurring in historical fiction must adhere to the laws of physics. Stories that extend into the magical or fantastic 
         are often considered historical fantasy.`
  },
  {
    genre: "History",
    description: `History (from Greek ἱστορία - historia, meaning "inquiry, knowledge acquired by investigation") is the discovery,
         collection, organization, and presentation of information about past events. History can also mean the period of time after writing 
         was invented. Scholars who write about history are called historians. It is a field of research which uses a narrative to examine
          and analyse the sequence of events, and it sometimes attempts to investigate objectively the patterns of cause and effect that 
          determine events. Historians debate the nature of history and its usefulness. This includes discussing the study of the discipline 
          as an end in itself and as a way of providing "perspective" on the problems of the present. The stories common to a particular culture,
           but not supported by external sources (such as the legends surrounding King Arthur) are usually classified as cultural heritage rather
            than the "disinterested investigation" needed by the discipline of history. Events of the past prior to written record are considered 
            prehistory.
        Amongst scholars, the fifth century BC Greek historian Herodotus is considered to be the "father of history", and, along with his 
        contemporary Thucydides, forms the foundations for the modern study of history. Their influence, along with other historical traditions 
        in other parts of their world, have spawned many different interpretations of the nature of history which has evolved over the centuries 
        and are continuing to change. The modern study of history has many different fields including those that focus on certain regions and those 
        which focus on certain topical or thematical elements of historical investigation. Often history is taught as part of primary and secondary 
        education, and the academic study of history is a major discipline in University studies.`
  },
  {
    genre: "Horror",
    description: `Horror fiction is fiction in any medium intended to scare, unsettle, or horrify the audience. Historically, the cause
         of the "horror" experience has often been the intrusion of a supernatural element into everyday human experience. Since the 1960s, 
         any work of fiction with a morbid, gruesome, surreal, or exceptionally suspenseful or frightening theme has come to be called "horror".
          Horror fiction often overlaps science fiction or fantasy, all three of which categories are sometimes placed under the umbrella 
          classification speculative fiction. `
  },
  {
    genre: "Humor",
    description: `A comic novel is usually a work of fiction in which the writer seeks to amuse the reader, sometimes with subtlety and
         as part of a carefully woven narrative, sometimes above all other considerations. It could indeed be said that comedy fiction is 
         literary work that aims primarily to provoke laughter, but this isn't always as obvious as it first may seem.`
  },
  {
    genre: "History",
    description: `History (from Greek ἱστορία - historia, meaning "inquiry, knowledge acquired by investigation") is the discovery,
         collection, organization, and presentation of information about past events. History can also mean the period of time after writing 
         was invented. Scholars who write about history are called historians. It is a field of research which uses a narrative to examine
          and analyse the sequence of events, and it sometimes attempts to investigate objectively the patterns of cause and effect that 
          determine events. Historians debate the nature of history and its usefulness. This includes discussing the study of the discipline 
          as an end in itself and as a way of providing "perspective" on the problems of the present. The stories common to a particular culture,
           but not supported by external sources (such as the legends surrounding King Arthur) are usually classified as cultural heritage rather
            than the "disinterested investigation" needed by the discipline of history. Events of the past prior to written record are considered 
            prehistory.
        Amongst scholars, the fifth century BC Greek historian Herodotus is considered to be the "father of history", and, along with his 
        contemporary Thucydides, forms the foundations for the modern study of history. Their influence, along with other historical traditions 
        in other parts of their world, have spawned many different interpretations of the nature of history which has evolved over the centuries 
        and are continuing to change. The modern study of history has many different fields including those that focus on certain regions and those 
        which focus on certain topical or thematical elements of historical investigation. Often history is taught as part of primary and secondary 
        education, and the academic study of history is a major discipline in University studies.`
  },
  {
    genre: "Memoir",
    description: `As a literary genre, a memoir (from the French: mémoire from the Latin memoria, meaning "memory", or a reminiscence),
         forms a subclass of autobiography – although the terms 'memoir' and 'autobiography' are almost interchangeable in modern parlance. 
         Memoir is autobiographical writing, but not all autobiographical writing follows the criteria for memoir.

        Memoirs are structured differently from formal autobiographies which tend to encompass the writer's entire life span, focusing 
        on the development of his/her personality. The chronological scope of memoir is determined by the work's context and is therefore 
        more focused and flexible than the traditional arc of birth to childhood to old age as found in an autobiography.
        
        Memoirs tended to be written by politicians or people in court society, later joined by military leaders and businessmen, and often 
        dealt exclusively with the writer's careers rather than their private life. Historically, memoirs have dealt with public matters,
         rather than personal. Many older memoirs contain little or no information about the writer, and are almost entirely concerned with 
         other people. Modern expectations have changed this, even for heads of government. Like most autobiographies, memoirs are generally 
         written from the first person point of view.
        
        Gore Vidal, in his own memoir Palimpsest, gave a personal definition: "a memoir is how one remembers one's own life, while an 
        autobiography is history, requiring research, dates, facts double-checked." It is more about what can be gleaned from a section
         of one's life than about the outcome of the life as a whole.
        
        Humorist Will Rogers put it a little more pithily: "Memoirs means when you put down the good things you ought to have done and 
        leave out the bad ones you did do."`
  },
  {
    genre: "Music",
    description: `Books about music history, music genres and musicians.`
  },
  {
    genre: "Mystery",
    description: `Mystery fiction is a loosely-defined term that is often used as a synonym of detective fiction — in other words 
        a novel or short story in which a detective (either professional or amateur) solves a crime. The term "mystery fiction" may
         sometimes be limited to the subset of detective stories in which the emphasis is on the puzzle element and its logical solution 
         (cf. whodunit), as a contrast to hardboiled detective stories which focus on action and gritty realism. However, in more 
         general usage "mystery" may be used to describe any form of crime fiction, even if there is no mystery to be solved. For 
         example, the Mystery Writers of America describes itself as "the premier organization for mystery writers, professionals 
         allied to the crime writing field, aspiring crime writers, and those who are devoted to the genre".

        Although normally associated with the crime genre, the term "mystery fiction" may in certain situations refer to a completely 
        different genre, where the focus is on supernatural mystery (even if no crime is involved). This usage was common in the pulp
         magazines of the 1930s and 1940s, where titles such as Dime Mystery, Thrilling Mystery and Spicy Mystery offered what at the 
         time were described as "weird menace" stories – supernatural horror in the vein of Grand Guignol. This contrasted with parallel 
         titles such as Dime Detective, Thrilling Detective and Spicy Detective, which contained conventional hardboiled crime fiction.
          The first use of "mystery" in this sense was by Dime Mystery, which started out as an ordinary crime fiction magazine but switched 
          to "weird menace" during the latter part of 1933.`
  },
  {
    genre: "Nonfiction",
    description: `Nonfiction is an account or representation of a subject which is presented as fact. This presentation may be accurate 
        or not; that is, it can give either a true or a false account of the subject in question. However, it is generally assumed that the 
        authors of such accounts believe them to be truthful at the time of their composition. Note that reporting the beliefs of others in 
        a nonfiction format is not necessarily an endorsement of the ultimate veracity of those beliefs, it is simply saying that it is true 
        that people believe that (for such topics as mythology, religion). Nonfiction can also be written about fiction, giving information 
        about these other works.

        Nonfiction is one of the two main divisions in writing, particularly used in libraries, the other being fiction. However, nonfiction
         need not be written text necessarily, since pictures and film can also purport to present a factual account of a subject.`
  },
  {
    genre: "Philosophy",
    description: `Philosophy is the study of general problems concerning matters such as existence, knowledge, truth, beauty, justice, 
        validity, mind, and language. Philosophy is distinguished from other ways of addressing these questions (such as mysticism or mythology) 
        by its critical, generally systematic approach and its reliance on reasoned argument. The word philosophy is of Ancient Greek origin: 
        φιλοσοφία (philosophía), meaning "love of wisdom."`
  },
  {
    genre: "Poetry",
    description: `Poetry is a form of literary art in which language is used for its aesthetic and evocative qualities in addition to, or 
        in lieu of, its apparent meaning. Poetry may be written independently, as discrete poems, or may occur in conjunction with other arts, 
        as in poetic drama, hymns or lyrics.

        Poetry, and discussions of it, have a long history. Early attempts to define poetry, such as Aristotle's Poetics, focused on the uses
         of speech in rhetoric, drama, song and comedy.[1] Later attempts concentrated on features such as repetition and rhyme, and emphasised
          the aesthetics which distinguish poetry from prose.[2] From the mid-20th century, poetry has sometimes been more loosely defined as 
          a fundamental creative act using language.[3]
        
        Poetry often uses particular forms and conventions to expand the literal meaning of the words, or to evoke emotional or sensual responses.
         Devices such as assonance, alliteration, onomatopoeia and rhythm are sometimes used to achieve musical or incantatory effects. Poetry's
          use of ambiguity, symbolism, irony and other stylistic elements of poetic diction often leaves a poem open to multiple interpretations.
           Similarly, metaphor and simile create a resonance between otherwise disparate images—a layering of meanings, forming connections 
           previously not perceived. Kindred forms of resonance may exist, between individual verses, in their patterns of rhyme or rhythm.
        
        Some forms of poetry are specific to particular cultures and genres, responding to the characteristics of the language in which the 
        poet writes. While readers accustomed to identifying poetry with Dante, Goethe, Mickiewicz and Rumi may think of it as being written
         in rhyming lines and regular meter, there are traditions, such as those of Du Fu and Beowulf, that use other approaches to achieve 
         rhythm and euphony. In today's globalized world, poets often borrow styles, techniques and forms from diverse cultures and languages.`
  },
  {
    genre: "Psychology",
    description: `Books that involve psychology; the study of mental processes and human behavior.`
  },
  {
    genre: "Romance",
    description: `According to the Romance Writers of America, "Two basic elements comprise every romance novel: a central love story and 
        an emotionally-satisfying and optimistic ending." Both the conflict and the climax of the novel should be directly related to that core 
        theme of developing a romantic relationship, although the novel can also contain subplots that do not specifically relate to the main 
        characters' romantic love. Other definitions of a romance novel may be broader, including other plots and endings or more than two people, 
        or narrower, restricting the types of romances or conflicts.`
  },
  {
    genre: "Science",
    description: `Science (from the Latin scientia, meaning “knowledge”) is the effort to discover, and increase human understanding of 
        how the physical world works. Through controlled methods, science uses observable physical evidence of natural phenomena to collect 
        data, and analyzes this information to explain what and how things work.`
  },
  {
    genre: "Science Fiction",
    description: `Science fiction (abbreviated SF or sci-fi with varying punctuation and capitalization) is a broad genre of fiction 
        that often involves speculations based on current or future science or technology. Science fiction is found in books, art, television, 
        films, games, theatre, and other media. In organizational or marketing contexts, science fiction can be synonymous with the broader 
        definition of speculative fiction, encompassing creative works incorporating imaginative elements not found in contemporary reality; 
        this includes fantasy, horror and related genres.`
  },
  {
    genre: "Self Help",
    description: `Self-help, or self-improvement, is a self-guided improvement[1]—economically, intellectually, or emotionally—often with
         a substantial psychological basis. Many different self-help groupings exist and each has its own focus, techniques, associated beliefs,
          proponents and in some cases, leaders. "Self-help culture, particularly Twelve-Step culture, has provided some of our most robust new 
          language: recovery, dysfunctional families, and codependency."`
  },
  {
    genre: "Sports",
    description: `Sports : engagement in physical activity intended to create a benefit to the participant. Ranging from Amateur to Professional,
         from incompetent to proficient, for all levels of ability, all nations, all creeds, all genders. As James Joyce said "I am, a stride at a time"`
  },
  {
    genre: "Thriller",
    description: `Thrillers are characterized by fast pacing, frequent action, and resourceful heroes who must thwart the plans of more-powerful 
        and better-equipped villains. Literary devices such as suspense, red herrings and cliffhangers are used extensively.

        Thrillers often overlap with mystery stories, but are distinguished by the structure of their plots. In a thriller, the hero must thwart the
         plans of an enemy, rather than uncover a crime that has already happened. Thrillers also occur on a much grander scale: the crimes that must 
         be prevented are serial or mass murder, terrorism, assassination, or the overthrow of governments. Jeopardy and violent confrontations are 
         standard plot elements. While a mystery climaxes when the mystery is solved, a thriller climaxes when the hero finally defeats the villain, 
         saving his own life and often the lives of others. `
  },
  {
    genre: "Travel",
    description: `Travel is the movement of people or objects (such as airplanes, boats, trains and other conveyances) between relatively 
        distant geographical locations. The term "travel" originates from the Old French word travail. Travel writing is a genre that has, as
         its focus, accounts of real or imaginary places. The genre encompasses a number of styles that may range from the documentary to the
          evocative, from literary to journalistic, and from the humorous to the serious. Travel writing is often associated with tourism, and includes
           works of an ephemeral nature such as guide books and reviews, with the intent being to educate the reader about the destination, provide 
           helpful advice for those visiting the destination, and inspire readers to travel to the destination. Travel writing has also been produced 
           by other types of travelers, such as military officers, missionaries, explorers, scientists, pilgrims, and migrants. `
  },
  {
    genre: "Young Adult",
    description: `Young-adult fiction (often abbreviated as YA) is fiction written for, published for, or marketed to adolescents and young adults,
         roughly ages 13 to 18.

        Young-adult fiction, whether in the form of novels or short stories, has distinct attributes that distinguish it from the other age categories 
        of fiction. The vast majority of YA stories portray an adolescent as the protagonist, rather than an adult or a child. The 
        subject matter and story lines are typically consistent with the age and experience of the main character, but beyond that YA stories span 
        the entire spectrum of fiction genres. The settings of YA stories are limited only by the imagination and skill of the author.
        
        Themes in YA stories often focus on the challenges of youth, so much so that the entire age category is sometimes referred to as problem 
        novels or coming of age novel. Writing styles of YA stories range widely, from the richness of literary style to the clarity and speed of 
        the unobtrusive. Despite its unique characteristics, YA shares the fundamental elements of fiction with other stories: character, plot, 
        setting, theme, and style. `
  },
]

export default genresList;