



const sportsStories = [
{
  "id": "D001",
  "title": "The Betrayal",
  "characters": ["Olivia", "Jack"],
  "sport_image": "drama_betrayal.jpg",
  "story_content": "Olivia discovers that her close friend, Jack, has been spreading rumors about her. The shock of betrayal leaves her questioning their entire friendship.",
  "choices": [
    "Confront Jack about the rumors.",
    "Distance yourself from Jack and focus on healing."
  ],
  "outcomes": {
    "1": {
      "result": "Jack apologizes profusely, admitting he was under pressure from others. Olivia is torn between forgiveness and trust.",
      "next_choices": [
        "Forgive Jack and rebuild the friendship.",
        "Decide that trust is broken and end the friendship."
      ]
    },
    "2": {
      "result": "Olivia chooses to distance herself and focus on her own well-being. Over time, she heals, but Jack’s betrayal remains a painful memory.",
      "next_choices": [
        "Reconnect with old friends to fill the gap left by Jack.",
        "Decide to move forward alone and not depend on anyone."
      ]
    }
  },
  "final_interaction": {
    "situation": "Months later, Olivia meets Jack at a mutual friend’s gathering.",
    "choices": [
      "Give Jack a second chance and see if the friendship can be mended.",
      "Keep your distance and leave the past behind."
    ],
    "outcomes": {
      "1": { "result": "Olivia and Jack reconcile, and though it’s hard, they rebuild a cautious friendship." },
      "2": { "result": "Olivia moves on, stronger and more independent, leaving the betrayal behind." }
    }
  }
},
{
  "id": "D002",
  "title": "The Family Secret",
  "characters": ["Emily", "Sarah"],
  "sport_image": "drama_family_secret.jpg",
  "story_content": "Emily finds out that her mother, Sarah, has been hiding a big secret about their family’s past. This revelation shakes Emily to her core.",
  "choices": [
    "Ask Sarah about the secret and confront her.",
    "Keep the discovery to yourself and try to move on."
  ],
  "outcomes": {
    "1": {
      "result": "Sarah is initially hesitant but eventually reveals the truth. Emily learns about a past mistake her mother regrets deeply.",
      "next_choices": [
        "Understand Sarah’s reasons and forgive her.",
        "Struggle to accept the truth and feel betrayed."
      ]
    },
    "2": {
      "result": "Emily decides to keep the secret to herself but finds it hard to live with the knowledge. Tension builds in their relationship.",
      "next_choices": [
        "Decide to talk to Sarah and let the truth come out.",
        "Live with the burden of the secret, but it slowly eats away at the relationship."
      ]
    }
  },
  "final_interaction": {
    "situation": "Months later, Sarah sits down with Emily to discuss the past again.",
    "choices": [
      "Open your heart and forgive Sarah.",
      "End the conversation, unable to forgive the past."
    ],
    "outcomes": {
      "1": { "result": "Emily forgives Sarah, understanding that the past doesn’t define their future." },
      "2": { "result": "Emily struggles with the truth, and their relationship is forever changed." }
    }
  }
},
{
  "id": "D003",
  "title": "The Career Choice",
  "characters": ["Ryan", "Alice"],
  "sport_image": "drama_career_choice.jpg",
  "story_content": "Ryan is offered his dream job, but it requires him to move across the country. Alice, his partner, is unsure about the impact this decision will have on their relationship.",
  "choices": [
    "Accept the job and leave everything behind.",
    "Turn down the job and stay with Alice."
  ],
  "outcomes": {
    "1": {
      "result": "Ryan moves for the job, but the distance puts a strain on his relationship with Alice. They both struggle with the separation.",
      "next_choices": [
        "Commit to making the long-distance relationship work.",
        "Decide to break up and focus on your career."
      ]
    },
    "2": {
      "result": "Ryan turns down the job, and though Alice is relieved, he starts feeling unfulfilled in his career.",
      "next_choices": [
        "Talk to Alice about pursuing a different career path together.",
        "Resent your decision and regret not taking the job."
      ]
    }
  },
  "final_interaction": {
    "situation": "After a year, Ryan and Alice reflect on their decisions and their future together.",
    "choices": [
      "Ask Alice if she’s willing to make the sacrifices needed for Ryan to pursue his dreams.",
      "Talk about building a future without compromises and living a balanced life."
    ],
    "outcomes": {
      "1": { "result": "Alice agrees to support Ryan’s dreams, and they make the relationship work despite the challenges." },
      "2": { "result": "They find a compromise, where Ryan follows his career ambitions while maintaining a stable relationship." }
    }
  }
},
{
  "id": "D004",
  "title": "The Long-Awaited Apology",
  "characters": ["Charlotte", "Ben"],
  "sport_image": "drama_apology.jpg",
  "story_content": "Charlotte is heartbroken after a falling-out with Ben, her best friend. After months of silence, Ben finally reaches out to apologize.",
  "choices": [
    "Listen to Ben’s apology and hear him out.",
    "Reject Ben’s apology, feeling too hurt to forgive him."
  ],
  "outcomes": {
    "1": {
      "result": "Ben apologizes sincerely, explaining the misunderstandings that led to their fallout. Charlotte’s anger begins to soften.",
      "next_choices": [
        "Forgive Ben and try to rebuild the friendship.",
        "Express your feelings and tell Ben how deeply the fallout affected you."
      ]
    },
    "2": {
      "result": "Charlotte refuses to accept Ben’s apology, feeling betrayed. She decides to move on with her life without him in it.",
      "next_choices": [
        "Reach out to other friends for support and move forward.",
        "Struggle with the decision, feeling conflicted about losing a friendship."
      ]
    }
  },
  "final_interaction": {
    "situation": "After some time, Charlotte realizes she misses Ben and the friendship they once had.",
    "choices": [
      "Send Ben a message and try to repair the friendship.",
      "Let go of the past and move forward without looking back."
    ],
    "outcomes": {
      "1": { "result": "Ben is happy to reconnect, and they rebuild their friendship, stronger than before." },
      "2": { "result": "Charlotte decides to leave the past behind and finds new friends to share her life with." }
    }
  }
},
{
  "id": "D005",
  "title": "The Hidden Love",
  "characters": ["Lily", "James"],
  "sport_image": "drama_hidden_love.jpg",
  "story_content": "Lily has secretly been in love with James for years but has never been brave enough to confess. One day, James reveals that he’s been in love with her too, but they both have been too afraid to admit it.",
  "choices": [
    "Confess your feelings to James and see where it leads.",
    "Keep your feelings hidden and maintain your friendship with James."
  ],
  "outcomes": {
    "1": {
      "result": "Lily confesses her feelings, and James reciprocates. They begin a romantic relationship, exploring their deep connection.",
      "next_choices": [
        "Take the relationship to the next level and make it official.",
        "Talk about fears and insecurities that have held you both back."
      ]
    },
    "2": {
      "result": "Lily keeps her feelings to herself, and while the friendship remains intact, she feels the weight of unspoken emotions.",
      "next_choices": [
        "Decide to confess and see how James reacts.",
        "Live with the internal conflict and struggle with unrequited love."
      ]
    }
  },
  "final_interaction": {
    "situation": "Months later, James surprises Lily with a confession, admitting he’s always known about her feelings.",
    "choices": [
      "Express your feelings and make things official.",
      "Say you’re not ready for a relationship, but appreciate his honesty."
    ],
    "outcomes": {
      "1": { "result": "Lily and James start a beautiful relationship, finally free of the fear that once held them back." },
      "2": { "result": "Lily takes time to reflect on her feelings, unsure of what she wants next." }
    }
  }
},
{
  "id": "D006",
  "title": "The Lost Opportunity",
  "characters": ["Maya", "David"],
  "sport_image": "drama_lost_opportunity.jpg",
  "story_content": "Maya is offered a job in another city that could change her life, but her boyfriend, David, isn’t supportive. The choice between love and career is weighing heavily on her mind.",
  "choices": [
    "Take the job and move to the new city.",
    "Stay with David and turn down the job offer."
  ],
  "outcomes": {
    "1": {
      "result": "Maya moves for the job, but David is distant and unhappy with the decision. Their relationship becomes strained.",
      "next_choices": [
        "Talk to David about balancing love and career.",
        "End the relationship, focusing on personal growth and career success."
      ]
    },
    "2": {
      "result": "Maya stays, but over time, she feels unfulfilled in her career. She begins to question if she made the right choice.",
      "next_choices": [
        "Talk to David about finding a career path she’s passionate about.",
        "Resent staying behind and feel conflicted."
      ]
    }
  },
  "final_interaction": {
    "situation": "Years later, Maya reflects on the decision she made. David and she are now in different stages of life, and she wonders if staying with him was worth the sacrifices she made in her career.",
    "choices": [
      "Reconnect with David and ask if he ever regrets the choice.",
      "Move on with the life you’ve built, knowing the decision shaped who you are."
    ],
    "outcomes": {
      "1": { "result": "David admits that he does regret not being supportive, but Maya realizes that her career gave her fulfillment she couldn’t have gotten from staying in the relationship." },
      "2": { "result": "Maya embraces the path she took, proud of her growth, and feels stronger for having followed her own dreams." }
    }
  }
},
{
  "id": "D007",
  "title": "The Forgotten Dream",
  "characters": ["Sophie", "Ethan"],
  "sport_image": "drama_forgotten_dream.jpg",
  "story_content": "Sophie once had big dreams of becoming a painter, but after marrying Ethan, she set them aside to raise a family. Now, years later, she’s feeling the weight of lost opportunities.",
  "choices": [
    "Take a leap and return to painting, following her passion.",
    "Stay focused on her family, feeling fulfilled in her role as a mother and wife."
  ],
  "outcomes": {
    "1": {
      "result": "Sophie decides to pursue her passion for painting again, rekindling the joy she once had. Ethan is supportive, and she balances both her art and family life.",
      "next_choices": [
        "Expand her art into a successful career.",
        "Keep her painting as a personal hobby, appreciating the creative outlet."
      ]
    },
    "2": {
      "result": "Sophie chooses to stay focused on her family, but as time passes, she feels a pang of regret for the dreams she never pursued.",
      "next_choices": [
        "Talk to Ethan about finding time for her own passions.",
        "Learn to live with the quiet regret and make peace with her decision."
      ]
    }
  },
  "final_interaction": {
    "situation": "Sophie, now older, reflects on her life. She wonders if she could have found a way to do both — raise a family and follow her dreams.",
    "choices": [
      "Decide to start painting again, even if just for herself.",
      "Accept the life she’s built and appreciate the happiness it brings."
    ],
    "outcomes": {
      "1": { "result": "Sophie rekindles her passion and starts a small art studio, finding joy in creating again." },
      "2": { "result": "Sophie finds peace in her choice, understanding that the life she built was meaningful in its own way." }
    }
  }
},
{
  "id": "D008",
  "title": "The Missed Chance",
  "characters": ["Liam", "Clara"],
  "sport_image": "drama_missed_chance.jpg",
  "story_content": "Liam and Clara were once in love, but they broke up when Liam got an opportunity to study abroad. Now, years later, he’s back, and Clara still holds feelings for him.",
  "choices": [
    "Rekindle the romance and see if it’s still the same.",
    "Stay apart, knowing the past can’t be undone."
  ],
  "outcomes": {
    "1": {
      "result": "Liam and Clara reconnect, and although their feelings are still there, they realize they’ve changed too much over the years.",
      "next_choices": [
        "Try to build a new relationship based on who they are now.",
        "Accept that they’re better off as friends."
      ]
    },
    "2": {
      "result": "Clara decides not to get back together, deciding that some things are better left in the past. Liam respects her decision, but both are left with lingering emotions.",
      "next_choices": [
        "Find closure and move on from the relationship.",
        "Wonder if they could have made it work, despite the years apart."
      ]
    }
  },
  "final_interaction": {
    "situation": "Clara and Liam meet again years later, both having moved on with their lives.",
    "choices": [
      "Celebrate their friendship and cherish the past memories.",
      "Reflect on the love that was lost but appreciate how far they’ve come."
    ],
    "outcomes": {
      "1": { "result": "Clara and Liam remain friends, understanding that their connection was special but now belongs to the past." },
      "2": { "result": "They both move forward with a sense of fulfillment from their past, each living their own lives happily." }
    }
  }
},
{
  "id": "D009",
  "title": "The Silent Goodbye",
  "characters": ["Isla", "Henry"],
  "sport_image": "drama_silent_goodbye.jpg",
  "story_content": "Isla and Henry were deeply in love, but something changed in their relationship. Neither of them said a word, and eventually, they just stopped talking to each other. Now, Isla is trying to move on but is haunted by the silence of their last goodbye.",
  "choices": [
    "Reach out to Henry and find out what went wrong.",
    "Let the past be and move on without seeking closure."
  ],
  "outcomes": {
    "1": {
      "result": "Isla reaches out to Henry, and they finally have a heart-to-heart conversation. They both admit that they were afraid to speak up, and the silence was a result of unspoken fears.",
      "next_choices": [
        "Decide to start over and build a new relationship.",
        "Accept that their love has faded and move on peacefully."
      ]
    },
    "2": {
      "result": "Isla decides to move on, finding peace in letting go of the past. Although the silence still stings, she learns to heal without answers.",
      "next_choices": [
        "Embrace the lessons learned from the relationship.",
        "Wonder what could have been, but ultimately move forward."
      ]
    }
  },
  "final_interaction": {
    "situation": "Isla and Henry meet by chance at a gathering, years after the breakup.",
    "choices": [
      "Catch up and reconnect as friends, understanding the past is behind them.",
      "Walk away, knowing that some things are better left unresolved."
    ],
    "outcomes": {
      "1": { "result": "They reconnect, sharing fond memories of their time together, but recognizing that they’ve both moved on." },
      "2": { "result": "Isla walks away, finally at peace with the silent goodbye." }
    }
  }
},
{
  "id": "D010",
  "title": "The Unspoken Truth",
  "characters": ["Eva", "Lucas"],
  "sport_image": "drama_unspoken_truth.jpg",
  "story_content": "Eva and Lucas have been close friends for years, but Eva has developed feelings for him. She’s unsure whether to confess her feelings, fearing it might ruin their friendship.",
  "choices": [
    "Confess her feelings to Lucas and risk the friendship.",
    "Keep her feelings to herself and preserve the friendship."
  ],
  "outcomes": {
    "1": {
      "result": "Eva confesses her feelings, and Lucas is surprised. He admits he’s always cared for her, but wasn’t sure if she felt the same.",
      "next_choices": [
        "Explore the possibility of a romantic relationship.",
        "Decide to keep things platonic, not wanting to risk losing the friendship."
      ]
    },
    "2": {
      "result": "Eva keeps her feelings hidden, but the unspoken truth creates an emotional distance between her and Lucas. The friendship begins to feel strained as they both silently navigate the tension.",
      "next_choices": [
        "Tell Lucas about the strain and see if they can work through it.",
        "Let the friendship fade, letting go of both the feelings and the bond."
      ]
    }
  },
  "final_interaction": {
    "situation": "Months later, Eva and Lucas run into each other unexpectedly. The unresolved tension from the past lingers, and they both wonder where they stand now.",
    "choices": [
      "Speak openly about the feelings and tensions that have been held in silence.",
      "Walk away, leaving the past behind and accepting that things have changed."
    ],
    "outcomes": {
      "1": { "result": "Eva and Lucas have an honest conversation. They both admit that they’ve changed, and while their feelings may still exist, they are ready to move on, accepting that some things aren’t meant to be." },
      "2": { "result": "They part ways, accepting that the unspoken truth was too much to overcome, but with a sense of closure." }
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