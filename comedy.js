const sportsStories = [
{
  "id": "C001",
  "title": "The Great Pizza Caper",
  "characters": ["Tom", "Jerry"],
  "sport_image": "comedy_pizza_caper.jpg",
  "story_content": "Tom and Jerry work at a pizza shop, but their latest delivery goes terribly wrong when the pizzas end up at the wrong address, sparking a hilarious series of misadventures.",
  "choices": [
    "Try to retrieve the pizzas from the wrong house.",
    "Make new pizzas and hope for the best."
  ],
  "outcomes": {
    "1": {
      "result": "They knock on the wrong door and accidentally interrupt a yoga class. Chaos ensues.",
      "next_choices": [
        "Apologize profusely and try to sneak out.",
        "Join the yoga class to blend in."
      ]
    },
    "2": {
      "result": "They start making new pizzas but accidentally use sugar instead of salt.",
      "next_choices": [
        "Deliver the pizzas anyway and hope nobody notices.",
        "Start over, even if it means being late."
      ]
    }
  },
  "final_interaction": {
    "situation": "The pizzas finally make it to the customer, but the customer insists on a refund because the toppings are all wrong.",
    "choices": [
      "Offer a refund with an awkward smile.",
      "Pretend they delivered the right pizzas and run away."
    ],
    "outcomes": {
      "1": { "result": "They refund the money but are banned from making deliveries ever again." },
      "2": { "result": "They escape, but the customer tracks them down for revenge later." }
    }
  }
},
{
  "id": "C002",
  "title": "The Birthday Blunder",
  "characters": ["Mia", "Ethan"],
  "sport_image": "comedy_birthday_blunder.jpg",
  "story_content": "Mia and Ethan are organizing a surprise birthday party, but everything goes hilariously wrong when they confuse the birthday person with someone else.",
  "choices": [
    "Quickly switch the decorations to match the new person’s tastes.",
    "Pretend nothing is wrong and keep going with the plan."
  ],
  "outcomes": {
    "1": {
      "result": "They scramble to redecorate but accidentally spill glitter everywhere.",
      "next_choices": [
        "Leave the glitter and pretend it’s part of the theme.",
        "Try to clean up, making an even bigger mess."
      ]
    },
    "2": {
      "result": "The surprise goes ahead, but the confused guest starts opening the presents.",
      "next_choices": [
        "Stop them and explain the mix-up.",
        "Let them keep opening the gifts for the laughs."
      ]
    }
  },
  "final_interaction": {
    "situation": "The real birthday person arrives and is shocked to see the chaos.",
    "choices": [
      "Blame it on a prank and laugh it off.",
      "Admit the mistake and throw a last-minute party redo."
    ],
    "outcomes": {
      "1": { "result": "Everyone ends up laughing, and the party becomes a memorable disaster." },
      "2": { "result": "The redo turns into a massive food fight, but everyone has fun." }
    }
  }
},
{
  "id": "C003",
  "title": "The Job Interview Disaster",
  "characters": ["Ryan", "Chloe"],
  "sport_image": "comedy_job_interview.jpg",
  "story_content": "Ryan and Chloe help each other prepare for a big job interview but accidentally mix up their notes, leading to hilarity during the interview.",
  "choices": [
    "Try to wing it using the wrong notes.",
    "Make up excuses to leave the room and swap notes."
  ],
  "outcomes": {
    "1": {
      "result": "Ryan starts answering Chloe’s fashion design questions with engineering terms.",
      "next_choices": [
        "Keep going and hope nobody notices.",
        "Make a joke to lighten the mood."
      ]
    },
    "2": {
      "result": "Chloe sneaks out but gets caught by the receptionist.",
      "next_choices": [
        "Explain the mix-up and ask for help.",
        "Feign illness and reschedule the interview."
      ]
    }
  },
  "final_interaction": {
    "situation": "The interviewer asks a final question that neither of them prepared for.",
    "choices": [
      "Answer with complete honesty, hoping for sympathy.",
      "Invent an outlandish but hilarious response."
    ],
    "outcomes": {
      "1": { "result": "The honesty impresses the interviewer, but they still don’t get the job." },
      "2": { "result": "The ridiculous answer goes viral online, making them accidental celebrities." }
    }
  }
},
{
  "id": "C004",
  "title": "The Haunted House Prank",
  "characters": ["Sam", "Lucy"],
  "sport_image": "comedy_haunted_house.jpg",
  "story_content": "Sam and Lucy decide to scare their friends with a fake haunted house, but things go haywire when real spooky events start happening.",
  "choices": [
    "Investigate the strange noises in the attic.",
    "Focus on scaring their friends first and ignore the noises."
  ],
  "outcomes": {
    "1": {
      "result": "They find an old raccoon that seems to have learned how to turn on lights.",
      "next_choices": [
        "Capture the raccoon to keep the prank alive.",
        "Let the raccoon stay and hope it adds to the scares."
      ]
    },
    "2": {
      "result": "Their friends freak out, thinking the house is actually haunted.",
      "next_choices": [
        "Admit it was a prank to calm them down.",
        "Play along and pretend to be scared too."
      ]
    }
  },
  "final_interaction": {
    "situation": "The raccoon accidentally activates an old sound system, blasting eerie noises throughout the house.",
    "choices": [
      "Run away screaming, making it part of the prank.",
      "Stay calm and try to turn off the sound system."
    ],
    "outcomes": {
      "1": { "result": "Everyone ends up laughing when they find the raccoon DJ." },
      "2": { "result": "The prank ends in chaos, but everyone agrees it was the best laugh of the year." }
    }
  }
},
{
  "id": "C005",
  "title": "The Road Trip Gone Wrong",
  "characters": ["Nick", "Ella"],
  "sport_image": "comedy_road_trip.jpg",
  "story_content": "Nick and Ella go on a road trip but quickly realize their car's GPS is stuck in 'pirate voice' mode, leading them hilariously astray.",
  "choices": [
    "Follow the pirate GPS directions anyway.",
    "Turn it off and try navigating with a paper map."
  ],
  "outcomes": {
    "1": {
      "result": "The GPS leads them to a seafood restaurant instead of a gas station.",
      "next_choices": [
        "Stop for food and enjoy the mistake.",
        "Demand a refund for the faulty GPS."
      ]
    },
    "2": {
      "result": "Nick can't read the map and they end up driving in circles.",
      "next_choices": [
        "Ask a local for directions.",
        "Keep trying to read the map and hope for the best."
      ]
    }
  },
  "final_interaction": {
    "situation": "They finally arrive at their destination, but it’s closed for renovations.",
    "choices": [
      "Make the best of the situation and camp out nearby.",
      "Turn around and make it a road trip to nowhere."
    ],
    "outcomes": {
      "1": { "result": "They end up having a great time camping under the stars." },
      "2": { "result": "The road trip becomes legendary for being hilariously pointless." }
    }
  }
},
{
  "id": "C006",
  "title": "The Tech Support Trouble",
  "characters": ["Alex", "Kim"],
  "sport_image": "comedy_tech_support.jpg",
  "story_content": "Alex accidentally deletes an important file and calls Kim for help, who insists they call a tech support hotline. However, the tech support turns out to be hilariously unhelpful.",
  "choices": [
    "Follow the tech support's bizarre instructions.",
    "Try to fix the issue themselves with an online tutorial."
  ],
  "outcomes": {
    "1": {
      "result": "Tech support tells them to reboot the computer 15 times and chant 'File come back!'",
      "next_choices": [
        "Chant along just to see what happens.",
        "Hang up and try a different solution."
      ]
    },
    "2": {
      "result": "The online tutorial is written in Comic Sans and advises 'just wing it.'",
      "next_choices": [
        "Follow the tutorial and hope for the best.",
        "Abandon the tutorial and call Kim’s tech-savvy cousin."
      ]
    }
  },
  "final_interaction": {
    "situation": "The file mysteriously reappears on its own.",
    "choices": [
      "Take credit for fixing it.",
      "Blame tech support for the confusion."
    ],
    "outcomes": {
      "1": { "result": "Kim believes Alex is a tech genius and starts calling them for every problem." },
      "2": { "result": "Tech support demands a 5-star review, and Alex reluctantly agrees." }
    }
  }
},
{
  "id": "C007",
  "title": "The Cooking Show Catastrophe",
  "characters": ["Nina", "Max"],
  "sport_image": "comedy_cooking_show.jpg",
  "story_content": "Nina and Max participate in a live cooking competition, but Nina accidentally uses salt instead of sugar in a dessert, causing a hilarious meltdown.",
  "choices": [
    "Try to fix the dessert by adding more sugar.",
    "Switch dishes last minute and cook something random."
  ],
  "outcomes": {
    "1": {
      "result": "The dessert turns into a salty soup, but the judges are too polite to comment.",
      "next_choices": [
        "Serve it anyway and call it 'avant-garde cuisine.'",
        "Distract the judges with a funny story."
      ]
    },
    "2": {
      "result": "Max tries to make spaghetti, but Nina adds chocolate sauce to it by mistake.",
      "next_choices": [
        "Serve the chocolate spaghetti as a 'fusion dish.'",
        "Start over and hope there’s enough time."
      ]
    }
  },
  "final_interaction": {
    "situation": "The judges burst out laughing at the dish names.",
    "choices": [
      "Turn the competition into a comedy act.",
      "Stick to cooking and hope for a miracle."
    ],
    "outcomes": {
      "1": { "result": "Nina and Max win the 'Audience Favorite' award for their humor." },
      "2": { "result": "They finish in last place but gain a cult following online." }
    }
  }
},
{
  "id": "C008",
  "title": "The Awkward Gym Encounter",
  "characters": ["Jake", "Lila"],
  "sport_image": "comedy_gym_encounter.jpg",
  "story_content": "Jake tries to impress Lila at the gym but accidentally gets stuck under a barbell. Lila decides to help, and things only get more awkward.",
  "choices": [
    "Jake pretends the barbell is part of a 'new workout routine.'",
    "Lila calls for a trainer to help."
  ],
  "outcomes": {
    "1": {
      "result": "The trainer joins in, thinking it’s a serious new trend.",
      "next_choices": [
        "Roll with it and become a 'fitness influencer.'",
        "Admit the truth and laugh it off."
      ]
    },
    "2": {
      "result": "The trainer helps, but Jake accidentally trips over a yoga mat.",
      "next_choices": [
        "Blame the mat and storm out dramatically.",
        "Turn it into a joke to lighten the mood."
      ]
    }
  },
  "final_interaction": {
    "situation": "Jake and Lila end up trying a partner yoga pose and both fall over.",
    "choices": [
      "Laugh it off and make plans to hang out again.",
      "Pretend nothing happened and leave awkwardly."
    ],
    "outcomes": {
      "1": { "result": "They become gym buddies and laugh about it for years." },
      "2": { "result": "Jake avoids the gym for weeks, but Lila secretly thinks it was hilarious." }
    }
  }
},
{
  "id": "C009",
  "title": "The Misplaced Pet Adventure",
  "characters": ["Ben", "Sophie"],
  "sport_image": "comedy_pet_adventure.jpg",
  "story_content": "Ben and Sophie are tasked with pet-sitting a parrot, but the parrot escapes, leading to a hilarious chase through the neighborhood.",
  "choices": [
    "Try to lure the parrot with snacks.",
    "Borrow a neighbor’s cat to 'help.'"
  ],
  "outcomes": {
    "1": {
      "result": "The parrot starts demanding snacks in a pirate voice.",
      "next_choices": [
        "Give in and feed it crackers.",
        "Try to grab it while it’s distracted."
      ]
    },
    "2": {
      "result": "The cat ends up chasing Ben instead of the parrot.",
      "next_choices": [
        "Climb a tree to escape the cat.",
        "Call Sophie for backup."
      ]
    }
  },
  "final_interaction": {
    "situation": "The parrot flies into a bakery and causes chaos.",
    "choices": [
      "Offer to pay for the damages and retrieve the parrot.",
      "Blame the parrot and run away."
    ],
    "outcomes": {
      "1": { "result": "The bakery owner finds it hilarious and lets them keep the parrot." },
      "2": { "result": "The parrot ends up becoming a local celebrity, but Ben and Sophie are banned from the bakery." }
    }
  }
},
{
  "id": "C010",
  "title": "The Magic Show Mishap",
  "characters": ["Leo", "Emma"],
  "sport_image": "comedy_magic_show.jpg",
  "story_content": "Leo volunteers Emma for a magic show, but the magician accidentally locks himself in his own disappearing box, leaving Leo and Emma to entertain the crowd.",
  "choices": [
    "Try to perform a magic trick themselves.",
    "Stall the audience with jokes."
  ],
  "outcomes": {
    "1": {
      "result": "Leo accidentally pulls a rabbit out of his sleeve—nobody knows how it got there.",
      "next_choices": [
        "Play it cool and take credit.",
        "Admit it was an accident and laugh along."
      ]
    },
    "2": {
      "result": "Emma’s jokes start to flop, so Leo tries juggling instead.",
      "next_choices": [
        "Juggle with random items from the audience.",
        "Pretend to faint to get out of the situation."
      ]
    }
  },
  "final_interaction": {
    "situation": "The magician reappears but accidentally trips on stage.",
    "choices": [
      "Help him up and pretend it’s part of the act.",
      "Let him figure it out while continuing to entertain the audience."
    ],
    "outcomes": {
      "1": { "result": "The show becomes a hit, and Leo and Emma are invited back next year." },
      "2": { "result": "The magician fires them on the spot, but the audience loves their antics." }
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