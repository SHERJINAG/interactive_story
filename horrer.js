const sportsStories = [
{
  "id": "H001",
  "title": "The Whispering Woods",
  "characters": ["Mia", "Ethan"],
  "sport_image": "horror_whispering_woods.jpg",
  "story_content": "Mia and Ethan go camping in a remote forest, but they start hearing whispers in the trees. The whispers seem to be calling their names.",
  "choices": [
    "Investigate the source of the whispers.",
    "Stay in the tent and ignore the sounds."
  ],
  "outcomes": {
    "1": {
      "result": "Mia and Ethan follow the whispers to a clearing where an ancient tree has glowing symbols carved into it.",
      "next_choices": [
        "Touch the symbols on the tree.",
        "Run back to the tent and pretend nothing happened."
      ]
    },
    "2": {
      "result": "The whispers grow louder and closer, and the tent begins to shake violently.",
      "next_choices": [
        "Step outside to confront whatever is causing it.",
        "Hide and hope it goes away."
      ]
    }
  },
  "final_interaction": {
    "situation": "The whispers reveal themselves as ghostly figures.",
    "choices": [
      "Talk to the ghosts and ask what they want.",
      "Scream and run for your life."
    ],
    "outcomes": {
      "1": { "result": "The ghosts reveal a hidden treasure in the woods but warn them never to return." },
      "2": { "result": "Mia and Ethan barely escape, but the whispers haunt them forever." }
    }
  }
},
{
  "id": "H002",
  "title": "The Haunted Cabin",
  "characters": ["Sophie", "Daniel"],
  "sport_image": "horror_haunted_cabin.jpg",
  "story_content": "Sophie and Daniel rent a secluded cabin for a weekend getaway, but at night, they hear footsteps and find strange symbols etched into the walls.",
  "choices": [
    "Explore the cabin to find the source of the noises.",
    "Leave the cabin and sleep in the car."
  ],
  "outcomes": {
    "1": {
      "result": "They discover a hidden basement with an old diary that warns them to leave immediately.",
      "next_choices": [
        "Read the diary to uncover its secrets.",
        "Leave the basement and pretend they never saw it."
      ]
    },
    "2": {
      "result": "The car won’t start, and they see a shadowy figure watching them from the cabin window.",
      "next_choices": [
        "Run to the woods to escape.",
        "Confront the figure in the cabin."
      ]
    }
  },
  "final_interaction": {
    "situation": "The shadowy figure approaches them with glowing red eyes.",
    "choices": [
      "Fight back with anything they can find.",
      "Beg for mercy and hope it works."
    ],
    "outcomes": {
      "1": { "result": "The figure vanishes, leaving Sophie and Daniel shaken but alive." },
      "2": { "result": "The figure whispers a curse that follows them forever." }
    }
  }
},
{
  "id": "H003",
  "title": "The Cursed Mirror",
  "characters": ["Lila", "Ryan"],
  "sport_image": "horror_cursed_mirror.jpg",
  "story_content": "Lila and Ryan find an antique mirror at a flea market, but strange things start happening whenever they look into it.",
  "choices": [
    "Keep the mirror and investigate its origins.",
    "Get rid of the mirror immediately."
  ],
  "outcomes": {
    "1": {
      "result": "They discover that the mirror shows alternate versions of their lives where horrible things have happened.",
      "next_choices": [
        "Keep looking to learn more about these alternate lives.",
        "Cover the mirror and stop looking into it."
      ]
    },
    "2": {
      "result": "The mirror reappears in their home no matter where they throw it away.",
      "next_choices": [
        "Smash the mirror with a hammer.",
        "Try to find a priest to exorcise it."
      ]
    }
  },
  "final_interaction": {
    "situation": "The mirror reveals a shadowy figure trapped inside.",
    "choices": [
      "Release the figure and hope it leaves them alone.",
      "Trap the mirror in a locked box and bury it."
    ],
    "outcomes": {
      "1": { "result": "The figure escapes but promises to protect them from harm." },
      "2": { "result": "The mirror is buried, but they hear whispers every night." }
    }
  }
},
{
  "id": "H004",
  "title": "The Abandoned Asylum",
  "characters": ["Chris", "Jenna"],
  "sport_image": "horror_abandoned_asylum.jpg",
  "story_content": "Chris dares Jenna to explore an abandoned asylum rumored to be haunted. Inside, they hear eerie laughter and see flickering lights.",
  "choices": [
    "Follow the laughter to its source.",
    "Try to find an exit and leave immediately."
  ],
  "outcomes": {
    "1": {
      "result": "They find an old wheelchair moving on its own in a dark hallway.",
      "next_choices": [
        "Sit in the wheelchair to see what happens.",
        "Run back the way they came."
      ]
    },
    "2": {
      "result": "The doors slam shut behind them, and they can’t find a way out.",
      "next_choices": [
        "Look for another exit deeper in the asylum.",
        "Hide and hope someone finds them."
      ]
    }
  },
  "final_interaction": {
    "situation": "A ghostly figure blocks their path, pointing to a locked door.",
    "choices": [
      "Open the door and step inside.",
      "Try to reason with the figure and ask for help."
    ],
    "outcomes": {
      "1": { "result": "The door leads them to safety, but they’re never the same again." },
      "2": { "result": "The figure helps them escape but warns them never to return." }
    }
  }
},
{
  "id": "H005",
  "title": "The Midnight Train",
  "characters": ["Olivia", "Mark"],
  "sport_image": "horror_midnight_train.jpg",
  "story_content": "Olivia and Mark board a train late at night, but they notice the passengers are unusually quiet and never blink.",
  "choices": [
    "Speak to the passengers to see if they respond.",
    "Stay in their seats and avoid drawing attention."
  ],
  "outcomes": {
    "1": {
      "result": "The passengers turn to them in unison and smile eerily.",
      "next_choices": [
        "Ask them who they are.",
        "Move to another train car quickly."
      ]
    },
    "2": {
      "result": "The lights flicker, and a conductor with hollow eyes asks for their tickets.",
      "next_choices": [
        "Hand over the tickets and stay quiet.",
        "Refuse and demand to know what’s going on."
      ]
    }
  },
  "final_interaction": {
    "situation": "The train starts speeding through a dark void with no stops in sight.",
    "choices": [
      "Jump off the train while it’s moving.",
      "Stay and hope to find answers at the next station."
    ],
    "outcomes": {
      "1": { "result": "They wake up in their beds, unsure if it was a dream or reality." },
      "2": { "result": "The train stops at an abandoned station, and they disappear into the night." }
    }
  }
},
{
  "id": "H006",
  "title": "The Forgotten Graveyard",
  "characters": ["Zara", "Neil"],
  "sport_image": "horror_forgotten_graveyard.jpg",
  "story_content": "Zara and Neil lose their way during a road trip and stumble upon a graveyard that doesn't appear on any map. As they walk through, they notice gravestones with their names on them.",
  "choices": [
    "Investigate the gravestones for more details.",
    "Leave the graveyard immediately without looking back."
  ],
  "outcomes": {
    "1": {
      "result": "They find fresh dirt in front of the gravestones and hear whispers warning them to leave.",
      "next_choices": [
        "Dig into the dirt to uncover what's hidden.",
        "Run back to their car and drive away."
      ]
    },
    "2": {
      "result": "As they leave, they see shadowy figures standing at the entrance, blocking their way.",
      "next_choices": [
        "Try to talk to the figures.",
        "Find another way out through the forest."
      ]
    }
  },
  "final_interaction": {
    "situation": "The shadowy figures reveal they are spirits bound to the graveyard.",
    "choices": [
      "Promise to help free the spirits.",
      "Beg for mercy and vow never to return."
    ],
    "outcomes": {
      "1": { "result": "The spirits allow them to leave but bind them to return someday." },
      "2": { "result": "The spirits let them go, but they carry a mark that attracts misfortune." }
    }
  }
},
{
  "id": "H007",
  "title": "The Silent Carnival",
  "characters": ["Emma", "Jake"],
  "sport_image": "horror_silent_carnival.jpg",
  "story_content": "Emma and Jake find an abandoned carnival at night. The rides are still running, but there’s no one in sight. A clown statue seems to be following them.",
  "choices": [
    "Investigate the clown statue to see if it’s moving.",
    "Ignore the clown and explore the carnival."
  ],
  "outcomes": {
    "1": {
      "result": "The clown suddenly turns its head toward them and smiles.",
      "next_choices": [
        "Run away as fast as possible.",
        "Try to destroy the statue."
      ]
    },
    "2": {
      "result": "They hear eerie laughter and see a carousel spinning with no one on it.",
      "next_choices": [
        "Ride the carousel to see what happens.",
        "Leave the carnival immediately."
      ]
    }
  },
  "final_interaction": {
    "situation": "The carnival comes to life with ghostly figures.",
    "choices": [
      "Ask the figures what they want.",
      "Try to escape and never look back."
    ],
    "outcomes": {
      "1": { "result": "The ghosts reveal they are trapped and warn Emma and Jake to leave before dawn." },
      "2": { "result": "They escape, but the clown statue appears in their home the next day." }
    }
  }
},
{
  "id": "H008",
  "title": "The Lake of Shadows",
  "characters": ["Sophia", "Liam"],
  "sport_image": "horror_lake_of_shadows.jpg",
  "story_content": "Sophia and Liam decide to camp near a lake, but they notice shadows moving across the water even though no one is there.",
  "choices": [
    "Investigate the lake to find the source of the shadows.",
    "Stay in their tent and avoid the lake entirely."
  ],
  "outcomes": {
    "1": {
      "result": "They see pale hands reaching out from the water, beckoning them closer.",
      "next_choices": [
        "Touch the water to see what happens.",
        "Run back to the safety of the tent."
      ]
    },
    "2": {
      "result": "The shadows grow larger, and they hear voices calling their names.",
      "next_choices": [
        "Step outside to confront the voices.",
        "Pack up and leave immediately."
      ]
    }
  },
  "final_interaction": {
    "situation": "The lake reveals itself to be cursed, and the shadows demand a sacrifice.",
    "choices": [
      "Offer an object of value to the lake.",
      "Refuse and try to escape the area."
    ],
    "outcomes": {
      "1": { "result": "The shadows vanish, and they are allowed to leave unharmed." },
      "2": { "result": "They barely escape, but the shadows follow them wherever they go." }
    }
  }
},
{
  "id": "H009",
  "title": "The Crying Doll",
  "characters": ["Hannah", "Noah"],
  "sport_image": "horror_crying_doll.jpg",
  "story_content": "Hannah and Noah find an old doll in the attic of their new home. At night, they hear it crying softly.",
  "choices": [
    "Throw the doll away immediately.",
    "Keep the doll and try to find out why it’s crying."
  ],
  "outcomes": {
    "1": {
      "result": "The doll reappears in their room no matter where they throw it.",
      "next_choices": [
        "Burn the doll to destroy it.",
        "Consult a paranormal expert."
      ]
    },
    "2": {
      "result": "The crying stops, but strange things start happening around the house.",
      "next_choices": [
        "Search the house for clues about the doll’s origin.",
        "Ignore the events and hope they go away."
      ]
    }
  },
  "final_interaction": {
    "situation": "The doll starts speaking in a childlike voice, asking for its 'family.'",
    "choices": [
      "Help the doll find its family.",
      "Destroy the doll once and for all."
    ],
    "outcomes": {
      "1": { "result": "The doll stops crying and disappears, leaving behind a note of gratitude." },
      "2": { "result": "The doll breaks, but its curse lingers in the house forever." }
    }
  }
},
{
  "id": "H010",
  "title": "The Shadow at the Door",
  "characters": ["Lila", "Ethan"],
  "sport_image": "horror_shadow_door.jpg",
  "story_content": "Every night at midnight, a shadow appears at Lila and Ethan’s front door, growing larger each time.",
  "choices": [
    "Open the door to confront the shadow.",
    "Ignore the shadow and stay inside."
  ],
  "outcomes": {
    "1": {
      "result": "The shadow steps inside and whispers their darkest fears.",
      "next_choices": [
        "Demand to know what it wants.",
        "Try to escape through the back door."
      ]
    },
    "2": {
      "result": "The shadow starts pounding on the door, shaking the entire house.",
      "next_choices": [
        "Hide and wait for it to leave.",
        "Call for help, even though the phone signal is gone."
      ]
    }
  },
  "final_interaction": {
    "situation": "The shadow reveals itself as a guardian seeking something lost.",
    "choices": [
      "Offer to help it find what it’s looking for.",
      "Refuse and try to banish it from the house."
    ],
    "outcomes": {
      "1": { "result": "The shadow thanks them and vanishes, leaving the house peaceful again." },
      "2": { "result": "The shadow leaves, but they feel an eerie presence forever." }
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