const sportsStories = [
{
  "id": "R001",
  "title": "Love at First Sight",
  "characters": ["Lily", "Ethan"],
  "sport_image": "romance_love_first_sight.jpg",
  "story_content": "Lily, an artist, meets Ethan, a charming musician, at a local café. Sparks fly instantly. However, both are unsure of how to approach the other.",
  "choices": [
    "Smile and start a conversation about their passions.",
    "Wait for Ethan to make the first move."
  ],
  "outcomes": {
    "1": {
      "result": "Lily strikes up a conversation about her art, and Ethan opens up about his music. They quickly bond and make plans to meet again.",
      "next_choices": [
        "Invite Ethan to a local art gallery event.",
        "Suggest a spontaneous music jam session."
      ]
    },
    "2": {
      "result": "Ethan notices Lily’s shy smile and decides to approach her. They chat about life and their shared love for creativity.",
      "next_choices": [
        "Suggest going for a walk in the park.",
        "Invite Ethan to your next gallery opening."
      ]
    }
  },
  "final_interaction": {
    "situation": "After spending a few weeks getting to know each other, Lily and Ethan have grown close. Ethan is about to leave for a music tour, and they must decide what comes next.",
    "choices": [
      "Confess your feelings before he leaves.",
      "Suggest a long-distance relationship."
    ],
    "outcomes": {
      "1": { "result": "Ethan admits he has feelings for Lily too, and they make plans to continue their relationship despite the distance." },
      "2": { "result": "They agree to stay in touch and see where things go. Their relationship feels strong even from afar." }
    }
  }
},
{
  "id": "R002",
  "title": "The Secret Admirer",
  "characters": ["Emma", "James"],
  "sport_image": "romance_secret_admirer.jpg",
  "story_content": "Emma receives anonymous love letters every day, each more heartfelt than the last. She has a few suspicions about who it could be, but she's too nervous to confront James, the shy but sweet guy she’s been friends with for years.",
  "choices": [
    "Ask James directly if he’s the one sending the letters.",
    "Wait and see if he confesses his feelings."
  ],
  "outcomes": {
    "1": {
      "result": "James blushes and admits he’s been writing the letters. They both laugh, and Emma realizes she feels the same way.",
      "next_choices": [
        "Go on a date with James and talk about their feelings.",
        "Spend the day reminiscing about their friendship and how it blossomed into love."
      ]
    },
    "2": {
      "result": "James continues sending letters, but Emma can’t wait any longer and decides to make the first move.",
      "next_choices": [
        "Invite James to dinner and confess your feelings.",
        "Organize a surprise date to show how you feel."
      ]
    }
  },
  "final_interaction": {
    "situation": "After months of secret letters and growing feelings, James and Emma finally share a tender moment together.",
    "choices": [
      "Kiss him under the stars.",
      "Hold his hand and take a walk together, enjoying the peaceful moment."
    ],
    "outcomes": {
      "1": { "result": "Their kiss is everything they both imagined and more. From that moment, they know their love is real." },
      "2": { "result": "They walk hand-in-hand under the stars, knowing they’ve found something truly special in each other." }
    }
  }
},
{
  "id": "R003",
  "title": "The Reunion",
  "characters": ["Sophie", "Michael"],
  "sport_image": "romance_reunion.jpg",
  "story_content": "Sophie unexpectedly runs into Michael, her high school crush, at a reunion. It's been years since they last spoke, but the chemistry between them is undeniable.",
  "choices": [
    "Catch up on old times and see if there's still a spark.",
    "Ask him out on a casual date to reconnect."
  ],
  "outcomes": {
    "1": {
      "result": "The conversation flows effortlessly, and they both realize they still feel the same way about each other.",
      "next_choices": [
        "Suggest a walk down memory lane at their old high school.",
        "Ask him out for dinner and see where the night leads."
      ]
    },
    "2": {
      "result": "Sophie is bold and asks Michael to dinner. He’s thrilled, and they spend the evening talking about their lives since high school.",
      "next_choices": [
        "Talk about their dreams and future plans.",
        "Ask Michael about his past relationships."
      ]
    }
  },
  "final_interaction": {
    "situation": "After reconnecting and enjoying each other’s company, Sophie and Michael realize they want to give their relationship another try.",
    "choices": [
      "Confess that you’ve always had feelings for him.",
      "Suggest taking things slow and seeing where it leads."
    ],
    "outcomes": {
      "1": { "result": "Michael admits he’s always had feelings for Sophie too, and they both agree to explore a relationship together." },
      "2": { "result": "They decide to take things slow and see where their reunion leads, both feeling excited for the future." }
    }
  }
},
{
  "id": "R004",
  "title": "The Love Letter",
  "characters": ["Anna", "David"],
  "sport_image": "romance_love_letter.jpg",
  "story_content": "Anna discovers a heartfelt love letter tucked in her locker, written by a secret admirer. She’s curious but also hesitant to find out who wrote it. Could it be David, the quiet guy who sits next to her in class?",
  "choices": [
    "Ask David if he wrote the letter.",
    "Keep the letter a secret and try to figure it out yourself."
  ],
  "outcomes": {
    "1": {
      "result": "David blushes and admits he’s the one who wrote the letter. They both feel relieved to know their feelings are mutual.",
      "next_choices": [
        "Go for a walk in the park together.",
        "Make plans to meet after school."
      ]
    },
    "2": {
      "result": "Anna spends days trying to decode the letter, but her heart is telling her it’s David. She decides to confess her feelings.",
      "next_choices": [
        "Invite David to a café and tell him how you feel.",
        "Write your own letter back and leave it in his locker."
      ]
    }
  },
  "final_interaction": {
    "situation": "Anna and David are now officially a couple. They’ve shared their first kiss and are looking forward to their future together.",
    "choices": [
      "Plan a romantic date for their anniversary.",
      "Talk about their future together and what dreams they share."
    ],
    "outcomes": {
      "1": { "result": "They have a beautiful anniversary celebration, reminiscing about how they met and looking forward to their life ahead." },
      "2": { "result": "They discuss their shared dreams and realize they have similar goals for the future, strengthening their bond even more." }
    }
  }
},
{
  "id": "R005",
  "title": "The Parisian Romance",
  "characters": ["Claire", "Julian"],
  "sport_image": "romance_paris.jpg",
  "story_content": "Claire is on vacation in Paris when she meets Julian, a local artist. They immediately hit it off, and sparks fly during their casual stroll along the Seine.",
  "choices": [
    "Take a boat ride down the Seine and enjoy the sights together.",
    "Ask Julian to join you at a local café for a romantic lunch."
  ],
  "outcomes": {
    "1": {
      "result": "The boat ride is magical, and they spend hours talking about their dreams, feeling more connected than ever.",
      "next_choices": [
        "Share a kiss by the Eiffel Tower.",
        "Visit an art gallery together to explore Julian’s passion."
      ]
    },
    "2": {
      "result": "Over a romantic lunch, they laugh and talk about their adventures. Julian shares his art with Claire, and she is captivated by his talent.",
      "next_choices": [
        "Take Julian to a local museum to see more of his favorite works.",
        "Ask him to join you on a night-time stroll through the city."
      ]
    }
  },
  "final_interaction": {
    "situation": "After several magical days together in Paris, Claire and Julian must face the reality of their return to different cities.",
    "choices": [
      "Stay in Paris and start a new life together.",
      "Decide to make long-distance work and plan visits."
    ],
    "outcomes": {
      "1": { "result": "Claire decides to stay in Paris, and Julian and she begin a beautiful life together in the city of love." },
      "2": { "result": "They agree to make their long-distance relationship work, excited for future reunions and visits." }
    }
  }
},
{
  "id": "R006",
  "title": "The New Beginning",
  "characters": ["Mia", "Adam"],
  "sport_image": "romance_new_beginnings.jpg",
  "story_content": "Mia has just moved to a new city and is feeling a bit lonely. One day, Adam, her charming new neighbor, knocks on her door with a warm welcome gift.",
  "choices": [
    "Invite Adam in for coffee and chat.",
    "Thank him for the gift and invite him for dinner later."
  ],
  "outcomes": {
    "1": {
      "result": "Mia invites Adam in for coffee, and they spend hours chatting about their lives. They bond over shared experiences and realize they have a lot in common.",
      "next_choices": [
        "Invite Adam to explore the city together.",
        "Suggest going to a local movie later that week."
      ]
    },
    "2": {
      "result": "Mia thanks Adam for the gift and invites him for dinner later. Over the meal, they talk about their hobbies, and Adam shares his passion for cooking.",
      "next_choices": [
        "Ask Adam to cook dinner next time.",
        "Invite Adam to a fun weekend outing."
      ]
    }
  },
  "final_interaction": {
    "situation": "After several weeks of spending time together, Mia and Adam realize they’re more than just neighbors.",
    "choices": [
      "Confess your feelings to Adam.",
      "Suggest making your friendship official and seeing where it goes."
    ],
    "outcomes": {
      "1": { "result": "Adam admits he has fallen for Mia as well, and they begin a romantic relationship." },
      "2": { "result": "They decide to take their friendship to the next level, slowly exploring their feelings for one another." }
    }
  }
},
{
  "id": "R007",
  "title": "The Unexpected Kiss",
  "characters": ["Sophia", "Lucas"],
  "sport_image": "romance_unexpected_kiss.jpg",
  "story_content": "Sophia and Lucas have been best friends for years, but lately, something feels different. One night, while they’re watching a movie together, Lucas leans in to adjust the blanket... and accidentally kisses Sophia.",
  "choices": [
    "Laugh it off and pretend nothing happened.",
    "Pull back and ask Lucas if he felt the same way."
  ],
  "outcomes": {
    "1": {
      "result": "They both laugh awkwardly and continue watching the movie, but the tension between them is palpable. The next day, they can’t stop thinking about the kiss.",
      "next_choices": [
        "Ask Lucas if he wants to talk about the kiss.",
        "Pretend it didn’t happen and keep things normal."
      ]
    },
    "2": {
      "result": "Lucas is embarrassed but admits that he’s had feelings for Sophia for a long time. They talk openly about their emotions, and Sophia realizes she feels the same way.",
      "next_choices": [
        "Go for a walk and hold hands, talking about your future together.",
        "Confess your love for Lucas and plan a romantic evening."
      ]
    }
  },
  "final_interaction": {
    "situation": "After weeks of dating, Sophia and Lucas are sitting at a café, reflecting on how their relationship blossomed unexpectedly.",
    "choices": [
      "Talk about moving in together.",
      "Plan a romantic getaway for the two of you."
    ],
    "outcomes": {
      "1": { "result": "They decide to move in together, excited for the next chapter of their relationship." },
      "2": { "result": "They plan a weekend getaway to a nearby beach, looking forward to relaxing and enjoying their time together." }
    }
  }
},
{
  "id": "R008",
  "title": "The Birthday Surprise",
  "characters": ["Lena", "Chris"],
  "sport_image": "romance_birthday_surprise.jpg",
  "story_content": "It’s Lena’s birthday, and Chris, her long-time friend, has something special planned. He’s been acting mysterious all week, and Lena is starting to wonder what he’s up to.",
  "choices": [
    "Confront Chris and ask him what’s going on.",
    "Wait patiently and enjoy the surprise."
  ],
  "outcomes": {
    "1": {
      "result": "Chris smiles and assures Lena that she’ll love the surprise. He takes her to a beautiful rooftop restaurant overlooking the city, where a candlelit dinner awaits.",
      "next_choices": [
        "Thank Chris and tell him how much you appreciate the gesture.",
        "Ask Chris how he feels about your relationship."
      ]
    },
    "2": {
      "result": "Lena waits for the big reveal and is blown away when Chris surprises her with a private dinner at the beach, complete with music and her favorite dessert.",
      "next_choices": [
        "Kiss Chris under the stars.",
        "Talk about the future and how you want to grow together."
      ]
    }
  },
  "final_interaction": {
    "situation": "After an amazing evening, Chris looks at Lena with a smile and asks her how she feels about their relationship.",
    "choices": [
      "Confess your love for Chris.",
      "Tell him that you want to take things slow but you appreciate him."
    ],
    "outcomes": {
      "1": { "result": "Chris admits he’s been in love with Lena for a long time, and they embrace their new relationship." },
      "2": { "result": "They agree to take things slow, but both are excited about where their relationship is headed." }
    }
  }
},
{
  "id": "R009",
  "title": "The Dance of Love",
  "characters": ["Julia", "Ethan"],
  "sport_image": "romance_dance_of_love.jpg",
  "story_content": "Julia attends a dance class and meets Ethan, a talented dancer with a magnetic personality. As they dance together, they share an undeniable connection, but Julia is hesitant to act on her feelings.",
  "choices": [
    "Ask Ethan if he wants to grab coffee after class.",
    "Tell Ethan that you’re not ready to date anyone right now."
  ],
  "outcomes": {
    "1": {
      "result": "Ethan agrees, and they spend the afternoon talking about their shared love for dancing and the future. The spark between them is undeniable.",
      "next_choices": [
        "Ask Ethan if he wants to go to a dance competition together.",
        "Invite Ethan to a romantic dinner."
      ]
    },
    "2": {
      "result": "Ethan respects Julia’s decision and assures her that he values their friendship. They continue dancing together, but the chemistry is still there.",
      "next_choices": [
        "Reevaluate your feelings and talk to Ethan about it.",
        "Continue enjoying the dance classes without any pressure."
      ]
    }
  },
  "final_interaction": {
    "situation": "After several months of dancing together, Julia and Ethan realize they can’t ignore their feelings any longer.",
    "choices": [
      "Tell Ethan you’ve fallen for him.",
      "Ask Ethan if he feels the same way and see where it leads."
    ],
    "outcomes": {
      "1": { "result": "Ethan admits he feels the same, and they begin a passionate romance, both on and off the dance floor." },
      "2": { "result": "Ethan confesses that he’s loved Julia for a long time, and they share a romantic dance together." }
    }
  }
},
{
  "id": "R010",
  "title": "The Chance Encounter",
  "characters": ["Zoe", "Aaron"],
  "sport_image": "romance_chance_encounter.jpg",
  "story_content": "Zoe has been walking her dog in the park when she bumps into Aaron, a handsome stranger with an infectious smile. They exchange a few words and instantly feel a spark.",
  "choices": [
    "Ask Aaron if he wants to grab a coffee sometime.",
    "Leave the park and think about it for a while."
  ],
  "outcomes": {
    "1": {
      "result": "Aaron smiles and agrees. They meet for coffee the next day and quickly discover that they have a lot in common.",
      "next_choices": [
        "Ask Aaron to take a weekend trip together.",
        "Suggest doing something adventurous like hiking."
      ]
    },
    "2": {
      "result": "Zoe decides to wait and think about it. However, Aaron unexpectedly contacts her the next day and asks if she’d like to meet up again.",
      "next_choices": [
        "Go for coffee and get to know each other better.",
        "Invite Aaron to a fun activity like a local festival."
      ]
    }
  },
  "final_interaction": {
    "situation": "After several dates, Zoe and Aaron realize that their connection is something special.",
    "choices": [
      "Talk about making things official.",
      "Go on a romantic weekend getaway together."
    ],
    "outcomes": {
      "1": { "result": "They decide to start a relationship, excited for the future ahead." },
      "2": { "result": "They enjoy a perfect weekend getaway, deepening their bond and solidifying their feelings." }
    }
  }
}












];

function getRandomStory() {
  const randomIndex = Math.floor(Math.random() * sportsStories.length);
  return sportsStories[randomIndex];
}

// Export the function to use it in the main HTML page
export { getRandomStory };