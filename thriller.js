const sportsStories = [
{
  "id": "T001",
  "title": "The Last Passenger",
  "characters": ["Alex", "Sophie"],
  "sport_image": "thriller_last_passenger.jpg",
  "story_content": "On a late-night train, Alex and Sophie notice a passenger acting strangely. When the train halts unexpectedly, they realize they’re the only ones left—except for the mysterious passenger.",
  "choices": [
    "Confront the passenger and demand answers.",
    "Quietly follow the passenger to observe their actions."
  ],
  "outcomes": {
    "1": {
      "result": "The passenger claims to be an undercover agent on a mission.",
      "next_choices": [
        "Help the agent complete their mission.",
        "Demand proof and stay cautious."
      ]
    },
    "2": {
      "result": "They discover the passenger tampering with the train’s control system.",
      "next_choices": [
        "Stop the passenger immediately.",
        "Leave the train to find help."
      ]
    }
  },
  "final_interaction": {
    "situation": "The passenger reveals the train is carrying a dangerous payload set to detonate.",
    "choices": [
      "Help disarm the payload with the agent.",
      "Escape the train and alert authorities."
    ],
    "outcomes": {
      "1": { "result": "They succeed in disarming the payload and save lives." },
      "2": { "result": "The authorities manage to stop the train in time, but Alex and Sophie are left haunted by the events." }
    }
  }
},
{
  "id": "T002",
  "title": "The Vanishing Game",
  "characters": ["Ryan", "Clara"],
  "sport_image": "thriller_vanishing_game.jpg",
  "story_content": "Ryan and Clara are invited to a mysterious game night at an abandoned mansion. The game turns sinister when players start vanishing one by one.",
  "choices": [
    "Try to solve the game’s puzzles to survive.",
    "Search for an escape route and leave the game."
  ],
  "outcomes": {
    "1": {
      "result": "The puzzles reveal a hidden mastermind orchestrating the game.",
      "next_choices": [
        "Confront the mastermind directly.",
        "Outwit the mastermind by pretending to play along."
      ]
    },
    "2": {
      "result": "They find locked doors and hear footsteps following them.",
      "next_choices": [
        "Hide and wait for the footsteps to pass.",
        "Face the pursuer head-on."
      ]
    }
  },
  "final_interaction": {
    "situation": "The mastermind turns out to be someone they know, testing their courage.",
    "choices": [
      "Expose the mastermind to the authorities.",
      "Forgive the mastermind but warn others about the game."
    ],
    "outcomes": {
      "1": { "result": "The mastermind is arrested, and the victims are rescued." },
      "2": { "result": "They walk away, but the experience changes them forever." }
    }
  }
},
{
  "id": "T003",
  "title": "The Silent Chase",
  "characters": ["Liam", "Maya"],
  "sport_image": "thriller_silent_chase.jpg",
  "story_content": "Liam and Maya witness a kidnapping in a crowded marketplace. When they try to report it, they find themselves being followed by the kidnappers.",
  "choices": [
    "Confront the kidnappers and demand answers.",
    "Try to lose them by blending into the crowd."
  ],
  "outcomes": {
    "1": {
      "result": "The kidnappers claim they’re hunting dangerous criminals.",
      "next_choices": [
        "Believe them and offer help.",
        "Distrust them and find the real authorities."
      ]
    },
    "2": {
      "result": "They escape to a nearby safe house but hear noises outside.",
      "next_choices": [
        "Investigate the noises carefully.",
        "Stay hidden and wait for help."
      ]
    }
  },
  "final_interaction": {
    "situation": "They uncover a human trafficking ring operating in the city.",
    "choices": [
      "Work undercover to dismantle the ring.",
      "Alert authorities and provide evidence."
    ],
    "outcomes": {
      "1": { "result": "They successfully rescue the victims but put themselves at risk." },
      "2": { "result": "The authorities shut down the operation, but Liam and Maya remain cautious." }
    }
  }
},
{
  "id": "T004",
  "title": "The Code Breaker",
  "characters": ["Ethan", "Olivia"],
  "sport_image": "thriller_code_breaker.jpg",
  "story_content": "Ethan and Olivia receive a mysterious email containing a complex code. Breaking it leads them to a secret government facility.",
  "choices": [
    "Enter the facility to investigate further.",
    "Send the code to an expert for analysis."
  ],
  "outcomes": {
    "1": {
      "result": "Inside the facility, they find files on classified experiments.",
      "next_choices": [
        "Uncover the truth about the experiments.",
        "Destroy the files to protect themselves."
      ]
    },
    "2": {
      "result": "The expert warns them to delete the code immediately.",
      "next_choices": [
        "Ignore the warning and continue investigating.",
        "Delete the code and move on."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover a project involving mind control devices.",
    "choices": [
      "Expose the project to the public.",
      "Confront the people running the project."
    ],
    "outcomes": {
      "1": { "result": "The truth is revealed, leading to a global uproar." },
      "2": { "result": "They stop the project but face personal danger." }
    }
  }
},
{
  "id": "T005",
  "title": "The Clock Tower Countdown",
  "characters": ["Noah", "Sophia"],
  "sport_image": "thriller_clock_tower.jpg",
  "story_content": "Noah and Sophia receive an anonymous message warning of a bomb hidden in the city’s iconic clock tower, set to detonate at midnight.",
  "choices": [
    "Try to defuse the bomb themselves.",
    "Alert the authorities and help them locate it."
  ],
  "outcomes": {
    "1": {
      "result": "They find the bomb but realize it’s protected by a series of riddles.",
      "next_choices": [
        "Solve the riddles to defuse the bomb.",
        "Leave it to professionals and evacuate the area."
      ]
    },
    "2": {
      "result": "The authorities are skeptical and demand more evidence.",
      "next_choices": [
        "Find proof to convince the authorities.",
        "Take matters into their own hands and proceed to the clock tower."
      ]
    }
  },
  "final_interaction": {
    "situation": "The bomber contacts them, offering to deactivate the bomb in exchange for a secret file.",
    "choices": [
      "Agree to the bomber’s terms and retrieve the file.",
      "Trick the bomber and defuse the bomb themselves."
    ],
    "outcomes": {
      "1": { "result": "The bomb is deactivated, but the bomber escapes with the file." },
      "2": { "result": "The bomb is defused, and the bomber is caught." }
    }
  }
},
{
  "id": "T006",
  "title": "The Disappearing Island",
  "characters": ["Emma", "Jake"],
  "sport_image": "thriller_disappearing_island.jpg",
  "story_content": "While on a vacation cruise, Emma and Jake hear rumors of an island that appears and vanishes without a trace. When the island is spotted, they decide to investigate.",
  "choices": [
    "Venture onto the island despite warnings.",
    "Stay on the boat and observe from a safe distance."
  ],
  "outcomes": {
    "1": {
      "result": "They find strange structures and signs of previous visitors.",
      "next_choices": [
        "Explore the structures to find clues.",
        "Mark the location and return to the boat."
      ]
    },
    "2": {
      "result": "The island begins to vanish before their eyes.",
      "next_choices": [
        "Try to capture evidence with their camera.",
        "Alert the cruise crew about the phenomenon."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the island is part of a secret government experiment.",
    "choices": [
      "Expose the experiment to the world.",
      "Keep the secret to protect themselves."
    ],
    "outcomes": {
      "1": { "result": "The experiment is halted, but they face retaliation." },
      "2": { "result": "They leave safely but are haunted by what they know." }
    }
  }
},
{
  "id": "T007",
  "title": "The Shadow in the Alley",
  "characters": ["Tom", "Lila"],
  "sport_image": "thriller_shadow_alley.jpg",
  "story_content": "Tom and Lila witness a shadowy figure dragging something through a dark alley. Curiosity and fear compel them to investigate.",
  "choices": [
    "Confront the figure directly.",
    "Follow the figure stealthily to uncover the truth."
  ],
  "outcomes": {
    "1": {
      "result": "The figure warns them to leave, claiming they are in danger.",
      "next_choices": [
        "Trust the warning and retreat.",
        "Press for more information despite the risk."
      ]
    },
    "2": {
      "result": "They discover the figure entering a hidden door.",
      "next_choices": [
        "Enter the door after them.",
        "Mark the location and call for backup."
      ]
    }
  },
  "final_interaction": {
    "situation": "They uncover an underground network tied to a criminal syndicate.",
    "choices": [
      "Expose the syndicate to authorities.",
      "Infiltrate the network to gather more evidence."
    ],
    "outcomes": {
      "1": { "result": "The syndicate is dismantled, and they are hailed as heroes." },
      "2": { "result": "They gather crucial evidence but become targets themselves." }
    }
  }
},
{
  "id": "T008",
  "title": "The Call at Midnight",
  "characters": ["Sarah", "David"],
  "sport_image": "thriller_midnight_call.jpg",
  "story_content": "Sarah and David receive a frantic midnight call from a stranger who claims they are in immediate danger.",
  "choices": [
    "Ignore the call, thinking it’s a prank.",
    "Take the call seriously and investigate."
  ],
  "outcomes": {
    "1": {
      "result": "The stranger calls again, more desperate this time.",
      "next_choices": [
        "Answer the call and hear them out.",
        "Block the number and move on."
      ]
    },
    "2": {
      "result": "The stranger provides details that align with local news reports.",
      "next_choices": [
        "Follow the clues given by the stranger.",
        "Alert the police about the situation."
      ]
    }
  },
  "final_interaction": {
    "situation": "The stranger reveals they are part of a larger plot involving local corruption.",
    "choices": [
      "Assist them in exposing the corruption.",
      "Distance themselves and inform the authorities."
    ],
    "outcomes": {
      "1": { "result": "They uncover the truth but become entangled in danger." },
      "2": { "result": "The corruption is exposed, but they remain anonymous." }
    }
  }
},
{
  "id": "T009",
  "title": "The Room Without Windows",
  "characters": ["Mia", "Ethan"],
  "sport_image": "thriller_room_windows.jpg",
  "story_content": "Mia and Ethan wake up in a mysterious, windowless room with no memory of how they got there. A voice over an intercom gives them a set of cryptic instructions.",
  "choices": [
    "Follow the instructions to the letter.",
    "Refuse to comply and search for a way out."
  ],
  "outcomes": {
    "1": {
      "result": "The instructions lead them to another, more challenging room.",
      "next_choices": [
        "Continue following the instructions.",
        "Try to outsmart the system and escape."
      ]
    },
    "2": {
      "result": "They discover a hidden panel in the wall.",
      "next_choices": [
        "Use the panel to attempt an escape.",
        "Explore the room further for clues."
      ]
    }
  },
  "final_interaction": {
    "situation": "They learn they are part of a psychological experiment.",
    "choices": [
      "Confront the experimenters for answers.",
      "Escape and expose the experiment to the media."
    ],
    "outcomes": {
      "1": { "result": "They confront the experimenters but are silenced." },
      "2": { "result": "The experiment is shut down after their revelation." }
    }
  }
},
{
  "id": "T010",
  "title": "The Stolen Briefcase",
  "characters": ["Leo", "Grace"],
  "sport_image": "thriller_stolen_briefcase.jpg",
  "story_content": "While waiting at a café, Leo and Grace witness a man drop a briefcase and rush away. Moments later, someone else picks it up and disappears.",
  "choices": [
    "Follow the person who took the briefcase.",
    "Inspect the spot where the briefcase was dropped for clues."
  ],
  "outcomes": {
    "1": {
      "result": "The trail leads them to a high-stakes auction.",
      "next_choices": [
        "Try to blend into the auction to gather information.",
        "Call the authorities about the suspicious activity."
      ]
    },
    "2": {
      "result": "They find a note with cryptic coordinates.",
      "next_choices": [
        "Go to the coordinates to investigate.",
        "Share the coordinates with someone trustworthy."
      ]
    }
  },
  "final_interaction": {
    "situation": "The briefcase contains sensitive information tied to an international scandal.",
    "choices": [
      "Expose the information to the public.",
      "Secure the briefcase and return it to its rightful owner."
    ],
    "outcomes": {
      "1": { "result": "The scandal shakes the world, but they face backlash." },
      "2": { "result": "The rightful owner rewards them, and they remain safe." }
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